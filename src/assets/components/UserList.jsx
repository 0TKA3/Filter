const UserList = (props) => {
    
    const filteredUsers = props.allUsers.filter(elem => elem.includes(props.nameFilter));
    return (
        <ul>
            {filteredUsers.map((elem, index) => (
                <li key={index}>{elem}</li>
            ))}
        </ul>
    );
};

export default UserList;
