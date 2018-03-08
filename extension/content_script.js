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
injectStyle(chrome.extension.getURL('dist/app.css'), 'body');
injectScript(chrome.extension.getURL('dist/app.js'), 'body');