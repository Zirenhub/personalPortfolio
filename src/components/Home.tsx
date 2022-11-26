import { useEffect, useState } from 'react';
import AboutMe from './AboutMe';
import Main from './Main';

function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <div>
      <div className="flex flex-col p-10 sm:px-40 border-b">
        <Main pageLoaded={pageLoaded} />
        <AboutMe pageLoaded={pageLoaded} />
      </div>
    </div>
  );
}

export default Home;
