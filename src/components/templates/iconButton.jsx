import React from 'react'

export default props => (
    <button className={'btn btn-' + props.style}>
        {props.title} <i className={'fa fa-' + props.icon}></i>
    </button>
)