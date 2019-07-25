import React from "react"
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core"
import PropTypes from "prop-types"

import "./styles.css"

const Dropdown = props => {
    const [value, setValue] = React.useState('');

    const handleOnChange = (event) => {
        const currValue = event.target.value;

        setValue(() => currValue)
        props.onChange(currValue);
    }

    return (
        <div className="select-container">
            <FormControl className="select-form">
                <InputLabel htmlFor="template">{props.label}</InputLabel>
                <Select
                    value={value}
                    onChange={handleOnChange}
                    inputProps={{ "id": "template" }}>
                    {props.menu.map((item, idx) => (
                        <MenuItem key={item.id} value={idx}>{item.id}</MenuItem>
                    ))}
                </Select>
            </FormControl >
        </div >
    )
}

Dropdown.propTypes = {
    label : PropTypes.string.isRequired,
    menu : PropTypes.array.isRequired
}

export default Dropdown;