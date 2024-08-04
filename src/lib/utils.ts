export async function sendContactForm(data: {
  name: string | undefined
  email: string | undefined
  message: string | undefined
}) {
  return await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (!res.ok) throw new Error('Failed to send contact form')
    return res.json()
  })
}

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const photoLinks: { [key: string]: { src: string; alt: string }[] } = {
  portrait: [{ src: 'chef.jpg', alt: 'chefmannnnn' }],
  nature: [
    { src: 'b_laying.jpg', alt: 'woman laying in field by mountain' },
    {
      src: 'kauai.jpg',
      alt: 'hanalei bay in kauai',
    },
    {
      src: 'mountains.jpg',
      alt: 'mountains',
    },
    {
      src: 'chef.jpg',
      alt: 'chefmannnnn',
    },
  ],
  travel: [
    {
      src: 'b_laying.jpg',
      alt: 'woman laying in field by mountain',
    },
  ],
}
