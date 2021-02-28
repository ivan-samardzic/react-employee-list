import './index.css';
import Header from './components/Header'
import Employees from './components/Employees'
import AddForm from './components/AddForm'
import Footer from './components/Footer'
import Message from './components/Message'
import {useState} from 'react'

const App = () => {
//   const employees = [
//     {
//         id : 1,
//         name : "Neno Zidic",
//         position : "Junior Frontend Developer",
//         image : "https://avatars.githubusercontent.com/u/61367247?s=460&u=7cd4cf104d10a528db4cff01b704c8f8b22cb536&v=4",
//         moto : "Javascript is the best tool to make my life happy."
//     },
//     {
//       id : 2,
//       name : "Ivan Samardzic",
//       position : "Junior Frontend Developer",
//       image : "https://avatars.githubusercontent.com/u/56680446?s=460&u=a9bf2ef9f28fb7d02f50c3ec11d2dfcceb5ecc02&v=4",
//       moto : "React and Node are my passports to travel all around the world."
//     }, 
//     {
//       id : 3,
//       name : "Petar Perkovic",
//       position : "Junior Full Stack Developer",
//       image : "https://scontent-vie1-1.xx.fbcdn.net/v/t1.0-0/s526x395/44135735_10213020171807682_4403324115377717248_o.jpg?_nc_cat=107&ccb=3&_nc_sid=174925&_nc_eui2=AeG4o9CxugAwdcM3AhrD6TqcATXcQ6wuf34BNdxDrC5_fp9tzgkYOLaB8O1AMfMntf-zLSWaapThceDuqPVSW1yn&_nc_ohc=wqA1wbvjex8AX9vkU05&_nc_ht=scontent-vie1-1.xx&tp=7&oh=cd13dfb316d731935f096b770adc2232&oe=605DD68A",
//       moto : "Working on remote allows me to work with people all across the world from my house."
//       },
// ]

  const [showAddEmployee, setShowAddEmployee] = useState(false)
  const [employees, setEmployees] = useState([])
  const [employee, setEmployee] = useState({})

  const addEmployee = (employee) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newEmployee = {id, ...employee};
    setEmployees([...employees, newEmployee]);
  }

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  }

  const editEmployee = (newEmployee) => {
    setEmployee(newEmployee);
  }


  return (
    <div>
      <Header onAdd={() => setShowAddEmployee(!showAddEmployee)} showAdd={showAddEmployee}/>
      <div className="container">
        {showAddEmployee && <AddForm  onAdd={addEmployee}  employee={employee}/>}
        {employees.length > 0 ?<Employees employees={employees} onDelete={deleteEmployee} onEdit={editEmployee} /> : <Message />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
