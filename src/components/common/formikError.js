import React from 'react'

export const ErrorMessage = (props) => {
    const {formik, name} = props;
  return (
    <>
        {formik?.touched?.[name] && formik.errors?.[name] ? (
            <div className="error">{formik.errors?.[name]}</div>
        ) : null}
    </>
  )
}
