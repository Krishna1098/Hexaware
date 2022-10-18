import react,{Component} from 'react';
import { variables } from '../Variables';
import './View.css';
import './Marque.css';




export class Project extends Component{
    constructor(props){
        super(props);

        this.state={
            projects:[],
            modalTitle:"",
            Id:0,
            Title:"",
            BackendRequirements:"",
            FrontendRequirements:"",
            DatabaseRequirements:"",
            Description:""
        }
    }


    refreshList(){

        fetch(variables.API_URL+'Projects')
        .then(response=>response.json())
        .then(data=>{
            this.setState({projects:data});
        });

    }

    componentDidMount(){
        this.refreshList();
    }
    
    changeTitle =(e)=>{
        this.setState({Title:e.target.value});
    }
    changeBackendRequirements =(e)=>{
        this.setState({BackendRequirements:e.target.value});
    }
    changeFrontendRequirements =(e)=>{
        this.setState({FrontendRequirements:e.target.value});
    }
    changeDatabaseRequirements =(e)=>{
        this.setState({DatabaseRequirements:e.target.value});
    }
    changeDescription =(e)=>{
        this.setState({Description:e.target.value});
    }


    addClick(){
        this.setState({
            modalTitle:"NEW",
            Id:0,
            Title:"",
            BackendRequirements:"",
            FrontendRequirements:"",
            DatabaseRequirements:"",
            Description:""
        });

    }

    editClick(lms){
        this.setState({
            modalTitle:"Edit",
            Id:lms.Id,
            Title:lms.Title,
            BackendRequirements:lms.BackendRequirements,
            FrontendRequirements:lms.FrontendRequirements,
            DatabaseRequirements:lms.DatabaseRequirements,
            Description:lms.Description
        });
    }

    createClick(){
        fetch(variables.API_URL+'Projects',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Title:this.state.Title,
                BackendRequirements:this.state.BackendRequirements,
                FrontendRequirements:this.state.FrontendRequirements,
                DatabaseRequirements:this.state.DatabaseRequirements,
                Description:this.state.Description
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
        fetch(variables.API_URL+'Projects',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Id:this.state.Id,
                Title:this.state.Title,
                BackendRequirements:this.state.BackendRequirements,
                FrontendRequirements:this.state.FrontendRequirements,
                DatabaseRequirements:this.state.DatabaseRequirements,
                Description:this.state.Description
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
        fetch(variables.API_URL+'Projects/'+id,{
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
            projects,
            modalTitle,
            Id,
            Title,
            BackendRequirements,
            FrontendRequirements,
            DatabaseRequirements,
            Description
        }=this.state;

        return(
<div className="container" >
    <header>
    <h3 className="d-flex justify-content-center header-1">My Projects</h3>
    </header>
    <marquee>Hexaware Technologies pvt.ltd</marquee>

    <button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        NEW
    </button>
    <table className="table table-striped table-hover">
    <thead className="table-dark">
    <tr>
        <th>
            Id
        </th>
        <th>
            Title
        </th>
        <th>
            Backend Requirements
        </th>
        <th>
            Frontend Requirements
        </th>
        <th>
            Database Requirements
        </th>
        <th>
            Description
        </th>
        <th>
            Options
        </th>
    </tr>
    </thead>
    <tbody>
        {projects.map(lms=>
            <tr key={lms.Id}>
                <td>{lms.Id}</td>
                <td>{lms.Title}</td>
                <td>{lms.BackendRequirements}</td>
                <td>{lms.FrontendRequirements}</td>
                <td>{lms.DatabaseRequirements}</td>
                <td>{lms.Description}</td>
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
            <span className="input-group-text">Title</span>
            <input type="text" className="form-control"
            required
            value={Title}
            onChange={this.changeTitle}/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Backend Requirements</span>
            <select className="form-select"
            onChange={this.changeBackendRequirements}

            value={BackendRequirements}>
                <option>---Options---</option>
                <option>ASP.NET Core/EF</option>
                <option>SpringBoot/Hibernate</option>
                <option>Other</option>
            </select>        
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Frontend Requirements</span>
            <select className="form-select"
            onChange={this.changeFrontendRequirements}

            value={FrontendRequirements}>
                <option>---Options---</option>
                <option>REACT</option>
                <option>Angular</option>
                <option>Other</option>

            </select>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">DatabaseRequirements</span>
            <select className="form-select"
             onChange={this.changeDatabaseRequirements}

            value={DatabaseRequirements}>
                <option>---Options---</option>
                <option>MSSQL SERVER</option>
                <option>MySQL</option>
                <option>SQLlite</option>

            </select>
        </div>
       
        <div className="input-group mb-3">
            <span className="input-group-text">Description</span>
            <input type="text" className="form-control"
            value={Description}
            onChange={this.changeDescription}/>
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








