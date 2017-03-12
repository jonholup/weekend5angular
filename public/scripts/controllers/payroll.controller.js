myApp.controller('PayrollController', ['FactoryFactory', function(FactoryFactory){
  console.log('Payroll Controller was loaded');
  var self = this;
  self.newPerson = {};
  self.allPeople = FactoryFactory.payroll;
  self.monthlyExpenditure = FactoryFactory.monthlyExpenditure;


console.log('controller monthlyExpenditure:', self.monthlyExpenditure);


  // addNewPerson to database
  self.addPerson = function() {
      FactoryFactory.addPerson(self.newPerson);
      self.newPerson = {};
    }

  self.deletePerson = function(personId) {
    FactoryFactory.deletePerson(personId);
    FactoryFactory.getPayroll();
  }
}]);
