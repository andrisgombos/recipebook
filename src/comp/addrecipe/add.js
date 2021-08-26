import React, {useState} from 'react';
import { AddContainer, AddInput, AddPreparation, BottomWrapper, RecipeWrapper, TopWrapper } from './style';
import RecipeIngridients from './ingridient'


const AddRecipe = () => {


    const [ingridients, setIngridients] = useState([]);
    const [value, setValue] = useState('');

    const addIngridient = (newI) => {
        const newIngridients = [...ingridients, {newI}];
        setIngridients(newIngridients)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addIngridient(value)
        setValue('');
    }

    return (
        <RecipeWrapper>
            <AddContainer>
                <TopWrapper>
                    <AddInput/>
                </TopWrapper>
                <BottomWrapper>
                    <form onSubmit={handleSubmit}>
                        <div>
                            {ingridients.map((ingridient, index) => {
                                return <div
                                            key={index}
                                            ingridient={ingridient}
                                            >
                                            {ingridients}
                                        </div>
                            
                                })
                            }
                        </div>
                        <AddPreparation 
                            placeholder='New ingridient'
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            />
                    </form>
                </BottomWrapper>
            </AddContainer>
        </RecipeWrapper>
    )

}

export default AddRecipe;