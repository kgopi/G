import Spy from './crawler';
import {h,app} from 'hyperapp';
import actions from './actions/actions';
import state from './State';
import view from './views/main';
import * as Constants from './constants';

let timelineApp, div = document.createElement('div');
div.setAttribute('class', 'g-ext-content-wrapper');
document.body.appendChild(div);

function closeTimeline(){
    timelineApp.closeTimeline();
}

function initTimeline(){
    if(timelineApp == null){
        timelineApp = app(state, actions, view, div);
        timelineApp.getActiveMenuData();
        Spy.on();
    }
}

function openTimeline(){
    initTimeline();
    timelineApp.showTimeline();
}

document.addEventListener('keydown', (eve)=>{
    if(eve.altKey && eve.keyCode == 84){ //Open
        openTimeline();
    }else if(eve.keyCode == 27){ //Close
        closeTimeline();
    }
}, true);

document.addEventListener(Constants.RESET, (eve)=>{
    let filters = {
        accountId: eve.detail.accountId, 
        relationshipId: eve.detail.relationshipId, 
        searchText: eve.detail.searchText,
        objName: eve.detail.objName
    };
    timelineApp.persistFilters(filters);
    timelineApp.getActiveMenuData();
    timelineApp.showTimeline();
});

document.addEventListener(Constants.ENABLE, ()=>{
    initTimeline();
});

document.addEventListener(Constants.DISABLE, ()=>{
    if(timelineApp){
        Spy.off();
        timelineApp = null;
        document.querySelector('.g-ext-main').remove();
    }
});