import React, { useState } from 'react';
import ClaudeRecipe from '../component/ClaudRecipe';
import IngredientsList from '../component/IngredientsList';
import getRecipeFromMistral from '../api/AIChat';

const Home: React.FC = () => {
  const [ingredients, setIngredients] = React.useState<string[]>([]);
  const [recipe, setRecipe] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function getRecipe() {
    setLoading(true);
    const recommendedRecipe = await getRecipeFromMistral(ingredients);
    if (recommendedRecipe) {
      setRecipe(recommendedRecipe);
    }
    setLoading(false);
  }

  function resetIngredient() {
    setIngredients([]);
  }

  function addIngredient(formData: FormData) {
    const newIngredient = formData.get('ingredient')?.toString().trim();

    if (
      newIngredient &&
      !ingredients.some(
        (ingredient) => ingredient.toLowerCase() === newIngredient.toLowerCase()
      )
    ) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
  }

  function deleteIngredient(ingredient: string) {
    setIngredients((prevIngredients) => {
      const index = prevIngredients.indexOf(ingredient);
      return [
        ...prevIngredients.slice(0, index),
        ...prevIngredients.slice(index + 1),
      ];
    });
  }

  return (
    <main className='px-4 py-6 md:py-8 mx-auto max-w-[750px] flex flex-col gap-6 md:gap-8'>
      <form action={addIngredient} className='flex gap-1 md:gap-2'>
        <input
          type='text'
          placeholder='e.g. oregano'
          aria-label='Add ingredient'
          name='ingredient'
          className='px-2 py-1 w-full border rounded-[6px] bg-white'
        />
        <button className='px-4 py-2 bg-black text-white rounded-[6px] cursor-pointer'>
          Add&nbsp;ingredient
        </button>
        <button
          type='button'
          onClick={resetIngredient}
          className='px-4 py-2 bg-black text-white rounded-[6px] cursor-pointer'
        >
          Reset
        </button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredientList={ingredients}
          getRecipe={getRecipe}
          deleteIngredient={deleteIngredient}
        />
      )}

      {loading && <p className='text-gray-500'>Generating recipe...</p>}

      {recipe && ingredients.length < 4 && (
        <h2 className='font-semibold text-[24px] md:text-[30px] leading-[32px] md:leading-[48px]'>
          Previous Recommendation:
        </h2>
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
};

export default Home;
