import {h} from 'hyperapp';
import Header from './header/nav-header';
import NavMenu from './header/side-nav';
import DraftsView from './draft/drafts-list';

export default ({state, actions})=>(
    <div class="g-ext-data-layer">
        <Header activeMenuItem={state.activeMenuItem} toggleMenu={actions.toggleMenu}></Header>
        <NavMenu state={state} actions={actions}></NavMenu>
        <div class="g-ext-content">
            <DraftsView state={state} actions={actions}></DraftsView>
        </div>
    </div>
);