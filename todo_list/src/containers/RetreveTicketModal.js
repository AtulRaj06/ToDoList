import React, { useContext } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import { Context } from '../App'
import FormCustom from '../components/Form/Form';
import TicketContent from './TicketContent';

const RetreveTicketModal = () => {
    const { showModal, setShowModal, deletedTickets } = useContext(Context)

    const openCloseModal = () => {
        setShowModal({ formModal: false, binModal: false })
    }

    return (
        <Modal show={showModal.binModal} id="modal">
            <h4><Modal.Header>Recycle Bin:</Modal.Header></h4>
            <FormCustom id="myform3" >
                <ModalBody>
                    {deletedTickets.length !== 0 ?
                            deletedTickets.map((val, index) => {
                                return (<div key={index}>
                                    <TicketContent val={val} index={index} restore={true} />
                                </div>)
                            })
                        :
                        <div>No Items Left in Recycle Bin.</div>
                    }
                </ModalBody>
                <ModalFooter style={{ display: "flex" }}>
                    <Button className="btn-sm btn-success" onClick={openCloseModal}>Done</Button>
                </ModalFooter>
            </FormCustom>
        </Modal>
    )
}

export default RetreveTicketModal
