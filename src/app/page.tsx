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
      <div className="container grid grid-cols-1 gap-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <Card href="/travel" title="Travel" color="bg-travel" />
        <Card href="/nature" title="Nature" color="bg-nature" />
        <Card href="/portrait" title="Portrait" color="bg-portrait" />
        <Card href="/drone" title="Drone" color="bg-drone" />
        <Card href="film" title="Film" color="bg-film" />
        <Card href="/design" title="Design" color="bg-design" />
      </div>
    </>
  )
}
