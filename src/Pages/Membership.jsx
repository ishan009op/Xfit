import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    features: ["Gym Access", "Locker Room", "Free Consultation"],
    tag: "Best for Beginners",
  },
  {
    name: "Standard",
    price: "₹1999",
    features: ["Gym Access", "Group Classes", "1 PT Session", "Diet Plan"],
    popular: true,
    tag: "Most Popular",
  },
  {
    name: "Premium",
    price: "₹2999",
    features: ["All Access", "Personal Training", "Diet + Progress Tracking"],
    tag: "Best Results",
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

        {/* Heading */}
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
            Start your fitness journey today — get instant support on WhatsApp and secure your spot.
          </p>

          {/* Urgency */}
          <p className="mt-2 text-sm text-green-400">
            ⚡ Limited slots available this month
          </p>
        </motion.div>

        {/* Plans */}
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
              {/* Tag */}
              <p className="mb-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300">
                {plan.tag}
              </p>

              {/* Popular badge */}
              {plan.popular && (
                <p className="mb-4 inline-flex rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
                  🔥 Most Popular
                </p>
              )}

              <h3 className="text-3xl font-bold">{plan.name}</h3>

              <p className="mt-3 text-4xl font-black text-white">
                {plan.price}
              </p>

              <p className="mt-2 text-zinc-400">Per month</p>

              {/* Features */}
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-zinc-200"
                  >
                    <Check className="h-5 w-5 text-orange-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-3">
                
                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/91XXXXXXXXXX?text=Hi%20I%20am%20interested%20in%20the%20${plan.name}%20plan`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-full bg-green-500 py-3 text-center font-semibold text-white transition hover:bg-green-600"
                >
                  Join via WhatsApp
                </a>

                {/* Secondary CTA */}
                <button className="w-full rounded-full border border-white/10 py-3 font-semibold text-white hover:bg-white/10">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom trust line */}
        <p className="mt-10 text-center text-sm text-zinc-400">
          💬 Get instant reply within 5 minutes on WhatsApp
        </p>
      </div>
    </section>
  );
}