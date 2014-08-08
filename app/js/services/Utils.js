define(['angular'],
  function(angular) {
    'use strict';

    var Utils = function() {
      this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      this.getMonthYear = function getMonthYear (timeStamp) {
        if(!timeStamp) {
          return "Till Date";
        }

        var date = new Date(timeStamp);
        return this.monthNames[date.getMonth()].substr(0, 3) + "'" + date.getFullYear().toString().substr(2,2);
      }
    };

    return Utils;
  });
