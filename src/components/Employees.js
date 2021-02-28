import React from 'react'
import Employee from './Employee'

const Employees = ({employees, onDelete, onEdit}) => {
    
    return (
        <div className="employees">
            <h4>Employee List</h4>
            {employees.map((employee) => (
                <Employee key={employee.id} employee={employee} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </div>
    )
}

export default Employees
