import React from 'react';
import { RecipieCard, RecipieName, RecipieDifficulty, RecipiePreparation } from './style';


const RecipieCreator = (recipie) => {


    return  (
        <RecipieCard>
            <RecipieName>{recipie.name}A</RecipieName>
            <RecipiePreparation>{recipie.preparation}C</RecipiePreparation>
            <RecipieDifficulty>{recipie.difficulty}B</RecipieDifficulty>
        </RecipieCard>
    )
}

export default RecipieCreator;