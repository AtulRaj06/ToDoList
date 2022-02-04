import React from 'react'
import DivCustom from '../components/Div/Div'
import ButtonCustom from '../components/Button/Button'
import RetreveTicketModal from './RetreveTicketModal'

const Footer = () => {

    return (
        <DivCustom id="footer">
        <RetreveTicketModal/>
            <ButtonCustom className="btn-sm" type="button" id="retreveTicketBtn"  style={{ float: "right" }} >Restore Tickets</ButtonCustom>
        </DivCustom>
    )
}

export default Footer
