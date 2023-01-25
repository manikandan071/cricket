import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';


const Ind = () => {
    const state= useSelector((data)=>data.sample);
  return (
    <div>
        <div className='score-board1'>
            <div className='first-hulf-result'>
                <img className='team-logo' width={60} alt='ind' src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png'/>
                <span>IND Batting</span>
            </div>
    
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
        <img className='team-logo' width={60} alt='ind' src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Cricket_India_Crest.svg/1200px-Cricket_India_Crest.svg.png'/>
        <span>IND Bowling</span>
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
            <TableCell sx={{backgroundColor:'#03a9f4a1',fontSize:"22px"}} align="right">Over&nbsp;(s)</TableCell>
            <TableCell sx={{backgroundColor:'#03a9f4a1',fontSize:"22px"}} align="right">wickets&nbsp;(s)</TableCell>
            <TableCell sx={{backgroundColor:'#03a9f4a1',fontSize:"22px"}} align="right">Average/Over</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.ind.filter((item)=>item.playerCat==='bowler'|| item.playerCat==="all_rounder").map((row,index) => (
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

export default Ind