import React, { Component } from 'react'
import { withRouter } from 'react-router';
import ManagerService from '../../../Services/ManagerService';

class AddRoom extends Component {
    constructor(props) {
        super(props)
        
        /* state variables */
        this.state = {
            roomPrice:'',
            roomStatus:'',
            roomType:'',
            roomNumber:''            
        }
        /* binding handlers */
        this.changeRoomPriceHandler = this.changeRoomPriceHandler.bind(this);
        this.changeRoomStatusHandler = this.changeRoomStatusHandler.bind(this);
        this.changeRoomTypeHandler = this.changeRoomTypeHandler.bind(this);
        this.changeRoomNumberHandler = this.changeRoomNumberHandler.bind(this);
        this.saveRoom = this.saveRoom.bind(this);
    }

    /* handler methods */
    changeRoomPriceHandler= (event) => {
        this.setState({roomPrice: event.target.value});
    }

    changeRoomStatusHandler= (event) => {
        this.setState({roomStatus: event.target.value});
    }

    changeRoomTypeHandler= (event) => {
        this.setState({roomType: event.target.value});
    }

    changeRoomNumberHandler= (event) => {
        this.setState({roomNumber: event.target.value});
    }

    /* save method */
    saveRoom = (e) => {
        e.preventDefault();
        let room = {roomType: this.state.roomType, roomNumber: this.state.roomNumber, roomPrice: this.state.roomPrice, roomStatus: this.state.roomStatus};
                
        ManagerService.createRoom(room).then(res =>{
            this.props.history.push('/roomView'); 
            alert("New Room created");
        });
    }

    /* cancel method */
    cancel(){
        this.props.history.push('/roomView');
    }
    
    render() {
        return (
            <div>
              <br></br>
                   <div className = "container">
                        <div className = "row">
                            {/* add room form */}
                            <div className = "card col-md-6 offset-md-3 offset-md-3"style={{marginTop:"30px",backgroundColor:"blanchedalmond", fontSize:'15px',borderColor:"black", boxShadow:'2px 5px 30px 2px black', fontFamily:'cursive', borderWidth:"3px"}}>
                                <h3 className="text-center"><b>Add Room</b></h3>
                                <div className = "card-body"style={{marginTop:"10px",marginBottom:"10px",backgroundColor:"white",fontSize:'15px',boxShadow:'2px 5px 30px 2px black',fontFamily:'cursive',color:'b#002147', borderColor:"black", borderWidth:"2px"}}>
                                    <form>
                                       
                                        <div className = "form-group">
                                            <label><b> Room Number: </b></label>
                                            <input placeholder="Room Number" name="RoomNumber" className="form-control" 
                                                value={this.state.roomNumber} onChange={this.changeRoomNumberHandler}/>
                                        </div>                
                                        
                                        <div className = "form-group">
                                            <label><b> Room Type: </b></label>
                                            <select placeholder="type" name="RoomType" className="form-control" 
                                                value={this.state.roomType} onChange={this.changeRoomTypeHandler}>
                                                    <option>--</option>
                                                    <option>VVIP Suite</option>
                                                    <option>Luxury Suite</option>
                                                    <option>Deluxe Suite</option>
                                                    <option>Boquet Hall 1</option>
                                                    <option>Boquet Hall 2</option>
                                            </select>                                                  
                                        </div>  

                                        <div className = "form-group">
                                            <label> <b>Room Price: </b></label>
                                            <input placeholder="Price" name="RoomPrice" className="form-control" 
                                                value={this.state.roomPrice} onChange={this.changeRoomPriceHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> <b>Room Status: </b></label>
                                            <select placeholder="Room Status" name="RoomStatus" className="form-control" 
                                                value={this.state.roomStatus} onChange={this.changeRoomStatusHandler}>
                                            <option>--</option>
                                            <option>Booked</option>
                                            <option>Empty</option>
                                            <option>In Maintainance</option>
                                            <option>Reserved</option>
                                            <option>Abandoned</option>
                                            </select>        
                                        </div>                                                                                                                 

                                        <button title="add" className="btn btn-success" onClick={this.saveRoom}><b>Save</b></button>
                                        <button title="cancel" className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}><b>Cancel</b></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <br/>
                    <br/>
                   </div>   
            </div>
        )
    }
}

export default withRouter (AddRoom)
