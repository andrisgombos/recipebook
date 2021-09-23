import React, {useState} from 'react';
import { connect } from 'react-redux';
import { RecipieCard, RecipieName, RecipieDifficulty, RecipiePreparation } from './style';


const RecipieCreator = (recipie) => {


    return  (
        <RecipieCard>
            <RecipieName>{recipie.name}</RecipieName>
            <RecipiePreparation>{recipie.preparation}</RecipiePreparation>
            <RecipieDifficulty>{recipie.difficulty}</RecipieDifficulty>
        </RecipieCard>
    )
}

export default connect() (RecipieCreator);