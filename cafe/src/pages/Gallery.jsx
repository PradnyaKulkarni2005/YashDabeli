import React from 'react'
import CircularGallery from '../Components/CircularGallery.jsx'
export default function Gallery() {
  return (
    <div>
      <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
</div>
      
    </div>
  )
}
