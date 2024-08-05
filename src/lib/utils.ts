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
    { src: 'Baby on the way 1_Brianna Haferman.jpg', alt: 'maternity photo in field' },
    { src: 'Baby on the way 2_Brianna Haferman.jpg', alt: 'maternity photo in field' },
    { src: 'Canyon Wedding 1_Brianna Haferman.jpg', alt: 'bride and groom standing on rock' },
    { src: 'Canyon Wedding 2_Brianna Haferman.jpg', alt: 'bride and groom walking down aisle' },
    { src: 'Canyon Wedding 3_Brianna Haferman.jpg', alt: 'bride and groom in front of river' },
    { src: 'Couple Portait_Sawtooths_Brianna Haferman.jpg', alt: 'man and woman hugging in front of lake' },
    { src: 'Engagement by Lake_Brianna Haferman.jpg', alt: 'man and woman kissing in front of lake' },
    { src: 'Kayaker in Canyon_Brianna Haferman.jpg', alt: 'woman in kayak' },
    { src: 'Mother Daughter by River_Brianna Haferman.jpg', alt: 'mom and baby playing in river' },
    { src: 'Movement Portrait_Brianna Haferman.jpg', alt: 'woman smiling and flipping hair' },
    { src: 'Newborn 1_Brianna Haferman.jpg', alt: 'nenwborn baby in blanket' },
    { src: 'Newborn 2_Brianna Haferman.jpg', alt: 'mom and dad holding newborn' },
    { src: 'Under the Veil_Brianna Haferman.jpg', alt: 'woman under veil' },
    { src: 'Woman on a dock_Brianna Haferman.jpg', alt: 'woman on dock' },
  ],
  nature: [
    { src: 'Alps on the Tour du Mont Blanc_Brianna Haferman.jpg', alt: '' },
    { src: 'Bee on Cutleaf Coneflower_Brianna Haferman.jpg', alt: '' },
    { src: 'Bees on Milkweed_Brianna Haferman.jpg', alt: '' },
    { src: 'Bug in flower_Brianna Haferman.jpg', alt: '' },
    { src: 'Cinnamon Fern Brianna Haferman.jpg', alt: '' },
    { src: 'Eastern Tiger Swallowtail_Brianna Haferman.jpg', alt: '' },
    { src: 'Mediterranean Sea_Brianna Haferman.jpg', alt: '' },
    { src: 'Mount Assiniboine at Sunset_Brianna Haferman.jpg', alt: '' },
    { src: 'Pollinator Garden_Brianna Haferman.jpg', alt: '' },
    { src: 'River and Bridge in Fall_Brianna Haferman.jpg', alt: '' },
    { src: 'Trail in field_Brianna Haferman.jpg', alt: '' },
    { src: 'Trout Lily_Brianna Haferman.jpg', alt: '' },
    { src: 'Waterfall stream_Brianna Haferman.jpg', alt: '' },
    { src: 'Wild Blue Phlox_Brianna Haferman.jpg', alt: '' },
  ],
  travel: [
    { src: 'A Day in Munich_Brianna Haferman.jpg', alt: '' },
    { src: 'Backpacker in Idaho_Brianna Haferman.jpg', alt: '' },
    { src: 'Backpackers in Mount Assiniboine Park_Brianna Haferman.jpg', alt: '' },
    { src: 'Bavarian Alps_Brianna Haferman.jpg', alt: '' },
    { src: 'Beach Cove in Turkey_Brianna Haferman.jpg', alt: '' },
    { src: 'Child explores mountain stream_Brianna Haferman.jpg', alt: '' },
    { src: 'Fly fisher in Wyoming_Brianna Haferman.jpg', alt: '' },
    { src: 'French Refuge_Brianna Haferman.jpg', alt: '' },
    { src: 'Grand Teton National Park at Sunset_Brianna Haferman.jpg', alt: '' },
    { src: 'Hiker in Kauai_Brianna Haferman.jpg', alt: '' },
    { src: 'Hiker in Sedona_Brianna Haferman.jpg', alt: '' },
    { src: 'Hiker in the Alps_Brianna Haferman.jpg', alt: '' },
    { src: 'Hikers in North Carolina_Brianna Haferman.jpg', alt: '' },
    { src: 'Hikers in the Tetons_Brianna Haferman.jpg', alt: '' },
    { src: 'Hikers overlooking Mount Assiniboine_Brianna Haferman.jpg', alt: '' },
    { src: 'Kayakers on a Lake in Fall_Brianna Haferman.jpg', alt: '' },
    { src: 'Le Conte Lodge in Smoky Mountains National Park_Brianna Haferman.jpg', alt: '' },
    { src: 'Mont Blanc Trail Italy_Brianna Haferman.jpg', alt: '' },
    { src: 'Northern Italy_Brianna Haferman.jpg', alt: '' },
    { src: 'Positano_Brianna Haferman.jpg', alt: '' },
    { src: 'Refuge along the Tour du Mont Blanc_Brianna Haferman.jpg', alt: '' },
    { src: 'Villa in Italy_Brianna Haferman.jpg', alt: '' },
  ],
  drone: [
    { src: 'Bikers on Trail Bridge_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'Dam and hiking trail_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'Dan River and Hanging Rock_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'Farm in the Fall_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'Farmland in North Carolina_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'Greenway and Pond_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'Greenway at Sunset_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'Hiker on Bridge_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'Kayakers from Above_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'Kayakers on Dan River_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'Kayakers on Yadkin River_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'Lake and Greenway Bridge_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'North Carolina River_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'Quarry Park and Greenway WS_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'River and rock outcrop_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'Winston-Salem Skyline and Hiking Trail_Drone_Brianna Haferman.jpg', alt: '' },
    { src: 'Yadkin River and Pilot Mountain_Drone_Brianna Haferman.jpg', alt: '' },
  ],
  design: [
    { src: 'Baby Shower Invite 1.jpg', alt: '' },
    { src: 'Baby Shower Invite 2.jpg', alt: '' },
    { src: 'Dr. CB Hauser Kiosk Panel (10x8).jpg', alt: '' },
    { src: 'Fairy Garden Party Invite 1.jpg', alt: '' },
    { src: 'Fairy Garden Party Invite 2.jpg', alt: '' },
    { src: 'Garden Tea Party Invite 1.jpg', alt: '' },
    { src: 'Garden Tea Party Invite 2.jpg', alt: '' },
    { src: 'Giving for Parks and Trails Illustration.jpg', alt: '' },
    { src: 'Grand Opening S&E Thomas Trail Poster.jpg', alt: '' },
    { src: 'Great Trails State Day.jpg', alt: '' },
    { src: 'Little Wolf Candle Co_Winter Spritz Label.jpg', alt: '' },
    { src: 'Master Naturalist.jpg', alt: '' },
    { src: 'Support Farmland (1).jpg', alt: '' },
    { src: 'Trail Map_Hauser Trailhead (28x32).jpg', alt: '' },
    { src: 'Visitors Center_Great Trails State Poster_V3.jpg', alt: '' },
    { src: 'Year of the Trail_Make a Date with a Trail.jpg', alt: '' },
  ],
}
