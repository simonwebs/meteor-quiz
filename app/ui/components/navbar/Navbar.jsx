// @ts-nocheck
import React, { Fragment, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { FcBusinessContact } from 'react-icons/fc';
import { RoutePaths } from '../mainRoutes/RoutePaths';
import AOS from 'aos';
import 'aos/dist/aos.css';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [theme, setTheme] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    AOS.init(
      {
        delay: 200,
        duration: 1200,
        once: false,
        // @ts-ignore
      },
      []
    );
  });

  return (
    <Disclosure
      as="nav"
      className="w-full text-gray-700  h-16 fixed top-0 animated z-40 bg-white dark:bg-slate-900 shadow-lg"
      data-aos="fade-down"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 z-10 :px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-gray-200 hover:bg-cyan-600 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-cyan-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon
                        className="text-slate-900 dark:text-white block h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <MenuIcon
                        className="text-slate-900 dark:text-white block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <Link to={RoutePaths.ROOT}>
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="/img/simon.png"
                      alt="Meteor"
                    />
                  </Link>
                </div>
                <div className="hidden md:ml-8 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => navigate('/')}
                        type="button"
                        className="text-md font-bold shadow-lg shadow-cyan-900/50 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-sky-500/80  hover:text-white rounded-r-full"
                      >
                        <span>Home</span>
                      </button>
                    </div>
                  </div>
                  <Menu
                    as="div"
                    className="relative inline-block text-left py-5"
                  >
                    <div>
                      <Menu.Button className="text-md font-bold shadow-lg shadow-cyan-900/50 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-sky-500/80  hover:text-white rounded-r-full">
                        Pages
                        <ChevronDownIcon
                          className="-mr-1 ml-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-slate-50  divide-y divide-gray-100 focus:outline-none">
                        <div
                          onClick={() => setNavbarOpen(!open)}
                          className="py-1"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => navigate('/about')}
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                About
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => navigate('/quiz')}
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Quiz
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => navigate('/projects')}
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Projects
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => navigate('/testimonials')}
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Testimonials
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => navigate('/contact')}
                                className={classNames(
                                  active
                                    ? 'bg-sky-500/80 rounded-r-full text-white'
                                    : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                Contact
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    onClick={handleThemeSwitch}
                    className="bg-transparent text-md font-bold shadow-lg shadow-cyan-900/50 dark:bg-slate-900 relative inline-flex items-center px-3 py-1 border border-transparent dark:text-white hover:bg-sky-500/80 hover:text-white rounded-r-full"
                  >
                    {theme === 'dark' ? '🌙' : '🌞'}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    onClick={() => navigate('/contact')}
                    type="button"
                    className="bg-transparent text-md font-bold shadow-lg shadow-cyan-900/50 dark:bg-white hover:bg-sky-500/80 hover:text-white relative inline-flex items-center px-3 py-1 border border-transparent dark:text-slate-900 dark:hover:bg-sky-500/80 dark:hover-bg-white dark:hover:text-white rounded-r-full"
                  >
                    <FcBusinessContact
                      className="-ml-1 mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*  Mobile */}
          <Disclosure.Panel className="md:hidden bg-slate-100 dark:bg-slate-900">
            <div
              onClick={() => setNavbarOpen(!open)}
              className="pt-2 pb-3 space-y-1"
            >
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}

              <div className="flex-shrink-0">
                <Link
                  to={RoutePaths.ROOT}
                  type="button"
                  className="bg-slet-50 text-md font-bold shadow-md shadow-cyan-900/50 relative inline-flex items-center px-3 py-1 border border-transparent dark:text-slate-50 hover:bg-sky-500/80  hover:text-white rounded-r-full"
                >
                  <span>Home</span>
                </Link>
              </div>
              <Menu
                as="div"
                className="relative z-30 inline-block text-left py-3"
              >
                <div>
                  <Menu.Button className="bg-slate-50 backdrop:text-md font-bold shadow-md shadow-cyan-900/50 dark:bg-slate-900 relative inline-flex items-center px-3 py-0 border border-transparent dark:text-white hover:bg-gradient-to-r from-cyan-500/95 to-sky-500/95 hover:text-white rounded-r-full">
                    Pages
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-slate-50  divide-y divide-gray-100 focus:outline-none">
                    <div onClick={() => setNavbarOpen(!open)} className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={RoutePaths.ABOUT}
                            className={classNames(
                              active
                                ? 'bg-sky-500/80 rounded-r-full text-white'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            About
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={RoutePaths.PROJECTS}
                            className={classNames(
                              active
                                ? 'bg-sky-500/80 rounded-r-full text-white'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Projects
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={RoutePaths.TESTIMONIALS}
                            className={classNames(
                              active
                                ? 'bg-sky-500/80 rounded-r-full text-white'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Testimonials
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={RoutePaths.SKILLS}
                            className={classNames(
                              active
                                ? 'bg-sky-500/80 rounded-r-full text-white'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Skills
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={RoutePaths.CONTACT}
                            className={classNames(
                              active
                                ? 'bg-sky-500/80 rounded-r-full text-white'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Contact
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <div></div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
