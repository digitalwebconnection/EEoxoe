"use client"

import React, { useState, useEffect } from "react"
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import toast, { Toaster } from "react-hot-toast" // 1. Import Toast
import bgImage from "../../assets/contact_bg_1.png"

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    countryCode: "+91",
    service: "",
    companySize: "",
    message: "",
    captcha: "",
  })

  // ============================
  // COUNTRY CODES LOGIC
  // ============================
  const [countryCodes, setCountryCodes] = useState<{ code: string; label: string }[]>([])

  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=idd,name")
        const data = await res.json()
        const list = data
          .flatMap((country: any) => {
            const root = country?.idd?.root
            const suffixes = country?.idd?.suffixes || [""]
            if (!root) return []
            return suffixes.map((s: string) => ({
              code: `${root}${s}`,
              label: `${country?.name?.common ?? "Unknown"} (${root}${s})`,
            }))
          })
          .filter((item: any) => item.code && item.code !== "+")
          .sort((a: any, b: any) => a.label.localeCompare(b.label))
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
    generateCaptcha()
  }, [])

  // ============================
  // FORM HANDLERS
  // ============================
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 1. Validate Captcha
    if (formState.captcha.trim() !== captchaAnswer) {
      toast.error("Captcha incorrect. Please try again.") // Error Toast
      generateCaptcha()
      return
    }

    const loadingToast = toast.loading("Sending your message...") // Loading Toast

    // 2. Prepare Web3Forms Data
    const formData = new FormData()
    formData.append("access_key", "ae6eec9f-37dc-43fb-b460-ba46ea3d8ddc")
    formData.append("name", formState.name)
    formData.append("email", formState.email)
    formData.append("subject", formState.subject)
    formData.append("phone", `${formState.countryCode} ${formState.phone}`)
    formData.append("service", formState.service)
    formData.append("company_size", formState.companySize)
    formData.append("message", formState.message)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        toast.success("Success! Your message has been received.", { id: loadingToast }) // Success Toast
        // Reset Form
        setFormState({
          name: "",
          email: "",
          subject: "",
          phone: "",
          countryCode: "+91",
          service: "",
          companySize: "",
          message: "",
          captcha: "",
        })
      } else {
        toast.error(data.message || "Failed to send message.", { id: loadingToast })
      }
    } catch (error) {
      console.error("Submission error", error)
      toast.error("Something went wrong. Please try again later.", { id: loadingToast })
    }

    generateCaptcha()
  }

  return (
    <main className="w-full bg-white text-gray-900">
      {/* 2. Toaster component renders the toasts globally */}
      <Toaster position="top-right" reverseOrder={false} />
      
      <section
        className="w-full py-8 md:py-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-0 flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          {/* ===== LEFT: FORM ===== */}
          <div className="bg-transparent px-4 lg:px-8 py-6 lg:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#262753] mb-2">
              Contact With Éxochos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Have Any Questions?</h2>
            <p className="text-sm md:text-base text-gray-500 mb-8 max-w-md">
              We're always happy to talk through your requirements. Drop us a message and our team will get back to you quickly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 lg:w-150">
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
                    className="w-22 rounded-md border border-gray-400 bg-[#f8f9ff] px-1 py-3 text-xs"
                  >
                    {countryCodes.length === 0 ? (
                      <option value="+91">+91(India)</option>
                    ) : (
                      countryCodes.map((item, idx) => (
                        <option key={idx} value={item.code}>
                          {item.label}
                        </option>
                      ))
                    )}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  name="service"
                  value={formState.service}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-400 bg-[#f8f9ff] px-4 py-3 text-sm"
                >
                  <option value="">Select Service</option>
                  <option value="eCommerce Development">eCommerce Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Full Stack Development">Full Stack Development</option>
                  <option value="AI & ML Development">AI & ML Development</option>
                  <option value="Odoo Development">Odoo Development</option>
                  <option value="Website Development">Website Development</option>
                  <option value="other">Other</option>
                </select>
                <select
                  name="companySize"
                  value={formState.companySize}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-400 bg-[#f8f9ff] px-4 py-3 text-sm"
                >
                  <option value="">Company Size</option>
                  <option value="0-10">0 - 10 employees</option>
                  <option value="10-50">10 - 50 employees</option>
                  <option value="50-plus">50+ employees</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-md border border-gray-400 bg-[#f8f9ff] px-4 py-3 text-sm"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-3 items-center">
                <span className="text-sm font-medium text-gray-700">
                  Captcha: <span className="font-semibold text-[#262753]">{captchaQuestion} = ?</span>
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

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#262753] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:scale-105 hover:bg-[#ffd740] hover:text-[#262755] hover:shadow-lg"
              >
                Make Appointment
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* ===== RIGHT CARDS ===== */}
          <div className="max-w-xl mx-auto">
            <div className="mt-0 md:mt-44 flex flex-col gap-10 justify-center">
              <div className="bg-[#262753] w-full md:w-90 h-25 shadow-xl rounded-lg px-5 py-4 flex items-center gap-4 text-white">
                <MapPin className="w-10 h-10 text-[#FDD53D]" />
                <div>
                  <h3 className="font-semibold text-lg">Khoni Palava Phase-2</h3>
                  <p className="text-sm text-gray-200">Kalyan Thane-421204</p>
                </div>
              </div>
              <div className="bg-[#262753] w-full md:w-90 h-25 shadow-xl rounded-lg px-5 py-4 flex items-center gap-4 text-white">
                <Phone className="w-10 h-10 text-[#FDD53D]" />
                <div>
                  <h3 className="font-semibold text-lg">Call Us Anytime</h3>
                  <p className="text-sm text-gray-200">+91 99309 93212</p>
                </div>
              </div>
              <div className="bg-[#262753] w-full md:w-90 h-25 shadow-xl rounded-lg px-5 py-4 flex items-center gap-4 text-white">
                <Mail className="w-10 h-10 text-[#FDD53D]" />
                <div>
                  <h3 className="font-semibold text-lg">Send an Email</h3>
                  <p className="text-sm text-gray-200">management@exochostech.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full">
        <div className="w-full h-90 md:h-105">
          <iframe
            title="Office location"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d27598.668609372773!2d73.07416127144343!3d19.159869835852124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKhoni%20Palava%20Phase-2%20Kalyan%20Thane-421204!5e1!3m2!1sen!2sin!4v1774324643729!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </main>
  )
}

export default ContactPage