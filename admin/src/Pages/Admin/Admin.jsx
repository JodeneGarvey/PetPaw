import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
import EditProduct from '../../Components/EditProduct/EditProduct'
import Orders from '../../Components/Order/Order'
import UpdateStatus from '../../Components/UpdateStatus/UpdateStatus'
import ViewOrder from '../../Components/ViewOrder/ViewOrder'

const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar />
        <Routes>
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/listproduct' element={<ListProduct/>} />
          <Route path='/editproduct/:id' element={<EditProduct/>}/>
          <Route path='/allorders' element={<Orders />} />
          <Route path='/updatestatus/:id' element={<UpdateStatus />} />
          <Route path='/vieworder/:id' element={<ViewOrder />} />
        </Routes>

    </div>
  )
}

export default Admin