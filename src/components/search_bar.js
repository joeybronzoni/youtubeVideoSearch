// without es6
// import React from 'react';
// with es6 which is the same as saying : const Component = React.Component;
import React, { Component } from 'react';

// This is called a functional component which doesn't handle state
/* 1:
  const SearchBar = () => {
  return <input />;
};*/

// This is called a Class component which does handle state
/* 2a:
  class SearchBar extends React.Component {
  render() {
    return <input />;
  }
}*/

// we can clean up this component by using ES6 syntax like this:
// but we need to adjust the import with deconstructing as shown up top
/* 2b:
class SearchBar extends React.Component {
  render() {
    return <input onChange={this.onHandleChange} />;
  }

  onHandleChange(event) {
    console.log('This is event.target.value: ', event.target.value);
  }
}*/


// 2c: but if I want to make use of the es6 syntax I can eliminate the onHandleChange() completely and just run this:
/*
class SearchBar extends React.Component {
  render() {
    return <input onChange={(event) => {
	  console.log('This is event.target.value: ', event.target.value);
	}} />;
  }
}*/

// 2d: *The wesbos way

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

	this.state = { term: ''};
  }
  render() {
    return (
	  <div className="search-bar">
		<input
    	  value={this.state.term}
	      onChange={event => this.onInputChange(event.target.value)} />
	  </div>
	);
  }
  // vid 2/31 I could change this to take two functions but it looks cleaner like this with handling one arg
  onInputChange(term) {
    this.setState({ term });
	this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
