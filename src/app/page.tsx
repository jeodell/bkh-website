import Image from 'next/image'
import Card from '../components/Card'

export default function Home() {
  return (
    <>
      <div>
        <Image
          alt="cover photo of mountains"
          src="/images/mountains.jpg"
          className="h-auto w-full object-cover"
          width={1440}
          height={960}
        />
      </div>
      <div className="flex items-center justify-between p-24">
        <Card href="/drone" title="Drone" body="Drone photos" color="#dbe9f1" />
        <Card href="/illustration" title="Illustration" body="Illustration photos" color="#dceae9" />
        <Card href="/nature" title="Nature" body="Nature photos" color="#e6eee5" />
        <Card href="/portrait" title="Portrait" body="Portrait photos" color="#e9ecf1" />
      </div>
    </>
  )
}
