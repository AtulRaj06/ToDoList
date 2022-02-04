import { Form } from 'react-bootstrap';

function FormCustom({children, id, className, onSubmit}){
    
    return <Form id={id} className={className} onSubmit={onSubmit}>{children}</Form>
}

export default FormCustom;