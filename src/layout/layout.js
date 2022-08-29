import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddUser from '../pages/addUser'
import UserList from '../pages/userList'
import UserView from '../pages/userView'
import Header from './header'

const Layout = () => {
  return (
    <>
        <div className='mainWrapper'>
            <Header />
            <div className='pageWrapper pt-5 pb-5'>
                <Suspense fallback={'loading'}>
                    <Routes>
                        <Route path="/" element={<UserList />} />
                        <Route path="/addStudent" element={<AddUser />} />
                        <Route path="/student/:id" element={<UserView />} />
                    </Routes>
                </Suspense>
            </div>
        </div>
    </>
  )
}

export default Layout