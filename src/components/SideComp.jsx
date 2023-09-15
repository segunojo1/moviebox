import React from 'react'

const SideComp = ({img, text, }) => {
  return (
    <div className='flex p-3 gap-5'>
        <img src={img} alt="" />
        <p className='font-bold'>{text}</p>
    </div>
  )
}

export default SideComp