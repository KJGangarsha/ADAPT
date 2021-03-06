import React, { Component } from 'react'
import { withRouter } from 'react-router';
import ManagerService from '../../../Services/ManagerService';

export class UpdateStaff extends Component {
    constructor(props) {
        super(props)
        
        /* state variables */
        this.state = {
            staffId: this.props.match.params.staffId,
            staffdepartment:'',
            staffName:'',
            staffContact:'',
            staffMailId:'',
            staffGender:''
        }
        /* binding handlers */
        this.changeStaffDepartmentHandler = this.changeStaffDepartmentHandler.bind(this);
        this.changeStaffNameHandler = this.changeStaffNameHandler.bind(this);
        this.changeStaffContactHandler = this.changeStaffContactHandler.bind(this);
        this.changeStaffMailIdHandler = this.changeStaffMailIdHandler.bind(this);
        this.changeStaffGenderHandler = this.changeStaffGenderHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    /* handler methods */
    changeStaffDepartmentHandler= (event) => {
        this.setState({staffDepartment: event.target.value});
    }

    changeStaffNameHandler= (event) => {
        this.setState({staffName: event.target.value});
    }

    
    changeStaffContactHandler= (event) => {
        this.setState({staffContact: event.target.value});
    }
    
    changeStaffMailIdHandler= (event) => {
        this.setState({staffMailId: event.target.value});
    }
    
    changeStaffGenderHandler= (event) => {
        this.setState({staffGender: event.target.value});
    }

    /* component did mount */
    componentDidMount(){
        ManagerService.getEmployeeById(this.state.staffId).then( (res) =>{
            let employee = res.data;
            this.setState({
                
                staffDepartment: employee.staffDepartment,
                staffName: employee.staffName,
                staffContact: employee.staffContact,
                staffMailId: employee.staffMailId,
                staffGender: employee.staffGender
            });
        });
    }

    /* update employee method */
    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {staffDepartment: this.state.staffDepartment, staffName: this.state.staffName, staffContact: this.state.staffContact, staffMailId: this.state.staffMailId, staffGender: this.state.staffGender};        
        
        ManagerService.updateEmployee(employee, this.state.staffId).then(res =>{
            this.props.history.push('/staffView');
            alert("Employee Updated");
        });
    }

    /* cancel method */
    cancel(){
        this.props.history.push('/staffView');
    }

    
    
    render() {
        return (
            <div>
                <div className = "container">
                        <div className = "row">
                            {/* update staff method */}
                            <div className = "card col-md-6 offset-md-3 offset-md-3"style={{marginTop:"30px",backgroundColor:"blanchedalmond", fontSize:'15px',borderColor:"black", boxShadow:'2px 5px 30px 2px black', fontFamily:'cursive', borderWidth:"3px"}}>
                                <h3 className="text-center"><b>Update Employee</b></h3>
                                <div className = "card-body"style={{marginTop:"10px",marginBottom:"10px",backgroundColor:"white",fontSize:'15px',boxShadow:'2px 5px 30px 2px black',fontFamily:'cursive',color:'b#002147', borderColor:"black", borderWidth:"2px"}}>
                                    <form>
                                       
                                        <div className = "form-group">
                                            <label><b> Employee Name:</b> </label>
                                            <input placeholder="Employee Name" name="StaffName" className="form-control" 
                                                value={this.state.staffName} onChange={this.changeStaffNameHandler}/>
                                        </div>                

                                        <div className = "form-group">
                                            <label> <b>Department Name:</b> </label>
                                            <select placeholder="Department Name" name="StaffDepartment" className="form-control" 
                                                value={this.state.staffDepartment} onChange={this.changeStaffDepartmentHandler}>
                                                <option>others</option>
                                                <option>Administration</option>
                                                <option>Room Management</option>
                                                <option>Reservation Management</option>
                                                <option>Guest Management</option>
                                                <option>Inventory Control</option>
                                                <option>Maintainance</option>
                                                <option>Security</option>
                                            </select>
                                        </div>

                                        <div className = "form-group">
                                            <label> <b>Employee Contact: </b> </label>
                                            <input placeholder="Employee Contact" name="staffContact" className="form-control" 
                                                value={this.state.staffContact} onChange={this.changeStaffContactHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> <b>Employee Mail Id: </b></label>
                                            <input placeholder="Mail ID" name="StaffMailId" className="form-control" 
                                                value={this.state.staffMailId} onChange={this.changeStaffMailIdHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> <b>Employee Gender:</b> </label>
                                            <select placeholder="Gender" name="staffGender" className="form-control" 
                                            value={this.state.staffGender} onChange={this.changeStaffGenderHandler}>
                                                <option>--</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>others</option>
                                            </select>                                                
                                        </div>                            

                                        <button className="btn btn-success" onClick={this.updateEmployee}><b>Update</b></button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}><b>Cancel</b></button>
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

export default withRouter (UpdateStaff)
