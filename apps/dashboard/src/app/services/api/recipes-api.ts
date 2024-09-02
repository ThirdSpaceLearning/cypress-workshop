import { dummyJson } from '@services';
import { RecipesType, RecipeType } from '@types';

export const getRecipes = async (): Promise<RecipeType[]> => {
    return dummyJson
        .get<RecipesType>('/recipes', {
            params: {
                limit: 0,
                select: 'name,image,difficulty,caloriesPerServing,prepTimeMinutes,cookTimeMinutes,cuisine,mealType,rating',
            },
        })
        .then((res) => res.data.recipes);
};
