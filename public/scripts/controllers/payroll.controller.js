myApp.controller('PayrollController', ['FactoryFactory', function(FactoryFactory){
  console.log('Payroll Controller was loaded');
  var self = this;
  self.newPerson = {};
  self.allPeople = FactoryFactory.payroll;
  // self.allPeople = [
  //   { firstName: 'Jonny',
  //     lastName: 'Holupchinski',
  //     idNumber: 1,
  //     jobTitle: 'King',
  //     annualSalary: 60000
  //   },
  // ];

  // addNewPerson to database
  self.addNewPerson = function() {
  console.log('we did it');
  // self.allPeople.push(angular.copy(self.newPerson));
}

}]);
