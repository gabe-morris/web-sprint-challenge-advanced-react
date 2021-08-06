import {useState} from 'react'

const useLocalStorage = (key, iniValue) => {
    const [value, setValue] = useState(() => {
        if(localStorage.getItem(key)) {
            return(JSON.parse(localStorage.getItem(key)));
        }
        localStorage.setItem(key, JSON.stringify(iniValue));
        return (iniValue)
    })
    const setLocalStorageValue = (value) => {
        setValue(value)
        localStorage.setItem(key, JSON.stringify(value))
    }
    return [value, setLocalStorageValue]
}

const useForm = (iniValues) => {
    const [values, setValues] = useLocalStorage("form", iniValues)

    const handleChanges = e =>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        });
    }
    return [values, handleChanges]
}

export default useForm