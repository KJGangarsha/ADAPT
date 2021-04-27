import React, { Component } from 'react'
import { withRouter } from 'react-router';
import GuestService from '../../Services/GuestService';

class CheckOut extends Component {
constructor(props) {
    super(props)

    /* Declaring state variables */
    this.state = {
         guests:[]
     
    } 
    /* Binding handlers */   
    this.editGuest=this.editGuest.bind(this);
    this.checkOutGuest=this.checkOutGuest.bind(this);
}

/* Component did mount method */
componentDidMount(){
    GuestService.getGuests().then((res) => {
        this.setState({ guests: res.data});
    });    
}

/* edit guest method */
editGuest=(guestId)=>{
    this.props.history.push(`/editGuest/${guestId}`);
}

/* Delete guest method */

deleteGuest(guestId){
    GuestService.deleteGuest(guestId).then( res => {
        this.setState({guests: this.state.guests.filter(guest => guest.guestId !== guestId)});
    });
}

/* view guest method */
viewGuest(guestId){
    this.props.history.push(`/viewGuest/${guestId}`);
}

/* checkout guest method call */

checkOutGuest=(guestId, room, date)=>{
    this.props.history.push(`/checkOutGuest/${guestId}/${room}/${date}`);  
    localStorage.setItem("checkInDate",date);    
}

    render() {
        return (
            <div>
                <br/>
                <div className = "card col-md-4 offset-md-0" style={{marginTop:"30px",backgroundColor:"blanchedalmond", fontSize:'15px',borderColor:"black", boxShadow:'2px 5px 30px 2px black', fontFamily:'cursive', borderWidth:"3px"}}>
                <h4><b><u>Dashboard</u></b></h4>
                <h5>Checked_In Guests :<i>{this.state.guests.length}</i></h5>                
                </div>
                <br/>
                {/* CheckedIn table */}
               <h2 className="card text-center col-md-6 offset-md-0" style={{marginLeft:"300px",fontFamily:'cursive',color:'b#002147',boxShadow:'2px 5px 30px 2px black',fontSize:'32px'}}><b><u>Checked_In Guests List</u></b></h2>
                 
                 <div className = "row">
                        <table className = "table table-striped table-bordered" style={{marginTop:"15px",marginBottom:"10px",backgroundColor:"white",fontSize:'15px',boxShadow:'2px 5px 30px 2px black',fontFamily:'cursive',color:'b#002147', borderColor:"black", borderWidth:"3px"}}>

                            <thead className="thead-dark">
                                <tr>
                                    <th> Guest Id</th>
                                    <th> Room Number</th>
                                    <th> Guest Name </th>
                                    <th> Guest Check-In Date </th>                                    
                                    <th> Guest Contact</th>                                    
                                    <th> Guest Count</th>                                                                             
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.guests.map(
                                        guest => 
                                        <tr key = {guest.guestId}>
                                            <td><b>{guest.guestId}</b></td>                                            
                                            <td><b>{guest.roomNumber}</b> </td>
                                             <td><b>{guest.guestName}</b> </td>    
                                             <td><b>{guest.checkInDate}</b>  </td>                                         
                                             <td><b>{guest.guestContact}</b>  </td>    
                                             <td><b>{guest.numberOfPeople}</b> </td>                                                                                                                                       
                                             <td>
                                                 <button onClick={ () => this.editGuest(guest.guestId)} className="btn btn-info"><b>Update</b> </button>                                                 
                                                 <button style={{marginLeft: "5px"}} onClick={ () => this.viewGuest(guest.guestId)} className="btn btn-warning"><b>View</b> </button>
                                                 <button style={{marginLeft: "5px"}} onClick={ () => this.checkOutGuest(guest.guestId, guest.roomNumber, guest.checkInDate )} className="btn btn-danger"><b>Check-Out</b> </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 <br/><br/><br/>
            </div>
        )
    }
}

export default withRouter (CheckOut)
