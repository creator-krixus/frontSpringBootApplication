import React, {useState, useEffect} from 'react'
import '../styles/Student.css'

export default function Student() {
    const [name, setname] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [addres, setaddres] = useState('');

    const [students, setStudents] = useState([])

    const clean = () => {
        this.data.value = ""
    }

    const handleClick = (e) => {
        e.preventDefault()
        const student = {name, lastName, email, addres}
        console.log(student)
        if (name === "" || lastName === "" || email === "" || addres === ""){
            alert('Todos los campos deben ser llenados')
        }else{
            fetch('http://localhost:8090/student/add',
            {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(student)
            }).then(()=>{
                console.log("New student add")
            })
        }

    }

    useEffect(() => {
        fetch('http://localhost:8090/student/getAll')
        .then(res=>res.json())
        .then(result=>{
            setStudents(result);
        })
    }, [])
    return (
        <div className="student">
            <h1>Add Student</h1>
            <form className="info-student">
                <label className="request-data">Name</label><br />
                <input className="data" 
                value={name} 
                onChange={(e) => setname(e.target.value)}
                /><br />

                <label className="request-data">Last name</label><br />
                <input className="data" 
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                /><br />

                <label className="request-data">Email</label><br />
                <input className="data" 
                value={email}
                onChange={(e) => setemail(e.target.value)}
                /><br />

                <label className="request-data">Addres</label><br />
                <input className="data" 
                value={addres}
                onChange={(e) => setaddres(e.target.value)}
                /><br />

                <button className="send" onClick={handleClick}>Send</button>
                <button className="clean" onClick={clean}>Clean</button>
            </form>
            <h2>Estudiantes activos</h2>
            <table className="show-data">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Addres</th>
                    </tr>
                </thead>
                {students.map((student) => (
                                <tbody key={student.id}>
                                    <tr>
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.email}</td>
                                        <td>{student.addres}</td>
                                    </tr>
                                </tbody> 
                            ))}
            </table>
        </div>
    )
}
