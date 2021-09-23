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
            ingridients: [{
                value: 'liszt'
            },
            {
                value: 'paradicsom'
            }],
            difficulty: 'medium',
            preparation: 'in da oven'
            },{
            name: 'bread',
            ingridients: 'flour',
            difficulty: 'medium',
            preparation: 'cook it until its ready'
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
                        <RecipieCreator name={recipie.name} preparation={recipie.preparation} difficulty={recipie.difficulty}/>)}     

            </RecipeList>

        </homeContainer>
    )
}


export default connect() (HomePage);
