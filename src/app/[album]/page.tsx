import { Metadata, ResolvingMetadata } from 'next'
import PhotoGrid from '../../components/PhotoGrid'

type Props = {
  params: { album: string }
}

export default function Page({ params }: { params: { album: string } }) {
  const albumName = params.album?.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <div>
      <h1 className="my-8 text-center text-4xl font-extralight">{albumName}</h1>
      <PhotoGrid album={params.album} />
    </div>
  )
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const albumName = params.album?.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  return {
    title: `Brianna Haferman | ${albumName}`,
  }
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { album: 'film' } },
      { params: { album: 'graphic-design' } },
      { params: { album: 'illustration' } },
      { params: { album: 'drone' } },
      { params: { album: 'nature' } },
      { params: { album: 'portrait' } },
      { params: { album: 'travel' } },
    ] as const,
    fallback: false,
  }
}
