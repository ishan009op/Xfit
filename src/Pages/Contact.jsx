import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

const contactItems = [
  {
    icon: MapPin,
    title: "Location",
    value: "Ludhiana, Punjab, India",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 99999 99999",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@xfit.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sun: 6:00 AM - 10:00 PM",
  },
];

const socials = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaXTwitter, href: "https://x.com", label: "X" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(239,68,68,0.12),_transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-orange-400">
            Contact
          </p>
          <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
            Let’s start your
            <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              fitness journey
            </span>
          </h2>
          <p className="mt-4 text-zinc-300">
            Ask about membership, training plans, class schedules, or anything else.
            We’ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-4"
          >
            {contactItems.map((itemData) => {
              const Icon = itemData.icon;
              return (
                <motion.div
                  key={itemData.title}
                  variants={item}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-lg font-bold">{itemData.title}</p>
                      <p className="text-sm text-zinc-400">{itemData.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              variants={item}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 backdrop-blur"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300">
                Follow Us
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition hover:border-orange-500 hover:bg-orange-500/10 hover:text-white"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8"
          >
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.35em] text-orange-400">
                Send Message
              </p>
              <h3 className="mt-2 text-3xl font-bold">Get in touch with us</h3>
            </div>

            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-orange-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-orange-500"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-orange-500"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-orange-500"
              />

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 font-semibold text-white transition hover:from-orange-600 hover:to-red-700"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-400">
              <span>Need a quick response?</span>
              <a href="tel:+919999999999" className="inline-flex items-center gap-2 text-orange-400">
                Call now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}