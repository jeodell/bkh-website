export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-film">
      <div className="mx-[5vw] md:mx-[10vw]">
        <div className="grid grid-cols-2 px-2 py-6 md:px-4">
          <div className="col-span-1 flex items-center justify-start">
            <p className="text-sm text-zinc-600">
              Copyright &copy; {currentYear} Brianna Haferman. All rights reserved.
            </p>
          </div>
          <div className="col-span-1 ml-auto flex flex-col items-start justify-center">
            <p className="text-sm text-zinc-400">Email</p>
            <a
              href="mailto:briannahaferman@gmail.com"
              className="text-sm text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              briannahaferman@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
