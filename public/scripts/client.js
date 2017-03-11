var myApp = angular.module('PayrollApp', []);
console.log('angular working');

/////// This is nav bar routing (ngRoute) ////////

// myApp.config(['$routeProvider', function($routeProvider) {
//   $routeProvider
//     .when('/warehouse', {
//       templateUrl: '/views/warehouse.html',
//       controller: 'WarehouseController',
//       controllerAs: 'wc'
//     })
//     .when('/customer', {
//       templateUrl: '/views/customer.html',
//       controller: 'CustomerController',
//       controllerAs: 'cc'
//     })
//     .when('/order', {
//       templateUrl: '/views/order.html',
//       controller: 'OrderController',
//       controllerAs: 'oc'
//     })
//     .otherwise({
//       redirectTo: 'warehouse'
//     })
// }]);
