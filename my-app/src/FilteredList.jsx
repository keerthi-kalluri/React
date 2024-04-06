import React, { Component } from 'react';
import {  DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';
 
class FilteredList extends Component {
  
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      type: "All",
    };
  }
  getFilteredItems = () => {
    const { items } = this.props;
    const { type } = this.state;
    if (type === 'All') {
      return items;
    } else {
      return items.filter((item) => item.type === type);
    }
  };
  
 

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  onFilter = (eventKey) => {
    this.setState({ type: eventKey });
  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
      return item.name.toLowerCase().search(this.state.search) !== -1;
  }

  render(){
    const filteredItems = this.getFilteredItems();
    return (
      <div className = "filter-list"> 
          <h1>Produce Search</h1>
          <DropdownButton className="dropdown-button" title="Type Dropdown" onSelect={this.onFilter}>
            <Dropdown.Item eventKey="Vegetable" >Vegetables</Dropdown.Item>
            <Dropdown.Item eventKey="Fruit" >Fruits</Dropdown.Item>
            <Dropdown.Item eventKey="All" >All</Dropdown.Item>
          </DropdownButton> <br/>
                <ul>{filteredItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}</ul>
      <br/>
          <input type = "text" placeholder = "Search" onChange = {this.onSearch} /> 
          <br/>
          <List items = {this.props.items.filter(this.filterItem)} />
        </div>
    );
  }
}

export default FilteredList;
