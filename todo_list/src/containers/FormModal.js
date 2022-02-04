import React, { useContext } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import { Context } from '../App'
import FormCustom from '../components/Form/Form';
import FormLabelCustom from '../components/Form/FormLabel';
import FormInputCustom from '../components/Form/FormInput';
import DivCustom from '../components/Div/Div';


const FormModal = () => {
    const { tickets, setTickets, users, showModal, setShowModal, modalData, setModalData, deletedTickets, setDeletedTickets } = useContext(Context)

    var defval
    (modalData === undefined) ?
        defval = { title: "", desc: "", status: "", assignedTo: "", priority: 1 } :
        defval = { title: modalData.data.title, desc: modalData.data.desc, status: modalData.data.status, assignedTo: modalData.data.assignedTo, priority: modalData.data.priority }
    const openCloseModal = () => {
        setShowModal({formModal:false, binModal:false})
        setModalData(undefined)
    }
    // To add new tickets
    const submitTicket = (e) => {
        e.preventDefault();
        var newTicket = {
            title: e.target.title.value,
            desc: e.target.description.value,
            status: e.target.status.value,
            assignedTo: e.target.assignedTo.value,
            priority: Number(e.target.priority.value)
        }
        console.log(e.target.priority.value)
        var alltickets = [...tickets];

        (modalData === undefined) ?
            alltickets.push(newTicket) :
            alltickets[modalData.index] = newTicket
        setTickets(alltickets)
        openCloseModal()
    }
    // To delete tickets
    const deleteTicket = () => {
        const items = Array.from(tickets);
        const deletedItems = Array.from(deletedTickets)
        const [del]=items.splice(modalData.index, 1)
        deletedItems.push(del);
        setDeletedTickets(deletedItems)
        setTickets(items)
        openCloseModal()

    }

    return (
        <Modal show={showModal.formModal} id="modal">
            <h4><Modal.Header>Enter Ticket Data:</Modal.Header></h4>
            <FormCustom id="myform3" onSubmit={submitTicket}>
                <ModalBody>
                    <FormLabelCustom>Title: </FormLabelCustom>
                    <FormInputCustom type="text" className="tableInp" placeholder="Title"
                        maxLength="20" name="title" required={true} defaultValue={defval.title} size="sm" />
                    <FormLabelCustom>Description: </FormLabelCustom>
                    <DivCustom className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="description" maxLength="500" defaultValue={defval.desc} required></textarea>
                    </DivCustom>
                    <FormLabelCustom>Status:</FormLabelCustom>
                    {(modalData === undefined || modalData.data.status === "Done") ?
                        <select className="form-select form-select-sm" aria-label="Default select example" name="status" defaultValue={defval.status} disabled>
                            <option value="ToDo">ToDo</option>
                            <option value="Done">Done</option>
                        </select> :
                        <select className="form-select form-select-sm" aria-label="Default select example" name="status" defaultValue={defval.status}>
                            <option value="ToDo">ToDo</option>
                            <option value="Ready">Ready To Start</option>
                            <option value="InDev">In Development</option>
                            <option value="QA">In QA</option>
                            <option value="Done">Done</option>
                        </select>}
                    <FormLabelCustom>Assigned To:</FormLabelCustom>
                    <select className="form-select form-select-sm" aria-label="Default select example" name="assignedTo" defaultValue={defval.assignedTo}>
                        {users && users.map((val, index) => {
                            return (
                                <option value={val.name} key={val.name}>{val.name}</option>
                            );
                        })}
                    </select>
                    <FormLabelCustom>Priority: </FormLabelCustom>
                    <input type="range" class="form-range" min="1" max="3" step="1" name="priority" defaultValue={defval.priority}></input>
                    <ul style={{ display: "flex" }}><li style={{ flex: "1" }}>Low</li><li style={{ flex: "1", textAlign: "center" }}>Modrate</li><li style={{ flex: "1", textAlign: "right" }}>High</li></ul>
                </ModalBody>
                <ModalFooter style={{ display: "flex" }}>
                    {(modalData === undefined) ?
                        null :
                        <span style={{ flex: "1" }}><Button className="btn-sm btn-danger" onClick={deleteTicket} >Delete</Button></span>}
                    <Button className="btn-sm" type="submit" >Save</Button>
                    <Button className="btn-sm" onClick={openCloseModal}>Cancel</Button>
                </ModalFooter>
            </FormCustom>
        </Modal>
    )
}

export default FormModal
