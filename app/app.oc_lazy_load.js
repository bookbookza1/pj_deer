/* ocLazyLoad config */

app
    .config([
        '$ocLazyLoadProvider',
        function($ocLazyLoadProvider) {
            $ocLazyLoadProvider.config({
                debug: false,
                events: false,
                modules: [
                    {
                        name: 'lazy_switchery',
                        files: [
                            'bower_components/switchery/dist/switchery.js',
                            'app/modules/angular-switchery.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_parsleyjs',
                        files: [
                            'assets/js/custom/parsleyjs_config.js',
                            'bower_components/parsleyjs/dist/parsley.min.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_wizard',
                        files: [
                            'assets/js/custom/parsleyjs_config.js',
                            'bower_components/parsleyjs/dist/parsley.min.js',
                            'bower_components/lodash/lodash.js',
                            'app/js/angular-wizard/angular-wizard.js'
                        ],
                        serie: true
                    },
                    {
                        name: 'lazy_masked_inputs',
                        files: [
                             'app/js/inputmask/jquery.inputmask.bundle.js'
                        ]
                    },
                    // ----------- COMPONENTS -----------
                    {
                        name: 'lazy_pagination',
                        files: [
                            'bower_components/angularUtils-pagination/dirPagination.js'
                        ]
                    },

                    // ----------- PLUGINS -----------
                    {
                        name: 'lazy_fullcalendar',
                        files: [
                            'bower_components/fullcalendar/dist/fullcalendar.min.css',
                            'bower_components/fullcalendar/dist/fullcalendar.js',
                            'bower_components/fullcalendar/dist/gcal.js',
                            'bower_components/angular-ui-calendar/src/calendar.js'
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },
                   
                    // ----------- KENDOUI COMPONENTS -----------
                    {
                        name: 'lazy_KendoUI',
                        files: [
                            'app/js/kendo/kendo.all.min.js',
                            'app/js/kendo/kendo.common-material.min.css',
                            'app/js/kendo/kendo.material.min.css'
                        ],
                        insertBefore: '#main_stylesheet',
                        serie: true
                    },


                    // ----------- Custom -----------
                    {
                        name: 'numeric',
                        files: [
                            "app/js/numericInput/numericInput.min.js",
                            "app/js/numericInput/angular-numericInput.js"
                        ],
                        serie: true
                    },
                    // {
                    //     name: 'moment_range',
                    //     files: [
                    //         "app/js/moment/moment.js",
                    //         "app/js/moment/locale/th.js",
                    //         "app/js/moment/min/moment-with-locales.js",
                    //         "app/js/moment/moment-range.js",
                    //         "app/js/moment/moment-relative-time.js"
                    //     ],
                    //     serie: true
                    // },

                    {
                        name: 'flot',
                        files: [
                            "app/js/flot/jquery.flot.js",
                            "app/js/flot/jquery.flot.resize.js",
                            "app/js/flot/angular-flot.js"
                        ],
                        serie: true
                    },
   
                    {
                        name: 'ngCurrency',
                        files: [
                            "bower_components/ng-currency/dist/ng-currency.js"
                        ]
                    },
                   
                ]
            })
        }
    ]);