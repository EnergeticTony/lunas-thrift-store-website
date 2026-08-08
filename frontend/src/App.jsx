import { useState } from 'react'
import storePhoto from '../../assets/DSC06263.jpg'
import volunteerPhoto from '../../assets/DSC06276.jpg'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import tiktok from '../../assets/tik-tok.png'
import youtube from '../../assets/youtube.png'
import './App.css'

const nav = [['Home', '#top'], ['Purple Bin Clothing Drive', '/purple-bin'], ['Our Team', '/leadership']]

function Logo() {
  return <a className="brand" href="#top" aria-label="Luna’s Thrift Store home"><span className="brand-mark" aria-hidden="true">☾</span><span><strong>Luna’s Thrift Store</strong><small>by UCR NRHH</small></span></a>
}

function Socials() {
  const links = [['Instagram','https://www.instagram.com/ucrlunasthrift',instagram],['TikTok','https://www.tiktok.com/@ucrlunasthrift',tiktok],['LinkedIn','https://www.linkedin.com/company/lunas-thrift-store',linkedin],['YouTube','https://www.youtube.com/',youtube]]
  return <div className="socials">{links.map(([label,href,icon]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`${label} (opens in a new tab)`}><img src={icon} alt="" /></a>)}</div>
}

function App() {
  const [open, setOpen] = useState(false)
  return <div id="top">
    <a className="skip-link" href="#main">Skip to main content</a>
    <header className="site-header"><Logo /><button className="menu-button" type="button" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}><span aria-hidden="true">{open?'×':'☰'}</span><span className="sr-only">Menu</span></button><nav id="main-nav" className={open?'open':''} aria-label="Main navigation">{nav.map(([label,href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="button button-outline" href="#about">Learn more</a></nav></header>
    <main id="main">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-card"><p className="eyebrow">STUDENT-LED · COMMUNITY-ROOTED</p><h1 id="hero-title">Sustainable Style,<br />Free for Students</h1><a className="button button-light" href="#visit">Explore Luna’s Thrift Store</a></div>
        <aside className="feature-card" aria-label="Featured update"><div className="video-wrap"><iframe src="https://www.youtube-nocookie.com/embed/iN2l1VTdyDs" title="Clothing Drive Kickoff video" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div className="feature-copy"><p className="eyebrow">FROM OUR COMMUNITY</p><h2>Clothing Drive Kickoff</h2><p>Our clothing drive gives residents a sustainable way to clear their closets and helps students find clothing for free.</p></div></aside>
        <p className="tagline">Your student-led thrifting hub</p>
      </section>
      <section className="path-section" id="about" aria-labelledby="path-title"><div className="section-heading"><p className="eyebrow">WHY LUNA’S</p><h2 id="path-title">Our Path to Sustainability</h2></div><div className="values-grid">
        <article><span>01</span><h3>Rooted in UCR</h3><p>We evolved from a small student idea into a vibrant residential community resource, built on the belief that style shouldn’t cost the Earth—or your budget.</p></article>
        <article><span>02</span><h3>Serving Each Other</h3><p>Every donation directly supports UCR residents, strengthening our community through dignified access to quality clothing.</p></article>
        <article><span>03</span><h3>Gentle on the Planet</h3><p>By keeping textiles in circulation, we show that a local circular economy is a practice we can live every day.</p></article>
      </div><div className="ticker" aria-hidden="true">LUNA’S THRIFT STORE · UCR STUDENT INITIATIVE · LUNA’S THRIFT STORE · UCR STUDENT INITIATIVE</div></section>
      <section className="visit-section" id="visit" aria-labelledby="visit-title"><div className="visit-photo"><img src={storePhoto} alt="A student browsing donated clothing at Luna’s Thrift Store" /></div><div className="visit-copy"><p className="eyebrow">VISIT THE STORE</p><h2 id="visit-title">Explore Luna’s<br />Thrift Store!</h2><p>Every on-campus resident receives one <strong>free item</strong> every day the store is open. Donate an unwanted item to receive another free item in a 1:1 swap.</p><div className="store-details"><div><span>Hours</span><strong>Monday–Friday<br />12–8 PM</strong></div><div><span>Location</span><strong>West Lothian<br />A/B Hallway</strong></div></div><a className="text-link" href="https://maps.google.com/?q=Lothian+Residence+Hall+UCR" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a></div></section>
      <section className="volunteer-section" aria-labelledby="volunteer-title"><div className="volunteer-photo"><img src={volunteerPhoto} alt="Three Luna’s Thrift Store volunteers smiling together in the store" /></div><div><p className="eyebrow">MAKE AN IMPACT</p><h2 id="volunteer-title">Join our mission and get involved today!</h2><p>Luna’s is built on community and care. Help sort treasures, organize pop-up events, or share your sustainable-fashion skills while expanding a free resource for UCR students.</p><a className="button button-light" href="https://forms.gle/NkZCmw4yQfmeRB836" target="_blank" rel="noreferrer">Sign up to volunteer</a></div></section>
      <section className="events-section" id="events" aria-labelledby="events-title"><p className="eyebrow">COMMUNITY ENGAGEMENT</p><h2 id="events-title">Join Our Thrift Swaps!</h2><p>Grab free clothes or help us make homemade pet toys for local shelters. Since 2022, our swaps have connected UCR residents with sustainable fashion while giving back to our local community.</p><a className="button" href="mailto:ucrnrhh.thriftstore@gmail.com?subject=Upcoming%20Thrift%20Swap">View calendar</a></section>
      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div><p className="eyebrow">GET IN TOUCH</p><h2 id="contact-title">We’d Love to Hear From You!</h2><p>Looking to donate, volunteer, partner, or just say hello? We’re here to help you join our sustainable community at UCR.</p><a className="button" href="mailto:ucrnrhh.thriftstore@gmail.com">Send us a message</a></div><div className="find-us"><h3>Find Us</h3><address>Lothian Residence Hall<br />500 W Big Springs Rd<br />Riverside, CA 92507</address><a href="mailto:ucrnrhh.thriftstore@gmail.com">ucrnrhh.thriftstore@gmail.com</a><p>Follow our sustainability journey</p><Socials /></div></section>
    </main>
    <footer><div className="footer-top"><Logo /><p>Providing free clothing to residents while promoting community service and sustainability at UCR.</p></div><div className="footer-grid"><div><h3>Location</h3><p>Lothian Residence Hall<br />500 W Big Springs Rd<br />Riverside, CA 92507</p></div><div><h3>Speak with us</h3><a href="mailto:ucrnrhh.thriftstore@gmail.com">ucrnrhh.thriftstore@gmail.com</a><a href="tel:+19518276744">(951) 827-6744</a></div><div><h3>Connect</h3><Socials /></div></div><p className="copyright">© 2026 Luna’s Thrift Store. Built for the residential community at UCR.</p></footer>
  </div>
}
export default App
