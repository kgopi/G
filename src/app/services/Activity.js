import * as Services from './../services/ServiceClient';

export async function getActivities(queryParams){
    return Services.get(Services.addUrlParams("/timeline/search/activity", queryParams));
}

export async function deleteActivity(id){
    return Services.del(`/activity/${id}`);
}