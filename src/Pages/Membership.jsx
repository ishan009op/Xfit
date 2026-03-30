import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    features: ["Gym Access", "Locker Room", "Free Consultation"],
  },
  {
    name: "Standard",
    price: "₹1999",
    features: ["Gym Access", "Group Classes", "1 PT Session", "Diet Plan"],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹2999",
    features: ["All Access", "Personal Training", "Diet + Progress Tracking"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.14 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export default function Membership() {
  return (
    <section className="bg-zinc-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-orange-400">
            Membership
          </p>
          <h2 className="text-4xl font-black uppercase sm:text-5xl">
            Choose your plan
          </h2>
          <p className="mt-4 text-zinc-300">
            Flexible pricing designed for beginners, regular members, and serious athletes.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={item}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`rounded-[2rem] border p-8 ${
                plan.popular
                  ? "border-orange-500 bg-orange-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.popular && (
                <p className="mb-4 inline-flex rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                  Popular
                </p>
              )}
              <h3 className="text-3xl font-bold">{plan.name}</h3>
              <p className="mt-3 text-4xl font-black text-white">{plan.price}</p>
              <p className="mt-2 text-zinc-400">Per month</p>

              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-zinc-200">
                    <Check className="h-5 w-5 text-orange-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-8 w-full rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 font-semibold text-white transition hover:from-orange-600 hover:to-red-700">
                Join Now
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}