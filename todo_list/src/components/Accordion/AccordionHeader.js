import { Accordion } from 'react-bootstrap';

function AccordionHeaderCustom({children, onClick}){
    return <Accordion.Header onClick={onClick} >{children}</Accordion.Header>
}

export default AccordionHeaderCustom;