const XHR = window.XMLHttpRequest;
let headers, SERVICE_URL, VERSION = 'v3';

function getServiceUrl(){
    if(SERVICE_URL == null && window['GS']){
        if(typeof window['GS'].antConfig == "string"){
            window['GS'].antConfig = JSON.parse(window['GS'].antConfig);
        }
        SERVICE_URL = ((window['GS'].antConfig && window['GS'].antConfig.api_url) || window['GS'].nsURL || window['GS'].NSURL || (window['GS'] && window['GS']['nsParams'] && window['GS']['nsParams'].url) || (window['nsParams'] && window['nsParams'].url));

        if(SERVICE_URL == null){
            let params = JSON.parse(sessionStorage.getItem('accessparams'));
            SERVICE_URL = params.url;
        }
    }
    return (SERVICE_URL || window.location.origin + "/v1") + "/ant";
}

function getAuthHeaders(){
    if(!headers){
        let accessparams = JSON.parse(sessionStorage.getItem('accessparams') || {});
        headers = {
            appOrgId : window['GS'].orgId || (window['GSGA'] && window['GSGA'].orgId),
            appSessionId : window['GS'].NSSessionId || window['GS'].sessionId || accessparams.sessionId,
            appUserId  : window['GS'].userId || window['GS'].userConfig.userId,
            'Content-Type': 'application/json',
            'version': VERSION,
        }
    }
    window['GS']._gExtToken && (headers['Authorization']= window['GS']._gExtToken);
    return headers;
}

export function setAuthHeaders(xhr){
    var _headers = getAuthHeaders();
    for(var header in _headers){
        xhr.setRequestHeader(header, _headers[header]);
    }
}

export function get(url){
    return makeRequest(url, "GET");
}

export function post(url, data){
    return makeRequest(url, "POST", data);
}

export function del(url){
    return makeRequest(url, "DELETE");
}

const addProgress = (parent)=>{

    if(!parent){
        parent = document.body;
    }

    let progress = document.createElement('div');
    progress.classList.add('g-ext-loading');
    parent.appendChild(progress);
    return progress;
}

const makeRequest = (url, method, data) => {
    return new Promise(function (resolve, reject) {
        let progressBar = addProgress(document.getElementById('g-ext-nav-header'));
        let xhr = new XHR();
        xhr.open(method, getServiceUrl() + url, true);
        setAuthHeaders(xhr);
        xhr.onprogress = function(eve){
            if (eve.lengthComputable){
                progressBar.style.width = Math.round(eve.loaded / eve.total * 100) + '%';
            }
        };
        xhr.onload = function () {
            progressBar.remove();
          if (this.status >= 200 && this.status < 300) {
            window['GS']._gExtToken = xhr.getResponseHeader('authToken');
            resolve(JSON.parse(xhr.response));
          } else {
            reject({
              status: this.status,
              statusText: xhr.statusText
            });
          }
        };
        xhr.onerror = function () {
            progressBar.remove();
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        };
        xhr.send(data);
      });
}

export function addUrlParams(url, params){

    if(!params){
        return url;
    }

    if(typeof params == "string"){
        url += params;
    }else{
        url += "/?";
        for(var key in params){
            url += key + '=' + params[key] + '&';
        }
        url = url.slice(0, -1);
    }

    return url;
}