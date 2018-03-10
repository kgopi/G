import {h} from 'hyperapp';
import * as Constnts from './../../constants';
import DraftsView from './../activity/drafts-list';
import ActivitiesView from './../activity/activity-list';

export default ({state, actions})=>{
    return (
        <div class="g-ext-body-container">
            <div class="g-ext-body-wrapper">
                {
                    state.activeMenuItem == Constnts.DRAFTS
                        ? <DraftsView state={state} actions={actions}></DraftsView>
                        : <ActivitiesView state={state} actions={actions}></ActivitiesView>
                }
            </div>
        </div>
    );
};