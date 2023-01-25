import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { setTotalOver } from '../../redux/slice';
import { useDispatch } from 'react-redux';
// import Won from './result/won';
import './toss.css'

// radio button
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

// drop down

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { useSelector } from 'react-redux';

const Toss = () => {
    const dispatch= useDispatch()
    const state = useSelector((data)=>data)
    console.log(state);
    const [select ,setselect]=useState('');
    const [overs , setOvers]= useState(5);
    
    const handleChange = (event) => {
        setOvers(event.target.value);
        console.log(event.target.value);
        dispatch(setTotalOver(event.target.value))
      };
    const navigate = useNavigate();
    const selectToss=(e)=>{
        setselect(e)
        const content=document.getElementById('toss_select');
        content.style.visibility="hidden"
    }
    const tossSubmit=()=>{
        
        let randomToss=(Math.floor(Math.random()*2)+1).toString();
        console.log(randomToss);

        if(select === randomToss){
            console.log("toss won");
            navigate('/Won')
            dispatch(setTotalOver(overs))
        }
        else if(select === ""){
            const content=document.getElementById('toss_select');
            content.style.visibility="visible"
        }
        else if(select !== randomToss){
            console.log("toss lose");
            navigate('/Loss')
            dispatch(setTotalOver(overs))
        }
    }
  return (
    <div className='toss'>
        <div className='toss-sec'>
            <div className='teams-sec'>
                <img className='team-logo' width={90} src='https://upload.wikimedia.org/wikipedia/en/3/3f/Cricket_Australia.png' alt='aus'/>
                    <span>AUS Vs IND</span>
                <img className='team-logo' width={130} alt='ind' src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png'/>
            </div>
            <h5>TOSS</h5>
            <div className='select-toss'>
                {/* <p>IND choose :</p>
                <label >Head</label>
                <input value='1' type='radio' name='toss' onChange={e=>setselect(e.target.value)}/>
                <label> Tail </label>
                <input value='2' type='radio' name='toss' onChange={e=>setselect(e.target.value)}/>
                <input type='submit' placeholder='submit' onClick={()=>tossSubmit()}/> */}
                <FormControl>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                        <FormControlLabel value="female" control={<Radio value='1' onChange={e=>selectToss(e.target.value)}/>} label="HEAD" />
                        <FormControlLabel value="male" control={<Radio value='2' onChange={e=>selectToss(e.target.value)} />} label="TAIL" />
                        </RadioGroup>
                        <Box sx={{ minWidth: 200 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Overs</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={overs}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                <MenuItem value={1}>One Over</MenuItem>
                                <MenuItem value={2}>Two Overs</MenuItem>
                                <MenuItem value={5}>Five Overs</MenuItem>
                                <MenuItem value={10}>Ten Overs</MenuItem>
                                <MenuItem value={20}>Twenty Overs</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                </FormControl>
            </div>
            <span id='toss_select'>Please select option</span><br/>
            <Button variant="contained" size="large" onClick={()=>tossSubmit()}>Submit</Button>
        </div>
    </div>
  )
}

export default Toss