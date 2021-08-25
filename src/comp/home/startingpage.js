import React from 'react';
import Header from '../header/header';
import { homeContainer, ImageContainer } from './style';

const HomePage = () => {



    return (
        <homeContainer>
            <Header/>
            <ImageContainer>
                <input className='searchBar'></input>
                <button className='searchButton'></button>
            </ImageContainer>
            <div className='recipeList'>
            </div>
        </homeContainer>
    )
}


export default HomePage;
