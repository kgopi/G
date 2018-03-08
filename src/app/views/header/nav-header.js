import {h} from 'hyperapp';

export default ({activeMenuItem,toggleMenu})=>{
    return (
        <nav class="g-ext-nav-container">
            <div class="g-ext-nav-header">
                <div class="g-ext-timeline-nav">
                    <span class="g-ext-toggle-menu" onclick={(eve)=>{toggleMenu()}}>
                        <img aria-hidden="true" src="//www.gstatic.com/images/icons/material/system/1x/menu_white_24dp.png"></img>
                    </span>
                    <span title="Timeline" class="g-ext-active-selection">{activeMenuItem}</span>
                </div>
            </div>
        </nav>
    );
}