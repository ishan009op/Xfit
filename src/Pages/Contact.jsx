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
    link: "tel:+919999999999",
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
  { icon: FaInstagram, href: "https://instagram.com" },
  { icon: FaFacebookF, href: "https://facebook.com" },
  { icon: FaYoutube, href: "https://youtube.com" },
  { icon: FaXTwitter, href: "https://x.com" },
];

export default function Contact() {
  return (
    <section className="bg-zinc-950 px-4 py-20 text-white">
      <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2">

        {/* LEFT */}
        <div className="space-y-4">
          <h2 className="text-4xl font-black uppercase">
            Contact Us
          </h2>

          <p className="text-zinc-300">
            Get instant support and join your fitness journey today.
          </p>

          <p className="text-sm text-green-400">
            ⚡ Get reply within 5 minutes on WhatsApp
          </p>

          {contactItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 flex items-center gap-4"
              >
                <Icon className="text-orange-400" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  {item.link ? (
                    <a href={item.link} className="text-zinc-400 hover:text-white">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-zinc-400">{item.value}</p>
                  )}
                </div>
              </div>
            );
          })}

          {/* SOCIALS */}
          <div className="flex gap-3 mt-4">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  className="p-3 rounded-full bg-white/5 hover:bg-orange-500/20"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

          <h3 className="text-2xl font-bold mb-4">
            Quick Contact
          </h3>

          {/* WhatsApp CTA (MAIN) */}
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20join%20the%20gym"
            target="_blank"
            className="w-full block text-center bg-green-500 py-3 rounded-full font-semibold hover:bg-green-600"
          >
            Chat on WhatsApp
          </a>

          {/* Divider */}
          <div className="my-6 text-center text-zinc-400 text-sm">
            OR send a message
          </div>

          {/* FORM */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-zinc-900 px-4 py-3"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl bg-zinc-900 px-4 py-3"
            />

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full rounded-xl bg-zinc-900 px-4 py-3"
            />

            <button className="w-full bg-orange-500 py-3 rounded-full font-semibold hover:bg-orange-600 flex items-center justify-center gap-2">
              Send Message <Send size={16} />
            </button>
          </form>

          {/* CALL CTA */}
          <div className="mt-6 text-center">
            <a
              href="tel:+919999999999"
              className="text-orange-400 flex justify-center items-center gap-2"
            >
              Call Now <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}