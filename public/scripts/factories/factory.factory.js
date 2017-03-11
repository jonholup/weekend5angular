myApp.factory('FactoryFactory', ['$http', function($http){

  var payroll = { list: [] };

  getPayroll();

  function getPayroll() {
    $http({
      method: 'GET',
      url: '/payroll'
    }).then(function(response){
      payroll.list = response.data;
      console.log('logging in factory in function', payroll.list);
    });//ends .then
  } //ends getPayroll function


  return {
    payroll: payroll
  };

}]);
