import {h} from 'hyperapp';

const MenuList = [{
    id: "Drafts",
    name: "Drafts",
    image: "//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_draft_g60_24dp_r2.png"
},
{
    id: "Activities",
    name: "Activities",
    image: "//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_draft_g60_24dp_r2.png"
}];

const MenuItem = (menuItem, activeMenuItem, updateMenu)=>{
    return (
        <li data-id={menuItem.id} class={"g-ext-nav-menu-item " + (activeMenuItem == menuItem.id ? 'active' : '')} 
            onclick={
                (eve)=>{
                    let id = eve.currentTarget.getAttribute("data-id");
                    if(activeMenuItem != id){
                        updateMenu(id);
                    }
                }
            }
            >
            <img src={menuItem.image}></img>
            <span class="g-ext-label">{menuItem.name}</span>
        </li>
    );
};

export default ({state, actions})=>{
    return (
        <nav class={"g-ext-sidenav-holder " + (state.showMenu ? "" : "inactive")}>
            <div class="g-ext-nav-menu">
                <ul class="g-ext-nav-menu-group">
                    {MenuList.map((menuItem)=>MenuItem(menuItem, state.activeMenuItem, actions.updateMenu))}
                </ul>
            </div>
        </nav>
    );
}