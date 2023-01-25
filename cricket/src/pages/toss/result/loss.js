import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import'./loss.css'

const Loss = () => {
  const navigate = useNavigate()
  const optionDone=()=>{
      navigate('/Players?id=2')
      
  }
  return (
    <div className='toss-loss'>
      <div className='toss-loss-sec'>
        <div className='toss-loss-sec-a'>
          <img className='team-logo' width={60} src='https://upload.wikimedia.org/wikipedia/en/3/3f/Cricket_Australia.png' alt='aus'/>
          <span>AUS WON THE TOSS & CHOSE TO BAT</span><br/>
        </div>
        <div className='loss-btn'>
          <Button variant="contained" size="large" onClick={()=>optionDone()}>Next</Button>
        </div>
      </div>
    </div>
  )
}

export default Loss