import {h} from 'hyperapp';
import ActivityView from './item';

const ActivitiesList = ({items, selectedItem, actions}) => {
    if(items.length){
        return items.map(item => 
            <ActivityView 
                setSelectedItem={actions.activities.setSelectedItem} 
                deleteItem={actions.activities.delete}
                selectedItem={selectedItem}
                item={item}/>
        );
    }else{
        return (
            <div class="g-ext-emptydata g-ext-abs-center">
                <img class="g-ext-activity-img"></img>
                <div class="g-ext-data-header">
                    <span>Nothing in Activities</span>
                </div>
                <div class="g-ext-data-subheader">
                    <span>Create an Activity and it will show up here.</span>
                </div>
            </div>
        );
    }
}

const ActivitiesView = ({state, actions})=>{
    return (
        <div class="g-ext-activities-container">
            <div class="g-ext-activities-list g-ext-data-list">
                <ActivitiesList 
                    items={state.activities.list} 
                    actions={actions}
                    selectedItem={state.activities.selectedItem} />
            </div>
        </div>
    );
}

export default ActivitiesView;