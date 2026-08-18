import React, {useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Camera, Clapperboard, Mail, Menu, X, Sparkles, ExternalLink, Heart, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import './styles.css';

const A='/assets';
const nature=Array.from({length:17},(_,i)=>`${A}/nature-travel/nature (${i+1}).jpg`);
const cake=Array.from({length:3},(_,i)=>`${A}/cake-photography/cake (${i+1}).jpg`);
const wedding=Array.from({length:4},(_,i)=>`${A}/wedding-photography/wedding (${i+1}).jpg`);
const profile=`${A}/profile/tamima.jpg`;

const socials={instagram:'https://www.instagram.com/_tamsaesthetics_/',tiktok:'https://www.tiktok.com/@_tamima_',cake:'https://www.instagram.com/cakeyy__bakeyy',email:'mailto:tamimaamdad@gmail.com'};

function Reveal({children,className='',delay=0}){return <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.75,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
function Eyebrow({children}){return <div className="eyebrow"><span></span>{children}</div>}

function App(){
 const [open,setOpen]=useState(false),[lightbox,setLightbox]=useState(null),[menu,setMenu]=useState(false);
 const {scrollY}=useScroll(); const heroY=useTransform(scrollY,[0,700],[0,140]);
 const allImages=[...nature,...cake,...wedding];
 const current=lightbox?.images?.[lightbox.index];
 useEffect(()=>{const f=e=>{if(!lightbox)return;if(e.key==='Escape')setLightbox(null);if(e.key==='ArrowRight')next();if(e.key==='ArrowLeft')prev()};window.addEventListener('keydown',f);return()=>window.removeEventListener('keydown',f)},[lightbox]);
 const next=()=>setLightbox(x=>({...x,index:(x.index+1)%x.images.length}));
 const prev=()=>setLightbox(x=>({...x,index:(x.index-1+x.images.length)%x.images.length}));
 const scrollTo=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMenu(false)};
 return <>
  <div className="grain"/>
  <header className="nav"><a className="brand" href="#home">T<span>.</span>A</a><nav>{['about','work','gallery','contact'].map(x=><button key={x} onClick={()=>scrollTo(x)}>{x}</button>)}</nav><button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
  <AnimatePresence>{menu&&<motion.div className="mobile-menu" initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}}>{['about','work','gallery','contact'].map(x=><button key={x} onClick={()=>scrollTo(x)}>{x}</button>)}</motion.div>}</AnimatePresence>

  <main>
   <section id="home" className="hero">
    <motion.div className="hero-bg" style={{y:heroY,backgroundImage:`url("${nature[5]}")`}}/>
    <div className="hero-shade"/><div className="hero-orb orb1"/><div className="hero-orb orb2"/>
    <div className="hero-content">
      <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.25,duration:.8}} className="hero-kicker">Social Media & Content Creator <i>•</i> Chattogram</motion.p>
      <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{delay:.35,duration:1,ease:[.22,1,.36,1]}}>Stories worth<br/><em>stopping for.</em></motion.h1>
      <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.65,duration:.8}} className="hero-bottom"><p>Hi, I’m Tamima — creating visual stories through photography, content, and a love for beautiful details.</p><button className="round-link" onClick={()=>scrollTo('work')}>Explore <ArrowDown size={18}/></button></motion.div>
    </div>
    <div className="hero-credit">Photo captured by Tamima</div>
   </section>

   <section id="about" className="about section">
    <Reveal><Eyebrow>01 / About me</Eyebrow></Reveal>
    <div className="about-grid"><Reveal><h2>I see content as a <em>feeling</em>, not just a post.</h2></Reveal><Reveal delay={.1}><div className="about-copy"><p>I’m Tamima, an aspiring Social Media Manager and Content Creator with a love for aesthetics, visual storytelling, and the little details that make people pause and look twice.</p><p>From styling and photographing cakes for a small business to documenting travel, nature, and real-life celebrations, I enjoy turning everyday moments into content with personality.</p><a href={socials.instagram} target="_blank" rel="noreferrer" className="text-link">Follow my visual journey <ArrowUpRight size={18}/></a></div></Reveal></div>
    <Reveal className="portrait-wrap"><div className="portrait-note"><Sparkles size={16}/> Curious by nature<br/>Creative by instinct</div><img src={profile} alt="Tamima Binte Amdad"/><div className="portrait-stamp">TAMIMA<br/>CREATES</div></Reveal>
   </section>

   <section className="services section"><Reveal><Eyebrow>02 / What I create</Eyebrow><h2 className="center-title">A little strategy.<br/><em>A lot of personality.</em></h2></Reveal><div className="service-grid">
    {[['01','Social media','Content ideas, platform-ready posts, captions, and publishing with a consistent visual voice.',Camera],['02','Photography','Mobile photography focused on composition, atmosphere, products, places, and authentic moments.',Camera],['03','Short-form content','Creative visual storytelling and reel concepts designed to catch attention and feel natural.',Clapperboard],['04','Design & aesthetics','Thoughtful post design using Canva with an eye for mood, color, balance, and brand personality.',Sparkles]].map(([n,t,d,Icon])=><Reveal key={t} className="service-card"><div><span>{n}</span><Icon size={22}/></div><h3>{t}</h3><p>{d}</p></Reveal>)}
   </div></section>

   <section id="work" className="cake section-dark">
    <div className="section-dark-bg" style={{backgroundImage:`url("${cake[0]}")`}}/><div className="section-dark-overlay"/>
    <div className="cake-inner"><Reveal><Eyebrow>03 / Featured project</Eyebrow><h2>Cakeyy<br/><em>Bakeyy.</em></h2><p className="project-intro">A hands-on small business project where I help shape the social presence through product photography, post design, captions, content creation, and publishing.</p><a className="pill" href={socials.cake} target="_blank" rel="noreferrer">Visit Instagram <ArrowUpRight size={17}/></a></Reveal>
    <Reveal delay={.12} className="role-list"><div><span>01</span><strong>Product photography</strong><p>Capturing texture, color, and detail in a way that makes the product feel as good as it looks.</p></div><div><span>02</span><strong>Content creation</strong><p>Designing posts and visual content with a warm, approachable, and appetising presentation.</p></div><div><span>03</span><strong>Caption & publishing</strong><p>Writing supporting copy and helping bring content to the right audience on social platforms.</p></div></Reveal></div>
    <div className="cake-strip">{cake.map((src,i)=><motion.button whileHover={{y:-8,rotate:i===1?1:-1}} key={src} className={`cake-card cake-${i}`} onClick={()=>setLightbox({images:cake,index:i,label:'Cakeyy Bakeyy'})}><img src={src} alt={`Cake photography ${i+1}`}/><span>View image <ArrowUpRight size={15}/></span></motion.button>)}</div>
   </section>

   <section className="quote-photo" style={{backgroundImage:`url("${nature[11]}")`}}><div/><Reveal><p>“Good content doesn’t just<br/>show something. It <em>makes you feel</em> something.”</p><span>— TAMIMA’S CREATIVE NOTE</span></Reveal></section>

   <section id="gallery" className="gallery section"><Reveal><Eyebrow>04 / Personal work</Eyebrow><div className="gallery-head"><h2>Through my<br/><em>own lens.</em></h2><p>A collection of places, textures, colors, quiet moments, and scenes that caught my attention.</p></div></Reveal>
    <div className="masonry">{nature.map((src,i)=><Reveal key={src} delay={(i%4)*.04} className={`photo-tile tile-${i%7}`}><button onClick={()=>setLightbox({images:nature,index:i,label:'Nature & Travel'})}><img src={src} alt={`Nature and travel photography ${i+1}`}/><span><b>Nature / Travel</b><ArrowUpRight size={19}/></span></button></Reveal>)}</div>
   </section>

   <section className="wedding section"><Reveal><Eyebrow>05 / Event photography</Eyebrow><div className="wedding-head"><h2>Wedding<br/><em>moments.</em></h2><p>A small wedding covered entirely through mobile photography — focusing on atmosphere, details, candid expressions, and the moments between the moments.</p></div></Reveal>
    <div className="wedding-grid">{wedding.map((src,i)=><Reveal key={src} delay={i*.08}><button onClick={()=>setLightbox({images:wedding,index:i,label:'Wedding Moments'})}><img src={src} alt={`Wedding photography ${i+1}`}/><span>Open photograph <ArrowUpRight size={16}/></span></button></Reveal>)}</div>
   </section>

   <section className="tools section"><Reveal><Eyebrow>06 / Skills & tools</Eyebrow><h2>Creative toolkit.</h2></Reveal><div className="tool-lines">{['Instagram','Facebook','TikTok','Canva','CapCut','Photography','Content Creation','Caption Writing'].map((x,i)=><Reveal key={x} delay={i*.035}><div><span>0{i+1}</span><strong>{x}</strong><ArrowUpRight size={22}/></div></Reveal>)}</div></section>

   <section id="contact" className="contact" style={{backgroundImage:`url("${nature[2]}")`}}><div className="contact-overlay"/><div className="contact-inner"><Reveal><Eyebrow>07 / Let’s connect</Eyebrow><h2>Let’s create something<br/><em>worth remembering.</em></h2><p>Looking for a creative eye for your social presence? I’d love to hear about your idea.</p><div className="contact-actions"><a className="contact-main" href={socials.email}>Say hello <ArrowUpRight/></a><div className="social-row"><a href={socials.instagram} target="_blank" rel="noreferrer"><Camera size={18}/> Instagram</a><a href={socials.tiktok} target="_blank" rel="noreferrer">TikTok <ArrowUpRight size={16}/></a></div></div></Reveal></div></section>
  </main>
  <footer><div className="brand">T<span>.</span>A</div><p>Designed around real moments & original captures.</p><button onClick={()=>scrollTo('home')}>Back to top <ArrowUpRight size={16}/></button></footer>
  <AnimatePresence>{lightbox&&<motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setLightbox(null)}><button className="lb-close" onClick={()=>setLightbox(null)}><X/></button><button className="lb-nav prev" onClick={e=>{e.stopPropagation();prev()}}><ChevronLeft/></button><motion.div className="lb-image" key={current} initial={{opacity:0,scale:.97}} animate={{opacity:1,scale:1}} onClick={e=>e.stopPropagation()}><img src={current} alt={lightbox.label}/><span>{lightbox.label} · {lightbox.index+1}/{lightbox.images.length}</span></motion.div><button className="lb-nav next" onClick={e=>{e.stopPropagation();next()}}><ChevronRight/></button></motion.div>}</AnimatePresence>
 </>}
createRoot(document.getElementById('root')).render(<App/>);
