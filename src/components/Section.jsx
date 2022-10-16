import React from 'react'
import './style/section.css'
const Section = ({url,title}) => {
  return (
    <section>
        <iframe 
         title={title} 
         src={url} 
         frameborder='0' 
         width='100%' 
         height='100%'/>
         
    </section>
  )
}

export default Section