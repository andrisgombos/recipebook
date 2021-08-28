import React from 'react';

const RecipeIngridients = (ingridient, index) => {

    return (
        <div>
            <div>{ingridient.value}</div>
            <button>X</button>
        </div>
    )
}

export default RecipeIngridients;