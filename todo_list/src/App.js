import './App.css';
import React, { useState } from 'react';
import DivCustom from './components/Div/Div';
import ListsContainer from './containers/ListsContainer';
import { Context } from './Context/ContextStates';
import {ticketData, deletedTicketData} from './ticketData';

function App() {
  const [tickets, setTickets] = useState(ticketData)
  const [showModal, setShowModal] = useState({formModal:false, binModal:false})
  const [users, setUsers] = useState([])
  const [modalData, setModalData] = useState(undefined)
  const [filteredUserNames, setFilteredUserNames] = useState([])
  const [searchedData, setSearchedData] = useState("")
  const [deletedTickets, setDeletedTickets] = useState(deletedTicketData)

  console.log(tickets)
  console.log(deletedTickets)
  console.log(filteredUserNames)

  
  return (
    <DivCustom className="container">
      <Context.Provider value={{
        tickets, setTickets,
        showModal, setShowModal,
        users, setUsers,
        modalData, setModalData,
        filteredUserNames, setFilteredUserNames,
        searchedData, setSearchedData,
        deletedTickets, setDeletedTickets
      }}>
        <ListsContainer />
      </Context.Provider>
    </DivCustom>
  );
}
export default App;
export { Context }
