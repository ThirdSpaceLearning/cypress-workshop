export type RecipeType = {
    id: number;
    name: string;
    description: string;
    image: string;
    mealType: MealType[];
    cuisine: Cuisine;
    difficulty: RecipeDifficulty;
    caloriesPerServing: number;
    rating: number;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
};

export type RecipesType = {
    recipes: RecipeType[];
};

export enum RecipeDifficulty {
    EASY = 'Easy',
    MEDIUM = 'Medium',
}

export enum MealType {
    BEVERAGE = 'Beverage',
    BREAKFAST = 'Breakfast',
    APPETIZER = 'Appetizer',
    LUNCH = 'Lunch',
    DINNER = 'Dinner',
    DESSERT = 'Dessert',
    SNACKS = 'Snacks',
    SIDE_DISH = 'Side Dish',
}

export enum Cuisine {
    ITALIAN = 'Italian',
    ASIAN = 'Asian',
    AMERICAN = 'American',
    MEXICAN = 'Mexican',
    MEDITERRANEAN = 'Mediterranean',
    PAKISTANI = 'Pakistani',
    JAPANESE = 'Japanese',
    MOROCCAN = 'Moroccan',
    KOREAN = 'Korean',
    GREEK = 'Greek',
    THAI = 'Thai',
    INDIAN = 'Indian',
    TURKISH = 'Turkish',
    BRAZILIAN = 'Brazilian',
    LEBANESE = 'Lebanese',
    SPANISH = 'Spanish',
    VIETNAMESE = 'Vietnamese',
    HAWAIIAN = 'Hawaiian',
    COCKTAIL = 'Cocktail',
    SMOOTHIE = 'Smoothie',
}

export const CuisineFlags: Record<Cuisine, string> = {
    Italian: '🇮🇹',
    Asian: '🌏',
    Cocktail: '🍸',
    Smoothie: '🥤',
    American: '🇺🇸',
    Mexican: '🇲🇽',
    Mediterranean: '🌍',
    Pakistani: '🇵🇰',
    Japanese: '🇯🇵',
    Moroccan: '🇲🇦',
    Korean: '🇰🇷',
    Greek: '🇬🇷',
    Thai: '🇹🇭',
    Indian: '🇮🇳',
    Turkish: '🇹🇷',
    Brazilian: '🇧🇷',
    Lebanese: '🇱🇧',
    Spanish: '🇪🇸',
    Vietnamese: '🇻🇳',
    Hawaiian: '🏝️',
};
