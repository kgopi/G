import * as Constants from './../app/constants';

var isActive = false;
var ANT = {
    getPath: function(imageFile){
        return {
            "16":	"images/16/" + imageFile,
            "19":	"images/19/" + imageFile,
            "48":	"images/48/" + imageFile
        };
    },
    enable: function(tabId){
        chrome.tabs.sendMessage(tabId, {action: Constants.ENABLE}, function(response) {});
        chrome.browserAction.setIcon({path: ANT.getPath("active.png")});
        isActive = true;
    },
    disable: function(tabId){
        chrome.tabs.sendMessage(tabId, {action: Constants.DISABLE}, function(response) {});
        chrome.browserAction.setIcon({path: ANT.getPath("inactive.png")});
        isActive = false;
    },
    toggleState: function(tabId){
        typeof  tabId === "number" || (tabId = tabId.id);
        isActive ? ANT.disable(tabId) : ANT.enable(tabId); // toggle
    },
    init: function(tabId){
        chrome.tabs.sendMessage(tabId, {action: isActive ? Constants.ENABLE : Constants.DISABLE}, function(response) {});
    }
};

// Events
chrome.tabs.onCreated.addListener(function(tab){
    ANT.init(tab);
});
chrome.tabs.onUpdated.addListener(function(tab){
    ANT.init(tab);
});
chrome.tabs.onActivated.addListener(function(tab){
    ANT.init(tab.tabId);
});
chrome.browserAction.onClicked.addListener(ANT.toggleState);