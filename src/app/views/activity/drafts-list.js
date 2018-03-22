import {h} from 'hyperapp';
import * as moment from 'moment';
import DraftViewCtr from './item';

const DraftView = ({items, selectedItem, actions})=>{
    return items.map(item => 
        <DraftViewCtr 
            setSelectedItem={actions.drafts.setSelectedItem} 
            deleteItem={actions.drafts.delete}
            selectedItem={selectedItem}
            item={item}/>
    );
}

const DraftsList = ({items, selectedItem, actions}) => {
    if(items.length){
        let drafts = {'staleDrafts': [], 'activeDrafts': []}, staleDraftsDate = moment().add(-30, 'days').valueOf();
        items.forEach((item)=>{
            if(item.note.activityDate <= staleDraftsDate){
                drafts['staleDrafts'].push(item);
            }else{
                drafts['activeDrafts'].push(item);
            }
        });
        drafts.staleDrafts = drafts.staleDrafts = drafts.activeDrafts.reduce((acc, it, i)=>{
            acc.push(Object.assign({}, it, {id: ++i}));
            return acc;
        }, []); // ##TODO remove
        // debugger;
        if(drafts.staleDrafts.length){
            return (
                <div style="margin-top: -10px;">
                    <div class="g-ext-data-nesting">
                        <div>Recent Drafts</div>
                    </div>
                    <DraftView items={drafts.activeDrafts} selectedItem={selectedItem} actions={actions}></DraftView>
                    <div class="g-ext-data-nesting">
                        <div>Stale Drafts</div>
                        <button onclick={(eve)=>{actions.drafts.deleteStaleDrafts()}}>Delete all</button>
                    </div>
                    <DraftView items={drafts.staleDrafts} selectedItem={selectedItem} actions={actions}></DraftView>
                </div>
            )
        }else{
            return (<DraftView items={items} selectedItem={selectedItem} actions={actions}></DraftView>);
        }
    }else{
        return (
            <div class="g-ext-emptydata g-ext-abs-center">
                <img class="g-ext-draft-img" aria-hidden="true"></img>
                <div class="g-ext-data-header">
                    <span>Nothing in Drafts</span>
                </div>
                <div class="g-ext-data-subheader">
                    <span>Create a Draft and it will show up here.</span>
                </div>
            </div>
        );
    }
}

const DraftsView = ({state, actions})=>{
    return (
        <div class="g-ext-drafts-container">
            <div class="g-ext-drafts-list g-ext-data-list">
                <DraftsList 
                    items={state.drafts.list} 
                    actions={actions}
                    selectedItem={state.drafts.selectedItem} />
            </div>
        </div>
    );
}

export default DraftsView;