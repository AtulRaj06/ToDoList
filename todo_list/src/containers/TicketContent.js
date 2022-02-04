import React, { useContext, useState } from 'react'
import DivCustom from '../components/Div/Div'
import UserIcon from './UserIcon'
import { Context } from '../App'
import UserAction from '../API_calling/UsersAction'
import ButtonCustom from '../components/Button/Button'

const TicketContent = ({ val = [], index = [], restore = false }) => {
    const { tickets, setTickets, users, setUsers, setShowModal, setModalData, deletedTickets, setDeletedTickets } = useContext(Context)
    const [showAll, setshowAll] = useState(false)
    // To edit ticket
    const editTicket = () => {
        if (users.length === 0) {
            UserAction(setUsers)
        }
        setShowModal({ formModal: true, binModal: false })
        setModalData({ data: tickets[index], index: index })
    }
    // To restore deleted ticket
    const restoreData = () => {
        const cloneTickets = [...tickets]
        cloneTickets.push(val)
        setTickets(cloneTickets)
        const cloneDeletedTickets = [...deletedTickets]
        cloneDeletedTickets.splice(index, 1)
        setDeletedTickets(cloneDeletedTickets)
    }
    // delete a ticket permanently
    const permanentDeleteData = () => {
        const cloneDeletedTickets = [...deletedTickets]
        cloneDeletedTickets.splice(index, 1)
        setDeletedTickets(cloneDeletedTickets)
    }

    // Specify Background color
    var bgCol
    switch (val.assignedTo.length % 5) {
        case 0: bgCol = "darkgoldenrod";
            break;
        case 1: bgCol = "blue";
            break;
        case 2: bgCol = "grey";
            break;
        case 3: bgCol = "brown";
            break;
        case 4: bgCol = "green";
            break;
        default: bgCol = "black";
    }

    // Specify priority of tickets
    var content
    var progressBarStyle
    switch (val.priority) {
        case 1: content = "Low"
            progressBarStyle = { width: "30%", backgroundColor: "yellow", color: "black" }
            break;
        case 2: content = "Modrate"
            progressBarStyle = { width: "60%", backgroundColor: "orange" }
            break;
        case 3: content = "High"
            progressBarStyle = { width: "100%", backgroundColor: "red" }
            break;
        default: progressBarStyle = { width: "30%", backgroundColor: "yellow", color: "black" }
            break;
    }
    const showmore = () => {
        setshowAll(true)

    }
    const showless = () => {
        setshowAll(false)

    }
    return (
        <DivCustom className="tickets" onDoubleClick={editTicket}>
            <div className="progress" style={{ marginBottom: "5px", height: "14px" }}>
                <div className="progress-bar progress-bar-danger progress-bar" role="progressbar"
                    aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={progressBarStyle}>
                    {content}
                </div>
            </div>
            {/* {index}<br /> */}
            <b>{val.title}</b> <br />
            {!showAll ?
                val.desc.length > 40 ? <span>{val.desc.substr(0, 40)}<span onClick={showmore}>. . . </span></span>
                    : val.desc :
                val.desc.length > 40 ?
                    <span>{val.desc}<ButtonCustom className="btn-sm btn-light" onClick={showless}>Show Less</ButtonCustom></span>
                    :
                    val.desc
            }
             <br />
            <DivCustom >
                <ul style={{ display: "flex" }}>
                    <li className="ticketLI"><b>{val.status}</b></li>
                    <li className="ticketLI" style={{ textAlign: "right" }}>
                        {restore ?
                            <span>
                                <span onClick={permanentDeleteData}>
                                    <img id="deleteIcon" src="delete.png" alt="Delete" height="20px" width="20px" />
                                </span>
                                <span style={{ marginRight: "20px" }} onClick={restoreData}>
                                    <img id="restoreIcon" src="curve-arrow.png" alt="Restore" height="20px" width="20px" />
                                </span>
                            </span>
                            : null}

                        <UserIcon user={val.assignedTo}
                            style={{ backgroundColor: bgCol }}
                            title={val.assignedTo}
                            handleClick={() => { }}
                            handleDoubleClick={() => { }}
                        />
                    </li>
                </ul>
            </DivCustom>
        </DivCustom>
    )
}

export default TicketContent
