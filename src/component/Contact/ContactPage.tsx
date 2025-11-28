"use client"

import React, { useState } from "react"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    countryCode: "+91",
    message: "",
    captcha: "",
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const correctCaptcha = "7" // 4 + 3

    if (formState.captcha.trim() !== correctCaptcha) {
      alert("Captcha incorrect. Please try again.")
      return
    }

    alert("Thank you! Your message has been received.")

    // Optional: reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      phone: "",
      countryCode: "+91",
      message: "",
      captcha: "",
    })
  }

  return (
    <main className="w-full bg-white text-gray-900">

      {/* =======================
          2. CONTACT FORM + INFO CARDS
      ======================== */}
      <section className="w-full py-8 md:py-10 bg-cover bg-center bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 md:px-0 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

          {/* ===== LEFT: FORM BLOCK ===== */}
          <div className="w-full lg:w-1/2 bg-transparent px-4 lg:px-8 py-6 lg:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#262753] mb-2">
              Contact With Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Have Any Questions?
            </h2>

            <p className="text-sm md:text-base text-gray-500 mb-8 max-w-md">
              We&apos;re always happy to talk through your requirements.
              Drop us a message and our team will get back to you quickly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="Enter Your Name"
                  className="w-full rounded-md border border-gray-400 bg-[#f8f9ff] px-4 py-3 text-sm focus:ring-2 focus:ring-[#262753] focus:border-[#262753] outline-none"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email"
                  className="w-full rounded-md border border-gray-400 bg-[#f8f9ff] px-4 py-3 text-sm focus:ring-2 focus:ring-[#262753] focus:border-[#262753] outline-none"
                  required
                />
              </div>

              {/* Subject + Phone with country code */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full rounded-md border border-gray-400 bg-[#f8f9ff] px-4 py-3 text-sm focus:ring-2 focus:ring-[#262753] focus:border-[#262753] outline-none"
                />

                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formState.countryCode}
                    onChange={handleInputChange}
                    className="w-16 rounded-md border border-gray-400 bg-[#f8f9ff] px-2 py-3 text-sm focus:ring-2 focus:ring-[#262753] focus:border-[#262753] outline-none"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                    <option value="+971">+971</option>
                  </select>

                  <input
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="flex-1 rounded-md border border-gray-400 bg-[#f8f9ff] px-4 py-3 text-sm focus:ring-2 focus:ring-[#262753] focus:border-[#262753] outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <textarea
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-md border border-gray-400 bg-[#f8f9ff] px-4 py-3 text-sm focus:ring-2 focus:ring-[#262753] focus:border-[#262753] outline-none"
              />

              {/* Captcha */}
              <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-3 items-center">
                <span className="text-sm font-medium text-gray-700">
                  Captcha:{" "}
                  <span className="font-semibold text-[#262753]">
                    4 + 3 = ?
                  </span>
                </span>
                <input
                  name="captcha"
                  value={formState.captcha}
                  onChange={handleInputChange}
                  placeholder="Enter answer"
                  className="w-full rounded-md border border-gray-400 bg-[#f8f9ff] px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#262753] focus:border-[#262753] outline-none"
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#262753] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md hover:bg-[#1c1f3f] transition"
              >
                Make Appointment
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* ===== RIGHT: CONTACT INFO CARDS ===== */}
          <div className="w-full lg:w-1/2 max-w-xl mx-auto">
            <div className="grid gap-6 md:mt-4">
              {/* Card 1 */}
              <div className="bg-[#262753] w-full h-40 shadow-xl rounded-lg px-6 py-5 flex items-center gap-4 border border-[#262753]/40">
                <div className="bg-[#FDD53D] text-[#262753] p-4 rounded-lg shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    Our Office Address
                  </h3>
                  <p className="text-sm text-gray-200">St. Petersburg, USA</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#262753] shadow-xl h-40 rounded-lg px-6 py-5 flex items-center gap-4 border border-[#262753]/40">
                <div className="bg-[#FDD53D] text-[#262753] p-4 rounded-lg shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    Call Us Anytime
                  </h3>
                  <p className="text-sm text-gray-200">+1 (800) 123-4567</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#262753] shadow-xl h-40 rounded-lg px-6 py-5 flex items-center gap-4 border border-[#262753]/40">
                <div className="bg-[#FDD53D] text-[#262753] p-4 rounded-lg shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    Send an Email
                  </h3>
                  <p className="text-sm text-gray-200">info@webteck.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =======================
          3. MAP
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
          4. FOOTER
      ======================== */}
      <footer className="relative w-full bg-[#262753] text-white py-4 md:py-5 overflow-hidden">
        {/* Yellow angle shape */}
        <div className="absolute left-0 top-0 h-full w-40 bg-[#FDD53D] -skew-x-12 -translate-x-8" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2 font-semibold text-lg">
            <span className="inline-block ms-10 rounded-full border border-white/70 px-3 py-1 text-sm mr-1">
              Web Teck
            </span>
          </div>

          {/* Contact */}
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
