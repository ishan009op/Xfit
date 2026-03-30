import { motion } from "framer-motion";
import { Dumbbell, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaXTwitter, href: "https://x.com", label: "X" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-black tracking-[0.2em]">XFIT</p>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                  Train Hard. Stay Fit.
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-400">
              XFIT is built for people who want real results with expert coaching,
              premium equipment, and a high-energy fitness environment.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-zinc-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/classes" className="hover:text-white">Classes</a></li>
              <li><a href="/trainers" className="hover:text-white">Trainers</a></li>
              <li><a href="/membership" className="hover:text-white">Membership</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-zinc-400">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-orange-400" />
                Ludhiana, Punjab, India
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-orange-400" />
                +91 99999 99999
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-orange-400" />
                support@xfit.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:border-orange-500 hover:bg-orange-500/10 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-zinc-300">
                Join our fitness community and get motivated every day.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 XFIT. All rights reserved.</p>
          <p>Built for strength, energy, and performance.</p>
        </div>
      </motion.div>
    </footer>
  );
}