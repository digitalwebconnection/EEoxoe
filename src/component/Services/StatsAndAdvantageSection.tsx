import  { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

/* ---------------- COUNT UP COMPONENT ---------------- */
function CountUp({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const animate = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animate();
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

/* ---------------- MAIN SECTION ---------------- */
export default function StatsAndAdvantageSection() {
  return (
    <section className="bg-white">
      
      {/* ---------------- STATS BAR ---------------- */}

        <div className=" bg-linear-to-br from-[#0b0f19] via-[#111827] to-[#0b0f19] px-8 py-10 shadow-2xl">
          <div className="grid grid-cols-1 max-w-7xl mx-auto  text-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            <div>
              <h3 className="text-4xl font-bold text-white">
                <CountUp end={96} suffix="k+" />
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Customers visit our website every month
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                <CountUp end={74} suffix="k+" />
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Total members of our platform
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                <CountUp end={100} suffix="k" />
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Total visitors across our digital platforms
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white">
                <CountUp end={96} suffix="%" />
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Customer satisfaction rate
              </p>
            </div>

          </div>
        </div>


      {/* ---------------- ADVANTAGE SECTION ---------------- */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <div className="relative rounded-full  p-10">
              <img
                src="https://brandwisdom.in/wp-content/uploads/2024/03/online-Reputation-.webp"
                alt="Why choose us"
                className="relative z-10 w-180 "
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-blue-600">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              Why Choose Us
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              The Webtech Advantage
            </h2>

            <p className="mt-5 max-w-xl text-gray-600">
              We help businesses grow by combining technology, data and
              experience into scalable digital systems.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  title: "Years in the Industry",
                  desc: "Deep experience across multiple industries.",
                },
                {
                  title: "Client-Centric Approach",
                  desc: "Your goals guide every decision we make.",
                },
                {
                  title: "Data-Driven Execution",
                  desc: "Every strategy is backed by insights and analytics.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl bg-gray-50 p-5 transition hover:bg-blue-50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
