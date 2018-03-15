import * as ActivityServices from './../services/Activity';
import * as DraftServices from './../services/drafts';
import * as Constants from './../constants';
import {getQueryParams} from './../utils/utils';

export default {
    toggleMenu: () => (state) => {
        return {showMenu: !state.showMenu};
    },
    showTimeline: ()=> (state) => {
        return {active: true};
    },
    toggleState: ()=> (state) => {
        return {active: !state.active};
    },
    getActiveMenuData: menuId => (state, actions)=>{
        Constants.ACTIVITIES == menuId ? actions.activities.get() : actions.drafts.get();
    },
    updateMenu: menuItem=>({activeMenuItem: menuItem}),
    activities: {
        update: data => ({list: data}),
        setSelectedItem: activityId => ({selectedItem: activityId}),
        get: ({accountId, relationshipId, searchText}) => (state, actions) => {
            ActivityServices.getActivities(getQueryParams({accountId, relationshipId, searchText})).then((res) => {
                let list = res.data.content;
                actions.update(list);
            });
        },
        delete: id => (state, actions) => {
            ActivityServices.deleteActivity(id).then((res) => {
                let list = state.list.filter((draft)=>draft.id != id);
                actions.update(list);
            });
        }
    },
    drafts: {
        update: data => ({list: data}),
        setSelectedItem: draftId => ({selectedItem: draftId}),
        get: ({accountId, relationshipId, searchText}) => (state, actions) => {
            DraftServices.getDrafts(getQueryParams({accountId, relationshipId, searchText, size:500})).then((res) => {
                let list = res.data;
                actions.update(list);
            });
        },
        delete: id => (state, actions) => {
            DraftServices.deleteDraftsByIds(JSON.stringify([id])).then((res) => {
                let list = state.list.filter((draft)=>draft.id != id);
                actions.update(list);
            });
        }
    }
};