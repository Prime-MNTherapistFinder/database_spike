app.controller('SpikeController', function($http){

    var self = this;

    self.message = 'wecome!';    
    
  

self.setToday = function (which) {
    vm[which].momentDate = moment();
  };
  self.addDays = function (momentObject, days) {
    momentObject.add(days, 'day');
    console.log(momentObject)
  };

});