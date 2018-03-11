import * as Services from './../services/ServiceClient';

export async function getActivities(){
    return Services.get("/timeline/search/activity/?to=4096788558000&page=0&size=20&q=&t=");
}

export async function deleteActivity(id){
    return Services.del(`/activity/${id}`);
}