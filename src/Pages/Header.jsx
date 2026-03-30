import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, Dumbbell, ArrowRight, Phone, Flame, X } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Classes", href: "/classes" },
  { label: "Trainers", href: "/trainers" },
  { label: "Membership", href: "/membership" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.06, rotate: -2 }}
            whileTap={{ scale: 0.96 }}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 shadow-lg shadow-orange-500/30"
          >
            <Dumbbell className="h-6 w-6 text-white" />
          </motion.div>

          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black uppercase tracking-[0.2em] text-white">
                XFIT
              </span>
              <Flame className="h-4 w-4 text-orange-500" />
            </div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-400">
              Train Hard. Stay Fit.
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-200 transition hover:border-orange-500/50 hover:text-white"
          >
            <Phone className="h-4 w-4 text-orange-500" />
            Call Now
          </a>

          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-5 font-semibold text-white hover:from-orange-600 hover:to-red-700"
          >
            <Link to="/membership" className="inline-flex items-center gap-2">
              Join Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 rounded-full border border-white/10 text-white hover:bg-white/5"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="border-white/10 bg-zinc-950 text-white">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600">
                      <Dumbbell className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-black tracking-[0.2em]">XFIT</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                        Gym & Fitness
                      </p>
                    </div>
                  </div>

                  <SheetClose asChild>
                    <button className="rounded-full border border-white/10 p-2 text-zinc-300 hover:bg-white/5 hover:text-white">
                      <X className="h-5 w-5" />
                    </button>
                  </SheetClose>
                </div>

                <div className="flex flex-col gap-2">
                  {navLinks.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-orange-500/40 hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-pink-500 hover:text-pink-500"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-blue-500 hover:text-blue-500"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-red-500 hover:text-red-500"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6">
                <Button
                  asChild
                  className="w-full rounded-full bg-gradient-to-r from-orange-500 to-red-600 font-semibold text-white hover:from-orange-600 hover:to-red-700"
                >
                  <Link to="/membership">Join Now</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full border-white/10 bg-transparent text-white hover:bg-white/5"
                >
                  <a href="tel:+919999999999">Call +91 99999 99999</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}