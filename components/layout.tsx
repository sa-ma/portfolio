import { useEffect, useState } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   const theme = localStorage.getItem('theme')
  //   if (theme && theme === 'dark') {
  //     setDarkMode(true)
  //     return
  //   }
  // }, [darkMode])

  const handleDarkMode = () => {
    if (darkMode || window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    handleDarkMode();
  }, [darkMode]);

  return (
    <div className="bg-white w-full border-4 border-blue-800 p-4 h-screen dark:bg-gray-900">
      <div className="max-w-screen-md mx-auto">
        <header className="flex flex-row justify-end w-full">
          <button
            className={`focus:outline-none text-2xl text-gray-400 ${
              darkMode ? 'hover:text-white' : 'hover:text-black'
            }`}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <BiSun /> : <BiMoon />}
          </button>
        </header>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
