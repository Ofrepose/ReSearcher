
import {useState} from "react";

const initialValue = {
    font:'gPro',
    content:''
};

export const useForm = () =>{
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
        console.log(`${e.target.name} is target name. Value is ${e.target.value}`);
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };
    return [showSuccessMessage, values, handleChanges, handleSubmit]
}
