import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Bars3CenterLeftIcon,
  ArrowRightOnRectangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { Logo } from '@/icons';
import { LINKS } from './header.constants';

const variants: Variants = {
  open: {
    height: 'calc(100vh - 60px)',
    transition: {
      duration: 0.25,
    },
  },
  closed: {
    height: 0,
    transition: {
      duration: 0.3,
    },
  },
  desktop: {
    height: 'auto',
    transition: {
      duration: 0,
    },
  },
};

export const Header = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const toggleNavLinks = () => setShowNavLinks((prev) => !prev);

  useEffect(() => {
    if (showNavLinks) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [showNavLinks])

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white">
      <div className="flex items-center px-4 py-3 border-b shadow-sm md:gap-8 md:py-4 lg:px-6 xl:px-10 lg:gap-9 ">
        <div className="w-24 md:w-28">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <motion.nav
            layout
            initial="closed"
            variants={variants}
            animate={showNavLinks ? 'open' : 'closed'}
            transition={{ type: 'spring', bounce: 0.5 }}
            className="absolute left-0 w-full overflow-hidden bg-white top-full"
          >
            <ul>
              {LINKS.map((link, index) => (
                <li
                  key={index}
                  className="border-b border-gray-200 first:border-t last:border-0"
                >
                  <Link href={link.href} className="block p-4">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex md:items-center md:gap-6">
          {LINKS.map((link, index) => (
            <li key={index} className="text-gray-500 hover:text-gray-900">
              <Link href={link.href} className="font-medium">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 ml-auto">
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-full min-w-max bg-primary/20 text-primary"
          >
            <ArrowRightOnRectangleIcon className="w-4 h-4" strokeWidth="2" />
            Log in
          </Link>

          <button className="p-2 -m-2 -ml-0 md:hidden" onClick={toggleNavLinks}>
            {showNavLinks ? (
              <XMarkIcon className="w-6 h-6 transform rotate-180" />
            ) : (
              <Bars3CenterLeftIcon className="w-6 h-6 transform rotate-180" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
