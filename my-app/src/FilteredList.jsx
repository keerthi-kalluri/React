import React, { useState } from 'react';
import {  DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';
 
const FilteredList = (props) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  //Sets the state whenever the user types on the search bar

  const onSearch = (event) => {
    setSearch(event.target.value.trim().toLowerCase());
  };

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  const onFilter = (eventKey) => {
    setType(eventKey);
  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  
    return (
      <div className = "filter-list"> 
          <h1>Produce Search</h1>
          <DropdownButton className="dropdown-button" title={type} onSelect={onFilter}>
            <Dropdown.Item eventKey="Vegetable" >Vegetables</Dropdown.Item>
            <Dropdown.Item eventKey="Fruit" >Fruits</Dropdown.Item>
            <Dropdown.Item eventKey="All" >All</Dropdown.Item>
          </DropdownButton> <br/>
                
      <br/>
          <input type = "text" placeholder = "Search" onChange = {onSearch} /> 
          <br/>
          <List items={props.items.filter((item) => (item.type === type || type === 'All') && item.name.toLowerCase().search(search) !== -1)} />
   
        </div>
    );
  }



export default FilteredList;