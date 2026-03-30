import { motion } from "framer-motion";
import {
  Dumbbell,
  Flame,
  HeartPulse,
  PersonStanding,
  ShieldCheck,
  TimerReset,
  Trophy,
  Zap,
  ArrowRight,
} from "lucide-react";

const classes = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    desc: "Build muscle, improve power, and train with progressive overload using expert programming.",
    tag: "Muscle Gain",
  },
  {
    icon: Zap,
    title: "HIIT Cardio",
    desc: "High-intensity sessions to burn calories, improve stamina, and keep workouts fast-paced.",
    tag: "Fat Burn",
  },
  {
    icon: HeartPulse,
    title: "Fat Loss Program",
    desc: "Structured workouts with guidance designed to help you lose fat and stay consistent.",
    tag: "Weight Loss",
  },
  {
    icon: PersonStanding,
    title: "Functional Fitness",
    desc: "Improve mobility, balance, and real-world movement with full-body functional drills.",
    tag: "Mobility",
  },
  {
    icon: ShieldCheck,
    title: "Beginner Friendly",
    desc: "Start safely with guided sessions, form correction, and easy-to-follow routines.",
    tag: "New Members",
  },
  {
    icon: TimerReset,
    title: "Endurance Training",
    desc: "Boost conditioning and cardiovascular health with pace-based training blocks.",
    tag: "Stamina",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Classes() {
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
            Our Classes
          </p>
          <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
            Training programs for every
            <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              fitness goal
            </span>
          </h2>
          <p className="mt-4 text-zinc-300">
            Choose a class that matches your goal, whether you want to build muscle,
            lose fat, improve stamina, or move better.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {classes.map((itemData) => {
            const Icon = itemData.icon;
            return (
              <motion.div
                key={itemData.title}
                variants={item}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-orange-500/30 hover:bg-white/10"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg shadow-orange-500/20">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="rounded-full border border-white/10 bg-zinc-950/60 px-3 py-1 text-xs font-medium text-zinc-300">
                    {itemData.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold">{itemData.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{itemData.desc}</p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition group-hover:translate-x-1">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/0 via-transparent to-red-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-3"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-bold">Elite Coaching</p>
              <p className="text-sm text-zinc-400">Expert guidance every session</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
              <Flame className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-bold">High Energy</p>
              <p className="text-sm text-zinc-400">Fast-paced, motivating workouts</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-bold">Safe Training</p>
              <p className="text-sm text-zinc-400">Proper form and smart progression</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}