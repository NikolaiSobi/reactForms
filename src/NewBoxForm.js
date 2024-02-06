import React, { useState } from "react";

const NewBoxForm = ({boxHandle, boxes}) => {
    let lastArrItem = (boxes[boxes.length - 1])
    const INITAL_STATE = {
        color: '',
        width: 0,
        height: 0
    }
    const [formData, setFormData] = useState(INITAL_STATE)
    const handleChange = (e) => {
        let { name, value } = e.target
        if(name === 'width' || name === 'height') value = parseInt(value)
        setFormData({id: lastArrItem.id + 1, ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData(INITAL_STATE)
        boxHandle(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color: </label>
            <input id="color" type="text" name="color" placeholder="color" value={formData.color} onChange={handleChange}  />
            
            <label htmlFor="height"> Height: </label>
            <input id="height" type="number" name="height" placeholder="height" value={formData.height} onChange={handleChange}  />
            
            <label htmlFor="width"> Width: </label>
            <input id="width" type="number" name="width" placeholder="width" value={formData.width} onChange={handleChange}  />
            <button> Add box </button>
        </form>

    )
}

export default NewBoxForm