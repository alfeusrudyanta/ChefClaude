import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='h-10 w-full bg-white flex text-center items-center justify-center gap-2 font-normal shadow-[0px_-1px_3px_rgba(0,0,0,0.10),0px_-1px_2px_rgba(0,0,0,0.06)]'>
      <p>&copy;2025 - Alfeus Rudyanta</p>
      <p>•</p>
      <a
        href='https://github.com/alfeusrudyanta/ChefClaude'
        target='_blank'
        className='hover:text-blue-800'
      >
        View my code on GitHub
      </a>
    </footer>
  );
};

export default Footer;
