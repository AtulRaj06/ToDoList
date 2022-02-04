import React, { useContext } from 'react'
import DivCustom from '../components/Div/Div'
import ButtonCustom from '../components/Button/Button'
import FormModal from './FormModal'
import { Context } from '../App'
import AssignedUsers from './AssignedUsers'
import SearchForm from './SearchForm'
import UserAction from '../API_calling/UsersAction'
import { Droppable } from 'react-beautiful-dnd'
import RetreveTicketModal from './RetreveTicketModal'

const Header = () => {
    const { users, setUsers, setShowModal } = useContext(Context)
    // Open cretae ticket form
    const openFormModal = () => {
        setShowModal({formModal:true, binModal:false})
        if (users.length === 0) {
            UserAction(setUsers)
        }
    }
    // Open recycle bin
    const openBinModal = () => {
        setShowModal({formModal:false, binModal:true})
        console.log("inside Bin")
    }
    return (
        <DivCustom id="header">
            <DivCustom id="title">
                <DivCustom id="titleName">
                    <span>ToDo List</span>
                </DivCustom>
                <DivCustom>
                    <Droppable droppableId="deleteTicket">
                        {(provided) => (
                            <span {...provided.droppableProps} ref={provided.innerRef}>
                                <img id="topDeleteIcon" src="delete.png" alt="Delete" title="Delete" onClick={openBinModal}/> 
                            </span>
                        )}
                    </Droppable>
                </DivCustom>
                <DivCustom style={{ paddingRight: "20px" }}>
                    <SearchForm />
                </DivCustom>
                <DivCustom >
                    <AssignedUsers style={{ display: "flex" }} />
                </DivCustom>
                <DivCustom>
                    <ButtonCustom className="btn-sm btn-danger" type="button" id="createTicketBtn" onClick={openFormModal} style={{ float: "right" }} >Create Ticket</ButtonCustom>
                </DivCustom>
            </DivCustom>
            <RetreveTicketModal />
            <FormModal />
        </DivCustom>
    )
}

export default Header
