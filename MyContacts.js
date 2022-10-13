import React from 'react';
import { DataGrid, GridToolbar  } from '@mui/x-data-grid';
import {Button, Modal, TextField, Select, MenuItem, InputLabel, FormControl, Grid, Paper} from '@mui/material';
import { useNavigate  } from "react-router-dom";
import { variables } from '../Variables';


export default function MyContacts()
{

    const [contacts, setContacts] = React.useState([]);


    const [modalNewContact, setModalNewContact] = React.useState(false);
    const switchModalNewContact = ()=>
    {
        setModalNewContact(!modalNewContact);
    }
    const templateNewContact = 
    {
        //ContactId:0,
        FirstName:"",
        LastName:"",
        Email:"",
        PhNo:"",
        Designation:"",
        Address:""

    };
    const [newContact, setNewContact] = React.useState(templateNewContact);
    const newContactHandleChange= e=>
    {
        const {name,value} = e.target;
        setNewContact(prevstate=>(
        {
            ...prevstate,
          [name]: value
        }))
    }
    const openModalEditContact = (data)=>
    {
        setNewContact(data);
        newContact.id = data.id
        setModalNewContact(!modalNewContact);
    }

    const navigate = useNavigate();
    const logoutAndGoMain = ()=>
    {
        navigate("/SignIn", { replace: true })
    }

    React.useEffect(()=>
    {
        loadAllAPIData();
    }, []);

    const loadAllAPIData = async()=>
    {
        try
        {
            await loadContacts();
        }
        catch(err)
        {
            alert("Database connection error...");
            logoutAndGoMain();
        }
    }

    const APIheaders = {
        'Content-Type': "application/json",
        //'Authorization': getToken()
    };

    const loadContacts = async() =>
    {
        const URLToFetch = variables.API_URL + "api";

        await fetch(URLToFetch,
        {
            method: "GET",
            headers: APIheaders
        }).then(async(response)=>
        { 
            await response.text().then(data=>
            {
                if(response.status === 401)
                    logoutAndGoMain();
                else if(response.status !== 200 )
                    alert(data);
                else
                {
                    const json=JSON.parse(data);
                    setContacts(json);
                }
            })
        });
    }



    const deleteContacts=async(id)=>
    {
        const URLToFetch = variables.API_URL + "api/" + id.toString();

        await fetch((URLToFetch),
        {
            method: "DELETE",
            headers: APIheaders,
        }).then(async(response)=>{await response.text().then((result)=>
        {
            if(response.status === 401)
                logoutAndGoMain();
            else if(response.status !== 200)
                alert(result);
            else
                loadAllAPIData();
        })});      
    };

    const postOrPutContact=async()=>
    {
        const URLToFetch = variables.API_URL + "api/";

        await fetch((URLToFetch),
        {
            method: newContact.hasOwnProperty("id") ? "PUT" : "POST",
            headers: APIheaders,
            body: JSON.stringify(newContact),
        }).then(async(response)=>{await response.text().then((result)=>
        {
            if(response.status === 401)
                logoutAndGoMain();
            else if(response.status !==200)
                alert(result);
            else
            {
                loadAllAPIData();
                switchModalNewContact();
            }
        })});      
    };

    const modalFormStyle = 
    {
        position: 'absolute',
        width: "40%",
        border: '4px #000',
        backgroundColor: "white",
        padding: "30px",
        top: "50%",
        left: '50%',
        transform: 'translate(-50%,-50%)'
    };

 
    const deleteButtonStyle = 
    {
        backgroundColor: "#e8605d",
        width:"100%",
        padding: "3px 35px",
    };

    const newButtonStyle = 
    {
        backgroundColor: "#0c7d06",
        width:"2%",
        height: "27px",
        padding: "3px 35px",
        marginTop:"10px",
    };

    const editButtonStyle = 
    {
        backgroundColor: "#ffcc00",
        width:"48%",
        marginRight: "4%",
        padding: "3px 35px"
    };
    
    const paperStyle=
    {
        padding: "30px", 
        height: 600,
        margin: "0px auto"
    };

    const crudDataGridStyle = 
    {
        height: 420,
        width: '100%',  
        marginBottom:"40px",
    };

    const crudDataGridPageSize = 5;

 
    const bodyModalNewContact =(
        <div style={modalFormStyle}>
            <h3>New Contact</h3>
            <form action='#' onSubmit={(event)=>{postOrPutContact(); event.preventDefault();}} >
                <Grid container spacing={2}>
                    <Grid container item xs={6} direction="column" >

                        <TextField name="FirstName" onChange={(e)=>newContactHandleChange(e)} 
                            defaultValue={ newContact.FirstName !== ""  ? newContact.FirstName : null}
                            label="First Name" type='text' variant="outlined" 
                            inputProps={{ minLength: 3, maxLength: 50}} required/>
                        <br />

                        <TextField name="LastName" onChange={(e)=>newContactHandleChange(e)} 
                            defaultValue={ newContact.LastName !== ""  ? newContact.LastName : null}
                            label="Last Name" type='text' variant="outlined" 
                            inputProps={{ maxLength: 50}}/>
                        <br />
                        </Grid>


                    <Grid container item xs={6} direction="column">
                        <TextField name="Email" onChange={(e)=>newContactHandleChange(e)} 
                            defaultValue={ newContact.Email >0  ? newContact.Email : null}
                            label="Email" type='text' variant="outlined" 
                            inputProps={{ min: 0}} required/>
                        <br />

                        <TextField name="PhNo" onChange={(e)=>newContactHandleChange(e)} 
                            defaultValue={ newContact.PhNo >0  ? newContact.PhNo : null}
                            label="PhNO" type='text' variant="outlined" 
                            inputProps={{ min: 0}} required/>
                        <br />

                        <TextField name="Designation" onChange={(e)=>newContactHandleChange(e)} 
                            defaultValue={ newContact.Designation >0  ? newContact.Designation : null}
                            label="Designation" type='text' variant="outlined" 
                            inputProps={{ min: 0}} required/>
                        <br />

                        <TextField name="Address" onChange={(e)=>newContactHandleChange(e)} 
                            defaultValue={ newContact.Address >0  ? newContact.Address : null}
                            label="Address" type='text' variant="outlined" 
                            inputProps={{ min: 0}} required/>
                        <br />




                    </Grid>
                </Grid>    
            
            <br /><br />
            <div align="right">
                <Button type='submit' color="primary">Insert</Button>
                <Button onClick={switchModalNewContact}> Cancel</Button>
            </div>
            </form>
        </div>
    )

    const contactsTable = ()=>
    {
        return(
            <Grid>
                <Paper elevation={12} style={paperStyle}>
                    <h1 className='crudTitle'> Contacts</h1>
                    <DataGrid style={crudDataGridStyle} components={{ Toolbar: GridToolbar }}
                        columns={
                        [
                            {field:"ContactId", headerName:"ID", hideable:false, flex:0.6},
                            {field:"FirstName", headerName:"FirstName", flex:1},
                            {field:"LastName", headerName:"LastName", flex:0.7},
                            {field:"Email", headerName:"Email", flex:1},
                            {field:"PhNo", headerName:"PhNo", flex:1},
                            {field:"Designation", headerName:"Designation", flex:1},
                            {field:"Address", headerName:"Address", flex:0.7},
                            {field: "action", headerName:"Action", sortable:false, hideable:false, filterable:false, flex:1,
                                renderCell: (contact) => 
                                (<>
                                        <Button style={editButtonStyle} onClick={()=>openModalEditContact(contact.row)}
                                            variant="contained" type="submit">
                                            Edit
                                        </Button>

                                        <Button style={deleteButtonStyle} onClick={() => deleteContacts(contact.id)}
                                            variant="contained" type="submit">
                                            Delete
                                        </Button>
                                </>)
                            }
                        ]}
                        getRowId={(row) => row.id}
                        rows={contacts}
                        pageSize={crudDataGridPageSize}
                    />

                    <Button style={newButtonStyle} onClick={()=>{setNewContact(templateNewContact); switchModalNewContact();}}
                        variant="contained" type="submit">
                        NEW
                    </Button>

                    <Modal
                        open={modalNewContact}
                        onClose={switchModalNewContact}>

                        {bodyModalNewContact}
                    </Modal>
                </Paper>
            </Grid>
        );
    }

    return(
       <div>
            
            <div className='crudContentDiv'>
                <br/><br/>
                {contactsTable()}
                <br/><br/>
            </div>
       </div>
    );
}
