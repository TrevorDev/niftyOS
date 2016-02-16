import $ = require('jquery');
import r from "../libs/rivetsConfig";
import keypress from "../libs/keypress";
import Desktop from "../objects/desktop";
import AppWindow from "../objects/appWindow";
class Taskbar{
  view:JQuery
  searchForm:JQuery
  searchTextBox:JQuery
  appListView:JQuery
  constructor(private desktop:Desktop){
    this.view = $("<div class='taskbar'></div>")
    this.searchForm = $("<form style='display:inline-block'></input></form>");
    this.searchTextBox = $("<input style=''></input>")
    this.view.append(this.searchForm)
    this.searchForm.append(this.searchTextBox)
    this.view.append($("<span rv-each-app='apps'><input type='button' rv-value='app.title' rv-on-click='taskBarAppClicked'></span>"))
    r.bind(this.view, {
      apps: this.desktop.runningApps,
      taskBarAppClicked: (e,binding)=>{
        this.desktop.hideAllAppWindows()
        binding.app.setHidden(false)
      }
    })
    var listener = keypress.onKeyComboPressed((e)=>{
      //check if key combo pressed
      if(_.isEmpty(_.xor([18], e))){
        //var x = new AppWindow();
        this.searchTextBox.focus()
      }
      //console.log(e)
    })

    this.searchForm.submit((e)=>{
      let search = this.searchTextBox.val()
      var window = new AppWindow(this.desktop, search);
      this.desktop.addAppWindow(window)
      this.desktop.hideAllAppWindows()
      window.setHidden(false)
      this.searchTextBox.val("")
      e.preventDefault();
    })
  }
}
export default Taskbar
