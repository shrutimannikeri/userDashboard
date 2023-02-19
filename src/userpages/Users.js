import {useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import {API} from '../userpages/API'
import Avatar from '@mui/material/Avatar';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
export default function Users() {
    const navigates=useNavigate()
    const onButtonClickDelete = (e, id) => {
        fetch(`${API}/users/${id}`,
        {method:"DELETE"})
      .then(()=>getUserlist())
      .then(console.log("deleted"))
    };
   
 
    const columns = [
        { field: 'id', headerName: 'ID',  width: 50, },
        {
            field: 'avatar',
            headerName: 'User',
            width: 150,
            renderCell: (params) => <Avatar src={params.value} />, },
    
        { field: 'name', headerName: 'Name', width: 200, },
        { field: 'email', headerName: 'Email', width: 200,},
        {
          field: 'number',
          headerName: 'Phone Number',
          type: 'number',
          width: 200,
        
        },
        { field: 'ids', headerName: 'Actions', width: 200, renderCell: (params) => {
            return (
                <Box>
                     <Button sx={{  m: "10px" ,p: "10px" }}
                onClick={(e) =>  navigates(`/user/${params.id}`)}
                color="success"
              >
                <EditIcon />
              </Button>
              <Button 
              onClick={(e) => onButtonClickDelete(e, params.id)}
               color="error"
            >
              <DeleteIcon />
            </Button>
                </Box>
             
            );
          } }
      ];

    const [users,setUsers]=useState([])
  const getUserlist=()=>{
    fetch(`${API}/users`,{
     method:"GET"
    })
    .then(res=>res.json())
    .then(users=>setUsers(users))
   }
   
   useEffect(()=>getUserlist(),[]) 

   const navigate=useNavigate()

  return (
    <Box m="20px">
        
       <Box sx={{ height: 350, width: '100%', mb: 1 }}>
       <Header title="Users" subtitle="Welcome to your userlist page" />
        <Box sx={{  mb: 2}}>

        <Button 
               color="success"
              variant="outlined"
              onClick={()=>navigate('/adduser')}
            >
                <PersonAddAltIcon /> Add User </Button>
        </Box>
      
    <DataGrid
      rows={users}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />
  </Box>
  </Box>
  )
}
