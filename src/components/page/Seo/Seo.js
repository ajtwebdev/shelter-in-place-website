import React from 'react'
import SEO from '../../seo'

export default function Seo({title, description}) {
  return (
    <div>
        <SEO title={title} description={description} />
    </div>
  )
}
