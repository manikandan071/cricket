import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { teamRuns } from '../../redux/slice';
import { useNavigate } from 'react-router-dom';
import { bowled } from '../../redux/slice';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { indiabowled } from '../../redux/slice';
import { ausBat } from '../../redux/slice';
import './home.css'
// import { bowler } from '../../redux/slice';
// import { strick } from '../../redux/slice';
// import { stateContext } from '../../redux/slice'

const Home = () => {
    // const{state , dispatch}=useContext(stateContext);
    // console.log(state);
    const [runs , setruns]= useState('');
    const state = useSelector((data)=>data.sample);
    console.log(state);
    let teamscore=state.teamScore;
    let wickets=state.teamWickets;
    let overs=state.overs
    console.log(overs);
    let players=state.ind.filter((item)=>{
        return(
            item.playerStrick === true
        )
    })
    console.log(players);
    let run;
    function randomRuns(){
        return(
            run=Math.floor(Math.random()*10)
        )
    }
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const starting = async () =>{
        // dispatch({type:"on_strick",payload:players});
        randomRuns();
        // await setTimeout(setruns(run),1000)
        if(run === 5){
            setruns("wickets")
        }
        else if(run === 0 || run === 7 || run === 8 || run === 9){
            setruns("DOT BALL")
        }
        else if(run !== ""){
            setruns(run)
        }
        // dispatch(bowler());
        dispatch(teamRuns(run));
        dispatch(bowled(run));
        if(run === 5){
            setTimeout(navigate('/Selectplayer'),1000)
        }
        if(state.firstHulf === false){
            console.log(state.setover-0.5);
            if(state.ausBatting.teamScore <= teamscore){
                navigate('/Result?id=1')
            }
            else if((state.setover-0.5) === overs){
                navigate('/Result?id=2')
            }
            else if(wickets === 9){
                if(run === 5){
                    console.log("last");
                    navigate('/Result?id=2')
                }
            }
        }
        
        console.log(run);
        // dispatch({type:'runs',payload:run});
        if(state.firstHulf){
            if(overs === (state.setover-0.5)){
                setTimeout(navigate('/Selectplayer'),1000)
            }
        }
    }
    const ausBatting = async ()=>{
        // dispatch({type:"on_strick",payload:players});
        await randomRuns();
        // await setTimeout(setruns(run),1000)
        if(run === 5){
            setruns("wickets")
        }
        else if(run === 0 || run === 7 || run === 8 || run === 9){
            setruns("DOT BALL")
        }
        else if(run !== ""){
            setruns(run)
        }
        // dispatch(bowler());
        await dispatch(ausBat(run))
        await dispatch(indiabowled(run));

        

        if(state.ausBatting.bowler[0].overBowled === state.ausBatting.bowler[0].overs){
            navigate('/SelectBowler');
        }
        else if(9 === state.ausBatting.teamWickets){
            if(run === 5){
                navigate('/SelectBowler');
            }
        }
        if(state.firstHulf === false){
            if(teamscore <= state.ausBatting.teamScore){
                navigate('/Result?id=3')
            }
            else if((state.setover-0.5) === state.ausBatting.overs){
                navigate('/Result?id=4')
            }
            else if(state.ausBatting.teamWickets === 9){
                if(run === 5){
                    console.log("last");
                    navigate('/Result')
                }
            }
        }
        // dispatch(bowled(run));
        // if(run === 5){
        //     setTimeout(navigate('/Selectplayer'),1000)
        // }
        console.log(run);
        // dispatch({type:'runs',payload:run});
        
    }


  return (
    <div>  
        {
        state.indfirstHulf?(
        <div className='first-score'>
            <div className='score-sec'>
                <h1>{runs}</h1>
                <Button variant="contained" size="large" color="success" onClick={starting}>click</Button>
                <div className='score-board'>
                    <div className='players-name'>
                        <img className='team-logo' width={60} alt='ind' src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png'/>
                    </div>
                <div className='score-box'>
                    <div className='first-box'>
                    {state.onstrick?.map((item,index)=>{
                    return(
                        <p key={index}>
                            <span>{item.playerName}</span>
                            <span> {item.playerRun} ({item.ballbased})</span>
                        </p>
                    )
                    })}
                    </div>
                    <div className='center-box'>
                        <div className='center-board'>
                            <span>{teamscore}-{wickets}</span>
                            <span>Overs : {overs}</span><br/>
                        </div>
                        <div className='center-board'>
                            {
                                state.firstHulf?(
                                    <span>RunRate : {(teamscore/overs).toFixed(2)}</span>
                                ):(
                                    <span>Target : {state.ausBatting.teamScore+1}</span>
                                )
                            }
                        </div>
                    </div>
                    <div className='first-box'>
                        <h3>{state.bowler.playerName}   {state.bowler.bowlercontribute}-{state.bowler.playerWickets}  ({state.bowler.overBowled})  </h3>
                    </div>
                </div>
                <div className='bowler-sec'>
                    <img className='team-logo' width={40} src='https://upload.wikimedia.org/wikipedia/en/3/3f/Cricket_Australia.png' alt='aus'/>
                </div>
                </div>
            </div>
            </div>
            ):
    (
        <div className='second-score'>
            <div className='score-sec'>
                <h1>{runs}</h1>
                <Button variant="contained" size="large" color="success" onClick={ausBatting}>click</Button>
                <div className='score-board'>
                    <div className='players-name'>
                        <img className='team-logo' width={40} src='https://upload.wikimedia.org/wikipedia/en/3/3f/Cricket_Australia.png' alt='aus'/>
                    </div>
                <div className='score-box'>
                    <div className='first-box'>
                    {state.ausBatting.onstrick?.map((item,index)=>{
                    return(
                        <p key={index}>
                            <span>{item.playerName}</span>
                            <span> {item.playerRun} ({item.ballbased})</span>
                        </p>
                    )
                    })}
                    </div>
                    <div className='center-box'>
                        <div className='center-board'>
                            <span>{state.ausBatting.teamScore}-{state.ausBatting.teamWickets}</span>
                            <span>Overs : {state.ausBatting.overs}</span><br/>
                        </div>
                        <div className='center-board'>
                            {
                                state.firstHulf?(
                                    <span>RunRate : {((state.ausBatting.teamScore)/(state.ausBatting.overs)).toFixed(2)}</span>
                                ):(
                                    <span>Target : {teamscore+1}</span>
                                )
                            }
                        </div>
                    </div>
                    <div className='first-box'>
                        <h3>{state.ausBatting.bowler[0].playerName} - {state.ausBatting.bowler[0].bowlercontribute} - {state.ausBatting.bowler[0].playerWickets} ({state.ausBatting.bowler[0].overBowled})  </h3>
                    </div>
                </div>
                <div className='bowler-sec'>
                    <img className='team-logo' width={60} alt='ind' src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png'/>
                </div>
                </div>
            </div>





        {/* <div className='score-sec'>
            <h1>{runs}</h1>
            <Button variant="contained" size="large" color="success" onClick={ausBatting}>click</Button>
        <div className='score-board'>
            <div className='players-name'>
                {state.ausBatting.onstrick?.map((item,index)=>{
                    return(
                        <div key={index}>
                            <span>{item.playerName}</span>
                            <span> {item.playerRun} ({item.ballbased})</span>
                        </div>
                        )
                        })}
                    </div>
                    <div className='score-box'>
                        <p>{state.ausBatting.teamScore}-{state.ausBatting.teamWickets}</p>
                        <p>Overs : {state.ausBatting.overs}</p>
                    </div>
                    <div className='bowler-sec'>
                        <h3>{state.ausBatting.bowler[0].playerName} - {state.ausBatting.bowler[0].bowlercontribute} - {state.ausBatting.bowler[0].playerWickets} ({state.ausBatting.bowler[0].overBowled})  </h3>
                    </div>
                </div>
                {
                    state.firstHulf?(
                        <div className='runrate'>
                            <h4>RunRate : {((state.ausBatting.teamScore)/(state.ausBatting.overs)).toFixed(2)}</h4>
                        </div>
                    ):(
                        <div className='runrate'>
                            <h5>Target : {teamscore+1}</h5>
                            <h4>Requst RunRate : {((teamscore-state.ausBatting.teamScore)/(20-state.ausBatting.overs)).toFixed(2)}</h4>
                        </div>
                    )
                }
            </div> */}
            </div>
        // <div>mani</div>
            )
        }
    </div>
  )
}

export default Home