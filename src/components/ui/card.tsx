import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  href: string
  color: string
  src: string
}

export default function Card(props: Props) {
  const { title, href, color } = props

  return (
    <div className={cn(`${color}`, 'flex cursor-pointer rounded-lg p-8')}>
      <Link href={href} className="h-full w-full">
        <h2>{title}</h2>
        <Image src={props.src} alt={title} className="h-auto w-full object-cover" height={100} width={67} />
      </Link>
    </div>
  )
}
