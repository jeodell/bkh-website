import { classNames } from '../lib/helper'

type CardProps = {
  title: string
  href: string
  color: string
}

export default function Card(props: CardProps) {
  const { title, href, color } = props

  return (
    <div className={classNames(`${color}`, 'flex cursor-pointer rounded-lg p-8')}>
      <a href={href} className="h-full w-full">
        <h2>{title}</h2>
      </a>
    </div>
  )
}
