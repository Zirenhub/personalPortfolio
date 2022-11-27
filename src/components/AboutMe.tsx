import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';
import reactSVG from '../assets/icons/react.svg';
import javascriptSVG from '../assets/icons/javascript.svg';
import typescriptSVG from '../assets/icons/typescript.svg';
import tailwindSVG from '../assets/icons/tailwind.svg';
import gitSVG from '../assets/icons/git.svg';
import jestSVG from '../assets/icons/jest.svg';
import firebaseSVG from '../assets/icons/firebase.svg';
import webpackSVG from '../assets/icons/webpack.svg';

interface Props {
  pageLoaded: boolean;
}

function AboutMe({ pageLoaded }: Props) {
  const techs = [
    reactSVG,
    javascriptSVG,
    typescriptSVG,
    tailwindSVG,
    gitSVG,
    jestSVG,
    firebaseSVG,
    webpackSVG,
  ];
  const [index, setIndex] = useState(0);

  function handleNextTech() {
    setIndex((i) => i + 1);
  }

  function handlePreviousTech() {
    setIndex((i) => i - 1);
  }

  useEffect(() => {
    function tick() {
      setIndex((i) => i + 1);
    }

    const id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <Transition
      className="text-primary text-2xl grow flex items-center"
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
        <p>
          about me<span className="animate-blink transition-none">.</span>
        </p>

        <div className="text-xl">
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

        <div className="py-2 flex justify-center gap-5 mt-auto">
          <button type="button" onClick={handlePreviousTech}>
            <div className="animate-slide-arrow-left absolute">&#60;</div>
            &#60;
          </button>
          <img
            src={techs[index % techs.length]}
            alt="logo"
            className="w-[5rem] h-[5rem]"
          />
          <button type="button" onClick={handleNextTech}>
            <div className="animate-slide-arrow-right absolute">&#62;</div>
            &#62;
          </button>
        </div>
      </Transition.Child>
    </Transition>
  );
}

export default AboutMe;
