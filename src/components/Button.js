import React from 'react'

const Button = ({text, color, onClick}) => {
    return (
        <button onClick={onClick} className="btn btn-primary" style={{backgroundColor : color}}>{text}</button>
    )
}

export default Button
