import React from 'react'
import Button from './Button'

const Header = ({onAdd, showAdd}) => {
    return (
        <div className="header m-2">
            <h3 className="page-name">Jobblio</h3>
            <Button onClick={onAdd} text={showAdd ? 'Close Form' : 'Open Form'} color={showAdd ? 'red' : 'green'}/>
        </div>
    )
}

export default Header
