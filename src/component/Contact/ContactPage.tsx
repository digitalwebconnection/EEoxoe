"use client";

import React from "react";

const ContactPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Page Container */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        
        {/* Header Section - Minimal + Premium */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Contact eeoxoe
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            We’d love to hear from you.
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 sm:text-base">
            Whether you're planning a new software product, improving internal tools,
            or integrating Odoo — eeoxoe is here to help.
          </p>
        </div>

        {/* NEW STRUCTURE — 3 Equal Columns */}
        <div className="grid gap-8 rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200 md:grid-cols-3">
          
          {/* Contact Box 1 */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-600/30">
            <h3 className="text-lg font-semibold text-slate-900">Email</h3>
            <p className="mt-2 text-sm text-slate-600">
              Reach us anytime, we usually reply within 24 hours.
            </p>
            <a
              href="mailto:info@eeoxoe.com"
              className="mt-4 inline-block text-sm font-medium text-sky-600 hover:underline"
            >
              info@eeoxoe.com
            </a>
          </div>

          {/* Contact Box 2 */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-600/30">
            <h3 className="text-lg font-semibold text-slate-900">Phone & WhatsApp</h3>
            <p className="mt-2 text-sm text-slate-600">
              Talk directly with our project team.
            </p>
            <p className="mt-4 text-sm font-medium text-slate-700">
              +91 00000 00000
            </p>
          </div>

          {/* Contact Box 3 */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-600/30">
            <h3 className="text-lg font-semibold text-slate-900">Office Hours</h3>
            <p className="mt-2 text-sm text-slate-600">
              Monday – Friday  
              <br />10:00 AM – 6:30 PM IST
            </p>
          </div>
        </div>

        {/* NEW FULL WIDTH MAP */}
        <div className="mt-14 overflow-hidden rounded-3xl shadow-md ring-1 ring-slate-800/50">
          <iframe
            title="office-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2581307492546!2d72.51579287505295!3d23.05099621526737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b701695c397%3A0x37f7eac0feed6e52!2sTitanium%20Square!5e0!3m2!1sen!2sin!4v1764159178772!5m2!1sen!2sin"
            className="h-80 w-full sm:h-[420px]"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>

        {/* NEW FORM SECTION — Centered + Card Style */}
        <div className="mx-auto mt-14 max-w-3xl rounded-3xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <h2 className="text-center text-2xl font-semibold text-slate-900">
            Send us a message
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600">
            Tell us what you're looking for, and our team will get back to you.
          </p>

          {/* Form */}
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
          >
            {/* Row 1 */}
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Your Name *"
                className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
              />
              <input
                type="email"
                required
                placeholder="Work Email *"
                className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
              />
            </div>

            {/* Row 2 */}
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Company Name"
                className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
              />
              <select
                className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
                defaultValue=""
              >
                <option value="" disabled>
                  Type of Work
                </option>
                <option>Web Application</option>
                <option>Mobile App</option>
                <option>Odoo / ERP</option>
                <option>Automation & Integrations</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              rows={4}
              required
              placeholder="Tell us about your project *"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-200"
            />

            {/* Checkbox */}
            <label className="flex items-start gap-2 text-xs text-slate-500">
              <input
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
              />
              I agree to be contacted by eeoxoe for this enquiry.
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
