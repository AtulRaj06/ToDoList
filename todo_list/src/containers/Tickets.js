import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import TicketContent from './TicketContent'

// Creating tickets
const Tickets = ({ val={}, index=0 }) => {
    return (
        <Draggable key={val.title} draggableId={val.title} index={index}>
            {(provided) => (
                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <TicketContent val={val} index={index}/>
                </li>
            )}
        </Draggable>
    )
}

export default Tickets
