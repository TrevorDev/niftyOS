import _ = require("lodash")
import $ = require('jquery');
import Chance = require("chance")
var chance = new Chance();
var pressed = {}
var keyDownEvents = {}
var keyUpEvents = {}
var keyComboEvents = {}

$(document).on('keydown', function(e){
  if(!pressed[e.keyCode]){
    callEveryEvent(keyDownEvents, e)
    pressed[e.keyCode] = true;
    callEveryEvent(keyComboEvents, Object.keys(pressed).map((x)=>parseInt(x)))
  }
})

$(document).on('keyup', function(e){
  callEveryEvent(keyUpEvents, e)
  delete pressed[e.keyCode];
})

function callEveryEvent(events, param){
  _.mapValues(events, (ev)=>{
    ev.cb(param);
  })
}

class Event {
  private guid:string
  constructor(private events:Object, private cb:Function){
    this.guid = chance.guid()
    events[this.guid] = this;
  }
  public dispose(){
    delete this.events[this.guid];
  }
}

export default {
  //same jquery keypress but doesnt fire repeatedly when held down
  onKeyDown: (cb)=>{
    var event = new Event(keyDownEvents, cb)
    return event;
  },
  //same as jquery keypress
  onKeyUp: (cb)=>{
    var event = new Event(keyUpEvents, cb)
    return event;
  },
  //returns list of all currently pressed buttons on keypress
  onKeyComboPressed: (cb)=>{
    var event = new Event(keyComboEvents, cb)
    return event;
  }
}
