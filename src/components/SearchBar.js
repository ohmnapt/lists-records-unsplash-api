import React from 'react';

class SearchBar extends React.Component{
 state = {term:''};

 onFormsubmit = event => {
     event.preventDefault(); //don't allow form to auto submit
     
     
     this.props.onSubmit(this.state.term);
 }

    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormsubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                </div>
            </form>    
        </div>)
    }
}

export default SearchBar;