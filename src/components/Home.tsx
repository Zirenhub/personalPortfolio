import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';
import AboutMe from './AboutMe';
import Main from './Main';
import Projects from './Projects';

function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);

  function handleJumpDown() {
    // todo
  }

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <>
      <div className="flex flex-col px-5 justify-center sm:px-40 h-screen">
        <Main pageLoaded={pageLoaded} />
        <AboutMe pageLoaded={pageLoaded} />
        <Transition
          show={pageLoaded}
          className="transition-all duration-[5000ms] flex justify-center pb-2"
          enterFrom="opacity-0 ease-in-out"
          enterTo="opacity-100"
          leave="transition-all ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <button
            type="button"
            className="text-white text-xl animate-bounce"
            onClick={handleJumpDown}
          >
            V
          </button>
        </Transition>
      </div>
      <div>
        <Projects />
      </div>
    </>
  );
}

export default Home;
