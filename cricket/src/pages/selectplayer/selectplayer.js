import React from 'react'
import { useNavigate } from 'react-router-dom';
// import { stateContext } from '../../redux/slice'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { strickPlayers } from '../../redux/slice';
import { indFirst } from '../../redux/slice';
// import { bowler } from '../../redux/slice';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// table sec
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './selectplayer.css'
const Selectplayer = () => {
  const state = useSelector((data)=>data.sample);
  console.log(state); 
    // const {state , dispatch}=useContext(stateContext);
    // console.log(state.ind);
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const selectPlayer=async(id)=>{
      // dispatch({type:"strick_players",payload:id});
      await dispatch(strickPlayers(id))
      console.log("mani");
      if(state.onstrick.length === 2){
        let getId=document.getElementById('select-nos');
        getId.style.visibility='hidden'
      }
    }
    const matchStart=()=>{
      // dispatch(bowler());
      if(state.onstrick.length === 2){
        navigate('/Home')
      }
    }
    const secHulf=()=>{
      navigate('/SelectBowler')
      dispatch(indFirst())
    }
  if(state.teamWickets !== 10 && state.overs !== (state.setover)){return (
    <div className='container'>
      <div className='card-sec'>
        <div className='card'>
        {state.ind?.map((item,index)=>{
          return(
            <Card className='card-body' key={index} sx={{ maxWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image={item.image}
              />
              <CardContent>
                <Typography className='player' gutterBottom  component="span">{item.playerName}</Typography>
                <Typography className='select' gutterBottom variant="span" component="div">{item.playerStyle}
                  <FormGroup className='check-box'>
                    <FormControlLabel control={<Checkbox disabled={item.disabled} checked={item.playerStrick}/>} onChange={()=>selectPlayer(item.playerId)}/>
                  </FormGroup>
                </Typography>
              </CardContent>
          </Card>
          )
        })}
        </div>
        <div id='select-nos'>
          <span>Please Select two players</span>
        </div>
        <div>
          <Stack className='select-btn-a' direction="row" spacing={2}>
            <Button variant="contained" size="large" color="success" onClick={()=>matchStart()}>Select</Button>
          </Stack>
        </div>
      </div>
      {/* <button onClick={()=>matchStart()}>start</button> */}
      {/* <Stack className='select-btn' direction="row" spacing={2}>
        <Button variant="contained" size="large" color="success" onClick={()=>matchStart()}>Select</Button>
      </Stack> */}
    </div>
  )
}
else{
  return(
    <div>
    <div className='score-board1'>
    <div className='first-hulf-result'>
        <img className='team-logo' width={60} alt='ind' src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png'/>
        <span>IND Batting</span>
      </div>
      {/* {state.ind?.map((item,index)=>{
        return(
          <h4 key={index}>{item.playerName} {item.playerRun} ({item.ballbased}) {item.playerFour} {item.playerSix}</h4>
        )
      })} */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{backgroundColor:'#03a9f4a1',fontSize:"22px"}}>Players</TableCell>
            <TableCell sx={{backgroundColor:'#03a9f4a1',fontSize:"22px"}} align="right" >Runs</TableCell>
            <TableCell sx={{backgroundColor:'#03a9f4a1',fontSize:"22px"}} align="right">Four&nbsp;(s)</TableCell>
            <TableCell sx={{backgroundColor:'#03a9f4a1',fontSize:"22px"}} align="right">Six&nbsp;(s)</TableCell>
            <TableCell sx={{backgroundColor:'#03a9f4a1',fontSize:"22px"}} align="right">RunRate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.ind.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.playerName}
              </TableCell>
              <TableCell align="right">{row.playerRun} ({row.ballbased})</TableCell>
              <TableCell align="right">{row.playerFour}</TableCell>
              <TableCell align="right">{row.playerSix}</TableCell>
              <TableCell align="right">{((row.playerRun/row.ballbased)*100).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div className='score-board1'>
    <div className='first-hulf-result'>
        <img className='team-logo' width={40} src='https://upload.wikimedia.org/wikipedia/en/3/3f/Cricket_Australia.png' alt='aus'/>
        <span>AUS Bowling</span>
      </div>
      {/* {state.ind?.map((item,index)=>{
        return(
          <h4 key={index}>{item.playerName} {item.playerRun} ({item.ballbased}) {item.playerFour} {item.playerSix}</h4>
        )
      })} */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{backgroundColor:'#b6bd51',fontSize:"22px"}}>Players</TableCell>
            <TableCell sx={{backgroundColor:'#b6bd51',fontSize:"22px"}} align="right" >Runs</TableCell>
            <TableCell sx={{backgroundColor:'#b6bd51',fontSize:"22px"}} align="right">Over&nbsp;(s)</TableCell>
            <TableCell sx={{backgroundColor:'#b6bd51',fontSize:"22px"}} align="right">wickets&nbsp;(s)</TableCell>
            <TableCell sx={{backgroundColor:'#b6bd51',fontSize:"22px"}} align="right">Average/Over</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.aus.filter((item)=>item.playerCat==='bowler'|| item.playerCat==="all_rounder").map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.playerName}
              </TableCell>
              <TableCell align="right">{row.bowlercontribute}</TableCell>
              <TableCell align="right">{row.overBowled}</TableCell>
              <TableCell align="right">{row.playerWickets}</TableCell>
              <TableCell align="right">{row.bowlercontribute/row.overBowled}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
      <div className='second-hulf-btn'>
        <Button variant="contained" size="large" color="success" onClick={()=>secHulf()}>next</Button>
      </div>
    </div>
  )
}
}
export default Selectplayer