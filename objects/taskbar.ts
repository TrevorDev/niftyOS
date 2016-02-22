import $ = require('jquery');
import r from "../libs/rivetsConfig";
import keypress from "../libs/keypress";
import Desktop from "../objects/desktop";
import AppWindow from "../objects/appWindow";
import Clock from "../objects/clock";
class Taskbar{
  view:JQuery
  searchForm:JQuery
  searchButton:JQuery
  searchTextBox:JQuery
  appListView:JQuery
  clock:Clock
  toggleSearchText(){
    if(this.searchTextBox.css("display") == "none"){
      this.searchTextBox.css("display", "inherit")
      this.searchTextBox.focus()
    }else{
      this.searchTextBox.css("display", "none")
    }

  }
  constructor(private desktop:Desktop){
    this.view = $("<div class='taskbar'></div>")
    this.searchForm = $("<form style='display:inline-block'></input></form>");
    this.searchButton = $("<i class='fa fa-search' style='padding-left: 5px;padding-right: 5px;'></i>");
    this.searchTextBox = $("<input style='display:none;'></input>")
    this.view.append(this.searchForm)
    this.clock = new Clock();
    this.view.append(this.clock.view)
    this.searchForm.append(this.searchButton)
    this.searchForm.append(this.searchTextBox)
    this.view.append($("<span rv-each-app='apps' style='margin-left:20px;border-top: 3px solid #00C4FF;'><span rv-on-mousedown='taskBarAppClicked'><i class='fa fa-internet-explorer'></i> [[app.title]] <i rv-on-mousedown='taskBarAppCloseClicked' class='fa fa-times'></i></span></span>"))
    r.bind(this.view, {
      apps: this.desktop.runningApps,
      taskBarAppClicked: (e,binding)=>{
        if(e.which == 1){
          this.desktop.hideAllAppWindows()
          binding.app.setHidden(false)
        }else if(e.which == 3){
          console.log(e)
        }
      },
      taskBarAppCloseClicked: (e,binding)=>{
        if(e.which == 1){
          binding.app.dispose();
        }
      }
    })
    var listener = keypress.onKeyComboPressed((e)=>{
      //check if key combo pressed
      if(_.isEmpty(_.xor([18], e))){
        //var x = new AppWindow();
        this.toggleSearchText();
      }
      //console.log(e)
    })
    this.searchButton.on("click", ()=>{
      this.toggleSearchText();
    })
    this.searchForm.submit((e)=>{
      let search = this.searchTextBox.val()
      var window = new AppWindow(this.desktop, search);
      this.desktop.addAppWindow(window)
      this.desktop.hideAllAppWindows()
      window.setHidden(false)
      this.searchTextBox.val("")
      e.preventDefault();
      this.toggleSearchText();
    })
  }
}
export default Taskbar
