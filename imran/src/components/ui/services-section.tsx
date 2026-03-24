import { AirVent, Refrigerator, Tv, Zap, Wrench, Phone } from "lucide-react"
import { motion } from "motion/react"

const services = [
  {
    icon: AirVent,
    title: "AC Repairs & Servicing",
    desc: "Installation, gas refilling, deep cleaning, and full repairs for all air conditioner brands.",
  },
  {
    icon: Refrigerator,
    title: "Refrigerator Repairs",
    desc: "Fridge not cooling? Compressor issues, gas leaks, thermostat faults — we fix them all.",
  },
  {
    icon: Tv,
    title: "TV & Electronics",
    desc: "Screen repairs, no-power faults, HDMI issues, and general servicing for all TV brands.",
  },
  {
    icon: Zap,
    title: "Electrical Installations",
    desc: "Home and commercial wiring, DB board upgrades, plug points, and lighting installations.",
  },
  {
    icon: Wrench,
    title: "Appliance Repairs",
    desc: "Washing machines, microwaves, stoves, geysers — full appliance repair and maintenance.",
  },
  {
    icon: Phone,
    title: "24/7 Emergency",
    desc: "Electrical faults or appliance breakdowns don't wait — neither do we. Call us anytime.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Our Services</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            AC repairs, refrigerators, TVs, and electrical work — all handled by certified technicians with years of hands-on experience.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <s.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
