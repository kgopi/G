import {h} from 'hyperapp';
import DraftView from './item';

const DraftsList = ({items, selectedItem, actions}) => {
    return items.map(item => 
                <DraftView 
                    setSelectedItem={actions.drafts.setSelectedItem} 
                    deleteItem={actions.drafts.delete}
                    selectedItem={selectedItem}
                    item={item}/>
            );
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