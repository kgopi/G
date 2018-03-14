import {h} from 'hyperapp';
import ActivityView from './item';

const ActivitiesList = ({items, selectedItem, actions}) => {
    return items.map(item => 
        <ActivityView 
            setSelectedItem={actions.activities.setSelectedItem} 
            deleteItem={actions.activities.delete}
            selectedItem={selectedItem}
            item={item}/>
    );
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