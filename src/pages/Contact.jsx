import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Placeholder submit; will connect to backend later if needed
    setTimeout(() => setStatus('Thanks! We will get back to you soon.'), 800)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-2 text-gray-600 max-w-2xl">Have a question about products, orders, or services? Send us a message and our team will reach out.</p>

      <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-6 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea name="message" rows="5" value={form.message} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>
        <div className="md:col-span-2 flex items-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Send Message</button>
          {status && <span className="text-sm text-gray-600">{status}</span>}
        </div>
      </form>
    </div>
  )
}

export default Contact
