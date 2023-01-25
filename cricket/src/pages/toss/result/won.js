import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { indselect } from '../../../redux/slice';
import './won.css'

// radio button

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';


const Won = () => {
    const navigate=useNavigate();
    
    const [option , setOption]= useState('');
    const dispatch= useDispatch();
    const selectOption = (e)=>{
      setOption(e)
      const content=document.getElementById('toss_select');
      content.style.visibility="hidden"
    }
    const optionDone=()=>{
      if(option === "batting"){
        dispatch(indselect())
        navigate('/Players?id=1');
      }
      else if(option === ""){
        const content=document.getElementById('toss_select');
        content.style.visibility="visible"
      }
      else if(option === "bowling"){
        navigate('/Players?id=2')
      }
    }
      // else{
      //   navigate('/SelectBowler');
      // }
  return (
    <div className='toss-won'>
      <div className='choose-sec'>
        <div className='choose-title'>
          <img className='team-logo ind' width={80} alt='ind' src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png'/>  
          <span>IND WON THE TOSS OPTION TO</span>
        </div>
        
        <div className='option'>
            <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                        <FormControlLabel value="female" control={<Radio value='batting' onChange={e=>selectOption(e.target.value)}/>} label="BAT" />
                        <FormControlLabel value="male" control={<Radio value='bowling' onChange={e=>selectOption(e.target.value)} />} label="BOWL" />
                        </RadioGroup>
              </FormControl>
        </div>
        <span id='toss_select'>Please select option</span><br/>
        <Button variant="contained" size="large" onClick={()=>optionDone()}>Submit</Button>
    </div>
    </div>
  )
}

export default Won