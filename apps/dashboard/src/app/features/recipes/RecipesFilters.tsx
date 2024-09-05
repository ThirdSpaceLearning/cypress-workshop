import { FC, HTMLAttributes, useState } from 'react';

import {
    Badge,
    Box,
    Button,
    Divider,
    Drawer,
    FormControlLabel,
    IconButton,
    Radio,
    RadioGroup,
    Stack,
    Typography,
} from '@mui/material';
import { Close, FilterListRounded, RestartAlt } from '@mui/icons-material';

import { Cuisine, MealType, RecipeDifficulty } from '@types';

type StackProps = {
    options: string[];
    label: string;
    filtersType: any;
    onChange: (option: string) => void;
};

const RecipesStack: FC<StackProps> = ({
    options,
    label,
    filtersType,
    onChange,
}) => {
    return (
        <Stack spacing={1} data-cy="filters-category">
            <Typography variant="subtitle2" data-cy="filters-category-label">
                {label}
            </Typography>
            <RadioGroup>
                {options.map((option) => (
                    <FormControlLabel
                        key={option}
                        value={option}
                        control={
                            <Radio
                                checked={filtersType.includes(option)}
                                onChange={() => onChange(option)}
                            />
                        }
                        label={option}
                        data-cy="filters-category-option"
                    />
                ))}
            </RadioGroup>
        </Stack>
    );
};

type Props = {
    filters: any;
    onFiltersChange: (type: any) => void;
    onResetFilter: () => void;
    canReset: boolean;
};

const RecipesFilters: FC<Props> = ({
    filters,
    onFiltersChange,
    onResetFilter,
    canReset,
}) => {
    const [openFilter, setOpenFilter] = useState(false);

    const onOpenFilter = () => {
        setOpenFilter(true);
    };

    const onCloseFilter = () => {
        setOpenFilter(false);
    };

    return (
        <>
            <Button
                color="inherit"
                endIcon={
                    <Badge
                        color="error"
                        variant="dot"
                        invisible={!canReset}
                        slotProps={{
                            badge: {
                                'data-cy': 'filters-button-badge',
                            } as HTMLAttributes<HTMLSpanElement>,
                        }}
                    >
                        <FilterListRounded />
                    </Badge>
                }
                onClick={onOpenFilter}
                disableRipple
                data-cy="filters-button"
            >
                Filters
            </Button>

            <Drawer
                anchor="right"
                open={openFilter}
                onClose={onCloseFilter}
                PaperProps={{
                    sx: { width: 280, overflow: 'hidden' },
                }}
                data-cy="filters-drawer"
            >
                <Box
                    display="flex"
                    alignItems="center"
                    sx={{ pl: 2.5, pr: 1.5, py: 2 }}
                >
                    <Typography
                        variant="h6"
                        flexGrow={1}
                        data-cy="filters-label"
                    >
                        Filters
                    </Typography>

                    <IconButton onClick={onResetFilter} data-cy="reset-button">
                        <Badge
                            color="error"
                            variant="dot"
                            invisible={!canReset}
                            slotProps={{
                                badge: {
                                    'data-cy': 'reset-button-badge',
                                } as HTMLAttributes<HTMLSpanElement>,
                            }}
                        >
                            <RestartAlt />
                        </Badge>
                    </IconButton>

                    <IconButton onClick={onCloseFilter} data-cy="close-button">
                        <Close />
                    </IconButton>
                </Box>

                <Divider />

                <Box overflow="auto">
                    <Stack spacing={3} sx={{ p: 3 }}>
                        <RecipesStack
                            options={[
                                'All',
                                ...Object.values(RecipeDifficulty),
                            ]}
                            label="Difficulty"
                            filtersType={filters.difficulty}
                            onChange={(option) =>
                                onFiltersChange({
                                    difficulty: option,
                                })
                            }
                        />
                        <RecipesStack
                            options={['All', ...Object.values(MealType).sort()]}
                            label="Meal Types"
                            filtersType={filters.mealType}
                            onChange={(option) =>
                                onFiltersChange({
                                    mealType: option,
                                })
                            }
                        />
                        <RecipesStack
                            options={['All', ...Object.values(Cuisine).sort()]}
                            label="Cuisine"
                            filtersType={filters.cuisine}
                            onChange={(option) =>
                                onFiltersChange({
                                    cuisine: option,
                                })
                            }
                        />
                    </Stack>
                </Box>
            </Drawer>
        </>
    );
};

export default RecipesFilters;
