import { CheckCircle, Mail, MapPin, Phone, Send, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import React, { useState } from 'react'
import Button from '../components/Button';

const contactInfo = [
  {
    id: 1,
    title: "Email",
    value: "svasanth212@gmail.com",
    link: "mailto:svasanth212@gmail.com",
    icon: <Mail className='text-primary' />,
    description: "Response within 24 hours"
  },
  {
    id: 2,
    title: "Phone",
    value: "6383454467",
    link: "tel:+916383454467",
    icon: <Phone className='text-primary' />,
    description: "Mon-Fri, 9am - 5pm"
  },
  {
    id: 3,
    title: "Location",
    value: "Madurai, Tamil Nadu",
    link: "https://www.google.com/maps/search/Madurai+Tamil+Nadu",
    icon: <MapPin className='text-primary' />,
    description: "Open to remote & relocation"
  }
];

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null) // { type: 'success' | 'error', message: '' }

  const showToast = (type, message) => {
    setToast({ type, message })
    setTimeout(() => setToast(null), 5000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      showToast('error', 'Please fill in all fields')
      return
    }

    setLoading(true)
    setToast(null)

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      showToast('success', 'Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error('EmailJS error:', error)
      showToast('error', 'Failed to send message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }


  return (
    <section id='contact' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        {/* section header */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-lg font-medium tracking-wider uppercase animate-fade-in'>Get in touch</span>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          <div className='glass p-8 rounded-3xl border border-primary/30 animate-fade-in delay-2'>
            <div>
              <form className='space-y-6' onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className='block text-sm font-medium mb-2'>Name</label>
                  <input id='name'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder='Your name...'
                    type="text" className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all' />
                </div>

                <div>
                  <label htmlFor="email" className='block text-sm font-medium mb-2'>Email</label>
                  <input required
                    placeholder='Your email...'
                    value={formData.email}
                    id="email"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all' />
                </div>

                <div>
                  <label htmlFor="message" className='block text-sm font-medium mb-2'>Message</label>
                  <textarea required
                    placeholder='Your message...'
                    value={formData.message}
                    id="message"
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none' />
                </div>

                <Button size='lg' type="submit" className='w-full' disabled={loading}>
                  {loading ? (
                    <>
                      <svg className='animate-spin h-5 w-5 mr-2' viewBox='0 0 24 24'>
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' fill='none' />
                        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z' />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send
                      <Send />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>





          <div className='space-y-5'>
            <div className='glass p-8 rounded-3xl border border-primary/30 animate-fade-in delay-2'>
              <div className='text-secondary-foreground text-lg font-bold tracking-wider mb-5'>Contact information</div>
              <div>{contactInfo.map((item, idx) => (


                <a className='bg-surface flex items-center gap-3 px-4 py-2 rounded-2xl mb-5 ' href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                  <div>
                    <div className='text-muted-foreground'>{item.title}</div>
                    <div>{item.value}</div>
                  </div>
                </a>


              ))}</div>
            </div>

            <div className=' glass px-6 py-4 rounded-3xl border border-primary/30 animate-fade-in delay-3'>

              <div className='flex items-center gap-3'>
                <span className='inline-flex w-3 h-3 rounded-full bg-primary animate-pulse' />
                <div className=' text-foreground'>Currently available</div>
              </div>

              <div className='text-muted-foreground mt-3'>
                I am currently open to new opportunities and exciting projects
              </div>



            </div>

          </div>





        </div>


      </div>

      {/* Toast notification */}
      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-lg border backdrop-blur-md transition-all animate-fade-in ${
          toast.type === 'success'
            ? 'bg-green-900/80 border-green-500/50 text-green-100'
            : 'bg-red-900/80 border-red-500/50 text-red-100'
        }`}>
          {toast.type === 'success' ? (
            <CheckCircle className='w-5 h-5 text-green-400 shrink-0' />
          ) : (
            <XCircle className='w-5 h-5 text-red-400 shrink-0' />
          )}
          <span className='text-sm font-medium'>{toast.message}</span>
        </div>
      )}

    </section>
  )
}

export default Contact