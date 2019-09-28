import React from 'react';
import "./styles.scss";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class ATMComponent extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        value: '',
      availableDenominations: [1,2,5,10,20,50,100,200,500,2000],
      dispensedNotes: []
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }

    // On TextField Edit
    handleChange(event) {
      this.setState({errorText: '', errorStatus: false});
      this.setState({value: event.target.value});
    }
  
    // On Submit Click
    handleSubmit(event) {
      event.preventDefault();
      if(isNaN(this.state.value)){
         this.setState({errorText: 'Please Enter Valid Amount', errorStatus: true});
      }
      else{
            this.valuehandleSubmit(this.state.value);
          }     
    }

    // Calculcation
    valuehandleSubmit = (amount) => {
      let remainingAmount = +amount;
      let currentDenominationIndex = this.state.availableDenominations.length - 1;
      const dispensedNotes = [];
      while (remainingAmount) {
        const numberOfNotes = Math.floor(remainingAmount / this.state.availableDenominations[currentDenominationIndex]);
        if (numberOfNotes > 0) {
          remainingAmount = remainingAmount % this.state.availableDenominations[currentDenominationIndex];
        }
        dispensedNotes.push({
          denomination: this.state.availableDenominations[currentDenominationIndex],
          numberOfNotes,
        })
        --currentDenominationIndex;
      }
      this.setState({ dispensedNotes: dispensedNotes.reverse() });
    }

    render() {
      let totalNotes = 0;
      let dispensedNotesContent;
      if (this.state.dispensedNotes.length) {
        dispensedNotesContent = this.state.dispensedNotes.map((value) => {
          totalNotes += value.numberOfNotes;
          return (<ListItem key={value.denomination}>
            <ListItemText primary={`${value.numberOfNotes} notes of Rs ${value.denomination} ` } />
            </ListItem>)
        })
      }

       return (
          <div className="mt-4 padding-2">
        <Grid container spacing={3}>
         
        <Grid item xs={6}>
          <Paper className="padding-2">
             <div className="padding-2"><h2>Welcome to ATM</h2></div>
             <form onSubmit={this.handleSubmit}>
               <div className="padding-10">
             <TextField
                id="standard-multiline-flexible"
                label="Enter the Amount"
                className="input-field"
                margin="normal"
                value={this.state.value} 
                onChange={this.handleChange} 
                helperText={this.state.errorText}
                error={this.state.errorStatus} 
            />
             </div>

             <div> <input onSubmit={this.handleSubmit} className="btn btn-primary" type="submit" value="Get Money" />
             </div>
             </form>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          {this.state.dispensedNotes.length !== 0 && <Paper className="bg-secondary">
              <h4 className="text-left margin-2">You will get the following amount</h4>
              <List>{dispensedNotesContent}</List>
              <h4 className="text-left">Total notes dispensed: {totalNotes}</h4>
            </Paper>}

        </Grid>
      </Grid>
          </div>
       );
    }
 }

 export default ATMComponent;
 

 