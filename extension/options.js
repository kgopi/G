(function(){
    var ele = document.querySelector(".timeline-options-holder");
    var defaultConfig = {
        customers: true,
        relationships: true,
        global: true
    }
    var localCopy = {};

    function getConfig(cb){
        chrome.storage.sync.get("timelineconfig", function(data) {
            localCopy = Object.keys(data).length ? data.timelineconfig : defaultConfig;
            cb(localCopy);
        });
    }

    function saveConfig(config){
        chrome.storage.sync.set({timelineconfig:config}, function(data) {
        });
    }

    function setData(data) {
        for(var key in data)
            document.getElementById(key).checked = data[key];
    }

    ele.addEventListener("change", function(event) {
        let config = Object.assign({}, localCopy);
        config[event.target.id] = event.target.checked;
        saveConfig(config);
    });

    getConfig((data)=>{
        setData(data);
    });
})();