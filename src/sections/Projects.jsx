import { ArrowUpLeft, ArrowUpRight, Github, GithubIcon } from 'lucide-react';
import React from 'react'

const projects = [
  {
    title: "EcoShop Front-end",
    description: "A fully responsive e-commerce interface built with React. Features dynamic product filtering, a functional shopping cart using Context API, and localized storage for persistent user sessions.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Tailwind CSS", "Context API"],
    link: "#",
    github: "#"
  },
  {
    title: "SkyCast Weather App",
    description: "A sleek weather dashboard that fetches real-time data from the OpenWeatherMap API. Includes dynamic background changes based on weather conditions and a 5-day forecast visualization.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000",
    tags: ["JavaScript", "REST API", "CSS Grid"],
    link: "#",
    github: "#"
  },
  {
    title: "TaskFlow Kanban",
    description: "A productivity tool inspired by Trello. Allows users to create, drag-and-drop, and delete tasks across different stages. Focused heavily on DOM manipulation and smooth user interactions.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f9d?auto=format&fit=crop&q=80&w=1000",
    tags: ["React", "Lucide Icons", "Framer Motion"],
    link: "#",
    github: "#"
  }
];

function Projects() {
  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        {/* section header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Featured Work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in delay-1 text-secondary-foreground'>Projects that
            <span className='font-serif italic font-normal text-white'> make an impact.</span>
          </h2>

          <p className='text-muted-foreground animate-fade-in delay-2'>
            A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, idx) => (

            <div key={idx}
            className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
            style={{animationDelay: `${(idx + 1)*100}ms`}}>

                  {/* Image */}
                  <div className='relative overflow-hidden aspect-video'>
                        <img src={project.image}
                        alt={project.title}
                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' />
                        
                        <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60'/>

                        {/* overlay links */}

                        <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          <a href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                            <ArrowUpRight className='w-5 h-5'/>
                          </a>
                          <a href={project.github} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                            <Github className='w-5 h-5'/>
                          </a>
                        </div>
                    
                  </div>

                  {/* content */}
                  <div className='p-6 space-y-4 '>
                    <div className='flex items-start justify-between'>
                      <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                      <ArrowUpRight className='w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all'/>
                    </div>
                    <p>{project.description}</p>
                    <div className='flex flex-wrap gap-3'>
                      {project.tags.map((tag, tagidx)=>(

                      <span key={tagidx} className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'>{tag}</span>


                    ))}</div>
                  </div>


            </div>

            ))}

        </div>
      
      </div>


 





    </section>
  )
}

export default Projects