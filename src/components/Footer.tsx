export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex min-h-36 items-center justify-center bg-film">
      <p className="text-xs text-zinc-600">Copyright &copy; {currentYear} Brianna Haferman. All rights reserved.</p>
    </footer>
  )
}
