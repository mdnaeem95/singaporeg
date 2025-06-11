/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity/client'

interface SanityImageProps {
  image: any // Sanity image object
  alt?: string
  className?: string
  sizes?: string
  priority?: boolean
  quality?: number
  fill?: boolean
  width?: number
  height?: number
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
}

export default function SanityImage({
  image,
  alt = '',
  className = '',
  sizes,
  priority = false,
  quality = 85,
  fill = false,
  width,
  height,
  objectFit = 'cover',
}: SanityImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  if (!image?.asset) {
    return (
      <div className={`bg-gray-200 ${className}`}>
        {/* Placeholder when no image */}
        {fill ? (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        ) : (
          <div 
            className="flex items-center justify-center text-gray-400"
            style={{ width: width || 400, height: height || 300 }}
          >
            <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
    )
  }

  const imageUrl = fill 
    ? urlFor(image).url()
    : urlFor(image).width(width || 800).height(height || 600).url()

  const blurDataURL = urlFor(image).width(24).height(24).blur(20).url()

  return (
    <div className={`relative ${fill ? '' : 'inline-block'} ${className}`}>
      {isLoading && (
        <div className={`absolute inset-0 bg-gray-200 animate-pulse ${fill ? '' : 'rounded'}`} />
      )}
      
      {hasError ? (
        <div className={`bg-gray-200 flex items-center justify-center text-gray-400 ${fill ? 'absolute inset-0' : ''}`}
          style={!fill ? { width: width || 400, height: height || 300 } : {}}
        >
          <span>Failed to load image</span>
        </div>
      ) : (
        <Image
          src={imageUrl}
          alt={alt || image.alt || ''}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          sizes={sizes}
          priority={priority}
          quality={quality}
          placeholder="blur"
          blurDataURL={blurDataURL}
          className={`${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          style={{ objectFit }}
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
        />
      )}
    </div>
  )
}