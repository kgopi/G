import {h} from 'hyperapp';
import DraftView from './draft';

const DraftsList = ({drafts}) => drafts.map(draft => <DraftView {...draft}/>);

const DraftsView = ({state, actions})=>{
    return (
        <div class="ext-drafts-container" oncreate={() => actions.drafts.getStaleData()}>
            <h1>Stale Drafts</h1>
            <ul>
                <DraftsList drafts={state.drafts.staleData} />
            </ul>
        </div>
    );
}

export default DraftsView;