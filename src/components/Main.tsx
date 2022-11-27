import { Transition } from '@headlessui/react';

interface Props {
  pageLoaded: boolean;
}

function Main({ pageLoaded }: Props) {
  return (
    <Transition
      className="pt-2 transition-all duration-1000 text-primary border-b-2 border-primary hover:cursor-pointer font-medium"
      show={pageLoaded}
      enter="transition-all ease-in-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <Transition.Child
        className="transition-all duration-700"
        enter="transition-all"
        enterFrom="opacity-0 -translate-x-full"
        enterTo="opacity-100"
        leave="transition-all ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <p className="sm:text-7xl text-3xl">Erdinch Osman</p>
      </Transition.Child>

      <Transition.Child
        className="transition-all duration-1000 text-secondary"
        enter="transition-all"
        enterFrom="opacity-0 translate-x-full"
        enterTo="opacity-100"
        leave="transition-all ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="sm:text-6xl text-5xl">
          <p>Web developer</p>
        </div>
      </Transition.Child>
    </Transition>
  );
}

export default Main;
