import React, { Component } from 'react'
import { withRouter } from 'react-router';
import OwnerService from '../../Services/OwnerService';


export class OwnerView extends Component {
    constructor(props) {
        super(props)
        
        /* state variables */
        this.state = {
                employees: []
        }
        /* binding handlers */
        this.addManager=this.addManager.bind(this);
        this.addUser=this.addUser.bind(this);
        this.editEmployee=this.editEmployee.bind(this);
    }

    /* component did mount */
    componentDidMount(){
        OwnerService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    /* addUser method call */
    addUser=()=>{
        this.props.history.push('/addUser');
    }

    /* add manager method call */
    addManager=()=>{
        this.props.history.push('/addManager');
    }

    /* edit employee method call */
    editEmployee=(managerId)=>{
        this.props.history.push(`/editManager/${managerId}`);
    }

    /* delete employee method */
    deleteEmployee(managerId){
        OwnerService.deleteEmployee(managerId).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.managerId !== managerId)});
            alert("Manager Deleted");
        });
    }

    /* view employee method */
    viewEmployee(managerId){
        this.props.history.push(`/viewManager/${managerId}`);
    }

    render() {
        return (
            <div>
                
                <div className = "card col-md-4 offset-md-0" style={{marginTop:"50px",backgroundColor:"blanchedalmond", fontSize:'15px',borderColor:"black", boxShadow:'2px 5px 30px 2px black', fontFamily:'cursive', borderWidth:"3px"}}>
                <h4><b><u>Dashboard</u></b></h4>
                <h5>Managers :<i>{this.state.employees.length}</i></h5>
                </div>
                {/* add manager and add user buttons */}
                 <h2 className="card text-center col-md-3 offset-md-0" style={{marginLeft:"380px",fontFamily:'cursive',color:'b#002147',boxShadow:'2px 5px 30px 2px black',fontSize:'32px'}}><b>Managers List</b></h2>
                 <div className = "row">
                     <button title="add" className="btn btn-primary" style={{marginBottom: "10px"}} onClick={this.addManager}><b>Add Manager</b></button>
                     <button title="user" className="btn btn-primary" style={{marginBottom: "10px", marginLeft: "850px"}} onClick={this.addUser}><b>Setup user</b></button>
                 </div>                 
                 {/* Managers table */}
                 <div className = "row">
                        <table className = "table table-striped table-bordered"style={{marginTop:"15px", marginBottom:"10px",backgroundColor:"white",fontSize:'15px',boxShadow:'2px 5px 30px 2px black',fontFamily:'cursive',color:'b#002147', borderColor:"black", borderWidth:"3px"}}>

                            <thead className="thead-dark">
                                <tr>
                                    <th> Manager Id</th>
                                    <th> Manager Name</th>
                                    <th> Department Name </th>
                                    <th> Manager Salary</th>
                                    <th> Staff Salary</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.managerId}>
                                            <td><b>{employee.managerId}</b></td>                                            
                                             <td> <b>{employee.managerName}</b></td>
                                             <td> <b>{ employee.departmentName}</b> </td>    
                                             <td> <b>{employee.managerSalary}</b></td>
                                             <td> <b>{employee.staffSalary}</b></td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.managerId)} className="btn btn-info"><b>Update</b> </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.managerId)} className="btn btn-danger"><b>Delete </b></button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.managerId)} className="btn btn-secondary"><b>View </b></button>
                                             </td>
                                        </tr>
                                        
                                    )
                                    
                                }
                                
                            </tbody>
                        </table>
                        
                 </div>
                 <br/>
                 <br/>
                        <br/>
            </div>
        )
    }
}

export default withRouter (OwnerView)