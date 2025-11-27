"use client"

import React, { useState } from "react"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // handle form here
    alert("Thank you! Your message has been received.")
  }

  return (
    <main className="w-full bg-white text-gray-900">

      {/* =======================
          1. TOP INFO CARDS
      ======================== */}
      <section className="w-full bg-white pt-10 ">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-10">
            {/* Card 1 */}
            <div className="bg-white shadow-xl rounded-lg px-6 py-5 flex items-center gap-4 border border-gray-800/40">
              <div className="bg-[#0a007e] text-yellow-400 p-4 rounded-lg shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Our Office Address</h3>
                <p className="text-sm text-gray-600">
                  St. Petersburg, USA
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-xl rounded-lg px-6 py-5 flex items-center gap-4 border border-gray-800/40">
              <div className="bg-[#0a007e] text-yellow-400 p-4 rounded-lg shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Call Us Anytime</h3>
                <p className="text-sm text-gray-600">
                  +1 (800) 123-4567
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-xl rounded-lg px-6 py-5 flex items-center gap-4 border border-gray-800/40">
              <div className="bg-[#0a007e] text-yellow-400 p-4 rounded-lg shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Send an Email</h3>
                <p className="text-sm text-gray-600">
                  info@webteck.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          2. CONTACT FORM + IMAGE
      ======================== */}
      <section
        className="w-full  py-16 md:py-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://wordpress.themehour.net/webteck/wp-content/uploads/2024/02/contact_bg_1.png')",
        }}
      >

        <div className="max-w-7xl mx-auto px-4 md:px-0 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          {/* Left: Form block */}
          <div className="bg-transparent  px-8 py-10  ">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#12059c] mb-2">
              Contact With Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Have Any Questions?
            </h2>
            <p className="text-sm md:text-base text-gray-500 mb-8 max-w-md">
              We&apos;re always happy to talk through your requirements.
              Drop us a message and our team will get back to you quickly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="Enter Your Name"
                  className="w-full rounded-md border border-gray-500 bg-[#f8f9ff] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1505c5] focus:border-[#3626eb]"
                />
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email"
                  className="w-full rounded-md border border-gray-500 bg-[#f8f9ff] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1505c5] focus:border-[#3626eb]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full rounded-md border border-gray-500 bg-[#f8f9ff] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1505c5] focus:border-[#3626eb]"
                />
                <input
                  name="phone"
                  value={formState.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full rounded-md border border-gray-500 bg-[#f8f9ff] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1505c5] focus:border-[#3626eb]"
                />
              </div>

              <textarea
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-md border border-gray-500 bg-[#f8f9ff] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1505c5] focus:border-[#3626eb]"
              />

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#1b0cc5] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md hover:bg-[rgb(8,0,82)] transition"
              >
                Make Appointment
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =======================
          3. LARGE MAP SECTION
      ======================== */}
      <section className="w-full">
        <div className="w-full h-[360px] md:h-[420px] grayscale">
          <iframe
            title="Office location"
            src="https://maps.google.com/maps?q=Frankfurt&t=&z=9&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      </section>

      {/* =======================
          4. PURPLE FOOTER BAR
      ======================== */}
      <footer className="relative w-full bg-[#0b0080] text-white py-4 md:py-5 overflow-hidden">
        {/* angled left shape */}
        <div className="absolute left-0 top-0 h-full w-40 bg-[#e7d803] -skew-x-12 -translate-x-8" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex  items-center gap-2 font-semibold text-lg">
            <span className="inline-block ms-10 rounded-full border border-white/70 px-3 py-1 text-sm mr-1">
              Web Teck
            </span>
          </div>

          {/* Contact items */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 (800) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@webteck.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>St. Petersburg, USA</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default ContactPage
