import React, { Component } from 'react'
import { withRouter } from 'react-router';
import ManagerService from '../../Services/ManagerService';

class CheckIn extends Component {
constructor(props) {
    super(props)

    /* declaring state variables */
    this.state = {         
         rooms: []         
    }
    this.addGuest=this.addGuest.bind(this);    
}

/* Component did mount method */
componentDidMount(){    
    ManagerService.getAvailRooms().then((res)=>{
        this.setState({rooms: res.data});
    });
}

/* add guest method call */
addGuest=(roomId, roomType, roomPrice)=>{
    this.props.history.push(`/addGuest/${roomId}/${roomType}/${roomPrice}`);
}

    render() {
        return (
            <div>                                                              
                 <br/>
                 <div className = "card col-md-4 offset-md-0" style={{marginTop:"30px",backgroundColor:"blanchedalmond", fontSize:'15px',borderColor:"black", boxShadow:'2px 5px 30px 2px black', fontFamily:'cursive', borderWidth:"3px"}}>
                <h4><b><u>Dashboard</u></b></h4>
                <h5>Total Rooms :<i>{this.state.rooms.length}</i></h5>                
                </div>

                {/* CheckIn table */}
                 <h2 className="card text-center col-md-4 offset-md-0" style={{marginLeft:"380px",fontFamily:'cursive',color:'b#002147',boxShadow:'2px 5px 30px 2px black',fontSize:'32px'}}><b><u>Room Availability</u></b></h2>

                 <div className = "row">
                        <table className = "table table-striped table-bordered" style={{marginTop:"10px",marginBottom:"10px",backgroundColor:"white",fontSize:'15px',boxShadow:'2px 5px 30px 2px black',fontFamily:'cursive',color:'b#002147', borderColor:"black", borderWidth:"3px"}}>

                            <thead className="thead-dark">
                                <tr>                                    
                                    <th> Room Number</th>
                                    <th> Type</th>                                    
                                    <th> Price </th>
                                    <th> Status </th>
                                    <th> Book</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.rooms.map(
                                        room => 
                                        <tr key = {room.roomId}>                                            
                                            <td> <b>{room.roomNumber}</b></td>
                                            <td> <b>{room.roomType} </b></td>    
                                            <td> <b>{room.roomPrice}</b> </td>
                                            <td> <b>{room.roomStatus} </b></td> 
                                            <td>
                                                <button title="add" className="btn btn-primary" style={{marginBottom: "10px"}} onClick={() =>this.addGuest(room.roomId, room.roomType, room.roomPrice)}><b>Check-In</b></button>
                                            </td>
                                        </tr>
                                    )
                                }             
                            </tbody>
                        </table>
                    </div>
                <br/>
                <br/>
            </div>
        )
    }
}

export default withRouter (CheckIn)
