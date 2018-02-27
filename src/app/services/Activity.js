export function getActivities(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve([{id:1,name:"a"}, {id:2,name:"b"}]), 1000);
    });
}

export async function getActivity(id){
    return null;
}