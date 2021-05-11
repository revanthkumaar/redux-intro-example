//action identifier for toggling fav meal

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';


//action to toggle favorite

export const toggleFavorite = (id) => {
    return {
        type: TOGGLE_FAVORITE,
        mealId: id 
    }
}