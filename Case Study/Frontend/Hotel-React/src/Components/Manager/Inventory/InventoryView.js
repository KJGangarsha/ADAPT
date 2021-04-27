import React, { Component } from 'react'
import { withRouter } from 'react-router';
import ManagerService from '../../../Services/ManagerService';


class InventoryView extends Component {
    constructor(props) {
        super(props)
        
        /* state variables */
        this.state = {            
            inventories: []            
        }        
        
        /* binding methods */
        this.addInventory=this.addInventory.bind(this);
        this.editInventory=this.editInventory.bind(this);

    }

    /* component did mount method */
    componentDidMount(){        

        ManagerService.getInventory().then((res)=>{
            this.setState({inventories: res.data})
        });

    }
    
    /* add method call */
    addInventory=()=>{
        this.props.history.push('/addInventory');
    }

    /* edit method call */
    editInventory=(inventoryId)=>{
        this.props.history.push(`/editInventory/${inventoryId}`)
    }

    /* delete method  */
    deleteInventory(inventoryId){
        ManagerService.deleteInventory(inventoryId).then( res => {
            this.setState({inventories: this.state.inventories.filter(inventory => inventory.inventoryId !== inventoryId)});
            alert("Inventory Deleted");
        });
    }

    /* view method call */
    viewInventory(inventoryId){
        this.props.history.push(`/viewInventory/${inventoryId}`);
    }

    render() {
        return (
            <div>
                <br/>
                <div className = "card col-md-4 offset-md-0" style={{marginTop:"30px",backgroundColor:"blanchedalmond", fontSize:'15px',borderColor:"black", boxShadow:'2px 5px 30px 2px black', fontFamily:'cursive', borderWidth:"3px"}}>
                <h4><b><u>Dashboard</u></b></h4>                
                <h5> Inventory types :<i>{this.state.inventories.length}</i></h5>                
                </div>
                <br/>   
                             
                {/* inventory view */}
                 <h2 className="card text-center col-md-3 offset-md-0" style={{marginLeft:"380px",fontFamily:'cursive',color:'b#002147',boxShadow:'2px 5px 30px 2px black',fontSize:'32px'}}><b>Inventory List</b></h2>
                 <div>
                     <button title="addinv" className="btn btn-primary" style={{marginBottom: "10px"}} onClick={this.addInventory}><b>Add Inventory</b></button>
                 </div>
                 <div className = "row">
                        <table className = "table table-striped table-bordered"style={{marginTop:"15px", marginBottom:"10px",backgroundColor:"white",fontSize:'15px',boxShadow:'2px 5px 30px 2px black',fontFamily:'cursive',color:'b#002147', borderColor:"black", borderWidth:"3px"}}>

                            <thead className="thead-dark">
                                <tr>
                                    <th> Inventory Id</th>
                                    <th> Inventory Name</th>
                                    <th> Number of Units </th>                            
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.inventories.map(
                                        inventory => 
                                        <tr key = {inventory.inventoryId}>
                                            <td><b>{inventory.inventoryId}</b></td>                                            
                                             <td> <b>{inventory.inventoryName}</b></td>
                                             <td> <b>{inventory.inventoryUnits} </b></td>                                             
                                             <td>
                                                 <button onClick={ () => this.editInventory(inventory.inventoryId)} className="btn btn-info"><b>Update</b> </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteInventory(inventory.inventoryId)} className="btn btn-danger"><b>Delete</b> </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewInventory(inventory.inventoryId)} className="btn btn-secondary"><b>View</b> </button>
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

export default withRouter (InventoryView)
