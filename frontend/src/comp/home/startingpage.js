import React, {useState} from 'react';
import { connect } from 'react-redux';
import Header from '../header/header';
import RecipieCreator from '../recipiecard/recipiecard';
import { RecipieCard } from '../recipiecard/style';
import { homeContainer, ImageContainer, RecipeList, RecipeContainer, SearchBar } from './style';

const HomePage = () => {


        const restExample = [
            {
            name: 'pizza',
            ingridients: ['liszt','paradicsom'],
            difficulty: 'medium',
            preparation: 'in da oven'
            },{
            name: 'bread',
            ingridients: 'flour',
            difficulty: 'medium',
            preparation: 'cook it until its ready'
            },
            {
                name: 'rice pudding',
                ingridients: ['rice','milk'],
                difficulty: 'easy',
                preparation: 'just cook em togetheeeeeeeeeeeeeeeeeeeeeeeeeeeer'
                },
        ];
        
        const [recipies, setRecipies] = useState(restExample)
    

    return (
        <homeContainer>
            <Header/>
            <ImageContainer>
                <SearchBar placeholder='Search...'></SearchBar>
            </ImageContainer>
            <RecipeList>
                    {recipies.map((recipie) =>
                        <RecipieCreator name={recipie.name} preparation={recipie.preparation} difficulty={recipie.difficulty} ingridients={recipie.ingridients}/>)}     

            </RecipeList>

        </homeContainer>
    )
}

// 

export default connect() (HomePage);
