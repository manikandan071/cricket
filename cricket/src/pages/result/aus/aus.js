import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

const Aus = () => {
    const state = useSelector((data)=>data.sample)
  return (
    <div>
        <div className='score-board1'>
      <div className='first-hulf-result'>
        <img className='team-logo' width={40} src='https://upload.wikimedia.org/wikipedia/en/3/3f/Cricket_Australia.png' alt='aus'/>
        <span>AUS Batting</span>
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
            <TableCell sx={{backgroundColor:'#b6bd51',fontSize:"22px"}} align="right">Four&nbsp;(s)</TableCell>
            <TableCell sx={{backgroundColor:'#b6bd51',fontSize:"22px"}} align="right">Six&nbsp;(s)</TableCell>
            <TableCell sx={{backgroundColor:'#b6bd51',fontSize:"22px"}} align="right">RunRate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.aus.map((row,index) => (
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


    </div>
  )
}

export default Aus