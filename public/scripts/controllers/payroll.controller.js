myApp.controller('PayrollController', ['FactoryFactory', function(FactoryFactory){
  console.log('Payroll Controller was loaded');
  var self = this;
  self.newPerson = {};
  self.allPeople = FactoryFactory.payroll;
  self.monthlyExpenditure = FactoryFactory.monthlyExpenditure;



  // addPerson to database
  self.addPerson = function() {
      FactoryFactory.addPerson(self.newPerson);
      self.newPerson = {};
    }

  // deletePerson from database
  self.deletePerson = function(personId) {
    FactoryFactory.deletePerson(personId);
    FactoryFactory.getPayroll();
  }
}]);
