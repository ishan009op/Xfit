import { motion } from "framer-motion";

const trainers = [
  {
    name: "Arjun Singh",
    role: "Strength Coach",
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/144861ab967cb5ffe552e270f6debea017775d65.jpg",
  },
  {
    name: "Neha Sharma",
    role: "Fat Loss Expert",
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/31ba51b3de58a92221526cc1a5323a8f74e820ecc.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Functional Trainer",
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/92d5333c6719e953edf39a8feae32eada495ed0a.jpg",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Trainers() {
  return (
    <section className="bg-zinc-900 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-orange-400">
            Trainers
          </p>
          <h2 className="text-4xl font-black uppercase sm:text-5xl">
            Meet our expert coaches
          </h2>
          <p className="mt-4 text-zinc-300">
            Our trainers help you stay consistent, train safely, and get better results.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.name}
              variants={item}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            >
              <div className="overflow-hidden">
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">{trainer.name}</h3>
                <p className="mt-2 text-orange-400">{trainer.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}