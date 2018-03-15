import DataView from './data-view';
import "./../styles/main.scss";
import {h} from 'hyperapp';

export default (state, actions) => {
    return (
       <div class="g-ext-main">
           <div draggable="true" role={state.active ? 'close' : 'start'} class="g-ext-circle-holder" 
                onclick={
                    element=>{
                        actions.persistFilters({});
                        actions.getActiveMenuData();
                        actions.toggleState();
                    }
                }
            >
               <div class="g-ext-circle">
                   <i class={"g-ext-icon " + (state.active ? 'g-ext-close' : 'g-ext-plus')}></i>
               </div>
           </div>
           {state.active ? <DataView state={state} actions={actions} /> : ''}
       </div>        
    );
}