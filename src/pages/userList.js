import React from 'react'
import { ButtonGroup, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeUserList } from '../actions'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const UserList = () => {
    const users = useSelector((state)=>state.GetUserList)
    const dispatch = useDispatch()
    const handleRemove = (id)=>{
        confirmAlert({
            title: 'Confirm to remove',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Remove',
                onClick: () => dispatch(removeUserList(id))
              },
              {
                label: 'Cancel'
              }
            ]
        });
        
    }
    console.log(users)
  return (
    <>
        <div className='userlstPage'>
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Father Name</th>
                            <th>Mobile No</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((d,k)=>(
                            <tr key={k}>
                                <td>{k+1}</td>
                                <td>{d?.firstName}</td>
                                <td>{d?.lastName}</td>
                                <td>{d?.fatherName}</td>
                                <td>{d?.phoneNo}</td>
                                <td>{d?.email}</td>
                                <td>
                                    <ButtonGroup>
                                        <Link to={`/student/${k}`} className="btn btn-sm btn-primary">View</Link>
                                        <a onClick={()=>handleRemove(k)} className="btn btn-sm btn-danger">Remove</a>
                                    </ButtonGroup>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </Table>
            </Container>
        </div>
        
    </>
  )
}

export default UserList