import Image from 'next/image'
import Card from '../components/ui/card'

export default function Home() {
  return (
    <>
      <div>
        <Image
          alt="cover photo of mountains"
          src="/images/salem_lake.jpg"
          className="h-auto w-full object-cover"
          width={1440}
          height={960}
          priority
        />
      </div>
      <div className="3xl:grid-cols-6 container grid grid-cols-1 gap-8 p-12 md:grid-cols-2 md:p-16 xl:grid-cols-3 xl:p-24">
        <Card
          href="/travel"
          title="Travel"
          color="bg-travel"
          src="/images/travel/Hikers overlooking Mount Assiniboine_Brianna Haferman.jpg"
        />
        <Card
          href="/nature"
          title="Nature"
          color="bg-nature"
          src="/images/nature/Bee on Cutleaf Coneflower_Brianna Haferman.jpg"
        />
        <Card
          href="/portrait"
          title="Portrait"
          color="bg-portrait"
          src="/images/portrait/Woman on a dock_Brianna Haferman.jpg"
        />
        <Card
          href="/drone"
          title="Drone"
          color="bg-drone"
          src="/images/drone/Quarry Park and Greenway WS_Drone_Brianna Haferman.jpg"
        />
        <Card href="film" title="Film" color="bg-film" src="/images/film/Bashavia Creek Preserve 2.jpg" />
        <Card
          href="/design"
          title="Design"
          color="bg-design"
          src="/images/design/Visitors Center_Great Trails State Poster_V3.jpg"
        />
      </div>
    </>
  )
}
