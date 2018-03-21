import DataView from './data-view';
import "./../styles/main.scss";
import {h} from 'hyperapp';

export default (state, actions) => {
    return (
       <div class="g-ext-main">
           <div draggable="true" class="g-ext-circle-holder" 
                onclick={
                    element=>{
                        actions.persistFilters({});
                        actions.getActiveMenuData();
                        actions.showTimeline();
                    }
                }
            >
               <div class="g-ext-circle">
                   <i class="g-ext-icon g-ext-plus"></i>
               </div>
           </div>
           {state.active ? <DataView state={state} actions={actions} /> : ''}
       </div>        
    );
}