import Spy from './crawler';
import {h,app} from 'hyperapp';
import actions from './actions/actions';
import state from './State';
import view from './views/main';
import * as Constants from './constants';

let draftsApp, div = document.createElement('div');
div.setAttribute('class', 'g-ext-content-wrapper');
document.body.appendChild(div);

document.addEventListener(Constants.ENABLE, ()=>{

    if(draftsApp){ // Skip if it is already rendered
        return;
    }

    draftsApp = app(state, actions, view, div);
    Constants.ACTIVITIES == state.activeMenuItem ? draftsApp.activities.get() : draftsApp.drafts.get();
    Spy.on();
});
document.addEventListener(Constants.DISABLE, ()=>{
    if(draftsApp){
        Spy.off();
        draftsApp = null;
        document.querySelector('.g-ext-main').remove();
    }
});