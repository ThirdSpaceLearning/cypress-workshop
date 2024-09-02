import { useCallback, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Box, Grid2 as Grid, Typography } from '@mui/material';
import { Alert, AlertTitle } from '@mui/lab';

import { RecipesFilters, RecipeItem } from '@features';
import { DashboardContent } from '@layouts';
import { QueryKeys, recipesApi, QUERY_STATUS } from '@services';
import { Cuisine, MealType, RecipeDifficulty, RecipeType } from '@types';

type Options = {
    difficulty: RecipeDifficulty | 'All';
    cuisine: Cuisine | 'All';
    mealType: MealType | 'All';
};

const defaultFilters: Options = {
    difficulty: 'All',
    cuisine: 'All',
    mealType: 'All',
};

const RecipesPage = () => {
    const [filters, setFilters] = useState<Options>(defaultFilters);

    const { status, data: recipes } = useQuery<RecipeType[]>({
        queryKey: [QueryKeys.RECIPES],
        queryFn: () => recipesApi.getRecipes(),
        retry: 1,
    });

    const filteredRecipes = useMemo(() => {
        if (recipes) {
            return recipes.filter(
                (recipe) =>
                    (filters.difficulty === 'All' ||
                        filters.difficulty === recipe.difficulty) &&
                    (filters.cuisine === 'All' ||
                        filters.cuisine === recipe.cuisine) &&
                    (filters.mealType === 'All' ||
                        recipe.mealType.includes(filters.mealType))
            );
        }
    }, [recipes, filters]);

    const onSetFilters = useCallback((updateState: any) => {
        setFilters((prevValue) => ({ ...prevValue, ...updateState }));
    }, []);

    const onReset = () => {
        setFilters(defaultFilters);
    };

    const areFiltersEqual = (
        filters: Options,
        defaultFilters: Options
    ): boolean => {
        return JSON.stringify(filters) === JSON.stringify(defaultFilters);
    };

    return (
        <DashboardContent>
            <Typography variant="h4" sx={{ mb: 3 }}>
                Recipes
            </Typography>
            {status === QUERY_STATUS.success && filteredRecipes && (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <Box display="flex" alignSelf="flex-end">
                        <RecipesFilters
                            filters={filters}
                            onFiltersChange={onSetFilters}
                            onResetFilter={onReset}
                            canReset={!areFiltersEqual(filters, defaultFilters)}
                        />
                    </Box>

                    {filteredRecipes.length === 0 && (
                        <Alert severity="error">
                            <AlertTitle>No recipes found.</AlertTitle>
                            Please try changing or resetting your filters.
                        </Alert>
                    )}

                    <Grid container spacing={3}>
                        {filteredRecipes.map((recipe) => (
                            <Grid
                                key={recipe.id}
                                size={{ xs: 12, sm: 6, md: 3 }}
                            >
                                <RecipeItem recipe={recipe} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            )}
        </DashboardContent>
    );
};

export default RecipesPage;
