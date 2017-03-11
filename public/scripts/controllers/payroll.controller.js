myApp.controller('PayrollController', ['FactoryFactory', function(FactoryFactory){
  console.log('Payroll Controller was loaded');
  var self = this;
  self.newPerson = {};
  self.allPeople = FactoryFactory.payroll;


  // addNewPerson to database
  self.addPerson = function() {
      FactoryFactory.addPerson(self.newPerson);
    }

}]);
