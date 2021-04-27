import React, { Component } from 'react'
import { withRouter } from 'react-router';
import ManagerService from '../../../Services/ManagerService';

class ViewInventory extends Component {
    constructor(props) {
        super(props)
        
        /* state variables */
        this.state = {
            inventoryId: this.props.match.params.inventoryId,
            inventory: {}
        }
    }

    /* component did mount method */
    componentDidMount(){
        ManagerService.getInventoryById(this.state.inventoryId).then( res => {
            this.setState({inventory: res.data});
        })
    }

    /* back method */
    back(){
        this.props.history.push('/inventoryView');
    }

    render() {
        return (
            <div>
                {/* View Inventory */}
               <div className = "card col-md-6 offset-md-3" style={{marginTop:"50px",backgroundColor:"blanchedalmond", fontSize:'15px',borderColor:"black", boxShadow:'2px 5px 30px 2px black', fontFamily:'cursive', borderWidth:"3px"}}>
                    <h3 className = "text-center"> <b>Inventory Details</b></h3>
                    <div className = "card-body"style={{marginTop:"10px",marginBottom:"0.5px",backgroundColor:"white",fontSize:'15px',boxShadow:'2px 5px 30px 2px black',fontFamily:'cursive',color:'b#002147', borderColor:"black", borderWidth:"2px"}}>
                        <div className = "row">
                            <label><b> Inventory Name  : </b>  </label><br/>
                            <div><i> { this.state.inventory.inventoryName }</i></div>
                        </div>                    

                        <div className = "row">
                            <label><b> No. of Units  : </b></label><br/>
                            <div> <i>{ this.state.inventory.inventoryUnits }</i></div>
                        </div>                        
                    
                        <button className="btn btn-warning" onClick={this.back.bind(this)} >Back</button>
                    </div>
                    <br/>
                    <br/>
                </div>  
            </div>
        )
    }
}

export default withRouter (ViewInventory)
