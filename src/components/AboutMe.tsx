import { Transition } from '@headlessui/react';

interface Props {
  pageLoaded: boolean;
}

function AboutMe({ pageLoaded }: Props) {
  return (
    <Transition
      className="text-primary text-2xl"
      show={pageLoaded}
      enter="transition-all"
      enterFrom="opacity-0 translate-y-full ease-in-out"
      enterTo="opacity-100"
    >
      <Transition.Child
        className="transition duration-1000"
        enter="transition-all"
        enterFrom="opacity-0 translate-y-full ease-in-out"
        enterTo="opacity-100"
        leave="transition-all ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <p>a word about me</p>

        <div className="p-5 text-xl">
          <p className="border-b py-2 border-secondary">
            I&apos;m Erdinch Osman, an up-and-coming web developer.
          </p>
          <p className="border-b py-2 border-secondary">
            Goal oriented, determined and ambitious person with a passion for
            programming.
          </p>
          <p className="py-2">
            Alwyas working to improve my skills and reach new heights.
          </p>
        </div>
      </Transition.Child>
    </Transition>
  );
}

export default AboutMe;
