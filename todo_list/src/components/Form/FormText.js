import { Form } from 'react-bootstrap';

function FormTextCustom({children, className}){
    
    return <Form.Text className={className}>{children}</Form.Text>
}

export default FormTextCustom;