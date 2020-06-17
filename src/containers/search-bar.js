import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'; 

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: ''};
        this.handleClick = this.handleClick.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    
    handleClick(event) {
        this.setState({term: event.target.value});
     }

     submitForm(event) {
         event.preventDefault();
         this.props.fetchWeather(this.state.term);
         this.setState({term: this.state.term});
     }
 render() {
     return (
         <form className="inputGroup" onSubmit={this.submitForm}>
             <input 
             placeholder="Enter the value"
             value={this.state.term}
             onChange={this.handleClick}
             />
             <span className="input-group-button">
                 <button type="submit" className="btn btn-secondary">Search</button>
             </span>
         </form>
     );
 }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
