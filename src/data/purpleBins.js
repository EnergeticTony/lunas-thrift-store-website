import aiPhoto from '../../assets/IMG_9654.webp'
import dundeePhoto from '../../assets/IMG_9655.webp'
import glenMorPhoto from '../../assets/IMG_9656.webp'
import lothianPhoto from '../../assets/IMG_9657.webp'
import storePhoto from '../../assets/IMG_9719.webp'
import pentlandPhoto from '../../assets/IMG_9660.webp'
import stonehavenPhoto from '../../assets/IMG_0412.webp'

const housingHoursNote = "Hours are subject to change due to holidays and other circumstances; for updated hours, visit the housing website and check your R'Mail daily."

export const purpleBins = [
  {
    name: 'Aberdeen-Inverness (AI)',
    photo: aiPhoto,
    photoAlt: 'Purple donation bin at Aberdeen-Inverness',
    hours: ['Open 24/7 for residents to donate anytime.'],
  },
  {
    name: 'Dundee',
    photo: dundeePhoto,
    photoAlt: 'Purple donation bin at Dundee',
    hours: ['Open 24/7 for residents to donate anytime.'],
  },
  {
    name: 'Glen Mor',
    photo: glenMorPhoto,
    photoAlt: 'Purple donation bin at Glen Mor',
    hours: ['Monday to Friday: 8am-7pm', 'Saturday Only: 12pm-4pm'],
    note: housingHoursNote,
    noteLink: 'https://housing.ucr.edu/about-us/resident-services-office',
    linkText: 'housing website',
  },
  {
    name: 'Lothian',
    photo: lothianPhoto,
    photoAlt: 'Purple donation bin at Lothian',
    hours: ['Open 24/7 for residents to donate anytime.'],
  },
  {
    name: 'Luna’s Thrift Store',
    photo: storePhoto,
    photoAlt: 'Purple donation bin inside Luna’s Thrift Store',
    hours: ['Monday to Friday: 12pm-8pm'],
    note: 'Hours are subject to change due to volunteer staffing and other circumstances; for updated hours, follow @ucrlunasthrift.',
    noteLink: 'https://www.instagram.com/ucrlunasthrift',
    linkText: '@ucrlunasthrift',
  },
  {
    name: 'Pentland Hills',
    photo: pentlandPhoto,
    photoAlt: 'Purple donation bin at Pentland Hills',
    hours: ['Monday to Friday: 8am-9pm', 'Saturday Only: 12pm-4pm'],
    note: housingHoursNote,
    noteLink: 'https://housing.ucr.edu/about-us/resident-services-office',
    linkText: 'housing website',
  },
  {
    name: 'Stonehaven Lobby',
    photo: stonehavenPhoto,
    photoAlt: 'Purple donation bin in the Stonehaven lobby',
    hours: ['Monday to Friday: 8am-7pm', 'Saturday Only: 12pm-4pm'],
    note: housingHoursNote,
    noteLink: 'https://housing.ucr.edu/about-us/resident-services-office',
    linkText: 'housing website',
  },
]
