import AppWindow from "../objects/appWindow";
import Taskbar from "../objects/taskbar";

import $ = require('jquery');
class Desktop {
  public runningApps:Array<AppWindow>
  public view:JQuery;
  public appSpace:JQuery;
  public taskbar:Taskbar
  constructor(){
    this.runningApps = []
    this.view = $("<div style='width:100%;height:100%'><\div>")
    this.appSpace = $("<div style='position: absolute;width:100%;bottom: 0px;top: 22px;margin:0px;padding:0'></div>")
    this.taskbar = new Taskbar(this);
    $("#environment").append(this.view)
    this.view.append(this.taskbar.view)
    this.view.append(this.appSpace)
  }

  addAppWindow(app){
    this.appSpace.append(app.view)
    this.runningApps.push(app)
  }

  removeAppWindow(app){
    this.runningApps.splice(this.runningApps.indexOf(app), 1)
  }

  hideAllAppWindows(){
    this.runningApps.forEach((app)=>{
        app.setHidden();
    })
  }

}

export default Desktop;
