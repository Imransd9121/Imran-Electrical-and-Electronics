import { Mail, Phone, MapPin, Zap } from "lucide-react"
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer"

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "AC Sales & Service", href: "#services" },
      { label: "Refrigerator Sales & Service", href: "#services" },
      { label: "LED TV Sales & Service", href: "#services" },
      { label: "Washing Machine Sales & Service", href: "#services" },
      { label: "Plumbing Work", href: "#services" },
      { label: "Electrical Works", href: "#services" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Why Us", href: "#why" },
      { label: "Contact", href: "#contact", pulse: true },
    ],
  },
]

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  const id = href.replace("#", "")
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

const contactInfo = [
  { icon: <Mail size={18} className="text-orange-400 shrink-0" />, text: "yousafsd143@gmail.com", href: "mailto:yousafsd143@gmail.com" },
  { icon: <Phone size={18} className="text-orange-400 shrink-0" />, text: "+91 97013 20447", href: "tel:+919701320447" },
  { icon: <Phone size={18} className="text-orange-400 shrink-0" />, text: "+91 91215 15743", href: "tel:+919121515743" },
  { icon: <MapPin size={18} className="text-orange-400 shrink-0" />, text: "Nulluri Vari Katta, Enikepadu,, Vijayawada, Andhra Pradesh" },
]

export default function Footer() {
  return (
    <footer className="bg-[#0F0F11] relative rounded-t-3xl overflow-hidden">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 md:px-14 pt-14 pb-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">

          {/* Brand */}
          <div className="flex flex-col space-y-4 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="text-white text-xl font-bold leading-tight">Imran Electrical</span>
            </div>
            <p className="text-sm leading-relaxed">
              Trusted electrical & electronics repair specialists in Vijayawada. AC, fridge, TV, washing machine, and more.
            </p>
          </div>

          {/* Link sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="text-gray-400">
              <h4 className="text-white text-lg font-semibold mb-5">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative w-fit">
                    <a href={link.href} onClick={e => smoothScroll(e, link.href)} className="hover:text-orange-400 transition-colors text-sm">
                      {link.label}
                    </a>
                   
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="text-gray-400">
            <h4 className="text-white text-lg font-semibold mb-5">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="hover:text-orange-400 transition-colors break-all">{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-800" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-center items-center text-sm text-gray-500 gap-4 pt-6 pb-2">
          <p className="text-center text-xs text-white">
            &copy; {new Date().getFullYear()} Imran Electrical & Electronics. All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="hidden lg:flex h-[30rem] -mt-[50px] -mb-[80px] relative z-10">
        <TextHoverEffect text="Imran" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  )
}
