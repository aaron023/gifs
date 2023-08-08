import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [intpuValue, setIntpuValue] = useState('');

    const onInputChange = ({target}) => {
        //console.log(target.value);
        setIntpuValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //console.log(intpuValue);
        if( intpuValue.trim().length <= 1 ) return;

        //setCategories( categories => [ intpuValue, ...categories ] );
        onNewCategory(intpuValue.trim());
        setIntpuValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar Gifts"
                value = { intpuValue }
                onChange = { onInputChange }
            />
        </form>
        
    )
}
