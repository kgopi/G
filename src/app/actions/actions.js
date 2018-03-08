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
    drafts: {
        update: data => ({staleData: data}),
        getStaleData: () => (state, actions) => {
            DraftServices.getStaleDrafts().then((res) => {
                let list = res.data;
                actions.update(list);
            });
        }
    }
};