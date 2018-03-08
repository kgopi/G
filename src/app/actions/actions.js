import * as ActivityServices from './../services/Activity';
import * as DraftServices from './../services/drafts';

export default {
    toggleState: ()=> (state) => {
        return {active: !state.active};
    },
    drafts: {
        update: data => ({staleData: data}),
        getStaleData: () => (state, actions) => {
            DraftServices.getStaleDrafts().then((res) => {
                let list = res.data.content;
                actions.update(list);
            });
        }
    }
};