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
          {/* Section heading */}
          <div className='text-center mb-16 animate-fade-in'>
            <span className='text-secondary-foreground text-lg font-medium tracking-wider uppercase'>
              About me
            </span>
          </div>

          <div className='grid lg:grid-cols-2 gap-16 items-start'>
              {/* Left column */}
              <div className='space-y-8'>

              <div className='space-y-4 text-muted-foreground animate-fade-in delay-2 '>
                <p>
                  Self-taught frontend developer with a strong aptitude for learning new technologies. Proficient in modern JavaScript, React, and responsive web design. Seeking an entry-level frontend developer role to apply technical skills and passion for building intuitive, user-focused web applications.
                </p>
              </div>

              <div className='glass rounded-2xl p-6 glow-border animate-fade-in delay-3'>
                <p className='text-lg font-medium italic text-foreground'>
                  "My focus is on writing clean, maintainable code that solves problems efficiently. I believe that good software is defined by its usability and its ability to scale alongside the needs of the user."
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