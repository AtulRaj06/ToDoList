import React from 'react'
import DivCustom from '../components/Div/Div'
import { Context } from '../App';
import { DragDropContext } from 'react-beautiful-dnd';
import { useContext } from 'react';
import TicketDroppables from './TicketDroppables';
import Header from './Header';

const ListsContainer = () => {
    const { tickets, setTickets, deletedTickets, setDeletedTickets } = useContext(Context)

    // function to handle the drag and drops
    function handleOnDragEnd(result) {
        console.log(result)
        const { destination, source } = result
        if ((!result.destination)
            || (destination.droppableId === source.droppableId && destination.index === source.index)
            || (destination.droppableId === null)) { }

        else if (source.droppableId === "Done") {
            alert("You cannot change the Status once it is Done.")
        }
        else if (destination.droppableId === "deleteTicket") {
            const items = Array.from(tickets);
            const deletedItems = Array.from(deletedTickets)
            const [del] = items.splice(source.index, 1)
            deletedItems.push(del);
            setDeletedTickets(deletedItems)
            setTickets(items)
        }

        else if (destination.droppableId !== source.droppableId) {
            tickets[source.index].status = destination.droppableId
            const items = Array.from(tickets);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index , 0, reorderedItem);
            setTickets(items);
        }
        else {
            const items = Array.from(tickets);
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
            setTickets(items);
        }
    }

    return (
        <DivCustom className="">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Header />
                <DivCustom className="row">
                    <DivCustom className="col">
                        <TicketDroppables status="ToDo" />
                    </DivCustom>
                    <DivCustom className="col">
                        <TicketDroppables status="Ready" />
                    </DivCustom>
                    <DivCustom className="col">
                        <TicketDroppables status="InDev" />
                    </DivCustom>
                    <DivCustom className="col">
                        <TicketDroppables status="QA" />
                    </DivCustom>
                    <DivCustom className="col">
                        <TicketDroppables status="Done" />
                    </DivCustom>
                </DivCustom>
            </DragDropContext>
        </DivCustom>
    )
}

export default ListsContainer
