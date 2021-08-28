import React, {useState} from 'react';
import { AddContainer, AddInput, AddPreparation, BottomWrapper, RecipeWrapper, TopWrapper } from './style';
import RecipeIngridients from './ingridient'


const AddRecipe = () => {

    const initialValues = [
        /* {value:'kakao'},  // test ingridient
        {value:'liszt'} */   // test ingridient   
        ]; 

    const [ingridients, setIngridients] = useState(initialValues);
    const [value, setValue] = useState('');

    const addIngridient = (value) => {
        const newIngridients = [...ingridients, {value}];
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
                                        key={ingridient.index}
                                        index={ingridient.index}
                                        ingridient={ingridient.value}
                                        >{ingridient.value}
                                        </div>
                            })}
                        </div>
                        <AddPreparation 
                            placeholder='New ingridient'
                            value={value}
                            type='text'
                            onChange={e => setValue(e.target.value)}
                            />
                    </form>
                </BottomWrapper>
            </AddContainer>
        </RecipeWrapper>
    )

}

export default AddRecipe;