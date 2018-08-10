import React from 'react';
//import ReactDom from 'react-dom';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchValue: 'Enter a value to be searched'};

        // bind to make them accessable by 'this'
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({searchValue: event.target.value});
    }

    handleSubmit(event){
        this.props.handleSearch(this.state.searchValue); // send search value to parent app element
        event.preventDefault();
    }

    render(){
        return (
        <div id="Search" className="gen">
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.searchValue} onChange={this.handleChange} />
                <input type="submit" value="Search!"/>
            </form>
        </div>    
        );
    }
}

export default Search;