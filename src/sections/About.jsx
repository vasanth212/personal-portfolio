import { Code2, Layout, Lightbulb, Zap } from 'lucide-react'
import React from 'react'

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Zap,
    title: "Performance First",
    description: "Optimizing load times and runtime performance for a lightning-fast user experience.",
  },
  {
    icon: Layout,
    title: "Responsive Design",
    description: "Creating fluid interfaces that look and feel great on everything from mobile to desktop.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex requirements into simple, intuitive, and functional digital solutions.",
  },
];

function About() {
  return (
   <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
          <div className='grid lg:grid-cols-2 gap-16 items-center'>
              {/* Left column */}
              <div className='space-y-8'>
              <div className='animate-fade-in'>
                <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
                  About me
                </span>
              </div>

              <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in delay-1 text-secondary-foreground'>
                Building the future,
                <span className='font-serif italic font-normal text-white'> one component at a time.
                </span>
              </h2>

              <div className='space-y-4 text-muted-foreground animate-fade-in delay-2 '>
                <p>
                  My journey into web development began with a fascination for the intersection of logic and creativity. Over the years, I have honed my skills in building highly interactive and responsive user interfaces using modern frameworks like React and Next.js. 
                </p>

                <p>
                I take pride in my "Performance First" mindset,
                ensuring that every application I build is optimized for speed,
                accessibility, and SEO. In an era where every millisecond counts,
                I focus on minimizing layout shifts and optimizing asset delivery
                to create seamless digital experiences. 
                </p>

                <p>
                Beyond the code, I am a firm believer in the power of collaboration and continuous learning. I enjoy working closely with designers and stakeholders to translate ambitious ideas into tangible products that solve real-world problems.
                </p>
              </div>

              <div className='glass rounded-2xl p-6 glow-border animate-fade-in delay-3'>
                <p className='text-lg font-medium italic text-foreground'>
                  "My mission is to push the boundaries of the modern web using React and cutting-edge frontend technologies to create high-speed, future-proof interfaces that solve real-world problems."
                </p>
              </div>
          </div>

          {/* Right column */}

          <div className='grid md:grid-cols-2 gap-6'>
            {highlights.map((item, idx)=>(

              <div key={idx} className='glass p-6 rounded-2xl animate-fade-in'
              style={{animationDelay: `${(idx + 1)*100}ms`}}>
                <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center 
                justify-center mb-4 hover:bg-primary/20'><item.icon className='w-6 h-6 text-primary'/></div>
                <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                <p className='text-sm text-muted-foreground'>{item.description}</p>
              </div>

            ))}
          </div>




          </div>
      </div>









   </section>
  )
}

export default About