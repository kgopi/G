import * as Constants from './constants';

export default {
    active: false,
    showMenu: false,
    activeMenuItem: Constants.ACTIVITIES,
    filters: {},
    activities: {
        list: [],
        selectedItem: null
    },
    drafts: {
        list: [],
        selectedItem: null
    }
};