import React, {useState} from 'react';
import { AddContainer, AddInput, AddPreparation, BottomWrapper, BottomWrapperLeft, BottomWrapperRight, RecipeWrapper, TopWrapper } from './style';
import RecipeIngridients from './ingridient'


const AddRecipe = () => {

    const initialValues = [
        /* {value:'kakao'},  // test ingridient
        {value:'liszt'} */   // test ingridient   
        ]; 

    const [ingridients, setIngridients] = useState(initialValues);
    const [value, setValue] = useState('');
    
    const [preparation, setPreparation] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [name, setName] = useState('')

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

    const submitRecipie = (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('ingridients', ingridients)
        formData.append('preparation', preparation)
        formData.append('difficulty', difficulty)
        formData.append('name', name)

    }

    return (
        <RecipeWrapper>
            <AddContainer>
                <TopWrapper>
                    <AddInput 
                        placeholder='Recipe name'
                        onChange={(e)=>setName(e.target.value)}
                        />
                    <img style={{width: '150px'}} src='https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'></img>
                </TopWrapper>
                <BottomWrapper>
                    <BottomWrapperLeft>
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
                    </BottomWrapperLeft>
                    <BottomWrapperRight> 
                        <label for='prep'>Preparation Instructions</label>
                        <textarea cols='40' rows='5' onChange={(e)=>setPreparation(e.target.value)}></textarea>
                        <select name='difficulty' placeholder='Difficulty' onChange={(e)=>setDifficulty(e.target.value)}>
                            <option value='category' disabled selected>Select a category</option>
                            <option value='easy'>Easy</option>
                            <option value='medium'>Medium</option>
                            <option value='hard'>Hard</option>
                        </select>
                    </BottomWrapperRight>
                </BottomWrapper>
                <button onClick={submitRecipie}>Submit</button>
            </AddContainer>
        </RecipeWrapper>
    )

}

export default AddRecipe;