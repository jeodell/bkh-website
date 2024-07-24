import Card from '../components/Card'

export default function Home() {
  return (
    <>
      <div>
        <img alt="" src="/images/mountains.jpg" className="h-auto w-full object-cover" />
      </div>
      <div className="flex items-center justify-between p-24">
        <Card href="/galleries/drone" title="Drone" body="Drone photos" color="#dbe9f1" />
        <Card href="/galleries/illustration" title="Illustration" body="Illustration photos" color="#dceae9" />
        <Card href="/galleries/landscape" title="Landscape" body="Landscape photos" color="#e6eee5" />
        <Card href="/galleries/portrait" title="Portrait" body="Portrait photos" color="#e9ecf1" />
      </div>
    </>
  )
}
