import { dummyJson } from '@services';
import { RecipesType, RecipeType } from '@types';

export const getRecipes = async (): Promise<RecipeType[]> => {
    return dummyJson
        .get<RecipesType>('/recipes', {
            params: {
                limit: 0,
                select: 'name,image,difficulty,caloriesPerServing,prepTimeMinutes,cookTimeMinutes,cuisine,mealType',
            },
        })
        .then((res) => res.data.recipes);
};

export const getRecipe = async (
    recipeId: string | undefined
): Promise<RecipeType> => {
    return dummyJson
        .get<RecipeType>(`/recipes/${recipeId}`, {
            params: {
                limit: 0,
                select: 'name,image,difficulty,caloriesPerServing,prepTimeMinutes,cookTimeMinutes,cuisine,mealType,rating,reviewCount,ingredients,instructions,tags,servings',
            },
        })
        .then((res) => res.data);
};
