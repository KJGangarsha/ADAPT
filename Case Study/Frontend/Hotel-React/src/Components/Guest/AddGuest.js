import React, { Component } from 'react'
import { withRouter } from 'react-router';
import GuestService from '../../Services/GuestService';
import ManagerService from '../../Services/ManagerService';

class AddGuest extends Component {
constructor(props) {
    super(props)

    /* Declaring all state variables  */
    this.state = {        
        roomId:this.props.match.params.roomId,
        roomType:this.props.match.params.roomType,
        roomPrice:this.props.match.params.roomPrice,
        roomNumber:'',                
        guestName:'',
        guestGender:'',
        guestContact:'',
        guestMailId:'',
        numberOfPeople:'',
        checkInDate:new Date().toLocaleDateString()        
    }
    /* Binding all Handler methods */
    this.changeRoomNumberHandler = this.changeRoomNumberHandler.bind(this);
    this.changeGuestNameHandler = this.changeGuestNameHandler.bind(this);
    this.changeGuestGenderHandler = this.changeGuestGenderHandler.bind(this);
    this.changeGuestContactHandler = this.changeGuestContactHandler.bind(this);
    this.changeGuestMailIdHandler = this.changeGuestMailIdHandler.bind(this);
    this.changeNumberOfPeopleHandler = this.changeNumberOfPeopleHandler.bind(this);        
    this.saveGuest = this.saveGuest.bind(this);
}

/* Handler methods */

changeRoomNumberHandler= (event) => {
    this.setState({roomNumber: event.target.value});
}

changeGuestNameHandler= (event) => {
    this.setState({guestName: event.target.value});
}

changeGuestGenderHandler= (event) => {
    this.setState({guestGender: event.target.value});
}

changeGuestContactHandler= (event) => {
    this.setState({guestContact: event.target.value});
}

changeGuestMailIdHandler= (event) => {
    this.setState({guestMailId: event.target.value});
}

changeNumberOfPeopleHandler= (event) => {
    this.setState({numberOfPeople: event.target.value});
}

/* component did mount method */

componentDidMount(){
    ManagerService.getRoomById(this.state.roomId).then( (res) =>{
        let room = res.data;
        this.setState({
            
            roomNumber : room.roomNumber            
        });
    });
}

/* Save guest called on clicking checkin button */
saveGuest = (e) => {
    e.preventDefault();
    let guest = {
    roomNumber : this.state.roomNumber,        
    guestName : this.state.guestName,
    guestGender : this.state.guestGender,
    guestContact : this.state.guestContact,
    guestMailId: this.state.guestMailId,
    numberOfPeople : this.state.numberOfPeople,
    checkInDate : this.state.checkInDate    
    };

    /* Changing roomstatus to booked */
    let room = {roomType: this.state.roomType, roomNumber: this.state.roomNumber, roomPrice: this.state.roomPrice, roomStatus:"Booked"};
    ManagerService.updateRoom(room, this.state.roomId);

    
        
    GuestService.createGuest(guest).then(res =>{
        this.props.history.push('/checkOut');
        alert("New Guest checked-In");
    });
}

/* cancel method */
cancel(){
    this.props.history.push('/checkIn');
}


    render() {
        return (
            <div>
               <br></br>
                   <div className = "container">
                        <div className = "row">
                            {/* checkIn guest form */}
                            <div className = "card col-md-6 offset-md-3 offset-md-3" style={{marginTop:"30px",backgroundColor:"blanchedalmond", fontSize:'15px',borderColor:"black", boxShadow:'2px 5px 30px 2px black', fontFamily:'cursive', borderWidth:"3px"}}>
                                <h3 className=" text-center">Check-In Guest</h3>
                                <div className = "card-body" style={{marginTop:"10px",marginBottom:"10px",backgroundColor:"white",fontSize:'15px',boxShadow:'2px 5px 30px 2px black',fontFamily:'cursive',color:'b#002147', borderColor:"black", borderWidth:"2px"}}>
                                    <form>
                                       
                                    <div className = "row">
                                            <label> <b>Checking-In Room Number:{this.state.roomNumber}</b> </label>                                            
                                        </div>

                                        <div className = "form-group">
                                            <label> <b>Guest Name:</b> </label>
                                            <input placeholder="Guest Name" name="GuestName" className="form-control" 
                                                value={this.state.guestName} onChange={this.changeGuestNameHandler}/>
                                        </div>                                                                                

                                        <div className = "form-group">
                                            <label> <b>Guest Contact:</b> </label>
                                            <input placeholder="Contact" name="GuestContact" className="form-control" 
                                                value={this.state.guestContact} onChange={this.changeGuestContactHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> <b>Guest Mail Id:</b> </label>
                                            <input placeholder="Mail ID" name="GuestMailId" className="form-control" 
                                                value={this.state.guestMailId} onChange={this.changeGuestMailIdHandler}/>
                                        </div>                                        

                                        <div className = "form-group">
                                            <label> <b>Guest Gender:</b> </label>
                                            <select placeholder="Gender" name="GuestGender" className="form-control" 
                                            value={this.state.guestGender} onChange={this.changeGuestGenderHandler}>
                                                <option>--</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>others</option>
                                            </select>                                                
                                        </div>

                                        <div className = "form-group">
                                            <label><b>Guest Count:</b>  </label>
                                            <select placeholder="Count" name="NumberOfPeople" className="form-control" 
                                            value={this.state.numberOfPeople} onChange={this.changeNumberOfPeopleHandler}>
                                                <option>--</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                            </select>                                                
                                        </div>                                        

                                        <button title="add" className="btn btn-success" onClick={this.saveGuest}>Check-In</button>
                                        <button title="cancel" className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    <br/>
                    <br/>
                    <br/>
                   </div> 
            </div>
        )
    }
}

export default withRouter (AddGuest)
