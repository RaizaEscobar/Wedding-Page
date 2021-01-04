import React from 'react'

function MyInput(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input value={props.value} name={props.name} onChange={props.inputClick} />
        </div>
    )
}

export default MyInput
