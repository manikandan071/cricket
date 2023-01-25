import React from 'react'
import indlist from './ind.json'
import auslist from './aus.json'
import './player.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

const Playerlist = () => {
    const [param]=useSearchParams();
    let getId=parseInt(param.get('id'))
    const navigate=useNavigate();
    const matchStart=()=>{
        if(getId === 1){
            navigate('/Selectplayer')
        }
        else if(getId === 2){
            navigate('/SelectBowler')
        }
        
    }
  return (
    <div className='players-sec'>
        <div className='playerlist'>

        <div>
            <div className='aus-players-logo'>
                <img className='team-logo' width={90} src='https://upload.wikimedia.org/wikipedia/en/3/3f/Cricket_Australia.png' alt='aus'/>
            </div>
        {
            auslist.map((item,index)=>{
                return(
                    <div className='aus-players' key={index}>
                        <h5>{item.playerName}</h5>
                        <span style={{padding:"0 10px"}}>{item.playerCat}</span>
                    </div>
                )
            })
        }
        </div>

        <div>
        <div className='ind-players-logo'>
                <img className='team-logo' width={130} alt='ind' src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png'/>
            </div>
        {
            indlist.map((item,index)=>{
                return(
                    <div className='ind-players' key={index}>
                        <h5>{item.playerName}</h5>
                        <span style={{padding:"0 10px"}}>{item.playerCat}</span>
                    </div>
                )
            })
        }
        </div>
        
        </div>
        <div className='player-btn'>
            <Button variant="contained" size="large" onClick={()=>matchStart()}>Next</Button>
        </div>
    </div>
  )
}

export default Playerlist