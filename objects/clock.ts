import $ = require('jquery');
import _ = require('lodash');

class Clock{
  view:JQuery
  constructor(){
    this.view = $("<span style='right: 0px;position: absolute;'>00:00pm</span>")
    this.updateTime();
  }
  updateTime(){
    var today = new Date();
    var h = today.getHours() % 12;
    var m = today.getMinutes();
    var s = today.getSeconds();
    var end = today.getHours() >= 12 ? "PM" : "AM";
    this.view.html(h + ":" + (m < 10 ? "0"+m : m)+ end)
    setTimeout(_.bind(this.updateTime, this), 1000)
  }
}
export default Clock
