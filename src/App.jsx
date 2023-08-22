import { useState } from "react";
import "./style.css";
import UserList from "./assets/components/UserList";
import FilterInput from "./assets/components/FilterInput";
import AllUsers from "./assets/components/AllUsers";


function App() {

  const [nameFilter, setNameFilter] = useState('')
  const [allUsers, setAllUsers] = useState([])


  return (
    <div className="background">
      <FilterInput nameFilter={nameFilter} setNameFilter={setNameFilter} ></FilterInput>
      <AllUsers allUsers={allUsers} setAllUsers={setAllUsers}></AllUsers>
       <UserList nameFilter={nameFilter} setNameFilter={setNameFilter} allUsers={allUsers}></UserList>
    </div>
  );
}

export default App; 
