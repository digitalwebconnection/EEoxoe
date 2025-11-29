"use client"

import React, { useState, useEffect } from "react"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import bgImage from "../../assets/contact_bg_1.png"

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

  // ============================
  // COUNTRY CODES
  // ============================
  const [countryCodes, setCountryCodes] = useState<
    { code: string; label: string }[]
  >([])

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=idd,name"
        )
        const data = await res.json()

        const list: { code: string; label: string }[] = data
          .flatMap((country: any) => {
            const root = country?.idd?.root
            const suffixes = country?.idd?.suffixes || [""]

            if (!root) return []

            return suffixes.map((s: string) => {
              const code = `${root}${s}`
              const label = `${country?.name?.common ?? "Unknown"} (${code})`
              return { code, label }
            })
          })
          .filter((item: { code: string }) => item.code && item.code !== "+")
          .sort((a: { label: string }, b: { label: any }) => a.label.localeCompare(b.label))

        setCountryCodes(list)
      } catch (error) {
        console.error("Error loading country codes:", error)
      }
    }

    fetchCountryCodes()
  }, [])

  // ============================
  // CAPTCHA LOGIC
  // ============================
  const [captchaQuestion, setCaptchaQuestion] = useState("")
  const [captchaAnswer, setCaptchaAnswer] = useState("")

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 9) + 1
    const b = Math.floor(Math.random() * 9) + 1
    setCaptchaQuestion(`${a} + ${b}`)
    setCaptchaAnswer((a + b).toString())
  }

  useEffect(() => {
    generateCaptcha() // generate on page load
  }, [])

  // ============================
  // FORM HANDLERS
  // ============================
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formState.captcha.trim() !== captchaAnswer) {
      alert("Captcha incorrect. Please try again.")
      generateCaptcha() // regenerate after wrong attempt
      return
    }

    alert("Thank you! Your message has been received.")

    setFormState({
      name: "",
      email: "",
      subject: "",
      phone: "",
      countryCode: "+91",
      message: "",
      captcha: "",
    })

    generateCaptcha() // regenerate new captcha after success
  }

  return (
    <main className="w-full bg-white text-gray-900">
      {/* =======================
          CONTACT FORM 
      ======================== */}
      <section
        className="w-full py-8 md:py-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-0 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* ===== LEFT: FORM ===== */}
          <div className=" bg-transparent px-4 lg:px-8 py-6 lg:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#262753] mb-2">
              Contact With Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Have Any Questions?
            </h2>

            <p className="text-sm md:text-base text-gray-500 mb-8 max-w-md">
              We&apos;re always happy to talk through your requirements. Drop us
              a message and our team will get back to you quickly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 w-200">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="Enter Your Name"
                  className="w-full rounded-md border border-gray-400 bg-[#f8f9ff] px-4 py-3 text-sm"
                  required
                />

                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="Enter Your Email"
                  className="w-full rounded-md border border-gray-400 bg-[#f8f9ff] px-4 py-3 text-sm"
                  required
                />
              </div>

              {/* Subject + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="w-full rounded-md border border-gray-400 bg-[#f8f9ff] px-4 py-3 text-sm"
                />

                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formState.countryCode}
                    onChange={handleInputChange}
                    className="w-30 rounded-md border border-gray-400 bg-[#f8f9ff] px-2 py-3 text-sm"
                  >
                    {countryCodes.length === 0 && (
                      <option value={formState.countryCode}>
                        {formState.countryCode}
                      </option>
                    )}

                    {countryCodes.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.label}
                      </option>
                    ))}
                  </select>

                  <input
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="flex-1 rounded-md border border-gray-400 bg-[#f8f9ff] px-4 py-3 text-sm"
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
                className="w-full rounded-md border border-gray-400 bg-[#f8f9ff] px-4 py-3 text-sm"
              />

              {/* ============================
                  UPDATED CAPTCHA
              ============================ */}
              <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-3 items-center">
                <span className="text-sm font-medium text-gray-700">
                  Captcha:{" "}
                  <span className="font-semibold text-[#262753]">
                    {captchaQuestion} = ?
                  </span>
                </span>

                <input
                  name="captcha"
                  value={formState.captcha}
                  onChange={handleInputChange}
                  placeholder="Enter answer"
                  className="w-full rounded-md border border-gray-400 bg-[#f8f9ff] px-4 py-2.5 text-sm"
                  required
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#262753] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md hover:bg-[#1c1f3f]"
              >
                Make Appointment
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* ===== RIGHT CARDS ===== */}
          <div className=" max-w-xl mx-auto">
            <div className=" mt-0 md:mt-44 flex flex-col gap-10 justify-center ">
              <div className="bg-[#262753] w-80 h-25 shadow-xl rounded-lg px-4 py-4 flex items-center gap-4">
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

              <div className="bg-[#262753] w-80 h-25 rounded-lg px-6 py-5 flex items-center gap-4 shadow-xl">
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

              <div className="bg-[#262753] w-80 h-25 rounded-lg px-6 py-5 flex items-center gap-4 shadow-xl">
                <div className="bg-[#FDD53D] text-[#262753] p-4 rounded-lg shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Send an Email</h3>
                  <p className="text-sm text-gray-200">info@webteck.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
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

      {/* FOOTER */}
      <footer className="relative w-full bg-[#262753] text-white py-4 md:py-5 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-36 bg-[#FDD53D] -skew-x-35 -translate-x-8 z-10"></div>
        <div className="relative max-w-6xl mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <span className="inline-block ms-10 rounded-full border border-white/70 px-3 py-1 text-sm mr-1">
              Web Teck
            </span>
          </div>

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
