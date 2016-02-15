import r from "../../libs/rivetsConfig";
import keypress from "../../libs/keypress";
import $ = require('jquery');

class AppWindow {
  constructor(){
    var element = $("<div style='width: 100%;height:100%;background-color:red;'><webview id='foo' src='https://www.google.com/' style='display:inline-block; width:100%; height:100%'></webview></div>")
    $("#desktop").append(element)
    // element.on('mousedown', function(e) {
    //     $(this).addClass('draggable').parents().on('mousemove', function(e) {
    //         $('.draggable').offset({
    //             top: e.pageY - $('.draggable').outerHeight() / 2,
    //             left: e.pageX - $('.draggable').outerWidth() / 2
    //         }).on('mouseup', function() {
    //             $(this).removeClass('draggable');
    //         });
    //     });
    //     e.preventDefault();
    // }).on('mouseup', function() {
    //     $('.draggable').removeClass('draggable');
    // });
    // console.log($("#desktop").length);
  }

  public close(){

  }
}


var listener = keypress.onKeyComboPressed((e)=>{
  //check if key combo pressed
  if(_.isEmpty(_.xor([16], e))){
    var x = new AppWindow();
  }
  console.log(e)
})

// var listen = new keypress.keypress.Listener();
// listen.simple_combo("shift s", ()=>{
//   var x = new AppWindow();
// })
//
// listen.simple_combo("shift", ()=>{
//   console.log("bfds")
// })
