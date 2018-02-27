import {h,app} from 'hyperapp';
import actions from './../actions/actions';
import state from './../State';
import view from './../views/drafts';

debugger;
const draftsApp = app(state, actions, view, document.body);
console.log("Hello world");