import React, { Component } from 'react'
import { withRouter } from 'react-router';
import ManagerService from '../../../Services/ManagerService';


class StaffView extends Component {
    constructor(props) {
        super(props)
    
        /* state variables */
        this.state = {
            employees: []    
        }
        /* binding handlers */
        this.addStaff=this.addStaff.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
    }

    /* component did ount method */

    componentDidMount(){
        ManagerService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    /* addStaff method */
    addStaff=()=>{
        this.props.history.push('/addStaff');
    }

    /* edit staff method */
    editEmployee=(staffId)=>{
        this.props.history.push(`/editStaff/${staffId}`);
    }
    
    /* delete employee method */
    deleteEmployee(staffId){
        ManagerService.deleteEmployee(staffId).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.staffId !== staffId)});
            alert("Employee deleted");
        });
    }

    /* view employee method */
    viewEmployee(staffId){
        this.props.history.push(`/viewStaff/${staffId}`);
    }
    
    render() {
        return (
            <div>
                <br/>
                <div className = "card col-md-4 offset-md-0" style={{marginTop:"30px",backgroundColor:"blanchedalmond", fontSize:'15px',borderColor:"black", boxShadow:'2px 5px 30px 2px black', fontFamily:'cursive', borderWidth:"3px"}}>
                <h4><b><u>Dashboard</u></b></h4>
                <h5>Staff members :<i>{this.state.employees.length}</i></h5>                
                </div>
                <br/>   
                {/* staff view card */}
                             
               <h2 className=" card text-center col-md-3 offset-md-0" style={{marginLeft:"380px",fontFamily:'cursive',color:'b#002147',boxShadow:'2px 5px 30px 2px black',fontSize:'32px'}}><b><u>Employees List</u></b></h2>
                 <div>
                     <button title="add" className="btn btn-primary" style={{marginBottom: "10px"}} onClick={this.addStaff}><b>Add Employee</b></button>
                 </div>
                 <div className = "row">
                        <table className = "table table-striped table-bordered"style={{marginTop:"15px", marginBottom:"10px",backgroundColor:"white",fontSize:'15px',boxShadow:'2px 5px 30px 2px black',fontFamily:'cursive',color:'b#002147', borderColor:"black", borderWidth:"3px"}}>

                            <thead className="thead-dark">
                                <tr>
                                    <th> Employee Id</th>
                                    <th> Employee Name</th>
                                    <th> Employee's Department </th>                            
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.staffId}>
                                            <td><b>{employee.staffId}</b></td>                                            
                                             <td><b> {employee.staffName}</b></td>
                                             <td><b> {employee.staffDepartment} </b></td>                                             
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.staffId)} className="btn btn-info"><b>Update</b> </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.staffId)} className="btn btn-danger"><b>Delete</b> </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.staffId)} className="btn btn-secondary"><b>View</b> </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <br/>
                        <br/>
                 </div>
                <br/>
                
                <br/>
                        <br/>
            </div>
        )
    }
}

export default withRouter (StaffView)
