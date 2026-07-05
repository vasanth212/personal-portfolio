import React from 'react'
import Button from '../components/Button';
import { ArrowRight, Download, Github, Linkedin, ChevronDown } from 'lucide-react';


const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Git",
  "Github",
  "Tailwind Css",
  "Responsive design"

]

function Hero() {
  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>

      {/* bg */}
      <div className='absolute inset-0 '>
        <img src="/hero-bg.jpg" alt="Hero image" className='w-full h-full object-cover opacity-40' />
        <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background'></div>



      </div>


      {/* Content */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* left-column - text */}
          <div className='space-y-8'>

            {/* Headline */}
            <div className='space-y-4'>

              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in delay-2'>
                Hi, I'm <span className='text-primary glow-text'>Vasanth</span>
                <br />
                <span className='font-serif italic font-normal text-white'>Frontend Developer</span>
              </h1>

            </div>

            {/* CTA */}
            <div className='flex items-center gap-4 animate-fade-in delay-4'>
              <Button size="lg">
                Contact me <ArrowRight className='w-5 h-5' />
              </Button>
              <button className="glass px-8 py-4 rounded-full font-medium text-white 
                  hover:bg-white/10 transition-all duration-300 
                  active:scale-95 border border-white/30 backdrop-blur-md text-lg flex items-center gap-2">
                <Download /> Download CV
              </button>
            </div>

            {/* Social links */}
            <div className='flex items-center gap-4 animate-fade-in delay-5'>
              {[{ icon: Github, href: "https://github.com/vasanth212" },
              { icon: Linkedin, href: "https://linkedin.com/in/vasanth212" }
              ].map((social, idx) => (
                <a href={social.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'>
                  <social.icon className='w-5 h-5' /></a>
              ))}
            </div>

          </div>
          {/* right-column - image */}
          <div className='relative animate-fade-in delay-2'>
            {/* image */}
            <div className='relative max-w-md mx-auto'>
              <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse' />
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img src="/profile.jpeg" alt="Vasanth" className='w-full aspect-4/5 object-cover rounded-2xl' />

                {/* Floating badge */}
                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                    <span className=' text-sm font-medium'>Available for work</span>
                  </div>
                </div>

                {/* stats badge */}
                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float delay-3'>
                  <div className='text-sm font-medium text-white glow-text'>Curious & Coding</div>
                </div>



              </div>
            </div>
          </div>
        </div>

        {/* skills */}
        <div className='mt-20 animate-fade-in delay-4'>
          <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>
          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className='shrink-0 px-8 py-4 '>
                  <span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>




      </div>
      {/* Scroll Indicator */}
      <a href="#about"
        className='z-20 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group'
      >
        <span className='text-xs uppercase tracking-widest font-medium'>Scroll</span>
        <ChevronDown className='w-5 h-5 animate-bounce group-hover:scale-110 transition-transform' />
      </a>

    </section>
  )
}

export default Hero