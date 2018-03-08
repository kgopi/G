import {h} from 'hyperapp';

export default ({id, name}) => (
    <li id={id} class="draft-view">
        <h2>{name}</h2>
    </li>
);