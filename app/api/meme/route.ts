import { NextRequest, NextResponse } from 'next/server'
import { Meme } from '@/types'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  try {
    const res = await fetch('https://meme-api.com/gimme/ProgrammerHumor', { cache: 'no-store' })
    
    if (!res.ok) {
      throw new Error('Failed to fetch meme')
    }

    const meme: Meme = await res.json()
    
    // Fetch the image
    const imageRes = await fetch(meme.url)
    if (!imageRes.ok) {
      throw new Error('Failed to fetch image')
    }

    // Get the image buffer and content type
    const imageBuffer = await imageRes.arrayBuffer()
    const contentType = imageRes.headers.get('content-type') || 'image/jpeg'

    // Return the image directly
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'no-store, max-age=0',
      },
    })
  } catch (error) {
    console.error('Error fetching meme:', error)
    return NextResponse.json({ error: 'Failed to fetch meme' }, { status: 500 })
  }
}