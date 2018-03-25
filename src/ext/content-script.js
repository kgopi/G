import * as Constants from './../app/constants';

function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
}
function injectStyle(file, node){
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('link');
    s.setAttribute('type', 'text/css');
    s.setAttribute('href', file);
    s.setAttribute("rel", "stylesheet");
    th.appendChild(s);
}

if(document.location.href.match(/jbcxm/i) || document.location.search.match('kgext')){
    injectStyle("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i", 'body');
    injectStyle(chrome.extension.getURL('dist/app.css'), 'body');
    injectScript(chrome.extension.getURL('dist/app.js'), 'body');
    chrome.runtime.onMessage.addListener((message)=>{
        if(message.action == Constants.ENABLE){
            let eve = new Event(Constants.ENABLE);
            document.dispatchEvent(eve);
        }
        else if(message.action == Constants.DISABLE){
            let eve = new Event(Constants.DISABLE);
            document.dispatchEvent(eve);
        }
    });
}