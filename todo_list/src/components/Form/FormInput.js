import { Form } from 'react-bootstrap';

function FormInputCustom({type, placeholder, name,size, as , style, required, defaultValue, maxLength}){
    return <Form.Control size={size} as={as} maxLength={maxLength} style={style} type={type} placeholder={placeholder} name={name} required={required} defaultValue={defaultValue}></Form.Control>
}

export default FormInputCustom;