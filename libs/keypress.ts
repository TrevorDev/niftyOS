import _ = require("lodash")
import $ = require('jquery');
import Chance = require("chance")
var chance = new Chance();
var pressed = {}
var events = {}

$(document).on('keydown', function(e){
  if(!pressed[e.keyCode]){
    _.mapValues(events[e.keyCode], (ev)=>{
      ev.cb();
    })
  }
  pressed[e.keyCode] = true;
})

$(document).on('keyup', function(e){
  pressed[e.keyCode] = false;
})

export default {
  keys: {
    WINDOWS: 91
  },
  onKeyDown: (keyCode, cb)=>{
    var event = {
      guid: chance.guid(),
      cb: cb,
      close: ()=>{
        delete events[keyCode][event.guid];
      }
    }
    if(!events[keyCode]){
      events[keyCode] = {}
    }
    events[keyCode][event.guid] = event;
    return event;
  }
}
