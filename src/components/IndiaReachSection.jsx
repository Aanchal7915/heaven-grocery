import React from 'react';
import { Truck, MapPin, Leaf, ShieldCheck, Heart } from 'lucide-react';

const IndiaReachSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F4FBF7] via-[#FAF9F5] to-white relative overflow-hidden">
      {/* Background Decorative Gradient & Leaf Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A51C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Card Container matching reference image */}
        <div className="bg-gradient-to-r from-[#F4FBF7] via-[#f1f9f4] to-[#e8f5ed] rounded-3xl p-6 sm:p-10 lg:p-12 border border-emerald-100 shadow-xl relative overflow-hidden">
          
          {/* Subtle Background Landscape Graphic */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#0B6338_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* LEFT CONTENT */}
            <div className="lg:col-span-6 space-y-6 text-left" data-aos="fade-right">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-[#D4A51C] font-extrabold text-xs uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-[#D4A51C]/30">
                <Truck size={14} className="text-[#D4A51C]" />
                <span>OUR REACH</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B6338] tracking-tight leading-[1.15]">
                From Our Reach<br />
                <span className="text-[#0B6338]">to Your Doorstep</span>
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-lg font-medium">
                Connecting quality products with customers through a strong distribution network and efficient delivery.
              </p>

              {/* Horizontal Stats Strip (Integrated into Banner on Desktop, 2x2 Grid on Mobile) */}
              <div className="pt-4">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-lg border border-emerald-100/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 text-center sm:text-left">
                  
                  <div className="p-2 sm:px-3">
                    <div className="text-2xl sm:text-3xl font-black text-[#0B6338]">1000+</div>
                    <div className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mt-0.5">Quality Products</div>
                  </div>

                  <div className="p-2 sm:px-3 pt-2 sm:pt-2">
                    <div className="text-2xl sm:text-3xl font-black text-[#D4A51C]">50+</div>
                    <div className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mt-0.5">Distribution Cities</div>
                  </div>

                  <div className="p-2 sm:px-3 pt-2 sm:pt-2">
                    <div className="text-2xl sm:text-3xl font-black text-[#0B6338]">99%</div>
                    <div className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mt-0.5">Trusted Delivery</div>
                  </div>

                  <div className="p-2 sm:px-3 pt-2 sm:pt-2">
                    <div className="text-2xl sm:text-3xl font-black text-[#D4A51C]">10K+</div>
                    <div className="text-[11px] font-bold text-gray-600 uppercase tracking-wide mt-0.5">Happy Customers</div>
                  </div>

                </div>
              </div>

            </div>

            {/* RIGHT GRAPHIC: INDIA MAP & HEAVEN GROCERY DELIVERY TRUCK */}
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[420px] flex items-center justify-center" data-aos="fade-left">
              
              {/* Floating Top-Right Glass Badge */}
              <div className="absolute top-0 right-0 z-20 glass-badge px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xl border border-white/80 max-w-[240px] sm:max-w-xs animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-[#0B6338] text-[#D4A51C] flex items-center justify-center shrink-0 shadow-md">
                  <Truck size={20} />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 leading-tight">Wide Distribution Across India</h4>
                  <p className="text-[10px] text-gray-500 font-medium leading-tight mt-0.5">Delivering freshness to every corner</p>
                </div>
              </div>

              {/* Floating Leaf Graphic */}
              <div className="absolute top-12 left-6 z-20 text-[#0B6338]/40 animate-float pointer-events-none">
                <Leaf size={32} />
              </div>

              {/* Visual Container: Detailed India Map SVG + Delivery Truck */}
              <div className="relative w-full h-full flex items-center justify-center pt-8">
                
                {/* SVG INDIA MAP BACKGROUND WITH DETAILED OUTLINE & HUB NODES */}
                <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/3] flex items-center justify-center">
                  
                  {/* Detailed SVG Map of India */}
                  <svg 
                    viewBox="0 0 600 650" 
                    className="w-full h-full text-emerald-800/15 drop-shadow-md"
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* India Mainland Boundary Path */}
                    <path 
                      d="M280,30 C300,35 315,50 320,70 C325,90 310,110 325,125 C340,140 370,135 390,145 C410,155 425,180 440,190 C455,200 480,195 490,210 C500,225 485,245 495,260 C505,275 525,280 520,295 C515,310 490,315 480,330 C470,345 460,370 440,380 C420,390 395,375 375,385 C355,395 340,420 330,440 C320,460 310,490 300,520 C290,550 280,580 270,600 C265,610 260,610 255,595 C245,570 235,530 220,500 C205,470 190,440 175,410 C160,380 140,360 130,330 C120,300 110,270 125,240 C140,210 160,195 175,170 C190,145 205,120 225,100 C245,80 260,25 280,30 Z" 
                      fill="url(#indiaGradient)"
                      stroke="#0B6338"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      className="opacity-70"
                    />

                    {/* Gradient fill for Map */}
                    <defs>
                      <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                        <stop offset="50%" stopColor="#eef7f2" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#d5ebd9" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>

                    {/* Connecting Distribution Route Lines */}
                    <path d="M 270 160 Q 230 260 210 320" stroke="#0B6338" strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />
                    <path d="M 270 160 Q 350 280 290 440" stroke="#D4A51C" strokeWidth="2" strokeDasharray="4 3" opacity="0.7" />
                    <path d="M 210 320 Q 250 420 290 440" stroke="#0B6338" strokeWidth="2" strokeDasharray="4 3" opacity="0.5" />
                    <path d="M 270 160 Q 380 220 440 260" stroke="#D4A51C" strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />
                    <path d="M 440 260 Q 360 360 290 440" stroke="#0B6338" strokeWidth="2" opacity="0.4" />

                    {/* City Location Pins / Glowing Orange Hubs */}
                    {/* Delhi NCR */}
                    <g transform="translate(270, 160)">
                      <circle r="10" fill="#D4A51C" fillOpacity="0.3" className="animate-ping" />
                      <circle r="6" fill="#D4A51C" />
                      <circle r="2.5" fill="#ffffff" />
                      <text x="12" y="4" fill="#0B6338" fontSize="13" fontWeight="bold" fontFamily="sans-serif">Delhi NCR</text>
                    </g>

                    {/* Ahmedabad */}
                    <g transform="translate(180, 270)">
                      <circle r="7" fill="#D4A51C" fillOpacity="0.3" />
                      <circle r="5" fill="#D4A51C" />
                      <text x="-75" y="4" fill="#0B6338" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Ahmedabad</text>
                    </g>

                    {/* Mumbai */}
                    <g transform="translate(210, 340)">
                      <circle r="9" fill="#D4A51C" fillOpacity="0.3" className="animate-ping" />
                      <circle r="6" fill="#D4A51C" />
                      <circle r="2.5" fill="#ffffff" />
                      <text x="-55" y="4" fill="#0B6338" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Mumbai</text>
                    </g>

                    {/* Hyderabad */}
                    <g transform="translate(290, 390)">
                      <circle r="7" fill="#D4A51C" fillOpacity="0.3" />
                      <circle r="5" fill="#D4A51C" />
                      <text x="10" y="4" fill="#0B6338" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Hyderabad</text>
                    </g>

                    {/* Bengaluru */}
                    <g transform="translate(280, 460)">
                      <circle r="9" fill="#D4A51C" fillOpacity="0.3" className="animate-ping" />
                      <circle r="6" fill="#D4A51C" />
                      <circle r="2.5" fill="#ffffff" />
                      <text x="-75" y="4" fill="#0B6338" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Bengaluru</text>
                    </g>

                    {/* Kolkata */}
                    <g transform="translate(420, 270)">
                      <circle r="8" fill="#D4A51C" fillOpacity="0.3" />
                      <circle r="5.5" fill="#D4A51C" />
                      <text x="10" y="4" fill="#0B6338" fontSize="12" fontWeight="bold" fontFamily="sans-serif">Kolkata</text>
                    </g>

                  </svg>

                  {/* HIGH-RES DELIVERY TRUCK GRAPHIC OVERLAY */}
                  <div className="absolute -bottom-4 right-0 sm:right-2 w-52 sm:w-64 z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-300">
                    <div className="relative bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-emerald-100 shadow-2xl flex items-center gap-3">
                      
                      {/* Truck Graphic Icon Container */}
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B6338] to-[#042616] flex flex-col items-center justify-center text-white shrink-0 shadow-lg">
                        <Truck size={26} className="text-[#D4A51C]" />
                        <span className="text-[8px] font-black tracking-widest text-emerald-200 uppercase mt-0.5">HEAVEN</span>
                      </div>

                      {/* Brand Label on Truck */}
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[10px] font-extrabold text-[#0B6338] uppercase tracking-wider">Cold-Chain Express</span>
                        </div>
                        <h5 className="text-xs font-black text-gray-900 leading-tight mt-0.5">HEAVEN GROCERY</h5>
                        <p className="text-[10px] text-gray-500 font-medium">Refrigerated Logistics</p>
                      </div>

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
