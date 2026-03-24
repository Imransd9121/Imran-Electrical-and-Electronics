import { motion } from "motion/react"
import { BadgeDollarSign, Gauge, BadgeCheck, Users, Headphones } from "lucide-react"

const reasons = [
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    desc: "Transparent rates with no hidden charges. Quality service that fits your budget.",
    gradient: "from-orange-400 to-yellow-400",
    bg: "bg-orange-50",
  },
  {
    icon: Gauge,
    title: "Fast Service",
    desc: "Quick response and same-day service available for urgent repairs.",
    gradient: "from-yellow-400 to-orange-300",
    bg: "bg-yellow-50",
  },
  {
    icon: BadgeCheck,
    title: "Trusted & Certified",
    desc: "Years of experience with verified, licensed technicians you can rely on.",
    gradient: "from-orange-500 to-red-400",
    bg: "bg-orange-50",
  },
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Skilled professionals trained to handle all appliance types and brands.",
    gradient: "from-amber-400 to-orange-400",
    bg: "bg-amber-50",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Always available for emergency calls — day or night, we've got you covered.",
    gradient: "from-orange-400 to-amber-500",
    bg: "bg-orange-50",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Why Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Why Choose Imran Electrical<br className="hidden sm:block" /> & Electronics?
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">
            Speed, expertise, and honest pricing — every single time.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group relative rounded-3xl p-7 overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-300
                ${i === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
            >
              {/* Soft bg tint */}
              <div className={`absolute inset-0 ${item.bg} opacity-60`} />

              {/* Hover gradient wash */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <item.icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                </div>

                {/* Number watermark */}
                <span className="absolute top-0 right-4 text-7xl font-black text-gray-900/[0.04] select-none leading-none">
                  0{i + 1}
                </span>

                <h3 className="text-gray-900 font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>

                {/* Call Us */}
                <a
                  href="tel:+919701320447"
                  className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                >
                       <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
