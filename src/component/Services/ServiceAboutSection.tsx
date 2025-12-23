
import { CheckCircle } from "lucide-react";

export default function ServiceAboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">

          {/* LEFT – IMAGE STACK */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative grid grid-cols-2 gap-6">

              {/* IMAGE CARD 1 */}
              <div className="group relative h-[480px] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://aurix.in/wp-content/uploads/2025/02/customized-software-application-development.jpg"
                  alt="Software team working"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute inset-0 mb-45 flex flex-col justify-end p-6 text-white opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <h4 className="text-lg font-semibold">
                    Agile Development Teams
                  </h4>
                  <p className="mt-1 text-sm text-blue-100">
                    Collaborative, scalable & result-driven execution
                  </p>
                </div>
              </div>

              {/* IMAGE CARD 2 */}
              <div className="group relative h-[480px] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
                  alt="Technology dashboard"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="absolute inset-0 mb-45 flex flex-col justify-end p-6 text-white opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <h4 className="text-lg font-semibold">
                    software & digital solutions
                  </h4>
                  <p className="mt-1 text-sm text-blue-100">
                    Insights, analytics & performance optimisation
                  </p>
                </div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-12 left-1/2 w-64 -translate-x-1/2 rounded-2xl bg-[#0a1f44] px-6 py-5 text-center shadow-xl">
                <h3 className="text-4xl font-bold text-white">25+</h3>
                <p className="mt-1 text-sm text-blue-200">
                  Happily active clients
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-[#0a1f44]">
              <span className="h-2 w-2 rounded-full bg-[#0a1f44]" />
              Who We Are & What We Do
              <span className="h-2 w-2 rounded-full bg-[#0a1f44]" />
            </div>

            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Infusing Passion Into Digital <br />
              Solutions For Real Business Impact
            </h2>

            <p className="mt-5 max-w-xl text-gray-600">
              We are a results-driven software and digital solutions company
              helping businesses build scalable platforms, automate operations,
              and grow their digital presence with confidence.
            </p>

            {/* FEATURES */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                "Custom Software Development",
                "Web & Mobile Applications",
                "UI/UX & Product Design",
                "Digital Marketing & SEO",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-gray-50 px-5 py-4"
                >
                  <CheckCircle className="h-5 w-5 text-[#0a1f44]" />
                  <span className="text-sm font-medium text-gray-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
