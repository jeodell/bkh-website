'use client'

import { photoLinks } from '@/lib/utils'
import Image from 'next/image'
import { useRef, useState } from 'react'

import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/plugins/captions.css'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/styles.css'

type Props = {
  album: string
  isVideo: boolean
}

export default function PhotoGrid(props: Props) {
  const [index, setIndex] = useState(-1)
  const thumbnailsRef: any = useRef()

  const { album, isVideo } = props

  const photos = photoLinks[album]

  if (photos === null || photos === undefined || photos.length === 0) {
    return (
      <div className="container mx-auto text-center">
        <h1>Album not found</h1>
      </div>
    )
  } else if (isVideo) {
    return (
      <>
        <div className="container mx-auto columns-1 gap-4 space-y-8 xl:columns-2 [&>img:not(:first-child)]:mt-4">
          {photos.map((photo: { src: string; alt: string }) => (
            <div key={photo.alt} className="flex items-center justify-center">
              <iframe
                width="560"
                height="315"
                src={photo.src}
                title={photo.alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="container mx-auto columns-1 gap-4 xs:columns-2 lg:columns-3 [&>img:not(:first-child)]:mt-4">
          {photos.map((photo: { src: string; alt: string }) => (
            <Image
              key={photo.alt}
              src={`/images/${album}/${photo.src}`}
              alt={photo.alt}
              width={400}
              height={400}
              onClick={() => {
                setIndex(photos.indexOf(photo))
              }}
            />
          ))}
        </div>
        <Lightbox
          open={index !== -1}
          close={() => setIndex(-1)}
          index={index}
          plugins={[Thumbnails, Captions]}
          thumbnails={{ ref: thumbnailsRef }}
          on={{
            click: () => {
              ;(thumbnailsRef.current?.visible ? thumbnailsRef.current?.hide : thumbnailsRef.current?.show)?.()
            },
          }}
          slides={photos.map((photo: { src: string; alt: string }) => ({
            src: `/images/${album}/${photo.src}`,
            title: photo.alt,
          }))}
        />
      </>
    )
  }
}
