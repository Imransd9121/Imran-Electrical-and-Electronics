import React from "react"
import { Warp } from "@paper-design/shaders-react"
import { AirVent, Refrigerator, Tv, WashingMachine, Wrench, Zap } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "AC Sales & Service",
    description: "Installation, servicing, gas refilling, and repair of all AC brands. Fast and reliable.",
    icon: <AirVent className="w-12 h-12 text-white" />,
  },
  {
    title: "Refrigerator Sales & Service",
    description: "Expert repair and maintenance for all refrigerator models. Cooling issues fixed fast.",
    icon: <Refrigerator className="w-12 h-12 text-white" />,
  },
  {
    title: "LED TV Sales & Service",
    description: "Screen repair, panel replacement, and servicing for all LED TV brands.",
    icon: <Tv className="w-12 h-12 text-white" />,
  },
  {
    title: "Washing Machine Sales & Service",
    description: "Repair and servicing of all washing machine brands — front load, top load, and semi-automatic.",
    icon: <WashingMachine className="w-12 h-12 text-white" />,
  },
  {
    title: "Plumbing Work",
    description: "Pipe fitting, leak repairs, tap installation, and all types of plumbing maintenance.",
    icon: <Wrench className="w-12 h-12 text-white" />,
  },
  {
    title: "Electrical Works",
    description: "All types of electrical installations, switchboard work, and fault detection.",
    icon: <Zap className="w-12 h-12 text-white" />,
  },
]

const shaderConfigs = [
  {
    proportion: 0.3, softness: 0.8, distortion: 0.15, swirl: 0.6, swirlIterations: 8,
    shape: "checks" as const, shapeScale: 0.08,
    colors: ["hsl(25, 100%, 30%)", "hsl(40, 100%, 55%)", "hsl(15, 90%, 40%)", "hsl(35, 100%, 65%)"],
  },
  {
    proportion: 0.4, softness: 1.2, distortion: 0.2, swirl: 0.9, swirlIterations: 12,
    shape: "stripes" as const, shapeScale: 0.12,
    colors: ["hsl(20, 100%, 25%)", "hsl(45, 100%, 60%)", "hsl(10, 90%, 35%)", "hsl(38, 100%, 70%)"],
  },
  {
    proportion: 0.35, softness: 0.9, distortion: 0.18, swirl: 0.7, swirlIterations: 10,
    shape: "edge" as const, shapeScale: 0.1,
    colors: ["hsl(30, 100%, 28%)", "hsl(50, 100%, 58%)", "hsl(20, 90%, 32%)", "hsl(42, 100%, 68%)"],
  },
  {
    proportion: 0.45, softness: 1.1, distortion: 0.22, swirl: 0.8, swirlIterations: 15,
    shape: "stripes" as const, shapeScale: 0.09,
    colors: ["hsl(15, 100%, 30%)", "hsl(35, 100%, 60%)", "hsl(25, 90%, 38%)", "hsl(40, 100%, 72%)"],
  },
  {
    proportion: 0.38, softness: 0.95, distortion: 0.16, swirl: 0.85, swirlIterations: 11,
    shape: "checks" as const, shapeScale: 0.11,
    colors: ["hsl(22, 100%, 28%)", "hsl(44, 100%, 62%)", "hsl(12, 90%, 36%)", "hsl(36, 100%, 68%)"],
  },
  {
    proportion: 0.42, softness: 1.0, distortion: 0.19, swirl: 0.75, swirlIterations: 9,
    shape: "edge" as const, shapeScale: 0.13,
    colors: ["hsl(18, 100%, 26%)", "hsl(42, 100%, 58%)", "hsl(28, 90%, 34%)", "hsl(38, 100%, 70%)"],
  },
]

export default function ServicesShaderCards() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Our Services</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Expert repair services for ACs, washing machines, refrigerators, TVs, and all home electronics. Quick, dependable, and professional — ready whenever you need us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const cfg = shaderConfigs[index % shaderConfigs.length]
            return (
              <div key={index} className="relative h-80">
                {/* Shader background */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={cfg.proportion}
                    softness={cfg.softness}
                    distortion={cfg.distortion}
                    swirl={cfg.swirl}
                    swirlIterations={cfg.swirlIterations}
                    shape={cfg.shape}
                    shapeScale={cfg.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.8}
                    colors={cfg.colors}
                  />
                </div>
                {/* Content overlay */}
                <div className="relative z-10 p-8 rounded-3xl h-full flex flex-col bg-black/75 border border-white/15">
                  <div className="mb-5">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed flex-grow">{feature.description}</p>
                  <a href="tel:+919701320447" className="mt-5 flex items-center text-sm font-semibold text-orange-300 gap-1.5 hover:text-orange-200 transition-colors">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
