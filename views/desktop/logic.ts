import r from "../../libs/rivetsConfig";
import keypress from "../../libs/keypress";
import $ = require('jquery');

class AppWindow {
  title:string
  element:JQuery
  constructor(search){
    this.title="webpage";
    this.element = $("<div style='width: 100%;height:100%;'><webview id='foo' src='https://www.google.com/?gws_rd=ssl#safe=off&q="+search+"' style='width:100%; height:100%'></webview></div>")
    $("#desktop").append(this.element)
  }
  public close(){

  }
  public setHidden(){this.element.css("display", "none")}
  public toggleHidden(){
    if(this.element.css("display")!="none"){
      this.element.css("display", "none")
    }else{
      this.element.css("display", "inherit")
    }

  }
}
var view = {
  apps: [],
  taskBarAppClicked: (e,binding)=>{
    view.apps.forEach((app)=>{
      if(app != binding.app){
        app.setHidden();
      }
    })
    binding.app.toggleHidden()
  }
}
r.bind($("#environment"), view)
$("#searchForm").submit((e)=>{
  view.apps.push(new AppWindow($("#searchBar").val()));
  $("#searchBar").val("")
  e.preventDefault();
})
var listener = keypress.onKeyComboPressed((e)=>{
  //check if key combo pressed
  if(_.isEmpty(_.xor([18], e))){
    //var x = new AppWindow();
    $("#searchBar").focus()
  }
  //console.log(e)
})
