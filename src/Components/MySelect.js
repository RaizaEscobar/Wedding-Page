import React from 'react'

function MySelect(props) {
    return (
        <div>
            <label>{props.label}</label>
            <select onChange={props.changeSelect} defaultValue="0">
                {props.firstEmpty && <option value="0" ></option>}
                {props.options.map((element, index) => {
                    return <option key={index}>{element}</option>
                })}
            </select>

        </div>
    )
}

export default MySelect
