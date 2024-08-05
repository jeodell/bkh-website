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
        <h2 className="pb-4 text-2xl font-light">{title}</h2>
        <Image src={props.src} alt={title} className="h-96 w-full object-cover" height={384} width={200} />
      </Link>
    </div>
  )
}
