import React from 'react';
import { Truck, MapPin, Leaf, ShieldCheck, Heart } from 'lucide-react';

const IndiaReachSection = () => {
  return (
    <section className="py-10 sm:py-20 bg-gradient-to-b from-[#F4FBF7] via-[#FAF9F5] to-white relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#D4A51C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Outer Card */}
        <div className="bg-gradient-to-br from-[#F4FBF7] via-[#f1f9f4] to-[#e8f5ed] rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-12 border border-emerald-100/90 shadow-lg relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* LEFT CONTENT */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left" data-aos="fade-right">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-1.5 text-[#D4A51C] font-bold text-[11px] sm:text-xs uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-full border border-[#D4A51C]/30">
                <Truck size={13} className="text-[#D4A51C]" />
                <span>OUR REACH</span>
              </div>

              {/* Main Heading - Refined, sleek typography */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B6338] tracking-tight leading-tight">
                From Our Reach<br />
                <span className="text-[#0B6338]">to Your Doorstep</span>
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-xs sm:text-base leading-relaxed max-w-lg font-normal">
                Connecting quality products with customers through a strong distribution network and efficient delivery.
              </p>

              {/* Stats Bar (Responsive: 2x2 grid on mobile, 4-col strip on desktop) */}
              <div className="pt-2 sm:pt-4">
                <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-md border border-emerald-100 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 text-center sm:text-left">
                  
                  <div className="p-1 sm:px-2">
                    <div className="text-xl sm:text-3xl font-extrabold text-[#0B6338]">1000+</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-gray-600 uppercase tracking-tight mt-0.5">Quality Products</div>
                  </div>

                  <div className="p-1 sm:px-2 border-l border-gray-100 sm:border-l sm:border-gray-100">
                    <div className="text-xl sm:text-3xl font-extrabold text-[#D4A51C]">50+</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-gray-600 uppercase tracking-tight mt-0.5">Distribution Cities</div>
                  </div>

                  <div className="p-1 sm:px-2 border-t sm:border-t-0 sm:border-l border-gray-100">
                    <div className="text-xl sm:text-3xl font-extrabold text-[#0B6338]">99%</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-gray-600 uppercase tracking-tight mt-0.5">Trusted Delivery</div>
                  </div>

                  <div className="p-1 sm:px-2 border-t sm:border-t-0 border-l border-gray-100">
                    <div className="text-xl sm:text-3xl font-extrabold text-[#D4A51C]">10K+</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-gray-600 uppercase tracking-tight mt-0.5">Happy Customers</div>
                  </div>

                </div>
              </div>

            </div>

            {/* RIGHT GRAPHIC: INDIA MAP & DELIVERY TRUCK */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center pt-4 lg:pt-0" data-aos="fade-left">
              
              {/* Floating Top-Right Badge */}
              <div className="w-full sm:w-auto self-end glass-badge px-3.5 py-2.5 rounded-xl flex items-center gap-2.5 shadow-md border border-white/80 mb-4 sm:mb-0 sm:absolute sm:top-0 sm:right-0 z-20">
                <div className="w-8 h-8 rounded-lg bg-[#0B6338] text-[#D4A51C] flex items-center justify-center shrink-0 shadow-sm">
                  <Truck size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 leading-tight">Wide Distribution Across India</h4>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 font-medium">Delivering freshness to every corner</p>
                </div>
              </div>

              {/* Map SVG & Truck Wrapper */}
              <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/3.5] flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl p-2 sm:p-4 border border-emerald-100">
                
                {/* SVG MAP OF INDIA */}
                <svg 
                  viewBox="0 0 600 650" 
                  className="w-full h-full text-emerald-800/20 drop-shadow-sm"
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M280,30 C300,35 315,50 320,70 C325,90 310,110 325,125 C340,140 370,135 390,145 C410,155 425,180 440,190 C455,200 480,195 490,210 C500,225 485,245 495,260 C505,275 525,280 520,295 C515,310 490,315 480,330 C470,345 460,370 440,380 C420,390 395,375 375,385 C355,395 340,420 330,440 C320,460 310,490 300,520 C290,550 280,580 270,600 C265,610 260,610 255,595 C245,570 235,530 220,500 C205,470 190,440 175,410 C160,380 140,360 130,330 C120,300 110,270 125,240 C140,210 160,195 175,170 C190,145 205,120 225,100 C245,80 260,25 280,30 Z" 
                    fill="url(#indiaMapGrad)"
                    stroke="#0B6338"
                    strokeWidth="2"
                    strokeDasharray="5 3"
                  />

                  <defs>
                    <linearGradient id="indiaMapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#e2f3e6" stopOpacity="0.75" />
                    </linearGradient>
                  </defs>

                  {/* Route lines */}
                  <path d="M 270 160 Q 230 260 210 340" stroke="#0B6338" strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />
                  <path d="M 270 160 Q 350 280 280 460" stroke="#D4A51C" strokeWidth="2" strokeDasharray="4 3" opacity="0.7" />
                  <path d="M 270 160 Q 380 220 420 270" stroke="#D4A51C" strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />

                  {/* City Pins */}
                  <g transform="translate(270, 160)">
                    <circle r="7" fill="#D4A51C" />
                    <circle r="3" fill="#ffffff" />
                    <text x="10" y="4" fill="#0B6338" fontSize="14" fontWeight="bold">Delhi NCR</text>
                  </g>

                  <g transform="translate(210, 340)">
                    <circle r="7" fill="#D4A51C" />
                    <circle r="3" fill="#ffffff" />
                    <text x="-60" y="4" fill="#0B6338" fontSize="13" fontWeight="bold">Mumbai</text>
                  </g>

                  <g transform="translate(280, 460)">
                    <circle r="7" fill="#D4A51C" />
                    <circle r="3" fill="#ffffff" />
                    <text x="-70" y="4" fill="#0B6338" fontSize="13" fontWeight="bold">Bengaluru</text>
                  </g>

                  <g transform="translate(420, 270)">
                    <circle r="7" fill="#D4A51C" />
                    <circle r="3" fill="#ffffff" />
                    <text x="10" y="4" fill="#0B6338" fontSize="13" fontWeight="bold">Kolkata</text>
                  </g>
                </svg>

                {/* Truck Badge Overlay */}
                <div className="absolute bottom-2 right-2 sm:right-4 z-10">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-2.5 border border-emerald-100 shadow-lg flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0B6338] flex items-center justify-center text-[#D4A51C] shrink-0">
                      <Truck size={18} />
                    </div>
                    <div>
                      <h5 className="text-[11px] font-bold text-gray-900 leading-tight">HEAVEN GROCERY</h5>
                      <p className="text-[9px] text-gray-500 font-medium">Refrigerated Logistics</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default IndiaReachSection;
