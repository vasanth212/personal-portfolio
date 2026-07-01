import React from 'react'

const experience = [
  {
    period: "2023 - Present",
    role: "Junior Front-End Developer",
    company: "TechFlow Solutions",
    description: "Lead the migration of legacy jQuery modules to modern React components. Collaborate with UX designers to implement pixel-perfect, accessible interfaces and optimize web performance, resulting in a 20% increase in Lighthouse scores.",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    current: true
  },
  {
    period: "2022 - 2023",
    role: "Web Developer Intern",
    company: "BrightPixel Agency",
    description: "Assisted in building responsive landing pages for various clients. Integrated RESTful APIs and managed global state using Redux. Conducted cross-browser testing and fixed UI bugs to ensure a seamless user experience.",
    technologies: ["JavaScript", "React", "Sass", "Redux"],
    current: false
  },
  {
    period: "2021 - 2022",
    role: "Freelance UI Developer",
    company: "Self-Employed",
    description: "Developed custom WordPress themes and static sites for small businesses. Focused on SEO optimization and mobile-first design principles. Managed client requirements and delivered projects within strict deadlines.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Figma"],
    current: false
  }
];

function Experience() {
  return (
    <section id='experience' className='py-32 relative overflow-hidden'>
      <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2'/>
      <div className='container mx-auto px-6 relative z-10'>
        {/* section header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Career Journey</span>
            <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in delay-1 text-secondary-foreground'>
              Experience that <span className='font-serif italic font-normal text-white'>speaks volumes</span>
            </h2>

             <p className='text-muted-foreground animate-fade-in delay-2'>
            A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Timeline */}
        <div className='relative'>
        <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]'/>
        
        {/* experience items */}
        <div className='space-y-12 '>
          {experience.map((exp, idx)=>(
            <div key={idx} className='relative grid md:grid-cols-2 gap-8 animate-fade-in'
            style={{animationDelay: `${(idx + 1)*100}ms`}}>
              {/* timeline dot */}
              <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10'>
              {exp.current && 
              <span className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75'/>}
              </div>

              {/* content */}
              <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-500`}>
                  <span className='text-sm text-primary font-medium '>{exp.period}</span>
                  <h3 className='text-xl font-semibold mt-2'>{exp.role}</h3>
                  <p className='text-muted-foreground'>{exp.company}</p>
                  <p className='text-sm text-muted-foreground mt-4'>{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? 
                  "md:justify-end" : ""  }`}>{exp.technologies.map((tech, idx)=>(

                    <span key={idx} className='px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground'>{tech}</span>

                  ))}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div> 






      </div>





    </section>
  )
}

export default Experience