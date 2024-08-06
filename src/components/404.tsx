export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 pt-24 text-xl font-light">
      <div className="flex flex-col items-center justify-center space-y-1">
        <h1 className="text-4xl">404</h1>
        <p>Page not found</p>
      </div>
      <a href="/" className="rounded-md bg-primary px-3 py-2 text-base text-zinc-50">
        Go back home
      </a>
    </div>
  )
}
