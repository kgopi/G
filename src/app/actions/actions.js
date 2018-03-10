import * as ActivityServices from './../services/Activity';
import * as DraftServices from './../services/drafts';

export default {
    toggleMenu: () => (state) => {
        return {showMenu: !state.showMenu};
    },
    toggleState: ()=> (state) => {
        return {active: !state.active};
    },
    updateMenu: menuItem=>({activeMenuItem: menuItem}),
    activities: {
        update: data => ({list: data}),
        setSelectedItem: activityId => ({selectedItem: activityId}),
        get: () => (state, actions) => {
            ActivityServices.getActivities().then((res) => {
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
        update: data => ({staleData: data}),
        setSelectedItem: draftId => ({selectedDraft: draftId}),
        getStaleData: () => (state, actions) => {
            DraftServices.getStaleDrafts().then((res) => {
                let list = res.data;
                actions.update(list);
            });
        },
        delete: id => (state, actions) => {
            DraftServices.deleteDraftsByIds(JSON.stringify([id])).then((res) => {
                let list = state.staleData.filter((draft)=>draft.id != id);
                actions.update(list);
            });
        }
    }
};