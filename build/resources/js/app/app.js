

var app = angular.module('myApp', [ 'ngRoute','ngTable', 'applicationControllers','applicationServices','bsTable','ngGrid',]);


app.config(['$routeProvider',
                  function($routeProvider) {
                    $routeProvider.
                      when('/contempconfig', {
                	templateUrl: 'views/contempconfig.html',
                	controller: 'contractController'
                      }).
                      when('/temp', {
                	templateUrl: 'template.html',
                	controller: 'templateController'
                      }).
                      when('/deconnexion', {
                      	templateUrl: 'index.html',
                      	controller: 'loginPageConroller'
                        }).
                        when('/monthlybillpayment', {
                          	templateUrl: 'views/monthlybillpayment.html',
                          	controller: 'monthlyBillController'
                            }).
                      otherwise({
                	redirectTo: '/'
                      });
                }]);

