import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cyborgs: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ cyborgs: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { cyborgs, searchField } = this.state;
    const filteredCyborgs = cyborgs.filter(cyborgs =>
      cyborgs.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Cyborgs Rolodex</h1>
        <SearchBox
          placeholder="search cyborgs"
          handleChange={this.handleChange}
        />
        <CardList cyborgs={filteredCyborgs} />
      </div>
    );
  }
}

export default App;
