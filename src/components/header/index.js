/* This example requires Tailwind CSS v2.0+ */
import styles from "./styles/header.module.scss";
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  navigation,
  menuItems,
  handleLogIn,
  handleSignOut,
  handleSignUp,
} from "./services";
import SignInModal from "components/modals/signInModal";
import SignUpModal from "components/modals/signUpModal";
import icons from "utils/icons";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({handleCollapseMenu}) {
  const [openModal, setOpenModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const router = useRouter().pathname;
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    setLogin(!!localStorage.getItem("isLogin"));
  }, []);

  return (
    <>
      <SignInModal show={openModal} setShow={setOpenModal} />
      <SignUpModal show={openSignUpModal} setShow={setOpenSignUpModal} />
      <Disclosure as="nav" className="bg-[#50CFA9] px-8 fixed w-full z-[999]">
        {({ open }) => (
          <>
            <div className="flex w-full  pr-2 w-full relative flex items-center justify-between h-16 ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <span
                className={`${styles.hamburgerMenu} cursor-pointer `}
                onClick={()=>handleCollapseMenu()}
              >
                {icons.hamburgerMenu()}
              </span>

              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                <div className="hidden sm:block ">
                  <div className="flex space-x-4">
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                {/* <Menu as="div" className="ml-3 relative z-40">
                  <div className={styles.imageContainer}>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={"/images/userImgDefault.png"}
                        // loader={() => userImg}
                        alt={""}
                        objectFit={"contain"}
                        objectPosition={"center"}
                        layout={"fill"}
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {isLogin ? (
                        <>
                          {menuItems.map((item, index) => (
                            <Menu.Item key={index}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700 no-underline"
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                          <Menu.Item>
                            {({ active }) => (
                              <span
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 no-underline"
                                )}
                                onClick={handleSignOut}
                              >
                                Sign out
                              </span>
                            )}
                          </Menu.Item>
                        </>
                      ) : (
                        <>
                          <Menu.Item>
                            {({ active }) => (
                              <span
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-base text-gray-700 no-underline"
                                )}
                                onClick={() => handleLogIn(setOpenModal)}
                              >
                                Sign in
                              </span>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <span
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-base text-gray-700 no-underline"
                                )}
                                onClick={() => handleSignUp(setOpenSignUpModal)}
                              >
                                Sign up
                              </span>
                            )}
                          </Menu.Item>
                        </>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
}
