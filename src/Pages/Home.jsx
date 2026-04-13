import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  PlayCircle,
  Dumbbell,
  Users,
  Trophy,
} from "lucide-react";

export default function HomeSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(239,68,68,0.12),_transparent_30%)]" />

      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        
        {/* LEFT CONTENT */}
        <div className="relative z-10">

          {/* Business hook (for client selling) */}
          <div className="mb-3 text-xs text-green-400">
            ⚡ Helps gyms get more customer inquiries
          </div>

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
            <Dumbbell className="h-4 w-4" />
            Premium Fitness Club
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl text-5xl font-black uppercase leading-tight sm:text-6xl lg:text-7xl"
          >
            Build Your
            <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
              Strongest
            </span>
            Version
          </motion.h1>

          {/* Updated paragraph */}
          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-300 sm:text-lg">
            Join a high-performance gym designed to transform your body — and get instant support via WhatsApp to start your fitness journey today.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            
            <Link
              to="/membership"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:from-orange-600 hover:to-red-700"
            >
              Get Free Trial
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20know%20about%20membership"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-green-600"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Urgency line */}
          <p className="text-sm text-zinc-400 mt-2">
            ⚡ Limited slots available this month
          </p>

          {/* Stats */}
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <Users className="mb-2 h-5 w-5 text-orange-400" />
              <p className="text-2xl font-bold">2500+</p>
              <p className="text-sm text-zinc-400">Happy Members</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <Trophy className="mb-2 h-5 w-5 text-orange-400" />
              <p className="text-2xl font-bold">15+</p>
              <p className="text-sm text-zinc-400">Expert Trainers</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <Dumbbell className="mb-2 h-5 w-5 text-orange-400" />
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-sm text-zinc-400">Access</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-orange-500/10 backdrop-blur">
            
            <img
              src="https://pplx-res.cloudinary.com/image/upload/pplx_search_images/5dcc3efe983c40055dced8e881ece720674a743e.jpg"
              alt="Modern gym interior"
              className="h-[520px] w-full rounded-[1.5rem] object-cover"
            />

            {/* Top badge */}
            <div className="absolute left-6 top-6 rounded-2xl border border-white/10 bg-zinc-950/80 px-4 py-3 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                XFIT Elite
              </p>
              <p className="mt-1 text-lg font-bold">Train Harder</p>
            </div>

            {/* Bottom badge */}
            <div className="absolute bottom-6 right-6 rounded-2xl border border-orange-500/20 bg-orange-500/10 px-4 py-3 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-orange-300">
                New Program
              </p>
              <p className="mt-1 text-lg font-bold text-white">
                Strength 360
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}