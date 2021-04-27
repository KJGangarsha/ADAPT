import React, { Component } from 'react'
import { withRouter } from 'react-router';
import ManagerService from '../../../Services/ManagerService';

class RoomView extends Component {
    constructor(props) {
        super(props)
        
        /* state variables */
        this.state = {
            
            rooms: []
        }        
        /* binding handlers */
        this.addRoom=this.addRoom.bind(this);
        this.editRoom=this.editRoom.bind(this);
    }

    /* component did mount method */
    componentDidMount(){        

        ManagerService.getRooms().then((res)=>{
            this.setState({rooms: res.data})
        });
    }
    
    /* add room method  */
    addRoom=()=>{
        this.props.history.push('/addRoom');
    }

    /* edit room method */
    editRoom=(roomId)=>{
        this.props.history.push(`/editRoom/${roomId}`)
    }

    /* delete room method */
    deleteRoom(roomId){
        ManagerService.deleteRoom(roomId).then( res => {
            this.setState({rooms: this.state.rooms.filter(room => room.roomId !== roomId)});
            alert("Room deleted");
        });
    }

    /* view room method */
    viewRoom(roomId){
        this.props.history.push(`/viewRoom/${roomId}`);
    }
    
    render() {
        return (
            <div>
                <br/>
                <div className = "card col-md-4 offset-md-0" style={{marginTop:"30px",backgroundColor:"blanchedalmond", fontSize:'15px',borderColor:"black", boxShadow:'2px 5px 30px 2px black', fontFamily:'cursive', borderWidth:"3px"}}>
                <h4><b><u>Dashboard</u></b></h4>                
                <h5>Number of Rooms :<i>{this.state.rooms.length}</i></h5>
                </div>
                <br/>   
                  {/* room View */}           
                 <br/>                        
                 <h2 className="card text-center col-md-3 offset-md-0" style={{marginLeft:"380px",fontFamily:'cursive',color:'b#002147',boxShadow:'2px 5px 30px 2px black',fontSize:'32px'}}><b>Rooms List</b></h2>
                 <div>
                     <button title="add" className="btn btn-primary" style={{marginBottom: "10px"}} onClick={this.addRoom}><b>Add Room</b></button>
                 </div>
                 <div className = "row">
                        <table className = "table table-striped table-bordered" style={{marginTop:"15px", marginBottom:"10px",backgroundColor:"white",fontSize:'15px',boxShadow:'2px 5px 30px 2px black',fontFamily:'cursive',color:'b#002147', borderColor:"black", borderWidth:"3px"}}>

                            <thead className="thead-dark">
                                <tr>
                                    <th> Room Id</th>
                                    <th> Room Number</th>
                                    <th> Type</th>                                    
                                    <th> Price </th>
                                    <th> Status </th>                            
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.rooms.map(
                                        room => 
                                        <tr key = {room.roomId}>
                                            <td><b>{room.roomId}</b></td>                                            
                                             <td><b> {room.roomNumber}</b></td>
                                             <td><b> {room.roomType}</b> </td>    
                                             <td><b> {room.roomPrice} </b></td>
                                             <td><b> {room.roomStatus} </b></td>                                                 
                                             <td>
                                                 <button onClick={ () => this.editRoom(room.roomId)} className="btn btn-info"><b>Update</b> </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteRoom(room.roomId)} className="btn btn-danger"><b>Delete</b> </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewRoom(room.roomId)} className="btn btn-secondary"><b>View</b> </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

                 <div>

                     <br/>                    
                     <br/>
                     <br/>
                 </div>
 
            </div>
        )
    }
}

export default withRouter (RoomView)
