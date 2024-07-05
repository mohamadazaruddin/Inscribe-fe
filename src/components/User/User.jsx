import React from 'react'
import RightArrow from "../Icons/RightArrow"

export default function User({userData}) {
  return (
    <div className="flex items-center py-[12px] justify-between">
          <div className="flex items-center">
            <img src={`assets/images/bitmoji/${userData.userProfile}`} height="40px" width="40px"></img>
            <div className='text-[16px] font-medium text-[#000000] ms-[8px]'>{userData.userName}</div>
            <div className='ms-[24px]'>{userData.userLabel}</div>
          </div>
         
          <div className='ms-[16px]'><RightArrow height="18px" width="18px"/></div>
    </div>
  )
}
