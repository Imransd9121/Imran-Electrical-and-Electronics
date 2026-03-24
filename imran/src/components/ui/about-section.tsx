import { motion } from "motion/react"
import { ShieldCheck, Star, Clock } from "lucide-react"

const stats = [
  { icon: Star, value: "500+", label: "Happy Clients" },
  { icon: ShieldCheck, value: "10+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Emergency Service" },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#f4f6f9] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=700&q=85"
                alt="Electrician at work"
                className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">Certified & Licensed</p>
                  <p className="text-xs text-gray-500">All work guaranteed</p>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-3 sm:p-4 shadow-sm text-center">
                  <s.icon className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mx-auto mb-1" />
                  <p className="text-base sm:text-lg font-bold text-gray-900">{s.value}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">About Us</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 leading-tight">
                Your Local Electrical Experts
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-4" />
            </div>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Imran Electrical and Electronics is a trusted name in Vijayawada for all your
              home appliance and electrical needs. From AC servicing to complete house
              wiring, we deliver quality workmanship at affordable prices.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Our team is experienced, prompt, and dedicated to customer satisfaction —
              whether it's a quick repair or a full installation, we treat every job with
              the same level of care and professionalism.
            </p>

            {/* Owner card + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 pt-2">
              <div className="bg-orange-400 rounded-xl px-5 py-4 flex items-center gap-3 shadow-md w-full sm:w-auto">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-base">Sd.Esub</p>
                  <p className="text-white/80 text-xs">Owner & Lead Technician</p>
                </div>
              </div>

              <a
                href="tel:+919701320447"
                className="inline-flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold rounded-full transition-all hover:scale-105 shadow-md text-sm whitespace-nowrap"
              >
                Call Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
