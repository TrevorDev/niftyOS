import $ = require('jquery');
import Desktop from "../objects/desktop";

class AppWindow {
  title:string
  view:JQuery
  webView:any
  constructor(public desktop:Desktop, search){
    //url checking
    let url = 'https://www.google.com/?gws_rd=ssl#safe=off&q='+search
    if(isURL(search)){
      url = search
      if(url.indexOf("//") == -1){
        url = "http://"+url
      }
    }
    //constructing
    this.title="web";
    this.view = $("<div style='width: 100%;height:100%;'></div>")
    this.webView = $("<webview id='foo' src='"+url+"' style='width:100%; height:100%' plugins></webview>");
    this.view.append(this.webView)

    //webview events
    this.webView.on("new-window", (e)=>{
      let window = new AppWindow(this.desktop, e.originalEvent.url);
      this.desktop.addAppWindow(window);
      window.setHidden();
      //document.getElementById("foo").openDevTools();
    });

    //view.apps.push(this)
  }
  public close(){

  }
  public setHidden(hide=true){
    if(hide){
      this.view.css("display", "none")
    }else{
      this.view.css("display", "inherit")
    }
  }
  public toggleHidden(){
    if(this.view.css("display")!="none"){
      this.view.css("display", "none")
    }else{
      this.view.css("display", "inherit")
    }
  }
}

export default AppWindow

var isURL = (str)=>{
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
}
