import * as Constants from './constants';

export default {
    active: false,
    showMenu: false,
    activeMenuItem: Constants.ACTIVITIES,
    filters: {},
    activities: {
        list: [],
        filters: {},
        selectedItem: null
    },
    drafts: {
        list: [],
        filters: {},
        selectedItem: null
    }
};