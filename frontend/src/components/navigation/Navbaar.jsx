import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavMenu from "../navigation/NavMenu"
import { Link } from "react-router-dom";
const navigation = [
  { name: 'About', href: '/About' },
  { name: 'Add Expense', href: '' },
  { name: 'Monthly Expenses', href: '' },
  { name: 'Feedback', href: '/Feedback' },
]
export const Navbaar = () => {
  const [color, setColor] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

 
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <>
      <header className= {`inset-x-0 top-0 h-[11vh]
        ${color ? "header_bg text-black" : "navbaar"}
        `}>
        <nav className="flex items-center justify-between
        
        p-6 lg:px-16 py-4" aria-label="Global">

          <div className="flex lg:flex-1 para items-center">
            <a href="/" className="">
              <h1 className="cursor-pointer text-2xl">
                ExpenseTracker
              </h1>
            </a>
          </div>


          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>


          <div className="hidden lg:flex lg:gap-x-16 lg:pl-10">
            {navigation.map((item) => (
              <a key={item.id} href={item.href} className="text-md font-semibold leading-6">
                {item.name}
              </a>
            ))}
          </div>


          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavMenu/>
          </div>
        </nav>
        



        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex  justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <h2 className="text-green-400 cursor-pointer para text-xl ">
                  ExpenseTrackr
                </h2>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="/LogIn"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

    </>
  );
};

export default Navbaar;


