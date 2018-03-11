import {h,app} from 'hyperapp';
import actions from './actions/actions';
import state from './State';
import view from './views/main'
import * as Constants from './constants';

let div = document.createElement('div');
div.setAttribute('class', 'g-ext-content-wrapper');
document.body.appendChild(div);

let draftsApp;
document.addEventListener(Constants.ENABLE, ()=>{
    debugger;
    draftsApp = app(state, actions, view, div);
});
document.addEventListener(Constants.DISABLE, ()=>{
    if(draftsApp){
        draftsApp = null;
        document.querySelector('.g-ext-main').remove();
    }
});