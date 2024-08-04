import Image from 'next/image'
import Card from '../components/ui/card'

export default function Home() {
  return (
    <>
      <div>
        <Image
          alt="cover photo of mountains"
          src="/images/mountains.jpg"
          className="h-auto max-h-96 w-full object-cover lg:max-h-[480px]"
          width={1440}
          height={960}
          priority
        />
      </div>
      <div className="container grid max-w-6xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <Card href="/travel" title="Travel" color="bg-travel" src="/images/travel/cover.jpg" />
        <Card href="/nature" title="Nature" color="bg-nature" src="/images/nature/cover.jpg" />
        <Card href="/portrait" title="Portrait" color="bg-portrait" src="/images/portrait/cover.jpg" />
        <Card href="/drone" title="Drone" color="bg-drone" src="/images/drone/cover.jpg" />
        <Card href="film" title="Film" color="bg-film" src="/images/film/cover.jpg" />
        <Card href="/design" title="Design" color="bg-design" src="/images/design/cover.jpg" />
      </div>
    </>
  )
}
