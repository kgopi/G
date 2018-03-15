import Spy from './crawler';
import {h,app} from 'hyperapp';
import actions from './actions/actions';
import state from './State';
import view from './views/main';
import * as Constants from './constants';

let timelineApp, div = document.createElement('div');
div.setAttribute('class', 'g-ext-content-wrapper');
document.body.appendChild(div);

document.addEventListener(Constants.RESET, (eve)=>{
    let filters = {accountId: eve.detail.accountId, relationshipId: eve.detail.relationshipId, searchText: eve.detail.searchText};
    Constants.ACTIVITIES == state.activeMenuItem ? timelineApp.activities.get(filters) : timelineApp.drafts.get(filters);
    timelineApp.showTimeline();
});

document.addEventListener(Constants.ENABLE, ()=>{

    if(timelineApp){
        return;
    }

    timelineApp = app(state, actions, view, div);
    Constants.ACTIVITIES == state.activeMenuItem ? timelineApp.activities.get({}) : timelineApp.drafts.get({});
    Spy.on();
});
document.addEventListener(Constants.DISABLE, ()=>{
    if(timelineApp){
        Spy.off();
        timelineApp = null;
        document.querySelector('.g-ext-main').remove();
    }
});