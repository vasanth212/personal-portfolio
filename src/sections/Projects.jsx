import { ArrowUpLeft, ArrowUpRight, Github, GithubIcon } from 'lucide-react';
import React from 'react'

const projects = [
  {
    title: "Crypto Tracker",
    description: "React app that displays live cryptocurrency prices from the CoinGecko API. Users can browse the top 100 coins, search and sort them, and switch between grid and list views. Click into a detail page with a 7-day price chart and market stats — no sign-up or payment required.",
    image: "/crypto-tracker.png",
    tags: ["React", "CoinGecko API", "Recharts", "Tailwind CSS"],
    link: "https://crypto-tracker-vasanth6.vercel.app",
    github: "https://github.com/vasanth212/crypto-tracker"
  },
  {
    title: "Music Player",
    description: "React app where users can browse songs, control playback with play/pause/skip/volume/scrub, and create custom playlists that persist in localStorage. Built with React Context for global state, React Router for navigation, and the HTML Audio API for playback. Styled with Tailwind CSS.",
    image: "/music-player.png",
    tags: ["React", "React Context", "React Router", "HTML Audio API", "Tailwind CSS"],
    link: "https://music-player-vasanth6.vercel.app",
    github: "https://github.com/vasanth212/music-player"
  },
  {
    title: "Memory Card Game",
    description: "4×4 grid card matching game built in React where players flip cards to find matching emoji pairs. Used a custom hook to separate game logic from UI components, with Tailwind CSS for styling. Tracks score and moves, and displays a win message when all pairs are found.",
    image: "/memory-game.png",
    tags: ["React", "Custom Hooks", "Tailwind CSS"],
    link: "https://memory-game-vasanth6.vercel.app",
    github: "https://github.com/vasanth212/memory-game"
  }
];

function Projects() {
  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        {/* section header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-lg font-medium tracking-wider uppercase animate-fade-in'>Featured Work</span>
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
                        className='w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110' />
                        
                        <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60'/>

                        {/* overlay links */}

                        <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                            <ArrowUpRight className='w-5 h-5'/>
                          </a>
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
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