import Image from 'next/image'

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-12 md:grid md:grid-cols-3">
      <div className="col-span-1">
        <div className="max-w-96">
          <Image
            src="/images/about/b_laying.jpg"
            alt="photographer laying on mountainside"
            className="w-auto"
            width={500}
            height={333}
            priority
          />
        </div>
      </div>
      <div className="col-span-2 flex flex-col justify-center gap-y-4">
        <p className="lg:text-lg">
          You&apos;ve found the hub of my creative outlet. My photography usually connects to exploration, to the earth,
          and to the human, but with a style that&apos;s still evolving. You never know what exactly you&apos;ll find. I
          just thank you for looking.
        </p>
        <p className="lg:text-lg">Based in North Carolina.</p>
        <p className="lg:text-lg">Any questions? Feel free to contact me!</p>
      </div>
    </section>
  )
}
