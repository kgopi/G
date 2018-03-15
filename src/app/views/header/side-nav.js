import {h} from 'hyperapp';

const MenuList = [{
    id: "Activities",
    name: "Activities"
},{
    id: "Drafts",
    name: "Drafts"
}];

const MenuItem = (menuItem, activeMenuItem, actions)=>{
    return (
        <li data-id={menuItem.id} class={"g-ext-nav-menu-item " + (activeMenuItem == menuItem.id ? 'active' : '')} 
            onclick={
                (eve)=>{
                    let id = eve.currentTarget.getAttribute("data-id");
                    if(activeMenuItem != id){
                        actions.updateMenu(id);
                    }
                    actions.toggleMenu();
                }
            }
            >
            <img role={menuItem.id.toLowerCase()}></img>
            <span class="g-ext-label">{menuItem.name}</span>
        </li>
    );
};

export default ({state, actions})=>{
    return (
        <nav class={"g-ext-sidenav-holder " + (state.showMenu ? "" : "inactive")}>
            {state.showMenu ? 
                <div class="g-ext-nav-wrapper" onclick={(eve)=>{actions.toggleMenu()}}></div> 
                : ''
            }
            <div class="g-ext-nav-menu">
                <ul class="g-ext-nav-menu-group">
                    {MenuList.map((menuItem)=>MenuItem(menuItem, state.activeMenuItem, actions))}
                </ul>
            </div>
        </nav>
    );
}