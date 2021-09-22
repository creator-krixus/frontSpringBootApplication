import React, {
    useState
} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {
    Container
} from '@mui/material';
import '../styles/Student.css'
import swal from 'sweetalert';


export default function Student() {
    const paperstyle = {padding: '15px', margin: '10px auto'}
    const [name, setname] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [addres, setaddres] = useState('');

    const refreshPage = ()=>{
        window.location.reload();
     }

    const handleClick = (e) => {
        e.preventDefault()
        const student = {
            name,
            lastName,
            email,
            addres
        }
        console.log(student)
        if (name === "" || lastName === "" || email === "" || addres === "") {
            alert('Todos los campos deben ser llenados')
        } else {
            fetch(`${process.env.REACT_APP_URL}/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            }).then(() => {
                console.log("New student add")
                setname(' ')
                setlastName(' ')
                setemail(' ')
                setaddres(' ')
                swal({
                    title: "Good job!",
                    text: "New student add!",
                    icon: "success",
                  });
                setInterval(refreshPage(), 40000)  
            })
        }

    }


    return ( <
        Container  maxWidth="sm">
        <Paper elevation={4} style={paperstyle}>
        <h1> Add Student </h1> <
        Box component = "form"
        sx = {
            {
                '& > :not(style)': {
                    m: 1,
                    width: '80%'
                },
            }
        } style={paperstyle}>
        <
        TextField id = "outlined-basic"
        label = "Name"
        variant = "outlined"
        value = {name}
        onChange = {(e) => setname(e.target.value)}
        /> <
        TextField id = "outlined-basic"
        label = "Last Name"
        variant = "outlined"
        value = {lastName}
        onChange = {(e) => setlastName(e.target.value)}
        /><br / >
        <
        TextField id = "outlined-basic"
        label = "email"
        variant = "outlined"
        value = {email}
        onChange = {(e) => setemail(e.target.value)}
        /> <
        TextField id = "outlined-basic"
        label = "Addres"
        variant = "outlined"
        value = {addres}
        onChange = {(e) => setaddres(e.target.value)}
        /><br / >

        </Box>   
        <
        Button variant = "contained"
        onClick = {
            handleClick
        } size="small"> Save </Button> 
        </Paper>
        
        </Container>
    )
}