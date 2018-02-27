import {h} from 'hyperapp';

const Draft = ({id, name}) => (
    <li id={id} class="draft-view">
        <h2>{name}</h2>
    </li>
);

const DraftsList = ({drafts}) => drafts.map(draft => <Draft {...draft}/>);

const DraftsView = (state, actions)=>{
    debugger;
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