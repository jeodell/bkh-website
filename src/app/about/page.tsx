import Image from 'next/image'

export default function About() {
  return (
    <section className="grid grid-cols-3 justify-center py-12">
      <div className="col-span-1">
        <Image
          src="/images/b_laying.jpg"
          alt="photographer laying on mountainside"
          className="img-fluid"
          width={500}
          height={333}
        />
      </div>
      <div className="col-span-2 flex flex-col justify-center gap-y-4 px-4">
        <p className="text-xl lg:text-lg">
          You&apos;ve found the hub of my creative outlet. My photography usually connects to exploration, to the earth,
          and to the human, but with a style that&apos;s still evolving. You never know what exactly you&apos;ll find. I
          just thank you for looking.
        </p>
        <p className="text-xl lg:text-lg">Based in North Carolina.</p>
        <p className="text-xl lg:text-lg">Any questions? Feel free to contact me!</p>
      </div>
    </section>
  )
}
