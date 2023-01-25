import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import './result.css'

const Result = () => {
    const state=useSelector((data)=>data.sample)
    const [ routerParam ]=useSearchParams()
    console.log(routerParam.get('id'));
    let id=parseInt(routerParam.get('id'));
    console.log(state);
    const navigate = useNavigate();
    const ausScore=()=>{
        navigate('/Aus');
    }
    const indScore=()=>{
        navigate('/Ind');
    }

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
          backgroundColor: purple[700],
        },
      }));

if(id === 1){
    return(
        <div className='won-ind'>
            <div className='match-result'>
                <span>MATCH RESULT</span>
            </div>
            <div className='team-result'>
                <div className='team-total'>
                    <img className='team-logo' width={170} alt='ind' src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png'/>
                    <div className='ind-scoreboard'>
                        <span>{state.teamScore} | {state.teamWickets}</span>
                        <p>OVERS : {state.overs}</p>
                    </div>
                    <div>
                        <ColorButton variant="contained" color="success" size="large" onClick={()=>indScore()}>Scoreboard</ColorButton>
                    </div>
                </div>
                <div className='team-total'>
                    <img className='team-logo' width={125} src='https://upload.wikimedia.org/wikipedia/en/3/3f/Cricket_Australia.png' alt='aus'/>
                    <div className='aus-scoreboard'>
                        <span>{state.ausBatting.teamScore} | {state.ausBatting.teamWickets} </span>
                        <p>OVERS : {state.ausBatting.overs}</p>
                    </div>
                    <div>
                        <ColorButton variant="contained" color="success" size="large" onClick={()=>ausScore()}>Scoreboard</ColorButton>
                    </div>
                </div>
            </div>
            <div className='result-show'>
                <span>Ind won by {10-state.teamWickets} wickets</span>
            </div>
        </div>
    )
}
else if(id === 2){
    return(
        <div className='won-aus'>
            <div className='match-result'>
                <span>MATCH RESULT</span>
            </div>
            <div className='team-result'>
                <div className='team-total'>
                    <img className='team-logo' width={170} alt='ind' src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png'/>
                    <div className='ind-scoreboard'>
                        <span>{state.teamScore} | {state.teamWickets}</span>
                        <p>OVERS : {state.overs}</p>
                    </div>
                    <div>
                        <ColorButton variant="contained" size="large" onClick={()=>indScore()}>Scoreboard</ColorButton>
                    </div>
                </div>
                <div className='team-total'>
                    <img className='team-logo' width={125} src='https://upload.wikimedia.org/wikipedia/en/3/3f/Cricket_Australia.png' alt='aus'/>
                    <div className='aus-scoreboard'>
                        <span>{state.ausBatting.teamScore} | {state.ausBatting.teamWickets} </span>
                        <p>OVERS : {state.ausBatting.overs}</p>
                    </div>
                    <div>
                        <ColorButton variant="contained"  size="large" onClick={()=>ausScore()}>Scoreboard</ColorButton>
                    </div>
                </div>
            </div>
            <div className='result-show'>
                <span>aus won by {state.ausBatting.teamScore-state.teamScore} Runs</span>
            </div>
        </div>
    )
}
else if(id === 3){
    return(
        <div className='won-aus'>
            <div className='match-result'>
                <span>MATCH RESULT</span>
            </div>
            <div className='team-result'>
                <div className='team-total'>
                    <img className='team-logo' width={170} alt='ind' src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png'/>
                    <div className='ind-scoreboard'>
                        <span>{state.teamScore} / {state.teamWickets}</span>
                        <p>OVERS : {state.overs}</p>
                    </div>
                    <div>
                        <ColorButton variant="contained" color="success" size="large" onClick={()=>indScore()}>Scoreboard</ColorButton>
                    </div>
                </div>
                <div className='team-total'>
                    <img className='team-logo' width={125} src='https://upload.wikimedia.org/wikipedia/en/3/3f/Cricket_Australia.png' alt='aus'/>
                    <div className='aus-scoreboard'>
                        <span>{state.ausBatting.teamScore} / {state.ausBatting.teamWickets} </span>
                        <p>OVERS : {state.ausBatting.overs}</p>
                    </div>
                    <div>
                        <ColorButton variant="contained" color="success" size="large" onClick={()=>ausScore()}>Scoreboard</ColorButton>
                    </div>
                </div>
            </div>
            <div className='result-show'>
                <span>aus won by {10-state.ausBatting.teamWickets} wickets</span>
            </div>
        </div>
    )
}
else if(id === 4){
    return(
        <div className='won-ind'>
            <div className='match-result'>
                <span>MATCH RESULT</span>
            </div>
            <div className='team-result'>
                <div className='team-total'>
                    <img className='team-logo' width={170} alt='ind' src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png'/>
                    <div className='ind-scoreboard'>
                        <span>{state.teamScore} / {state.teamWickets}</span>
                        <p>OVERS : {state.overs}</p>
                    </div>
                    <div>
                        <ColorButton variant="outlined" color="success" size="large" onClick={()=>indScore()}>Scoreboard</ColorButton>
                    </div>
                </div>
                <div className='team-total'>
                    <img className='team-logo' width={125} src='https://upload.wikimedia.org/wikipedia/en/3/3f/Cricket_Australia.png' alt='aus'/>
                    <div className='aus-scoreboard'>
                        <span>{state.ausBatting.teamScore} / {state.ausBatting.teamWickets} </span>
                        <p>OVERS : {state.ausBatting.overs}</p>
                    </div>
                    <div>
                        <ColorButton variant="outlined" color="success" size="large" onClick={()=>ausScore()}>Scoreboard</ColorButton>
                    </div>
                </div>
            </div>
            <div className='result-show'>
                <span>ind won by {state.teamScore-state.ausBatting.teamScore} Runs</span>
            </div>
        </div>
    )
}
}

export default Result