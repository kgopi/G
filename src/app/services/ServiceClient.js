const XHR = window.XMLHttpRequest;
let headers, SERVICE_URL = getServiceUrl(), VERSION = 'v3';

function getServiceUrl(){
    if(SERVICE_URL == null){
        if(typeof window['GS'].antConfig == "string"){
            window['GS'].antConfig = JSON.parse(window['GS'].antConfig);
        }
        SERVICE_URL = ((window['GS'].antConfig && window['GS'].antConfig.api_url) || window['GS'].nsURL || window['GS'].NSURL || (window['GS'] && window['GS']['nsParams'] && window['GS']['nsParams'].url) || (window['nsParams'] && window['nsParams'].url));
    }
    return (SERVICE_URL || window.location.origin + "/v1") + "/ant";
}

function getAuthHeaders(){
    if(!headers){
        headers = {
            appOrgId : window['GS'].orgId || (window['GSGA'] && window['GSGA'].orgId),
            appSessionId : window['GS'].NSSessionId || window['GS'].sessionId,
            appUserId  : window['GS'].userId || window['GS'].userConfig.userId,
            'Content-Type': 'application/json',
            'version': VERSION,
        }
    }
    window['GS'].timelineAuthToken && (headers['Authorization']= window['GS'].timelineAuthToken);
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

const makeRequest = (url, method, data) => {
    return new Promise(function (resolve, reject) {
        let xhr = new XHR();
        xhr.open(method, SERVICE_URL + url, true);
        setAuthHeaders(xhr);
        xhr.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject({
              status: this.status,
              statusText: xhr.statusText
            });
          }
        };
        xhr.onerror = function () {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        };
        xhr.send(data);
      });
}