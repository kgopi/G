import * as Constants from './constants';

export default {
    active: false,
    showMenu: true,
    activeMenuItem: Constants.ACTIVITIES,
    activities: {
        list: [],
        selectedItem: null
    },
    drafts: {
        list: [],
        selectedItem: null
    }
};