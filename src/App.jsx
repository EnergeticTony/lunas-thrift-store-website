import { useEffect, useRef, useState } from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import storePhoto from '../assets/DSC06263.jpg'
import volunteerPhoto from '../assets/DSC06276.jpg'
import purpleStoryPhoto from '../assets/unnamed.jpg'
import purpleHeroPhoto from '../assets/IMG_5283.jpeg'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import tiktok from '../assets/tik-tok.png'
import youtube from '../assets/youtube.png'
import logoPhoto from '../assets/NRHH_ThriftStore.png'
import leadershipHeroPhoto from '../assets/IMG_9884.jpeg'
import leadershipMissionPhoto from '../assets/IMG_9879.jpeg'
import { purpleBins } from './data/purpleBins.js'
import { executiveCommittee } from './data/executiveCommittee.js'
import './App.css'

const sustainabilityPillars = [
  { number: '01', title: 'Rooted in UCR', description: "We evolved from a small student idea into a vibrant corner of the residential community, dedicated to the belief that style shouldn't cost the Earth or your budget." },
  { number: '02', title: 'Serving Each Other', description: 'Our heart lies in serving each other. Every donation directly supports UCR residents, strengthening our community through dignified access to quality clothing.' },
  { number: '03', title: 'Gentle on the Planet', description: 'We are reimagining fashion at a local scale. By diverting thousands of textiles from landfills, we show that a circular economy is a practice we live every day.' },
]

const acceptableItems = ['Clothing & Shoes', 'Professional Clothing', 'Books & Textbooks', 'Household Items', 'Kitchen Supplies', 'Accessories, Toys & Plushies', 'Handbags & Backpacks', 'Sealed & Unused Toiletries']
const unacceptableItems = ['Undergarments', 'All Food Items (canned, nonperishable, etc.)', 'Trash', 'Damaged Socks', 'Used Cloth Masks', 'Open or Unsealed Items']

function RevealSection({ children, className = '', ...props }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      section.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => section.classList.toggle('is-visible', entry.isIntersecting),
      { rootMargin: '-8% 0px -12%', threshold: 0.12 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return <section ref={sectionRef} className={`reveal-section ${className}`.trim()} {...props}>{children}</section>
}

function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const target = document.querySelector(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [hash, pathname])

  return null
}

function Logo() {
  return <NavLink className="brand" to="/" aria-label="Luna’s Thrift Store home"><span className="brand-mark"><img src={logoPhoto} alt="" /></span><span><strong>Luna’s Thrift Store</strong><small>by UCR NRHH</small></span></NavLink>
}

function Socials() {
  const links = [['Instagram','https://www.instagram.com/ucrlunasthrift',instagram],['TikTok','https://www.tiktok.com/@ucrlunasthrift',tiktok],['LinkedIn','https://www.linkedin.com/company/lunas-thrift-store',linkedin],['YouTube','https://www.youtube.com/',youtube]]
  return <div className="socials">{links.map(([label,href,icon]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`}><img src={icon} alt="" /></a>)}</div>
}

function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const learnMoreHref = '/#visit'
  const handleLearnMoreClick = () => {
    setOpen(false)
    if (pathname === '/') {
      requestAnimationFrame(() => document.querySelector('#visit')?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }
  return <header className="site-header"><Logo /><button className="menu-button" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}><span aria-hidden="true">{open ? '×' : '☰'}</span><span className="sr-only">Menu</span></button><nav id="main-nav" className={open ? 'open' : ''} aria-label="Main navigation"><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink><NavLink to="/purple-bin" onClick={() => setOpen(false)}>Purple Bin Clothing Drive</NavLink><NavLink to="/leadership" onClick={() => setOpen(false)}>Our Team</NavLink><NavLink className="button button-outline" to={learnMoreHref} onClick={handleLearnMoreClick}>Learn more</NavLink></nav></header>
}

function SiteFooter() {
  return <footer><div className="footer-top"><Logo /><p>Providing free clothing to residents while promoting community service and sustainability at UCR.</p></div><div className="footer-grid"><div><h3>Location</h3><p>Lothian Residence Hall<br />500 W Big Springs Rd<br />Riverside, CA 92507</p></div><div><h3>Speak with us</h3><a href="mailto:ucrnrhh.thriftstore@gmail.com">ucrnrhh.thriftstore@gmail.com</a><a href="tel:+19518276744">(951) 827-6744</a></div><div><h3>Connect</h3><Socials /></div></div><p className="copyright">© 2026 Luna’s Thrift Store. Built for the residential community at UCR.</p></footer>
}

function SustainabilityPillar({ number, title, description }) {
  return <article><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
}

function HomePage() {
  return <>
    <RevealSection className="hero-section" aria-labelledby="hero-title"><div className="hero-card"><p className="eyebrow">STUDENT-LED · COMMUNITY-ROOTED</p><h1 id="hero-title">Sustainable Style,<br />Free for Students</h1><a className="button button-light" href="#visit">Explore Luna’s Thrift Store</a></div><aside className="feature-card" aria-label="Featured update"><div className="video-wrap"><iframe src="https://www.youtube-nocookie.com/embed/iN2l1VTdyDs" title="Clothing Drive Kickoff video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div className="feature-copy"><p className="eyebrow">FROM OUR COMMUNITY</p><h2>Clothing Drive Kickoff</h2><p>Our Clothing Drive Kickoff during Winter 2023! The purpose of this was to provide a sustainable option for residents who want to clean out their closets of unwanted clothing, household items, and more! In addition, this provided students with an opportunity to pick up clothing for free! (Videographer: Daniela Cruz)</p></div></aside><p className="tagline">Your student-led thrifting hub</p></RevealSection>
    <RevealSection className="path-section" id="about" aria-labelledby="path-title"><div className="section-heading"><p className="eyebrow">WHY LUNA’S THRIFT STORE</p><h2 id="path-title">Our Path to Sustainability</h2></div><div className="values-grid">{sustainabilityPillars.map((pillar) => <SustainabilityPillar key={pillar.number} {...pillar} />)}</div><div className="ticker" aria-hidden="true"><div className="ticker-track">{Array.from({ length: 6 }, (_, index) => <span key={index}>· LUNA’S THRIFT STORE · UCR STUDENT INITIATIVE ·</span>)}</div></div></RevealSection>
    <RevealSection className="visit-section" id="visit" aria-labelledby="visit-title"><div className="visit-photo"><img src={storePhoto} alt="A student browsing donated clothing at Luna’s Thrift Store" /></div><div className="visit-copy"><p className="eyebrow">VISIT THE STORE</p><h2 id="visit-title">Explore Luna’s<br />Thrift Store!</h2><p>Every on-campus resident receives one <strong>free</strong> item every day the store is open! Residents can donate an unwanted item to receive another free item, at a 1:1 swap!</p><p className="season-note">Spring 2026</p><div className="store-details"><div><span>Hours of Operation</span><strong>Mondays to Fridays<br />12-8 PM</strong></div><div><span>Store Location</span><strong>West Lothian<br />A/B Hallway</strong></div></div><a className="text-link" href="https://maps.google.com/?q=Lothian+Residence+Hall+UCR" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a></div></RevealSection>
    <RevealSection className="volunteer-section" aria-labelledby="volunteer-title"><div className="volunteer-photo"><img src={volunteerPhoto} alt="Three Luna’s Thrift Store volunteers smiling together in the store" /></div><div><p className="eyebrow">MAKE AN IMPACT</p><h2 id="volunteer-title">Join our mission and get involved today!</h2><p>Luna’s Thrift Store is built on community and care. We invite you to volunteer your time to help sort treasures, expand a community resource, organize pop-up boutique events, or share your skills through sustainable fashion. By joining us, you help provide free clothing to residents and students while fostering a culture of conscious consumption at UCR.</p><a className="button button-light" href="https://forms.gle/NkZCmw4yQfmeRB836" target="_blank" rel="noreferrer">Sign Up to Volunteer</a></div></RevealSection>
    <RevealSection className="events-section" id="events" aria-labelledby="events-title"><p className="eyebrow">COMMUNITY ENGAGEMENT</p><h2 id="events-title">Join Our Thrift Swaps!</h2><p>We host regular events where you can grab free clothes or help us make homemade pet toys for local shelters. As part of our mission started in 2022, these thrift swaps provide UCR residents with access to sustainable fashion while giving back to our local community.</p><div className="calendar-embed"><iframe src="https://calendar.google.com/calendar/embed?src=95c82df63d9009f84536204944ae0a24325525ace28200a48f34ac7f1ca18669%40group.calendar.google.com" title="Luna’s Thrift Store Events Calendar" loading="lazy" scrolling="no" /></div></RevealSection>
    <RevealSection className="contact-section" id="contact" aria-labelledby="contact-title"><div><p className="eyebrow">GET IN TOUCH</p><h2 id="contact-title">We’d Love to Hear From You!</h2><p>Whether you’re looking to donate, volunteer, or just say hello, we’re here to help you join our sustainable community at UCR.</p><a className="button" href="mailto:ucrnrhh.thriftstore@gmail.com">Send Message</a></div><div className="find-us"><h3>Find Us</h3><address>Lothian Residence Hall<br />500 W Big Springs Rd<br />Riverside, CA 92507</address><a href="mailto:ucrnrhh.thriftstore@gmail.com">ucrnrhh.thriftstore@gmail.com</a><p>Follow our sustainability journey!</p><Socials /></div></RevealSection>
  </>
}

function BinCard({ bin, index = 0 }) {
  const [beforeLink = '', afterLink = ''] = bin.note?.split(bin.linkText) ?? []
  return <article className="bin-card" style={{ '--reveal-delay': `${index * 70}ms` }}><img src={bin.photo} alt={bin.photoAlt} /><div className="bin-card-copy"><h3>{bin.name}</h3>{bin.hours.map((hours) => <p key={hours}>{hours}</p>)}{bin.note && <p className="bin-note">{bin.noteLink && bin.linkText ? <>{beforeLink}<a href={bin.noteLink} target="_blank" rel="noreferrer">{bin.linkText}</a>{afterLink}</> : bin.note}</p>}</div></article>
}

function PurpleBinPage() {
  return <>
    <RevealSection className="purple-hero" aria-labelledby="purple-title"><div><p className="eyebrow">SUSTAINABILITY IN ACTION</p><h1 id="purple-title">The NRHH Purple Bin Clothing Drive</h1></div><img src={purpleHeroPhoto} alt="Clothing collected through Luna’s Thrift Store programs" /></RevealSection>
    <RevealSection className="purple-story" aria-labelledby="story-title"><img src={purpleStoryPhoto} alt="A purple clothing donation bin with donation instructions" /><div><p className="eyebrow">OUR STORY</p><h2 id="story-title">The Purple Bin Story</h2><p>Started in Spring 2022, the NRHH Purple Bin Clothing Drive is an ongoing program put on by UCR's National Residence Hall Honorary chapter. We are dedicated to giving back to our residential and the local Riverside communities in a sustainable way.</p><p>Over the quarters, we have received thousands of donations. We provide residents with free clothing through thrift swap events, donate to the R' Professional Career Closet, and even make homemade pet toys for local animal shelters.</p><p>Currently overseen by the Luna's Thrift Store Executive Committee, and we hope to grow this initiative for many years to come and continue promoting conscious consumption at UCR.</p></div></RevealSection>
    <RevealSection className="dropoff-section" id="drop-off" aria-labelledby="dropoff-title"><div className="dropoff-intro"><p className="eyebrow">DONATE WITH CARE</p><h2 id="dropoff-title">Donation Drop-Off Locations</h2><p>Do you have something laying around your room or apartment that you want to throw away? Instead of contributing to our nation's landfills, consider donating them to one of our drop-off locations! If you have any questions about acceptable donations, please do not hesitate to email us at <a href="mailto:ucrnrhh.thriftstore@gmail.com">ucrnrhh.thriftstore@gmail.com</a>!</p><p>Below, you’ll find which items we can take, what we can’t accept, and where every purple bin is located.</p></div><div className="donation-guides">{['Acceptable', 'Unacceptable'].map((title, index) => <article key={title} style={{ '--reveal-delay': `${index * 90}ms` }}><h3>{title}</h3><ul>{(index === 0 ? acceptableItems : unacceptableItems).map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div><div className="bin-grid">{purpleBins.map((bin, index) => <BinCard key={bin.name} bin={bin} index={index} />)}</div></RevealSection>
  </>
}

function TeamMemberCard({ member, index = 0 }) {
  const [beforeHighlight, afterHighlight] = member.bio.split(member.highlight)
  return <article className="team-card" style={{ '--reveal-delay': `${index * 70}ms` }}><img src={member.photo} alt={`${member.name}, ${member.role} at Luna’s Thrift Store`} /><div><h3>{member.name}</h3><p className="team-role">{member.role}</p><p>{beforeHighlight}<strong>{member.highlight}</strong>{afterHighlight}</p></div></article>
}

function LeadershipPage() {
  return <>
    <RevealSection className="leadership-hero" aria-labelledby="leadership-title"><div><p className="eyebrow">STUDENT LEADERSHIP</p><h1 id="leadership-title">Luna’s Thrift Store Leadership Team</h1></div><img src={leadershipHeroPhoto} alt="Luna’s Thrift Store executive committee together" /></RevealSection>
    <RevealSection className="committee-section" id="committee" aria-labelledby="committee-title"><div className="committee-intro"><p className="eyebrow">MEET THE TEAM</p><h2 id="committee-title">Meet the Executive Committee</h2><p>Luna's Thrift Store is a student-run initiative at UCR, led by a dedicated executive committee focused on sustainability, community, and free clothing access. Our team works tirelessly to ensure that on-campus residents have access to high-quality apparel while reducing textile waste across our campus.</p></div><div className="team-grid">{executiveCommittee.map((member, index) => <TeamMemberCard key={member.name} member={member} index={index} />)}</div></RevealSection>
    <RevealSection className="leadership-statement" aria-labelledby="statement-title"><h2 id="statement-title">Built by Students, Driven by Sustainability</h2><p>The execution of Luna's Thrift Store is driven by a commitment to seamless operations and student empowerment. Our executive board keeps the store running smoothly, ensuring that every resident has a dignified experience while acquiring the clothing they need to thrive on campus.</p><p>By building strategic partnerships across UCR and growing awareness within the residential halls, we expand the reach of our circular economy. Our goal is to make sustainable fashion the standard, not the exception, providing a platform where community service and style go hand-in-hand.</p><p>We envision a future where zero waste is possible through collective action. Through our leadership, we continue to divert thousands of items from landfills, proving that a student-led team can grow a movement that supports both our residents and the planet.</p></RevealSection>
    <RevealSection className="mission-section" aria-labelledby="mission-title"><div><p className="eyebrow">OUR PURPOSE</p><h2 id="mission-title">Our Mission & Vision</h2><p>Our dedicated executive committee and volunteers works tirelessly to keep store operations running smoothly every day. We are focused on building strategic partnerships across the UCR campus to ensure that every resident has dignified access to high-quality free clothing through our sustainable hub.</p><p>By growing awareness of textile waste and promoting a circular economy, we empower our student community to reduce environmental impact. Our vision is to continue expanding our reach, fostering a culture of conscious consumption and community service that supports both students and the planet.</p></div><img src={leadershipMissionPhoto} alt="Luna’s Thrift Store executive committee seated together outside Lothian Residence Hall" /></RevealSection>
  </>
}

function App() {
  return <div id="top"><ScrollToHash /><a className="skip-link" href="#main">Skip to main content</a><SiteHeader /><main id="main"><Routes><Route path="/" element={<HomePage />} /><Route path="/purple-bin" element={<PurpleBinPage />} /><Route path="/leadership" element={<LeadershipPage />} /></Routes></main><SiteFooter /></div>
}

export default App
