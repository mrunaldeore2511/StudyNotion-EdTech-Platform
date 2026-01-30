import React from 'react'
const IconButton = ({ text, onClick, disabled, outline = false, customClasses, type, children }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            type={type}
        >

            {
                children ? (<><span>{text}</span>{children}</>) : (text)
            }
        </button>
    )
}

export default IconButton
