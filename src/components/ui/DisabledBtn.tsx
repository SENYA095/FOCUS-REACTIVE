import React from 'react'

interface disabledBtnProps {
  title: string;
  icon: React.ReactNode;
    wrapperClass?: string;
}
const disabledBtn: React.FC<disabledBtnProps> = ({ title, icon,   wrapperClass = '', }) =>{
  return (
    <div className={`py-3 pl-3 pr-[18px] inline-flex items-center justify-center gap-1 bg-[#00E56D] rounded-[24px] ${wrapperClass}`}>
      <div className='size-5'>{icon}</div>
      <span className='text-[16px] font-bold text-black leading-[1.2] tracking-normal'>{title}</span>
    </div>
  )
}

export default disabledBtn