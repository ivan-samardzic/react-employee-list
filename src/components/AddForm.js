import React from 'react'
import {useState} from 'react'

const AddForm = ({onAdd, employee}) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [image, setImage] = useState("");
    const [moto, setMoto] = useState("");

    

    const onSubmit = (event) => {
        event.preventDefault();

        if((!name) ||(!position) || (!image) ||(!moto)) {
            alert('Please add info into the form!');
            return;
        }
        onAdd({name, position, image, moto});

        setName("");
        setPosition("");
        setImage("");
        setMoto(""); 
    }
    
    return (
        <form className="add-form m-3" onSubmit={onSubmit}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Employee Name" value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div className="form-group">
                <label>Position</label>
                <input type="text" placeholder="Employee Position" value={position} onChange={(event) => setPosition(event.target.value)}/>
            </div>
            <div className="form-group">
                <label>Image URL</label>
                <input type="text" placeholder="Employee Image" value={image} onChange={(event) => setImage(event.target.value)}/>
            </div>
            <div className="form-group">
                <label>Moto</label>
                <input type="text" placeholder="Employee Moto" value={moto} onChange={(event) => setMoto(event.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
    )
}

export default AddForm
