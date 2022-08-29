import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import * as yup from "yup";
import { Card, Container } from 'react-bootstrap'
import Input, { InputDatePicker, InputImage, Submit } from '../components/forms/input';
import { useDispatch, useSelector } from 'react-redux';
import { addUserList } from '../actions';
import { useNavigate, useParams } from 'react-router-dom';

const AddUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialValues = {
        image: [],
        firstName: "",
        lastName: "",
        fatherName: "",
        email: "",
        address: "",
        phoneNo: "",
        dob: new Date(),
    };
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const validationSchema = yup.object({
        firstName: yup.string().required("Please enter first name"),
        lastName: yup.string().required("Please enter last name"),
        fatherName: yup.string().required("Please enter father name"),
        email: yup.string().email("Please enter valid email").required("Please enter email"),
        address: yup.string().required("Please enter password"),
        phoneNo: yup.string().matches(phoneRegExp, 'Mobile number is not valid').length(10).required("Please enter mobile number!"),
        dob: yup.string().required("Please select dob"),
    });
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values)=>{
            dispatch(addUserList(values))
            navigate('/')
        },
    })

  return (
    <>
        <Container>
        <div className='userFormwrp'>
            <Card>
                <Card.Body>
                    <form onSubmit={formik.handleSubmit}>
                        <InputImage multiple={true} {...formik.getFieldProps('image')} onChange={(image)=>formik.setFieldValue('image', image)} label="Profile Photo" formik={formik} />
                        <Input type="text" {...formik.getFieldProps('firstName')} label="First Name" formik={formik} />
                        <Input type="text" {...formik.getFieldProps('lastName')} label="Last Name" formik={formik} />
                        <Input type="text" {...formik.getFieldProps('fatherName')} label="Father Name" formik={formik} />
                        <Input type="email" {...formik.getFieldProps('email')} label="Email" formik={formik} />
                        <Input type="text" {...formik.getFieldProps('address')} label="Address" formik={formik} />
                        <Input type="number" {...formik.getFieldProps('phoneNo')} label="Mobile No." formik={formik} />
                        <InputDatePicker {...formik.getFieldProps('dob')} onChange={(date)=>formik.setFieldValue('dob', new Date(date))} label="DOB" formik={formik} />
                        <Submit type="submit" name="Add Student"/>
                    </form>
                </Card.Body>
            </Card>
        </div>
        </Container>
    </>
  )
}

export default AddUser