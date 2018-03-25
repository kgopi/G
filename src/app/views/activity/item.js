import {h} from 'hyperapp';
import * as Utils from './../../utils/utils';
import * as moment from 'moment';

const LiteModeView = ({item, deleteItem})=>{
    return (
        <div class="g-ext-list-item-wrapper">
            <div class="g-ext-list-body">
                <div>
                    <div class="g-ext-item-left">
                        <img title={item.author.name} src={Utils.getLetterAvatar(item.author.name)}></img>
                    </div>
                    <div class="g-ext-item-center g-ext-text-wrap">
                        <span title={item.note.subject} class="g-ext-content g-ext-bold">{item.note.subject || '--'}</span>
                    </div>
                    <div class="g-ext-item-right">
                        <div class="g-ext-text-wrap g-ext-flex-1">
                            <span class="g-ext-content"><meta>{item.author.name}</meta><span class="g-ext-separator">|</span><meta>{moment.utc(item.note.activityDate).toDate().toLocaleString()}</meta></span>
                        </div>
                        <div>
                            <ul class="g-ext-list-item-actions">
                            {
                                item.author.eid == GS.userConfig.userId
                                ? <li class="g-ext-list-item-action"
                                        onclick={(eve)=>{
                                            eve.stopPropagation();
                                            deleteItem(item.id);
                                        }}
                                    >
                                        <img src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/btw_ic_mark_trash_black_24dp.png"></img>
                                    </li>
                                : ''
                            }
                            </ul>
                        </div>
                    </div>
                </div>
                {
                    ContextLinks(item)
                }
                {/* <div>
                    <div class="g-ext-profile-space-holder"></div>
                    <div class="g-ext-text-wrap g-ext-flex-1">
                        <span class="g-ext-content">{item.note.plainText}</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

const ContextLinks = (item)=>(
    item.contexts.length ?
            <div>
                <div class="g-ext-profile-space-holder"></div>
                <ul class="g-ext-contexts-group">
                    {
                        item.contexts.map((context)=>(
                            context.dsp ? <li><span class="account-info-link" title={(context.obj || context.eobj) + ": " + context.lbl}>{context.lbl}</span></li> : ''
                        ))
                    }
                </ul>
            </div>
        : ''
);

const NotesContent = ({item})=>{
    return (<div class="g-ext-note-content" oncreate={(ele)=>{ele.innerHTML = Utils.htmlUnescape(item.note.content)}}></div>);
};

const FullModeView = ({item, setSelectedItem, deleteItem})=>{
    return (
        <div class="g-ext-list-item-wrapper g-ext-list-item-fullmode"
                onupdate={ele=>{
                    ele.scrollIntoView();
                    document.querySelector('.g-ext-body-container').scrollTop -= 75;
                }}
            >
            <div class="g-ext-highlight"></div>
            <div class="g-ext-heading"
                onclick={(eve)=>{
                    eve.stopPropagation();
                    setSelectedItem(null);
                }}
                >
                <div class="g-ext-heading-wrapper">
                    <div class="g-ext-item-left">
                        <img title={item.author.name} src={Utils.getLetterAvatar(item.author.name)}></img>
                    </div>
                    <div class="g-ext-item-center g-ext-flex-1">
                        <div class="g-ext-text-wrap g-ext-flex-1">
                            <span title={item.note.subject} class="g-ext-draft-label g-ext-bold">{item.note.subject || '--'}</span>
                        </div>
                        <div class="g-ext-text-wrap g-ext-flex-1">
                            <span class="g-ext-content"><meta>{item.author.name}</meta><span class="g-ext-separator">|</span><meta>{moment.utc(item.note.activityDate).toDate().toLocaleString()}</meta></span>
                        </div>
                        <ul class="g-ext-list-item-actions">
                            {
                                item.author.eid == GS.userConfig.userId
                                ? <li class="g-ext-list-item-action"
                                        onclick={(eve)=>{
                                            eve.stopPropagation();
                                            deleteItem(item.id);
                                        }}
                                    >
                                        <img src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/btw_ic_mark_trash_black_24dp.png"></img>
                                    </li>
                                : ''
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div class="g-ext-activity-body">
                <NotesContent item={item}></NotesContent>
            </div>
        </div>
    );
}

export default ({setSelectedItem, deleteItem, item, selectedItem}) => {
    return (
        <div id={item.id} class="g-ext-list-item" 
            data-view-mode={item.id == selectedItem ? 'full-mode': ''}
            onclick={(eve)=>{
                setSelectedItem(item.id);
            }}
            >
            {   item.id == selectedItem
                    ? <FullModeView setSelectedItem={setSelectedItem} deleteItem={deleteItem} item={item}></FullModeView>
                    : <LiteModeView setSelectedItem={setSelectedItem} deleteItem={deleteItem} item={item}></LiteModeView>
            }   
        </div>
    );
};