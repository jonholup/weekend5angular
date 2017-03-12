myApp.factory('FactoryFactory', ['$http', function($http){

  var self = this;
  var payroll = { list: [] };
  self.newPerson = {};

  getPayroll();

  function getPayroll() {
    $http({
      method: 'GET',
      url: '/payroll'
    }).then(function(response){
      payroll.list = response.data;
      payroll.monthlyExpenditure = getMonthlyExpenditure(payroll);

      console.log('logging in payroll in function', payroll.list);
    });//ends .then
  }; //ends getPayroll function

  function getMonthlyExpenditure(payroll) {
    var monthlyExpenditure = 0;
    for (i = 0; i < payroll.list.length; i++) {
      monthlyExpenditure += parseFloat(payroll.list[i].annual_salary / 12);
    };
    return monthlyExpenditure;
  }

  function addPerson(newPerson) {
    $http({
      method: 'POST',
      url: '/payroll',
      data: newPerson
    }).then(function(response){
      console.log(response);
      getPayroll();
      self.newPerson = {};

    });
  }


  return {
    payroll: payroll,
    addPerson: addPerson,
  };

}]);
