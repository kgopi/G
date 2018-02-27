import * as Services from './../services/ServiceClient';

export function getDrafts(){
    return Services.get('/timeline/search/draft/?page=0&size=500&q=(obj%3AAccount%24AND%24id%3A00161000003kMvLAAU%24AND%24obj!Relationship)&gs=false');
}

export async function deleteDraft(id){
    return null;
}