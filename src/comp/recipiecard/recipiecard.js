import React from 'react';
import { connect } from 'react-redux';
import { RecipieCard, RecipieName, RecipieDifficulty, RecipiePreparation } from './style';


const RecipieCreator = (recipie) => {


    return  (
        <RecipieCard>
            <RecipieName>{recipie.name}A</RecipieName>
            <RecipiePreparation>{recipie.preparation}C</RecipiePreparation>
            <RecipieDifficulty>{recipie.difficulty}C</RecipieDifficulty>
        </RecipieCard>
    )
}

export default connect() (RecipieCreator);