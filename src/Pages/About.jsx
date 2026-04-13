import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Dumbbell,
  Target,
  Users,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const cards = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    desc: "Train with world-class machines designed for maximum performance and results.",
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/5dcc3efe983c40055dced8e881ece720674a743e.jpg",
  },
  {
    icon: Target,
    title: "Goal Based Training",
    desc: "Custom workout plans tailored to your fat loss, muscle gain, or strength goals.",
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/31ba51b3de58a92221526cc1e041beb1d1f30e1b.jpg",
  },
  {
    icon: Users,
    title: "Expert Coaches",
    desc: "Certified trainers guide you at every step so you never feel lost.",
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/92d5333c6719e953edf39a8feae32eada495ed0a.jpg",
  },
  {
    icon: Trophy,
    title: "Real Results",
    desc: "Our members achieve real transformations with proven systems.",
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/144861ab967cb5ffe552e270f6debea017775d65.jpg",
  },
];

export default function AboutSlider() {
  const [[index, direction], setIndex] = useState([0, 1]);

  const paginate = (newDirection) => {
    setIndex(([current]) => [
      (current + newDirection + cards.length) % cards.length,
      newDirection,
    ]);
  };

  useEffect(() => {
    const id = setInterval(() => paginate(1), 4000);
    return () => clearInterval(id);
  }, []);

  const card = cards[index];
  const Icon = card.icon;

  return (
    <section className="bg-zinc-950 px-4 py-20 text-white">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-4xl font-black mb-4">
          Why Choose Us
        </h2>

        <p className="text-zinc-300 mb-8">
          We help you get real fitness results with expert guidance and proven systems.
        </p>

        <div className="relative overflow-hidden rounded-2xl bg-white/5 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <img src={card.img} className="rounded-xl" />

              <div>
                <Icon className="text-orange-400 mb-3" />
                <h3 className="text-2xl font-bold">{card.title}</h3>
                <p className="text-zinc-300 mt-2">{card.desc}</p>

                <a
                  href="https://wa.me/91XXXXXXXXXX?text=Hi%20I%20want%20to%20know%20more"
                  target="_blank"
                  className="mt-6 inline-flex items-center gap-2 bg-green-500 px-5 py-3 rounded-full hover:bg-green-600"
                >
                  Chat on WhatsApp <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-between mt-6">
            <button onClick={() => paginate(-1)}>
              <ChevronLeft />
            </button>
            <button onClick={() => paginate(1)}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}