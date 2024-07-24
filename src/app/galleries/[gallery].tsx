import type { Metadata, ResolvingMetadata } from 'next'

const imageLinks = {
  drone: 'chef.jpg',
  illustration: 'b_laying.jpg',
  landscape: 'kauai.jpg',
  portrait: 'mountains.jpg',
}

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  return {
    title: `Brianna Haferman | ${params.id}`,
  }
}

export default function Gallery({ params, searchParams }: Props) {
  // TODO
  const gallery = 'drone'
  const imageLink = imageLinks.drone

  return (
    <div>
      <h1>{gallery} page!</h1>
      <img src={imageLink} alt={gallery} />
    </div>
  )
}

// export function getStaticPaths() {
//   return [
//     { params: { gallery: 'drone' } },
//     { params: { gallery: 'illustration' } },
//     { params: { gallery: 'landscape' } },
//     { params: { gallery: 'portrait' } },
//   ] as const
// }
