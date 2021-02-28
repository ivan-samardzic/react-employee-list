import React from 'react'
import PropTypes from 'prop-types'


const Employee = ({employee, onDelete, onEdit}) => {
    const onClick = (event) => {
        event.preventDefault();
        onEdit({employee});
    }
    return (
        <div className="employee">
            <img className="employee-image" src={employee.image} alt="employee-image" />
            <div>
                <h3 className="employee-name">{employee.name}</h3>
                <h4 className="employee-position">{employee.position}</h4>
                <h5>{employee.moto}</h5>
            </div>
            <div>
                <button onClick={onClick} className="btn btn-success m-2"><i className="far fa-edit"></i></button>
                <button onClick={() => onDelete(employee.id)} className="btn btn-danger m-2"><i className="far fa-trash-alt"></i></button>
            </div>
        </div>
    )
}

Employee.propTypes = {
    employee : PropTypes.object.isRequired,
    onDelete : PropTypes.func.isRequired,
    onEdit : PropTypes.func.isRequired,
}



export default Employee;
