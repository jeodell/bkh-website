import { classNames } from '../helper/helper'

interface CardProps {
  title: string
  body: string
  href: string
  color: string
}

export default function Card(props: CardProps) {
  const { title, body, href, color } = props

  const titleLower = title.toLowerCase()

  return (
    <div className={classNames(`bg-${titleLower}`, 'flex cursor-pointer rounded-lg p-1')}>
      <a href={href} className="h-full w-full">
        <h2>{title}</h2>
        <p>{body}</p>
      </a>
    </div>
  )
}
