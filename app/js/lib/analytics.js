(function(root, factory) {
    if(typeof define === "function" && define.amd) {
        define(['lodash'], factory);
  } else if(typeof module === "object" && module.exports) {
        module.exports = factory(require('lodash'));
  } else {
        root.Analytics = factory(_);
  }
}(this, function(_) {

    function getScript(src, callback) {
        var s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onreadystatechange = s.onload = function() {
            if (!callback.done && (!s.readyState || /loaded|complete/.test(s.readyState))) {
                callback.done = true;
                callback();
            }
        };
        document.querySelector('head').appendChild(s);
    }

    //array to hold queued analytics calls while library loads
    var queue = [];
    var isLoading = false;

    var Analytics = {

        isInitialized: false,
     
        hasUtag: false,
        
        clickArgs: {
            clicknameBase: "",
            eventtype: "uotrack",
            linkTrackEvents: "none",
            linkTrackVars: "prop41,prop64,prop16",
            contenttype: 'interactives',
            clickPage: location.href
        },
        
        pageViewArgs: {
            cst: 'news',
            hostname: 'www.usatoday.com',
            ssts: 'news',
            contenttype: 'interactives',
            prop16: 'interactives'
        },
     
        setPageViewArgs: function(options) {
            _.extend(this.pageViewArgs, options);
            return this;
        },
     
        setClickArgs: function(options) {
            _.extend(this.clickArgs, options);
            return this;
        },
     
        click: function(eventName, options) {
            eventName = eventName.replace(/ /g, '-');
            
            if (options) {
                options = _.extend(this.clickArgs, options);
            } else if (eventName) {
                // replace event name spaces with '-'
                eventName = eventName.replace(/ /g, '-');
                options = _.extend(this.clickArgs, {
                    clickName: this.clickArgs.clicknameBase + eventName
                });
            } else {
                options = this.clickArgs;
            }

            if (window.utag) {
                window.utag.track('link', options);
            }
            else {
                //queue event
                queue.push([eventName, options]);
                if (!isLoading) {
                    this.loadUtag();
                }
            }

        },
     
        // load utag script, loading with require causes errors, utag requires utag_data
        loadUtag: function() {
            isLoading = true;
            window.utag_data = _.extend(this.pageViewArgs, {
                partner_type: 'basic'
            });
            var self = this,
                useSSL = 'https:' === document.location.protocol,
                // src = (useSSL ? 'https:' : 'http:') + '//tealium.hs.llnwd.net/o43/utag/gci/usat/prod/utag.js',
                src = "//tags.tiqcdn.com/utag/gci/usat/prod/utag.js";
                getScript(src, function() {
                    isLoading = false;

                    //loop through click queue
                    _.each(queue, function(click) {
                        self.click(click[0], click[1]);
                    });

                    //reset queue
                    queue = [];
                });
            //     script = document.createElement('script');
            // script.src = src;
            // document.getElementsByTagName('head')[0].appendChild(script);
            // _.delay(function() {console.log(window.utag)}, 100);

        },
     
        pageView: function(eventName, options) {
            if (window.utag) {
                if (options) {
                    options = _.extend(this.pageViewArgs, options);
                }
                else if (eventName)  {
                    // replace event name spaces with '-'
                    eventName = eventName.replace(/ /g, '-');
                    options = _.extend(this.pageViewArgs, {
                        ssts: this.pageViewArgs.ssts + '/' + eventName
                    });
                }
                else {
                    options = this.pageViewArgs;
                }
                // initial page load, needed to use utag
                if (!this.hasUtag) {
                    options = _.extend(options, {
                        partner_type: 'basic'
                    });
                    this.hasUtag = true;
                }
                // console.log('view', this.pageViewArgs, options);
                window.utag.track('view', options);
            }
            else {
                this.loadUtag();
            }
        },
        setup: function(clicknameBase, opts) {
            opts = opts || {};
            if (!this.isInitialized) {
                this.setClickArgs({
                    'clicknameBase': 'usat-interactive-' + clicknameBase + '-'
                });

                this.setPageViewArgs(opts);

                this.loadUtag();

                this.isInitialized = true;
            }
        }
    };
    return Analytics;
}));
