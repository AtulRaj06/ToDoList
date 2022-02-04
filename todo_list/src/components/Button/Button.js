import { Button } from 'react-bootstrap';

function ButtonCustom({children, id, className, type, onClick, style} ,props){
    
    return <Button id={id} className={className} type={type} onClick={onClick} style={style}>{children}</Button>
}

export default ButtonCustom;