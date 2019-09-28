import React from 'react';
import "./styles.scss";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ATMComponent extends React.Component {

   constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    
    handleChange(event) {
      this.setState({errorText: '', errorStatus: false});
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      
      event.preventDefault();

      if(isNaN(this.state.value)){
         this.setState({errorText: 'Please Enter Valid Amount', errorStatus: true});
      }
      else{
            alert("no");
          }     
    }

    
    render() {
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
            multiline
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
          <Paper>

          <div className="padding-2"><h4 style={{textAlign: 'left'}}>You will get the following</h4></div>


          </Paper>
        </Grid>
         
      </Grid>
              <div className="left"></div>
              <div className="right"></div>

          </div>
       );
    }
 }

 export default ATMComponent;
 