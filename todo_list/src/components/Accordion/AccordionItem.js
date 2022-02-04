import { Accordion } from 'react-bootstrap';

function AccordionItemCustom({children, eventKey}){
    return <Accordion.Item eventKey={eventKey}>{children}</Accordion.Item>
}

export default AccordionItemCustom;