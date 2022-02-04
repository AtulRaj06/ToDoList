import React from 'react'

// Creating user icons in the header and on the ticket
const UserIcon = ({user, title, style, handleClick, handleDoubleClick}) => {
    var initials=user.split(" ").map((value)=>{return value[0]})
    initials=initials.join("").substr(0,2).toUpperCase()
    return (
        <span className="userIcon" title={title} style={style} onClick={(e)=>{handleClick(e, user)}} onDoubleClick={(e)=>{handleDoubleClick(e, user)}}>
            {initials}
        </span>
    )
}

export default UserIcon

