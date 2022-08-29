import React from 'react'
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";
import DatePicker from "react-datepicker";
import { ErrorMessage } from '../common/formikError'
import { useFormik } from 'formik';
import { common } from '../../servies/common';

const Input = (props) => {
  return (
    <>
        <div className='formGroup mb-3'>
            <div className='row'>
                <div className='col-lg-4'>
                    <label>{props?.label}</label>
                </div>
                <div className='col-lg-8'>
                    <input {...props} disabled={props?.disabled || false} className="form-control" />
                    <ErrorMessage formik={props?.formik} name={props?.name} />
                </div>
            </div>
            
        </div>
    </>
  )
}

export const InputImage = (props)=>{
    const handleChange = async(files)=> {
        let images=[]
        for (let index = 0; index < files.length; index++) {
            let file = files[index];
            images.push({
                image:file
            })
        }
        props?.onChange(images)
    }
    return (
        <>
            
            <div className='formGroup mb-3'>
                <div className='row'>
                    <div className='col-lg-4'>
                        {props?.label}
                    </div>
                    <div className='col-lg-8'>
                        {props?.value && (
                            <div className='imagblkWrp d-flex flex-wrap'>
                                {props?.value?.map((d,k)=>(
                                    <div className='imageBlock mb-3' key={k}>
                                        {d?.image && <img src={common.previewURL(d?.image)} className="img-fluid img-thumbnail" />}
                                    </div>
                                ))}
                            </div>
                        )}
                        <input type="file" accept="image/png, image/jpg, image/jpeg" multiple onChange={(e)=>handleChange(e?.target?.files)} className="form-control" />
                    </div>
                </div>
            </div>
        </>
    )
}
export const InputDatePicker = (props)=>{
    return (
        <>
            
            <div className='formGroup mb-3'>
                <div className='row'>
                    <div className='col-lg-4'>
                        {props?.label}
                    </div>
                    <div className='col-lg-8'>
                        <DatePicker dateFormat="dd/MM/yyy" selected={props?.value || new Date()} disabled={props?.disabled || false} onChange={(date) => props?.onChange(date)} className="form-control" />
                        <ErrorMessage formik={props?.formik} name={props?.name} />
                    </div>
                </div>
                
            </div>
        </>
    )
}
export const Submit = (props)=>{
    return (
        <>
            
            <div className='formGroup mb-3'>
                <div className='row'>
                    <div className='col-lg-4'>
                    </div>
                    <div className='col-lg-8'>
                        <button {...props} className="btn btn-primary theme-btn">{props?.name || 'Submit'}</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Input