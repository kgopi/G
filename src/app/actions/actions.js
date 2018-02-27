import * as ActivityServices from './../services/Activity';
import * as DraftServices from './../services/drafts';

export default {
    drafts: {
        update: data => ({staleData: data}),
        getStaleData: () => (state, actions) => {
            DraftServices.getDrafts().then((data) => {
                debugger;
                let list = data.content;
                actions.update(list);
            });
        }
    }
};