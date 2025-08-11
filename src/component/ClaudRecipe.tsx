import React from 'react';
import ReactMarkDown from 'react-markdown';

type ClaudeRecipeProps = {
  recipe: string;
};

const ClaudeRecipe: React.FC<ClaudeRecipeProps> = ({ recipe }) => {
  return (
    <section className='flex flex-col gap-3 text-gray-700 text-[16px] md:text-[18px]'>
      <h2 className='font-bold text-[24px] mdtext-[30px] leading-[32px] md:leading-[38px] text-black'>
        Chef Claude Recommendation:
      </h2>
      <ReactMarkDown>{recipe}</ReactMarkDown>
    </section>
  );
};

export default ClaudeRecipe;
