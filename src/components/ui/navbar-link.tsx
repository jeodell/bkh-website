import Link from 'next/link'

type Props = {
  href: string
  text: string
}

export default function navbarLink(props: Props) {
  return (
    <Link
      href={props.href}
      className="inline-flex items-center rounded-md px-3 py-2 text-sm hover:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {props.text}
    </Link>
  )
}
