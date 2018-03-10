import {h} from 'hyperapp';

export default ({activeMenuItem,toggleMenu})=>{
    return (
        <nav class="g-ext-nav-container">
            <div id="g-ext-nav-header" class="g-ext-nav-header" role={activeMenuItem}>
                <div class="g-ext-timeline-nav">
                    <span class="g-ext-toggle-menu" onclick={(eve)=>{toggleMenu()}}>
                        <img aria-hidden="true" src="//www.gstatic.com/images/icons/material/system/1x/menu_white_24dp.png"></img>
                    </span>
                    <span title="Timeline" class="g-ext-active-selection">{activeMenuItem}</span>
                </div>
                <div class="g-ext-timeline-nav-2">
                    <div class="g-ext-w200"></div>
                    <div class="g-ext-search-wrapper">
                        <div class="g-ext-searchbar-holder">
                            <div class="g-ext-search-image-holder">
                                <img class="bD" src="//www.gstatic.com/images/icons/material/system/1x/search_white_24dp.png"></img>
                            </div>
                            <div class="g-ext-search-input-holder">
                                <input placeholder="Search"></input>
                            </div>
                        </div>
                    </div>
                    <div class="g-ext-w100"></div>
                </div>
            </div>
        </nav>
    );
}