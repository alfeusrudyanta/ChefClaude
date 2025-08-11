import React from 'react';
import chefClaudeLogo from '/chef-claude-icon.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='bg-white mx-auto py-4 md:py-6 px-4 flex items-center justify-center shadow-[0px_1px_3px_rgba(0,0,0,0.10),0px_1px_2px_rgba(0,0,0,0.06)]'>
      <Link to='/'>
        <div className='flex items-center justify-center gap-2'>
          <img
            src={chefClaudeLogo}
            alt='Chef-Claude-Logo'
            className='h-12 w-12 md:h-14 md:w-14'
          />
          <h1 className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[48px]'>
            Chef Claude
          </h1>
        </div>
      </Link>
    </header>
  );
};

export default Header;
