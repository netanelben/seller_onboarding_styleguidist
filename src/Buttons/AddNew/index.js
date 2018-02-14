import React from 'react';
import './style.scss';

function PlusIcon() {
    return (<svg aria-hidden="true" data-prefix="far" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M436 228H252V44c0-6.6-5.4-12-12-12h-32c-6.6 0-12 5.4-12 12v184H12c-6.6 0-12 5.4-12 12v32c0 6.6 5.4 12 12 12h184v184c0 6.6 5.4 12 12 12h32c6.6 0 12-5.4 12-12V284h184c6.6 0 12-5.4 12-12v-32c0-6.6-5.4-12-12-12z"></path></svg>);
}

export default function AddNewBtn({onClickHandler = null}) {
    return (
        <button className="addnew" onClick={onClickHandler}>
            <span><PlusIcon/></span>
            Add New
        </button>
    );
}