import { SyntheticEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import {
    Avatar,
    Box,
    Button,
    Grid2 as Grid,
    List,
    ListItem,
    Paper,
    Stack,
    Tab,
    Typography,
    Rating,
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
    ArrowBackRounded,
    StarBorderRounded,
    StarRateRounded,
} from '@mui/icons-material';

import { DashboardContent } from '@layouts';
import { CuisineFlags, RecipeDifficulty, RecipeType } from '@types';
import { QUERY_STATUS, QueryKeys, recipesApi } from '@services';
import { Label } from '@shared';

const Recipe = () => {
    const { recipeId } = useParams();

    const [value, setValue] = useState('1');

    const { status, data: recipe } = useQuery<RecipeType>({
        queryKey: [QueryKeys.RECIPE, recipeId],
        queryFn: () => recipesApi.getRecipe(recipeId),
        retry: 1,
        enabled: !!recipeId,
    });

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <DashboardContent>
            {status === QUERY_STATUS.success && (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Stack alignItems="start">
                        <Button
                            variant="text"
                            startIcon={<ArrowBackRounded />}
                            href="/recipes"
                            color="inherit"
                            data-cy="back-button"
                        >
                            Back
                        </Button>
                    </Stack>
                    <Grid container spacing={5}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Box sx={{ position: 'relative' }}>
                                <Box
                                    component="img"
                                    alt={recipe.name}
                                    src={recipe.image}
                                    sx={{
                                        top: 0,
                                        width: 1,
                                        height: 1,
                                        objectFit: 'cover',
                                        borderRadius: 2,
                                        maxHeight: '500px',
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid
                            size={{ xs: 12, sm: 6 }}
                            display="flex"
                            flexDirection="column"
                            gap={2}
                        >
                            <Box display="flex" gap={1}>
                                {recipe.tags.map((type) => (
                                    <Label
                                        key={type}
                                        color={'info'}
                                        dataCy="recipe-tag"
                                    >
                                        {type}
                                    </Label>
                                ))}
                            </Box>
                            <Stack direction="row" spacing={1}>
                                <Box
                                    component="span"
                                    sx={{
                                        fontSize: '1.4rem',
                                        cursor: 'default',
                                    }}
                                >
                                    {CuisineFlags[recipe.cuisine]}
                                </Box>
                                <Typography variant="h5" data-cy="recipe-title">
                                    {recipe.name}
                                </Typography>
                            </Stack>
                            <Stack direction="row" color="text.disabled">
                                <Rating
                                    readOnly
                                    value={recipe.rating}
                                    precision={0.1}
                                    icon={<StarRateRounded />}
                                    emptyIcon={<StarBorderRounded />}
                                    data-cy="recipe-rating"
                                />
                                <Typography
                                    variant="body2"
                                    data-cy="recipe-reviews"
                                >
                                    {`(${recipe.reviewCount} reviews)`}
                                </Typography>
                            </Stack>
                            <Stack direction="row" spacing={1} mt={1}>
                                <Typography
                                    variant="body2"
                                    data-cy="recipe-created-by-label"
                                >
                                    Created by
                                </Typography>
                                <Avatar
                                    src={`/assets/images/avatar/avatar-10.webp`}
                                    sx={{ width: 24, height: 24 }}
                                    data-cy="recipe-created-by-avatar"
                                />
                                <Typography
                                    variant="body2"
                                    data-cy="recipe-created-by-label"
                                >
                                    John Smith
                                </Typography>
                            </Stack>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexGrow: 1,
                                    gap: 1,
                                    mt: 1,
                                }}
                            >
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                >
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold"
                                        data-cy="recipe-calories-label"
                                    >
                                        Calories:
                                    </Typography>
                                    <Label
                                        color="primary"
                                        dataCy="recipe-calories-value"
                                    >
                                        {recipe.caloriesPerServing} kcal
                                    </Label>
                                </Stack>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                >
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold"
                                        data-cy="recipe-servings-label"
                                    >
                                        Servings:
                                    </Typography>
                                    <Label
                                        color="secondary"
                                        dataCy="recipe-servings-value"
                                    >
                                        {recipe.servings}
                                    </Label>
                                </Stack>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    alignItems="center"
                                >
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold"
                                        data-cy="recipe-preparation-time-label"
                                    >
                                        Preparation time:
                                    </Typography>
                                    <Label
                                        color="default"
                                        dataCy="recipe-preparation-time-value"
                                    >
                                        {recipe.prepTimeMinutes} mins
                                    </Label>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold"
                                        data-cy="recipe-cooking-time-label"
                                    >
                                        Cooking time:
                                    </Typography>
                                    <Label
                                        color="default"
                                        dataCy="recipe-cooking-time-value"
                                    >
                                        {recipe.cookTimeMinutes} mins
                                    </Label>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold"
                                        data-cy="recipe-meal-type-label"
                                    >
                                        Meal type:
                                    </Typography>
                                    {recipe.mealType.map((type) => (
                                        <Label
                                            color="info"
                                            key={type}
                                            dataCy="recipe-meal-type-value"
                                        >
                                            {type}
                                        </Label>
                                    ))}
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <Typography
                                        variant="body2"
                                        fontWeight="bold"
                                        data-cy="recipe-difficulty-label"
                                    >
                                        Difficulty:
                                    </Typography>
                                    <Label
                                        color={
                                            recipe.difficulty ===
                                            RecipeDifficulty.EASY
                                                ? 'success'
                                                : 'warning'
                                        }
                                        dataCy={`recipe-difficulty-${
                                            recipe.difficulty ===
                                            RecipeDifficulty.EASY
                                                ? 'success'
                                                : 'warning'
                                        }`}
                                    >
                                        {recipe.difficulty}
                                    </Label>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                    <Paper variant="outlined" elevation={0}>
                        <TabContext value={value}>
                            <Box
                                sx={{ borderBottom: 1, borderColor: 'divider' }}
                            >
                                <TabList
                                    onChange={handleChange}
                                    aria-label="lab API tabs example"
                                    textColor="inherit"
                                    indicatorColor="primary"
                                >
                                    <Tab
                                        label="Ingredients"
                                        value="1"
                                        data-cy="ingredients-tab"
                                    />
                                    <Tab
                                        label="Instructions"
                                        value="2"
                                        data-cy="instructions-tab"
                                    />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <List sx={{ listStyleType: 'disc', pl: 4 }}>
                                    {recipe.ingredients.map(
                                        (ingredient, idx) => (
                                            <ListItem
                                                key={idx}
                                                sx={{ display: 'list-item' }}
                                            >
                                                {ingredient}
                                            </ListItem>
                                        )
                                    )}
                                </List>
                            </TabPanel>
                            <TabPanel value="2">
                                <List sx={{ listStyleType: 'decimal', pl: 4 }}>
                                    {recipe.instructions.map(
                                        (instruction, idx) => (
                                            <ListItem
                                                key={idx}
                                                sx={{ display: 'list-item' }}
                                            >
                                                {instruction}
                                            </ListItem>
                                        )
                                    )}
                                </List>
                            </TabPanel>
                        </TabContext>
                    </Paper>
                </Box>
            )}
        </DashboardContent>
    );
};

export default Recipe;
