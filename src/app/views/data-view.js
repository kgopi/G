import {h} from 'hyperapp';
import Header from './header/nav-header';
import NavMenu from './header/side-nav';
import BodyView from './body/container';

export default ({state, actions})=>(
    <div class="g-ext-data-layer">
        <Header activeMenuItem={state.activeMenuItem} toggleMenu={actions.toggleMenu} closeTimeline={actions.closeTimeline}></Header>
        <NavMenu state={state} actions={actions}></NavMenu>
        <BodyView state={state} actions={actions}></BodyView>
    </div>
);