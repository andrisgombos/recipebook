import React, {useState} from 'react';
import { connect } from 'react-redux';
import { RecipieCard, RecipieName, RecipieDifficulty, RecipiePreparation } from './style';


const RecipieCreator = (recipie) => {

    const colors = ['#f9f4b1', '#aff0f6', '#cdeaba', '#fed9bd']

    const randomBackground = () => {
        Math.floor(Math.random() * colors.length)
        console.log(randomBackground)
    }

    return  (
        <RecipieCard style={{backgroundColor: colors[randomBackground]}}>
            <RecipieName>{recipie.name}</RecipieName>
            <RecipiePreparation>{recipie.preparation}</RecipiePreparation>
            <RecipiePreparation>{recipie.ingridients}</RecipiePreparation>
            <RecipieDifficulty>{recipie.difficulty}</RecipieDifficulty>
        </RecipieCard>
    )
}

export default connect() (RecipieCreator);