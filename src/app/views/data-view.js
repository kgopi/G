import {h} from 'hyperapp';
import DraftsView from './draft/drafts-list';

export default ({state, actions})=>(
    <div class="g-ext-data-layer">
        <nav class="g-ext-nav-container">
            <div class="g-ext-nav-header">
                <div class="g-ext-timeline-nav">
                    <span class="g-ext-toggle-menu">
                        <img aria-hidden="true" src="//www.gstatic.com/images/icons/material/system/1x/menu_white_24dp.png"></img>
                    </span>
                    <span title="Timeline" class="g-ext-active-selection">Drafts</span>
                </div>
            </div>
        </nav>
        <div class="g-ext-content">
            <DraftsView state={state} actions={actions}></DraftsView>
        </div>
    </div>
);