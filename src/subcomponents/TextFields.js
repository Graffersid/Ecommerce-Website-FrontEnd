import React, { useState } from 'react'
import { useField, ErrorMessage } from 'formik'
import '../CSS/Login.css'
import { Autocomplete, Box, TextareaAutosize, TextField } from '@mui/material'
import { Country, State, City }  from 'country-state-city';
function TextFields({ label, ...props }) {
  const [field, meta] = useField(props)
  const States= State.getStatesOfCountry("IN")
  const [selectedState, setSelectedState] =useState('')
  
  return (
    <div className='login-form-input-wrapper'>
        <label htmlFor={field.name} className="inputfield-label">{label} <sup style={{color:'red',fontSize:"19px",top:'0px'}}>* </sup></label>
    
          {props.type==='textarea' ? 
            <textarea
            className={`${meta.touched && meta.error} inputfieldclass`} 
            autoComplete='off'
            {...field}{...props}
            style={{height:"6rem" , width:'100%',padding: "15px"}}
            ></textarea>:
            <input 
            className={`${meta.touched && meta.error} inputfieldclass`} 
            autoComplete='off'
            {...field}{...props}
            />}

 <div>
          {/* {props.selectedState ?  
         <Autocomplete
                                  id="country-select-demo"
                                  sx={{ width: 300 }}
                                  options={States}
                                  autoHighlight
                                  getOptionLabel={(option) => option.name}
                                  onChange={(option,value)=>{
                                    setSelectedState(value)
                                  }}
                                  renderOption={(props, option) => (
                                    
                                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                      <img
                                        loading="lazy"
                                        width="20"
                                        src={`https://flagcdn.com/w20/${option.countryCode.toLowerCase()}.png`}
                                        srcSet={`https://flagcdn.com/w40/${option.countryCode.toLowerCase()}.png 2x`}
                                        alt=""
                                      />
                                      {option?.name} ({option?.countryCode})
                                    </Box>
                                  )}
                                  renderInput={(params) => (
                                    <TextField
                                      {...params}
                                      label="Choose a State"
                                      inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                      }}
                                      required
                                    />
                                   

                                    )
                                  }
                                />
                            :null  } */}
                            </div>
      <ErrorMessage component="div" name={field.name} className="validationerrormsg" style={{color:'red !important', fontSize:'13px !important'}}/>
    </div>
  )
}

export default TextFields