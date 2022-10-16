import React from 'react'
import './style/section.css'
const Section = ({url}) => {
  return (
    <section>
        <iframe src={url} frameborder='0' width='100%' height='100%'></iframe>
    </section>
  )
}

export default Section