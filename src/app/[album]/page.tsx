import { Metadata, ResolvingMetadata } from 'next'
import PhotoGrid from '../../components/PhotoGrid'

type Props = {
  params: { album: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const albumName = params.album?.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  return {
    title: `Brianna Haferman | ${albumName}`,
  }
}

export function generateStaticParams() {
  const pages = ['film', 'design', 'drone', 'nature', 'portrait', 'travel']
  const staticParams = pages.map((page) => ({ album: page }))
  return staticParams
}

export default function Page({ params }: { params: { album: string } }) {
  const albumName = params.album?.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <div className="my-8">
      <h1 className="my-8 text-center text-4xl font-extralight">{albumName}</h1>
      <PhotoGrid album={params.album} />
    </div>
  )
}
