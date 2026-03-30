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
    desc: "Train with premium machines, free weights, and functional tools built for serious progress.",
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/5dcc3efe983c40055dced8e881ece720674a743e.jpg",
  },
  {
    icon: Target,
    title: "Goal Based Training",
    desc: "Fat loss, muscle gain, strength, or endurance — we shape the plan around your goal.",
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/31ba51b3de58a92221526cc1e041beb1d1f30e1b.jpg",
  },
  {
    icon: Users,
    title: "Expert Coaches",
    desc: "Certified trainers guide your form, plan your workouts, and keep you motivated.",
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/92d5333c6719e953edf39a8feae32eada495ed0a.jpg",
  },
  {
    icon: Trophy,
    title: "Real Results",
    desc: "We focus on measurable progress with smart programming and accountability.",
    img: "https://pplx-res.cloudinary.com/image/upload/pplx_search_images/144861ab967cb5ffe552e270f6debea017775d65.jpg",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 250 : -250,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -250 : 250,
    opacity: 0,
    scale: 0.96,
  }),
};

export default function AboutSlider() {
  const [[index, direction], setIndex] = useState([0, 1]);

  const paginate = (newDirection) => {
    setIndex(([current]) => {
      const nextIndex =
        (current + newDirection + cards.length) % cards.length;
      return [nextIndex, newDirection];
    });
  };

  useEffect(() => {
    const id = setInterval(() => {
      paginate(1);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  const card = cards[index];
  const Icon = card.icon;

  return (
    <section className="bg-zinc-950 px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-orange-400">
            About XFIT
          </p>
          <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
            One card at a time
            <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              with smooth slide motion
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-zinc-300">
            The section shows one card, then slides to the next automatically.
            You can also navigate manually using arrows.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur md:p-6">
          <div className="relative h-[620px] md:h-[480px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="absolute inset-0 grid gap-6 md:grid-cols-2"
              >
                <div className="overflow-hidden rounded-[1.75rem]">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-center p-2 md:p-6">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-3xl font-bold sm:text-4xl">
                    {card.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-zinc-300">
                    {card.desc}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <button
                      onClick={() => paginate(-1)}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      onClick={() => paginate(1)}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    <a
                      href="#contact"
                      className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:from-orange-600 hover:to-red-700"
                    >
                      Join Now
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="mt-8 flex gap-2">
                    {cards.map((_, i) => (
                      <button
                        key={i}
                        onClick={() =>
                          setIndex([i, i > index ? 1 : -1])
                        }
                        className={`h-2 rounded-full transition-all ${
                          i === index ? "w-10 bg-orange-500" : "w-2 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}