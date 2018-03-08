import * as Services from './../services/ServiceClient';

export async function getStaleDrafts(){
    return Services.get("/activity/drafts/unused?for=30");
}

export async function deleteDraftsByIds(ids){
    return Services.post("/activity/drafts/delete", ids);
}

export async function deleteAllStaleDrafts(){
    return Services.get("/activity/drafts/unused?for=-1");
}