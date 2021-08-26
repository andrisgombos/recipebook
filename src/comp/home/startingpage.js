import React from 'react';
import Header from '../header/header';
import { homeContainer, ImageContainer, RecipeList, RecipeContainer, SearchBar } from './style';

const HomePage = () => {



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
