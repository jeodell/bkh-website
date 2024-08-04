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
  portrait: [
    { src: 'canyon_wedding1.jpg', alt: 'bride and groom standing on rock' },
    { src: 'canyon_wedding2.jpg', alt: 'bride and groom walking down aisle' },
    { src: 'canyon_wedding3.jpg', alt: 'bride and groom in front of river' },
    { src: 'engagement.jpg', alt: 'couple kissing in front of lake' },
    { src: 'kayak.jpg', alt: 'woman in kayak' },
    { src: 'lake_couple.jpg', alt: 'couple hugging in front of lake' },
    { src: 'maternity1.jpg', alt: 'maternity photo in field' },
    { src: 'maternity2.jpg', alt: 'maternity photo in field' },
    { src: 'movement.jpg', alt: 'woman smiling and flipping hair' },
    { src: 'newborn1.jpg', alt: 'newborn baby in blanket' },
    { src: 'newborn2.jpg', alt: 'mom and dad holding newborn' },
    { src: 'river_baby.jpg', alt: 'mom and baby playing in river' },
    { src: 'veil.jpg  ', alt: 'woman under veil' },
  ],
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
