export default function page() {
  return (
    <div className="mx-auto w-2/3 max-w-5xl py-12">
      <section>
        <div className="flex flex-wrap">
          <div className="flex-auto px-4 lg:basis-5/12">
            <img src="/images/b_laying.jpg" alt="photographer laying on mountainside" className="img-fluid" />
          </div>
          <div className="mt-8 flex flex-auto flex-col justify-center gap-y-4 px-4 lg:mt-0 lg:basis-7/12">
            <p className="text-xl lg:text-lg">
              You&apos;ve found the hub of my creative outlet. My photography usually connects to exploration, to the
              earth, and to the human, but with a style that&apos;s still evolving. You never know what exactly
              you&apos;ll find. I just thank you for looking.
            </p>
            <p className="text-xl lg:text-lg">Based in North Carolina.</p>
            <p className="text-xl lg:text-lg">Any questions? Feel free to contact me!</p>
          </div>
        </div>
      </section>
    </div>
  )
}
