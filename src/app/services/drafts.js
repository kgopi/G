import * as Services from './../services/ServiceClient';

export async function getDrafts(queryParams){
    return Services.get(Services.addUrlParams("/timeline/search/draft", queryParams));
}

export async function getStaleDrafts(){
    return Services.get("/activity/drafts/unused?for=2");
}

export async function deleteDraftsByIds(ids){
    return Services.post("/activity/drafts/delete", ids);
}

export async function deleteAllStaleDrafts(){
    return Services.get("/activity/drafts/unused?for=-1");
}