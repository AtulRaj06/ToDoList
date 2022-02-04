import React from 'react'
import UserIcon from './UserIcon'
import { useContext } from 'react'
import { Context } from '../App'

const AssignedUsers = () => {
    const { tickets, filteredUserNames, setFilteredUserNames } = useContext(Context)
    var assignedUserNames = tickets.map((val) => { return val.assignedTo })
    assignedUserNames = [...new Set(assignedUserNames)]
    const clownFilteredUN = [...filteredUserNames]
    filteredUserNames.forEach((val, ind) => {
        if (!assignedUserNames.includes(val)) {
            clownFilteredUN.splice(ind, 1)
            setFilteredUserNames(clownFilteredUN)
        }
    })

    // Place filter for specific user
    const handleClick = (e, val) => {
        e.target.style["box-shadow"] = "0px 0px 10px blue"
        e.target.style["border"] = "1px solid blue";
        var userNames = [...filteredUserNames]
        if (!filteredUserNames.includes(val)) {
            userNames.push(val)
            setFilteredUserNames(userNames)
        }
    }
    // Remoeve filter from the user
    const handleDoubleClick = (e, val) => {
        e.target.style["box-shadow"] = ""
        e.target.style["border"] = "1px solid #000000";
        var userNames = [...filteredUserNames]
        userNames.splice(userNames.indexOf(val), 1)
        setFilteredUserNames(userNames)
    }
    var bgCol = "black"
    return (
        <div>
            {/* Assining colors to users accoring to lenth of there names */}
            {assignedUserNames.map((val, ind) => {
                switch (val.length % 5) {
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
                return <UserIcon key={val} user={val} title={val} style={{ backgroundColor: bgCol }} handleClick={handleClick} handleDoubleClick={handleDoubleClick} />
            })}
        </div>
    )
}

export default AssignedUsers