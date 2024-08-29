'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function MemeImage() {
  const [memeUrl, setMemeUrl] = useState<string | null>(null)
  const fetchedRef = useRef(false)

  useEffect(() => {
    const fetchMeme = async () => {
      if (fetchedRef.current) return
      try {
        const response = await fetch(`/api/meme?timestamp=${Date.now()}`)
        if (!response.ok) throw new Error('Failed to fetch meme')
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        setMemeUrl(url)
        fetchedRef.current = true
      } catch (error) {
        console.error('Error fetching meme:', error)
      }
    }

    fetchMeme()

    return () => {
      if (memeUrl) {
        URL.revokeObjectURL(memeUrl)
      }
    }
  }, [memeUrl])

  return (
    <>
      {memeUrl && (
        <Image
          src={memeUrl}
          alt="Subreddit Memes"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      )}
    </>
  )
}
