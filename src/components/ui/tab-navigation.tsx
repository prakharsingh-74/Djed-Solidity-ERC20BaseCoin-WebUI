import React, { useState } from 'react';
import Link from 'next/link';

const TabNavigation = () => {
  const [hoveredTab, setHoveredTab] = useState(null);

  const tabBase =
    'py-1 px-1 bg-black dark:bg-white group hover:bg-gradient-to-b hover:from-white hover:to-black hover:via-white hover:to-[70%] transition-[background,border-radius] duration-500 ease-in-out [will-change:background,border-radius] dark:hover:bg-gradient-to-b dark:hover:from-[#0f172a] dark:hover:to-white dark:hover:via-[#0f172a]';

  const linkBase =
    'rounded-xl px-3 py-1 block text-center tab-link ' +
    'transition-all duration-200 ease-out ' +
    'group-hover:outline group-hover:outline-4 group-hover:outline-white dark:group-hover:!outline-slate-900 ' + // Force dark mode outline
    'group-hover:transition-[background,color,border-radius] group-hover:duration-500 group-hover:delay-200 ease-in-out ' +
    'group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-500 group-hover:text-white group-hover:rounded-2xl';

  const spacerBase =
    'bg-black dark:bg-white transition-[border-radius] ease-in-out duration-300';

  return (
    <div className="w-1/3 mx-auto text-white dark:text-black">
      <div className="grid grid-cols-[0.2fr_0.5fr_0.5fr_0.5fr_0.2fr] gap-0 w-full">
        {/* Left Spacer */}
        <div
          className={`${spacerBase} rounded-l-3xl ${
            hoveredTab === 'home'
              ? 'rounded-tr-2xl duration-500'
              : 'rounded-tr-none duration-200'
          }`}
        ></div>

        {/* Home */}
        <div
          className={`${tabBase} ${
            hoveredTab === 'trade' ? 'rounded-tr-2xl duration-500' : 'rounded-tr-none duration-200'
          }`}
          onMouseEnter={() => setHoveredTab('home')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          <Link href="/" className={linkBase}>
            Home
          </Link>
        </div>

        {/* Trade */}
        <div
          className={`${tabBase} ${
            hoveredTab === 'home'
              ? 'rounded-tl-2xl duration-500'
              : hoveredTab === 'docs'
              ? 'rounded-tr-2xl duration-500'
              : 'rounded-tl-none rounded-tr-none duration-200'
          }`}
          onMouseEnter={() => setHoveredTab('trade')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          <Link href="/" className={`${linkBase} group-hover:rounded-b-2xl`}>
            Trade
          </Link>
        </div>

        {/* Docs */}
        <div
          className={`${tabBase} ${
            hoveredTab === 'trade'
              ? 'rounded-tl-2xl duration-500'
              : 'rounded-tl-none duration-200'
          }`}
          onMouseEnter={() => setHoveredTab('docs')}
          onMouseLeave={() => setHoveredTab(null)}
        >
          <Link href="/" className={`${linkBase} group-hover:rounded-b-2xl`}>
            Docs
          </Link>
        </div>

        {/* Right Spacer */}
        <div
          className={`${spacerBase} rounded-r-3xl ${
            hoveredTab === 'docs'
              ? 'rounded-tl-2xl duration-500'
              : 'rounded-tl-none duration-200'
          }`}
        ></div>
      </div>
    </div>
  );
};

export default TabNavigation;