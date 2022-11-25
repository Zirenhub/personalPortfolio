import { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

function Main() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <Transition
      className="font-medium text-primary border-b-4 absolute rounded-r-xl top-1/3 transition duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:cursor-pointer hover:text-white"
      show={pageLoaded}
      enter="transition-opacity duration-1000"
      enterFrom="opacity-0 translate-y-full"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="p-6">
        <h1 className="text-4xl">Hey there, 👋</h1>
        <p className="text-3xl">Welcome to my portfolio.</p>
        <p className="text-2xl">
          My name is Erdinch, and I&apos;m a self taught web developer.
        </p>
        {/* <p className="text-xl">
            Here you can view some of my projects and contact me.
          </p> */}
      </div>
    </Transition>
  );
}

export default Main;
