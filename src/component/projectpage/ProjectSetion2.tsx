
const ExcelintFeatureSection = () => {
  const metrics = [
    { label: "Lead Management Security", value: 65 },
    { label: "Agent Performance Growth", value: 88 },
    { label: "Automated Workflow Innovation", value: 90 },
  ];

  return (
    <section className="max-w-7xl mx-auto px-0 py-16 font-sans text-slate-900">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        
        {/* Left Side: Image Grid */}
        <div className="w-full lg:w-1/2 relative h-125">
          {/* Top Left Image */}
          <div className="absolute top-5 left-0 w-3/6 h-64 overflow-hidden rounded-3xl shadow-lg z-10">
            <img 
              src="https://www.shutterstock.com/image-photo/hands-typing-on-laptop-programming-600nw-2480023489.jpg" 
              alt="Agent using CRM" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Right/Back Image */}
          <div className="absolute top-22 right-0 w-3/7 h-54 overflow-hidden rounded-3xl shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800" 
              alt="Team collaboration" 
              className="w-full h-full object-cover grayscale-20"
            />
          </div>
          
          {/* Main Bottom Image (Overlap) */}
          <div className="absolute bottom-0 left-10 w-3/4 h-72 border-4 border-white overflow-hidden rounded-[2.5rem] shadow-2xl z-20">
            <img 
              src="https://plus.unsplash.com/premium_photo-1661292023983-124eba0d5fcb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8" 
              alt="Agent meeting client" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-50 border border-purple-100">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-pblack">Business Growth</span>
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Excelint- CRM Portal for Agents
          </h2>

          <p className="text-slate-500 text-lg leading-relaxed">
            Empower your organization with a CRM designed for high-velocity sales. Excelint seamlessly integrates 
            client data, lead tracking, and performance analytics into one intuitive portal, 
            allowing partners to focus on relationships rather than paperwork.
          </p>

          <div className="space-y-8 pt-4">
            {metrics.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-slate-800">{item.label}</span>
                  <span className="font-bold text-slate-800">{item.value}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-indigo-600 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcelintFeatureSection;