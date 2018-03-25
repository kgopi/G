import {h} from 'hyperapp';
import * as Constnts from './../../constants';
import DraftsView from './../activity/drafts-list';
import ActivitiesView from './../activity/activity-list';

export default ({state, actions})=>{
    return (
        <div class="g-ext-body-container">
            <div class="g-ext-body-wrapper">
                {
                    <div style={{'text-align': "center", margin: "15px 0px -5px"}}>
                        {
                            state.filters.objType
                            ? <span title={state.filters.objType} style={{
                                    padding: "2px",
                                    "background-color": "#0f9d58",
                                    "border-radius": "2px",
                                    color: 'white'
                                }}>{state.filters.objType.charAt(0)}</span>
                            : ''
                        }
                        <span title={state.filters.objName || "Global"} style={{"font-size" : "15px", "padding" : "0px 5px", "font-weight": "bold"}}>{state.filters.objName || "Global"}</span>
                        <span>Timeline</span>
                    </div>
                }
                {
                    state.activeMenuItem == Constnts.DRAFTS
                        ? <DraftsView state={state} actions={actions}></DraftsView>
                        : <ActivitiesView state={state} actions={actions}></ActivitiesView>
                }
            </div>
        </div>
    );
};