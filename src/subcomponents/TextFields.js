import React from 'react'
import { useField, ErrorMessage } from 'formik'
import '../CSS/Login.css'

function TextFields({ label, ...props }) {
  const [field, meta] = useField(props)
    return (
    <div className='login-form-input-wrapper'>
        <label htmlFor={field.name} className="inputfield-label">{label} </label>
            <input 
            className={`${meta.touched && meta.error} inputfieldclass`} 
            autoComplete='off'
            {...field}{...props}
            />
      <ErrorMessage component="div" name={field.name} className="validationerrormsg" style={{color:'red !important', fontSize:'13px !important'}}/>
    </div>
  )
}

export default TextFields