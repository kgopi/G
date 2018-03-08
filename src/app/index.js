import {h,app} from 'hyperapp';
import actions from './actions/actions';
import state from './State';
import view from './views/main'

const draftsApp = app(state, actions, view, document.body);