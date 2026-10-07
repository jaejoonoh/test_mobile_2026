import { useState } from 'react';

const InputField = () => {
    const [value, setValue] = useState('');

    return <input value={value} />;

};

export default InputField;