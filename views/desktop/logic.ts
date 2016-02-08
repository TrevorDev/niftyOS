import r from "../../libs/rivetsConfig";
import $ = require('jquery');

class AppWindow {
  constructor(){
    var element = $("<div style='width: 1000px;height:1000px;background-color:red;'><webview id='foo' src='https://www.github.com/' style='display:inline-block; width:100%; height:100%;padding-top:10px;'></webview></div>")
    $("#desktop").append(element)
    element.on('mousedown', function(e) {
        $(this).addClass('draggable').parents().on('mousemove', function(e) {
            $('.draggable').offset({
                top: e.pageY - $('.draggable').outerHeight() / 2,
                left: e.pageX - $('.draggable').outerWidth() / 2
            }).on('mouseup', function() {
                $(this).removeClass('draggable');
            });
        });
        e.preventDefault();
    }).on('mouseup', function() {
        $('.draggable').removeClass('draggable');
    });
    console.log($("#desktop").length);
  }

  public close(){

  }
}

var x = new AppWindow();
