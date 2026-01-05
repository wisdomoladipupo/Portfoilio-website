'use client'

import { useState } from 'react'

interface ImageWithErrorFallbackProps {
  src: string
  alt: string
  className: string
  fallbackClassName?: string
}

export default function ImageWithErrorFallback({ 
  src, 
  alt, 
  className, 
  fallbackClassName = "w-full h-full flex items-center justify-center text-gray-400" 
}: ImageWithErrorFallbackProps) {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div className={fallbackClassName}>
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2v10h14V7H5zm2 2h10v2H7V9zm0 4h10v2H7v-2z"/>
          </svg>
          <p className="text-sm">Image Not Available</p>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImgError(true)}
    />
  )
}
