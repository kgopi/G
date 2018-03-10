import {h} from 'hyperapp';
import * as Utils from './../../utils/utils';

const LiteModeView = ({item, deleteItem})=>{
    return (
        <div class="g-ext-list-item-wrapper">
            <div class="g-ext-list-body">
                <div class="g-ext-item-left">
                    <img src={Utils.getLetterAvatar(item.author.name)}></img>
                </div>
                <div class="g-ext-item-center">
                    <span class="g-ext-draft-label">{item.note.subject}</span>
                </div>
                <div class="g-ext-item-right">
                    <div class="g-ext-text-wrap g-ext-flex-1">
                        <span class="g-ext-draft-content">{item.note.plainText}</span>
                    </div>
                    <div>
                        <ul class="g-ext-list-item-actions">
                            <li class="g-ext-list-item-action"
                                onclick={(eve)=>{
                                    eve.stopPropagation();
                                    deleteItem(item.id);
                                }}
                            >
                                <img src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/btw_ic_mark_trash_black_24dp.png"></img>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

const FullModeView = ({item, setSelectedItem, deleteItem})=>{
    return (
        <div class="g-ext-list-item-fullmode">
            <div class="g-ext-highlight"></div>
            <div class="g-ext-heading"
                onclick={(eve)=>{
                    eve.stopPropagation();
                    setSelectedItem(null);
                }}
                >
                <div class="g-ext-heading-wrapper">
                    <div class="g-ext-item-left">
                        <img src={Utils.getLetterAvatar(item.author.name)}></img>
                    </div>
                    <div class="g-ext-item-center g-ext-flex-1">
                        <div class="g-ext-flex-1">
                            <span class="g-ext-draft-label">{item.note.subject}</span>
                        </div>
                        <ul class="g-ext-list-item-actions">
                            <li class="g-ext-list-item-action"
                                onclick={(eve)=>{
                                    eve.stopPropagation();
                                    deleteItem(item.id);
                                }}
                            >
                                <img src="//ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/btw_ic_mark_trash_black_24dp.png"></img>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="g-ext-">

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