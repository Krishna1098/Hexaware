import react,{Component} from 'react';
import { variables } from '../Variables';
import './View.css';
import './Marque.css';




export class Contact extends Component{
    constructor(props){
        super(props);

        this.state={
            contacts:[],
            modalTitle:"",
            Id:0,
            FirstName:"",
            LastName:"",
            Email:"",
            PhNo:"",
            Designation:"",
            Address:""
        }
    }


    refreshList(){

        fetch(variables.API_URL+'ContactsOne')
        .then(response=>response.json())
        .then(data=>{
            this.setState({contacts:data});
        });

    }

    componentDidMount(){
        this.refreshList();
    }
    
    changeFirstName =(e)=>{
        this.setState({FirstName:e.target.value});
    }
    changeLastName =(e)=>{
        this.setState({LastName:e.target.value});
    }
    changeEmail =(e)=>{
        this.setState({Email:e.target.value});
    }
    changePhNo =(e)=>{
        this.setState({PhNo:e.target.value});
    }
    changeDesignation =(e)=>{
        this.setState({Designation:e.target.value});
    }
    changeAddress =(e)=>{
        this.setState({Address:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Contacts",
            Id:0,
            FirstName:"",
            LastName:"",
            Email:"",
            PhNo:"",
            Designation:"",
            Address:""
        });

    }

    editClick(lms){
        this.setState({
            modalTitle:"Edit Contacts",
            Id:lms.Id,
            FirstName:lms.FirstName,
            LastName:lms.LastName,
            Email:lms.Email,
            PhNo:lms.PhNo,
            Designation:lms.Designation,
            Address:lms.Address
        });
    }

    createClick(){
        fetch(variables.API_URL+'ContactsOne',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                //Id:this.state.Id,
                FirstName:this.state.FirstName,
                LastName:this.state.LastName,
                Email:this.state.Email,
                PhNo:this.state.PhNo,
                Designation:this.state.Designation,
                Address:this.state.Address
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }


    updateClick(){
        fetch(variables.API_URL+'ContactsOne',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Id:this.state.Id,
                FirstName:this.state.FirstName,
                LastName:this.state.LastName,
                Email:this.state.Email,
                PhNo:this.state.PhNo,
                Designation:this.state.Designation,
                Address:this.state.Address
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'ContactsOne/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
        }
    }



    render(){
        const {
            contacts,
            modalTitle,
            Id,
            FirstName,
            LastName,
            Email,
            PhNo,
            Designation,
            Address
        }=this.state;

        return(
<div className="container" >
    <header>
    <h3 className="d-flex justify-content-center header-1">Welcome to CMS</h3>
    </header>
    <marquee>Hexaware Technologies pvt.ltd</marquee>

    <button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        Add Contacts
    </button>
    <table className="table table-striped table-hover">
    <thead className="table-dark">
    <tr>
        <th>
            Id
        </th>
        <th>
            FirstName
        </th>
        <th>
            LastName
        </th>
        <th>
            Email
        </th>
        <th>
            PhNO
        </th>
        <th>
            Designation
        </th>
        <th>
            Address
        </th>
        <th>
            Options
        </th>
    </tr>
    </thead>
    <tbody>
        {contacts.map(lms=>
            <tr key={lms.Id}>
                <td>{lms.Id}</td>
                <td>{lms.FirstName}</td>
                <td>{lms.LastName}</td>
                <td>{lms.Email}</td>
                <td>{lms.PhNo}</td>
                <td>{lms.Designation}</td>
                <td>{lms.Address}</td>
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(lms)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(lms.Id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>

                </td>
            </tr>
            )}
    </tbody>
    </table>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
   <div className="modal-header">
       <h5 className="modal-title">{modalTitle}</h5>
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
       ></button>
   </div>

   <div className="modal-body">
    <div className="d-flex flex-row bd-highlight mb-3">
     
     <div className="p-2 w-50 bd-highlight">
    
        <div className="input-group mb-3">
            <span className="input-group-text">FirstName</span>
            <input type="text" className="form-control"
            required
            value={FirstName}
            onChange={this.changeFirstName}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">LastName</span>
            <input type="text" className="form-control"
            value={LastName}
            onChange={this.changeLastName}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Email</span>
            <input type="text" className="form-control"
            value={Email}
            onChange={this.changeEmail}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">PhNO</span>
            <input type="text" className="form-control"
            value={PhNo}
            onChange={this.changePhNo}/>
        </div>
       

        <div className="input-group mb-3">
            <span className="input-group-text">Designation</span>
            {/* <input type="text" className="form-control" */}
            <select className="form-select"
            onChange={this.changeDesignation}

            value={Designation}>
                <option>Options</option>
                <option>Business Partner</option>
                <option>Associate</option>
                <option>HR Team</option>
                <option>Tech Lead</option>
                <option>Other</option>
            </select>
            
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Address</span>
            <input type="text" className="form-control"
            value={Address}
            onChange={this.changeAddress}/>
        </div>
        
        </div>
        </div>


    {Id===0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Add</button>
        :null}

    {Id!==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.updateClick()}
        >Update</button>
        :null}
   </div>

</div>
</div> 
</div>

<a class="btn btn-primary m-2 float-end" href="/home" role="button">Back to Home</a>
</div>
        )
    }
}








