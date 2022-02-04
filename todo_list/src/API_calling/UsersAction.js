const UserAction = (setUsers=()=>{}) => {
    // Calling data from API usning fetch method
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: "GET",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => response.json())
        .then((json) => {
            setUsers(json)
        })
        .catch(error => console.log(error))
}

export default UserAction;