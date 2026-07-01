import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import React, { act, useState } from 'react'

const testimonials = [
  {
    quote: "Working with this developer was a game-changer for our SaaS platform. They transformed our outdated interface into a modern, lightning-fast React application. Their attention to detail in Tailwind CSS is unmatched.",
    author: "Sarah Chen",
    role: "CEO, Innovate Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "I’ve rarely worked with a front-end engineer who bridges the gap between design and code so flawlessly. They didn’t just implement the Figma mockups; they improved the user experience with subtle, performant animations.",
    author: "David Rodriguez",
    role: "Lead Product Designer, Creative UX",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "Our website's Lighthouse scores jumped from 60 to 98 after they took over the optimization. Their deep understanding of Next.js and code-splitting made our E-commerce site feel instant on mobile devices.",
    author: "Aisha Khan",
    role: "Head of Marketing, Ecomify Ltd.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
  }
];

function Testimonials() {

  const [activeidx, setactiveidx] = useState(0)

  const next = () => {
    setactiveidx((prev)=>(prev + 1) % testimonials.length)
  }

  const previous = () => {
    setactiveidx((prev)=>(prev - 1 + testimonials.length) % testimonials.length)
  }
  

  return (
    <section id='testimonials' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
          {/* section header */}
          <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>What people say</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in delay-1 text-secondary-foreground'>kind words from 
            <span className='font-serif italic font-normal text-white'> amazing people</span>
          </h2>
          </div>

          {/* testimonial carousel */}
          <div className='max-w-4xl mx-auto'>
            <div className='relative'>
              {/* main testimonial */}
              <div className='glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in delay-2'>
                <div className='absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center'>
                  <Quote className='w-6 h-6 text-primary-foreground'/>
                </div>
                <blockquote className='text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4'>
                  "{testimonials[activeidx].quote}"
                </blockquote>
                <div className='flex items-center gap-4'>
                  <img src={testimonials[activeidx].avatar} alt={testimonials[activeidx].author}
                  className='w-14 h-14 rounded-full object-cover ring-2 ring-primary/20' />
                  <div className='flex items-center gap-4'>
                    <div className='font-semibold '>{testimonials[activeidx].author}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* testimonial navigation */}
            <div className='flex items-center justify-center gap-4 mt-8'>
              <button 
              className='p-3 rounded-full glass hover:bg-primary/10
               hover:text-primary transition-all ' onClick={previous}>
                <ChevronLeft/>
              </button>

              <div className='flex gap-2'>
                {testimonials.map((_, idx)=>(

                  <button onClick={() => setactiveidx(idx)} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeidx ? 'w-8 bg-primary' : "bg-muted-foreground/30 hover:bg-muted-foreground/50" }`}/>

                ))} 
              </div>

              <button className='p-3 rounded-full glass hover:bg-primary/10
               hover:text-primary transition-all' onClick={next}><ChevronRight /></button>
            </div>

          </div>

      </div>
    </section>
  )
}

export default Testimonials