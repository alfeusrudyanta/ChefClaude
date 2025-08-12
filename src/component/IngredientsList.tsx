import React from 'react';

type IngredientsListProps = {
  ingredientList: string[];
  getRecipe: () => void;
  deleteIngredient: (id: number) => void;
};

const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredientList,
  getRecipe,
  deleteIngredient,
}) => {
  return (
    <section className='flex flex-col gap-2 md:gap-3'>
      <h2 className='font-bold text-[24px] mdtext-[30px] leading-[32px] md:leading-[38px]'>
        Ingredients on hand:
      </h2>
      <div className='flex flex-col gap-0 mb-4 md:mb-6'>
        <ul
          className='mb-4 list-disc text-[16px] md:text-[18px] text-gray-700'
          aria-live='polite'
        >
          {ingredientList.map((ingredient, index) => (
            <li
              onClick={() => deleteIngredient(index)}
              className='cursor-pointer hover:text-red-800'
              key={ingredient}
            >
              {ingredient}
            </li>
          ))}
        </ul>

        <p className='text-[12px] md:text-[14px] text-gray-700 italic'>
          <span className='font-bold'>*</span>Click the ingredient to delete the
          ingredient from the list
        </p>
      </div>

      {ingredientList.length > 3 && (
        <div className='bg-stone-200 py-6 px-6 rounded-[6px] flex justify-between items-center gap-4'>
          <div className='flex flex-col gap-1 md:gap-2'>
            <h3 className='font-medium text-[18px] md:text-[20px]'>
              Ready for a recipe?
            </h3>
            <p className='text-gray-600'>
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button
            className='h-10 px-4 py-2 rounded-[6px] bg-orange-500 text-white cursor-pointer'
            onClick={getRecipe}
          >
            Get&nbsp;a&nbsp;recipe
          </button>
        </div>
      )}
    </section>
  );
};

export default IngredientsList;
