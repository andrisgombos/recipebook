import React, {useState} from 'react';
import Header from '../header/header';
import { homeContainer, ImageContainer, RecipeList, RecipeContainer, SearchBar } from './style';

const HomePage = () => {

    const Recipies = (props) => {

        const [recipie, setRecipie] = useState([])
    }

    return (
        <homeContainer>
            <Header/>
            <ImageContainer>
                <SearchBar placeholder='Search...'></SearchBar>
            </ImageContainer>
            <RecipeList>
                <RecipeContainer/>
                <RecipeContainer/>
                <RecipeContainer/>
                <RecipeContainer/>
            </RecipeList>

        </homeContainer>
    )
}


export default HomePage;
