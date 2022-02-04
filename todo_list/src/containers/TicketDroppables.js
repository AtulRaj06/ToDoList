import React, { useContext } from 'react'
import { Droppable } from 'react-beautiful-dnd';
import DivCustom from '../components/Div/Div';
import Tickets from './Tickets';
import { Context } from '../App';

// Createing the Droppables, wheretickets in dropped
const TicketDroppables = ({ status="" }) => {
    const { tickets, filteredUserNames, searchedData } = useContext(Context)

    return (
        <DivCustom className="TicketDroppables">
            <h5 style={{ textAlign: "center" }}>{status}</h5>
            <DivCustom className="droppable_container">
                <Droppable droppableId={status}>
                    {(provided) => (
                        <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                            {tickets.map((val, index) => {
                                return (
                                    (searchedData.length !== 0) ?
                                        (filteredUserNames.length !== 0) ?
                                            ((val.status) === status && filteredUserNames.includes(val.assignedTo) && (val.title.includes(searchedData)||val.desc.includes(searchedData))) ?
                                                <Tickets key={val.title} val={val} index={index} />
                                                : null
                                            : ((val.status) === status && (val.title.includes(searchedData)||val.desc.includes(searchedData))) ?
                                                <Tickets key={val.title} val={val} index={index} />
                                                : null
                                        :
                                        (filteredUserNames.length !== 0) ?
                                            ((val.status) === status && filteredUserNames.includes(val.assignedTo)) ?
                                                <Tickets key={val.title} val={val} index={index} />
                                                : null
                                            : ((val.status) === status) ?
                                                <Tickets key={val.title} val={val} index={index} />
                                                : null
                                )
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DivCustom>
        </DivCustom>
    )
}

export default TicketDroppables;