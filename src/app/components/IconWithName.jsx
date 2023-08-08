import { IconButton } from '@mui/material'
import React from 'react'

const IconWithName = (props) => {
    const {title, children,...rest} = props
  return (
    <>
        <div className='flex items-center' {...rest}>
            <IconButton
            color="inherit"
            aria-label="icon button"
            edge="start"
            >
            {children && children}
            </IconButton>
            <span className='ml-1'>{title && title}</span>
        </div>
    </>
  )
}

export default IconWithName