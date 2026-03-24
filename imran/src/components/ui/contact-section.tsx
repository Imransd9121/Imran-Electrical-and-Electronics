import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Reach Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Contact Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left — Get In Touch */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-gray-900">Get In Touch</h3>

            {/* Address */}
            <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
              <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Address</p>
                <p className="text-gray-500 text-sm">Nuliuri Vari Katta, Enikepadu,</p>
                <p className="text-gray-500 text-sm">Vijayawada, Andhra Pradesh, India</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 pb-5 border-b border-gray-100">
              <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Phone</p>
                <a href="tel:+919701320447" className="block text-blue-600 text-sm hover:underline">+91 97013 20447</a>
                <a href="tel:+919121515743" className="block text-blue-600 text-sm hover:underline">+91 91215 15743</a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Email</p>
                <a href="mailto:yousafsd143@gmail.com" className="text-blue-600 text-sm hover:underline">yousafsd143@gmail.com</a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 mt-2">
              <a
                href="tel:+919701320447"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-orange-400 hover:bg-orange-300 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                CALL NOW
              </a>
              <a
                href="https://wa.me/919701320447?text=Hi%20I%20need%20your%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors text-sm"
              >
                {/* WhatsApp icon */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WHATSAPP
              </a>
            </div>
          </div>

          {/* Right — Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-md min-h-[400px]">
            <iframe
              title="Imran Electrical & Electronics Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.1858491939893!2d80.71057809999999!3d16.5167125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb530bfefebf%3A0xc3878268f92f67dd!2sGP86%2BM6P%2C%20Ramanagar%2C%20Nidamanuru%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1774347399599!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            
          </div>
        </div>
      </div>
    </section>
  )
}
