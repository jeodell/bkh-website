import Image from 'next/image'

type PhotoGridProps = {
  album: string
}

const photoLinks: { [key: string]: { src: string; alt: string }[] } = {
  portrait: [{ src: 'chef.jpg', alt: 'chefmannnnn' }],
  nature: [
    { src: 'b_laying.jpg', alt: 'woman laying in field by mountain' },
    {
      src: 'kauai.jpg',
      alt: 'hanalei bay in kauai',
    },
    {
      src: 'mountains.jpg',
      alt: 'mountains',
    },
    {
      src: 'chef.jpg',
      alt: 'chefmannnnn',
    },
  ],
}

export default function PhotoGrid(props: PhotoGridProps) {
  const { album } = props

  const photos = photoLinks[album]

  if (photos === null || photos === undefined || photos.length === 0) {
    return (
      <div className="container mx-auto text-center">
        <h1>Album not found</h1>
      </div>
    )
  } else {
    return (
      <div className="xs:columns-2 container mx-auto columns-1 gap-4 lg:columns-3 [&>img:not(:first-child)]:mt-4">
        {photos.map((photo: { src: string; alt: string }) => (
          <Image key={photo.alt} src={`/images/${album}/${photo.src}`} alt={photo.alt} width={400} height={400} />
        ))}
      </div>
    )
  }
}
