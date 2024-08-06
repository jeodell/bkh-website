import NotFound from '@/components/404'
import { Metadata, ResolvingMetadata } from 'next'
import PhotoGrid from '../../components/PhotoGrid'

type Props = {
  params: { album: string }
}

const pages = ['film', 'design', 'drone', 'nature', 'portrait', 'travel']

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const albumName = params.album?.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  return {
    title: `Brianna Haferman | ${albumName}`,
  }
}

export function generateStaticParams() {
  const staticParams = pages.map((page) => ({ album: page }))
  return staticParams
}

export default function Page({ params }: { params: { album: string } }) {
  if (!pages.includes(params.album)) {
    return <NotFound />
  }

  const albumName = params.album?.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <div className="mb-24 mt-12">
      <h1 className="mb-12 text-center text-4xl font-light">{albumName}</h1>
      <PhotoGrid album={params.album} />
    </div>
  )
}
