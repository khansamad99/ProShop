import React, { useState, useEffect } from 'react'
import { Table, Form, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listMyOrders } from '../actions/orderAction'
import { getUserDetails, updateUserProfile } from '../actions/userActions'


const ProfileScreen = ({location,history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

  useEffect(() => {
    if(!userInfo){
        history.push('/login')
    } else {
        if(user.name){
            dispatch(getUserDetails('profile'))
        }
        else{
            setName(user.name)
            setEmail(user.email)
        }
    }
  },[dispatch,history,userInfo,user])

  
  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }))
    }
  }
    return (
        <div>
            <Col md={3}>
            <h2>User Profile</h2>
            {message && <Message variant='danger'>{message}</Message>}
            {}
            {success && <Message variant='success'>Profile Updated</Message>}
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant='danger'>{error}</Message>
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='name'
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
    
                <Form.Group controlId='email'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>
    
                <Form.Group controlId='password'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>
    
                <Form.Group controlId='confirmPassword'>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Confirm password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>
    
                <Button type='submit' variant='primary'>
                  Update
                </Button>
              </Form>
            )}
            </Col>
            <Col md={9}>
              {loadingOrders ? <Loader/> : errorOrders ? <Message variant='danger'>
                {errorOrders}
               </Message> : (
                 <Table striped bordered hover responsive className='table-sm'>
                   <thead>
                     <tr>
                       <th>ID</th>
                       <th>DATE</th>
                       <th>TOTAL</th>
                       <th>PAID</th>
                       <th>DELIVERED</th>
                     </tr>
                   </thead>
                   <tbody>
                     {orders.map(map=> (
                       <tr key={orders._id}>
                         <td>{orders._id}</td>
                         <td>{orders._createdAt}</td>
                         <td>{orders._totalPrice}</td>
                         <td>{orders.isPaid ? orders.paidAt.substring(0,10):(
                           <i className='fas fa-times' style={{color:'red'}}></i>
                         )}
                        </td>
                         <td>{orders.isDelivered ? (
                           orders.deliveredAt.substring(0,10)
                         ) : (
                           <i className='fas fa-times' style={{ color:'red'}}></i>
                         )}</td>
                         <td>
                           <LinkContainer to={`/order/${orders._id}`}>
                             <Button className='btn-sm' variant='light'>Details</Button>
                           </LinkContainer>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </Table>
               )}
            </Col>
        </div>
    )
}

export default ProfileScreen
