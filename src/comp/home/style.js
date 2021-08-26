import styled from 'styled-components';

export const homeContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    `

export const ImageContainer = styled.div`
    height: 45vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    `

export const RecipeList = styled.div`
    height: 51vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #f8f8f8;
    `

export const RecipeContainer = styled.div`
    width: 20%;
    height: 40vh;
    background-color: yellow;
    
    `

export const SearchBar = styled.input`
    background-color: rgb(255, 255, 255);
    border: none;
    width: 20%;
    display: block;
    border-bottom: 0.3rem solid transparent;
    padding: 1rem 1.5rem;
    transition: all 0.3s;
    font-size: 1.2rem;
    `
