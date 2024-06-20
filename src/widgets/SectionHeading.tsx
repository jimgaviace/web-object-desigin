import React from 'react'

interface SectionHeadingProps {
  title:string;
  subtitle:string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({title, subtitle}) => {
  return (
    <div>
      <h2 className='text-[2.635em] font-black text-center'>{title}</h2>
      <p className='text-xl mt-4 text-center text-gray-500'>{subtitle}</p>
    </div>
  )
}


export default SectionHeading