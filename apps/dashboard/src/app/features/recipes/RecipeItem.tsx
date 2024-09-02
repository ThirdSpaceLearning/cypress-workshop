import { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Card, Link, Stack, Tooltip, Typography } from '@mui/material';
import {
    AvTimerRounded,
    LocalFireDepartmentRounded,
    MicrowaveRounded,
} from '@mui/icons-material';

import { CuisineFlags, RecipeDifficulty, RecipeType } from '@types';
import { Label, LabelColor } from '@shared';

type Props = {
    recipe: RecipeType;
};

type DetailProps = {
    icon: ReactNode;
    label: string;
};

const difficultyMap: Record<RecipeDifficulty, LabelColor> = {
    [RecipeDifficulty.EASY]: 'success',
    [RecipeDifficulty.MEDIUM]: 'warning',
};

const RecipeDetail: FC<DetailProps> = ({ icon, label }) => {
    return (
        <Box display="flex" alignItems="center" gap={0.5}>
            {icon}
            <Typography variant="caption" fontWeight="bold">
                {label}
            </Typography>
        </Box>
    );
};

const RecipeItem: FC<Props> = ({ recipe }) => {
    return (
        <Card>
            <Box sx={{ pt: '100%', position: 'relative' }}>
                <Box
                    component="img"
                    alt={recipe.name}
                    src={recipe.image}
                    sx={{
                        top: 0,
                        width: 1,
                        height: 1,
                        objectFit: 'cover',
                        position: 'absolute',
                    }}
                />
            </Box>

            <Stack spacing={2} sx={{ p: 3 }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                    }}
                >
                    <Tooltip
                        arrow
                        title={recipe.cuisine}
                        enterDelay={500}
                        PopperProps={{
                            modifiers: [
                                {
                                    name: 'offset',
                                    options: {
                                        offset: [0, -10],
                                    },
                                },
                            ],
                        }}
                    >
                        <Box
                            component="span"
                            sx={{ fontSize: '1.2rem', cursor: 'default' }}
                        >
                            {CuisineFlags[recipe.cuisine]}
                        </Box>
                    </Tooltip>
                    <Link
                        component={RouterLink}
                        to={`${recipe.id}`}
                        color="inherit"
                        underline="hover"
                        variant="subtitle2"
                        noWrap
                        sx={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '100%',
                        }}
                    >
                        {recipe.name}
                    </Link>
                </Box>

                <Box
                    display="flex"
                    alignItems="center"
                    rowGap={0.5}
                    columnGap={2}
                    flexWrap="wrap"
                >
                    <RecipeDetail
                        icon={<AvTimerRounded fontSize="small" />}
                        label={`${recipe.prepTimeMinutes} min`}
                    />
                    <RecipeDetail
                        icon={<MicrowaveRounded fontSize="small" />}
                        label={`${recipe.cookTimeMinutes} min`}
                    />
                    <RecipeDetail
                        icon={<LocalFireDepartmentRounded fontSize="small" />}
                        label={`${recipe.caloriesPerServing} kcal`}
                    />
                </Box>

                <Box display="flex" alignItems="center">
                    <Box display="flex" gap={1}>
                        {recipe.mealType.map((type) => (
                            <Label key={type} color={'info'}>
                                {type}
                            </Label>
                        ))}
                    </Box>
                </Box>
                <Box display="flex" alignItems="center">
                    <Label color={difficultyMap[recipe.difficulty]}>
                        {recipe.difficulty}
                    </Label>
                </Box>
            </Stack>
        </Card>
    );
};

export default RecipeItem;
