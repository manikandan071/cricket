import indlist from '../pages/player/ind.json'
import auslist from '../pages/player/aus.json'
import { createSlice } from "@reduxjs/toolkit";
// import { useNavigate } from 'react-router-dom';



export const sampleSlice = createSlice({
    
    name:"sample",
    initialState:{
        ind:indlist,
        aus:auslist,
        ausBatting:{
            onstrick:[
                {
                    "playerId": 1,
                    "playerName":"D Warner",
                    "playerStrick": true,
                    "playerRun":0,
                    "playerSix":0,
                    "playerFour":0,
                    "playerCat":"batting",
                    "ballbased":0
                },
                {
                    "playerId": 2,
                    "playerName":"C Green",
                    "playerStrick": true,
                    "playerRun":0,
                    "playerSix":0,
                    "ballbased":0,
                    "playerFour":0,
                    "playerCat":"batting"
                }
            ],
            indBowlling:[],
            bowler:"",
            teamScore:0,
            teamWickets:0,
            overs:0,
            overlimit:0.5,
        },
        onstrick:[],
        ausBowlling:[],
        bowler:"",
        teamScore:0,
        teamWickets:0,
        overs:0,
        overlimit:0.5,
        indfirstHulf:false,
        firstHulf:true,
        setover:''
    },
    reducers:{
        setTotalOver:(state , action)=>{
            state.setover=action.payload
        },
        indFirst:(state , action)=>{
            state.indfirstHulf=!state.indfirstHulf
            state.firstHulf=!state.firstHulf
        },
        strickPlayers:(state , action)=>{
                        
                state.ind=state.ind.map((item)=>{
                    if(item.playerId === action.payload){
                    return{...item, playerStrick:!item.playerStrick,disabled:"disabled"}
                    }
                    return item;
                })
                state.onstrick=state.ind.filter((item)=>item.playerStrick===true)
                state.ausBowlling=state.aus.filter((item)=>item.playerCat==='bowler'|| item.playerCat==="all_rounder")
                if(state.bowler === ""){
                    state.bowler=state.ausBowlling[Math.floor(Math.random()*state.ausBowlling.length)]
                }
        },
        strick:(state , action)=>{
            state.onstrick=state.onstrick[1].playerStrick=!state.onstrick[1].playerStrick
        },
        teamRuns:(state , action)=>{
            if(action.payload === 1){
                const add=1;
                state.teamScore=state.teamScore+action.payload
                state.onstrick[0].playerRun=state.onstrick[0].playerRun+action.payload
                const bowlerId=state.bowler.playerId;
                state.aus=state.aus.map((item)=>{
                    if(item.playerId === bowlerId){
                        return{...item, bowlercontribute:item.bowlercontribute+action.payload}
                    }
                    return item;
                })
                state.ausBowlling=state.ausBowlling.map((item)=>{
                    if(item.playerId === bowlerId){
                        return{...item, bowlercontribute:item.bowlercontribute+action.payload}
                    }
                    return item
                })
                state.bowler.bowlercontribute=state.bowler.bowlercontribute+action.payload
                state.onstrick[0].ballbased=state.onstrick[0].ballbased+add;
                const id=state.onstrick[0].playerId;

                state.ind=state.ind.map((item)=>{
                    if(item.playerId === id){
                        return{...item,playerRun:item.playerRun+action.payload,ballbased:item.ballbased+add}
                    }
                    return item
                })
                state.onstrick=state.onstrick.reverse();
            }
            else if(action.payload === 0 || action.payload === 7 || action.payload === 8 || action.payload === 9){
                const add=1;
                state.onstrick[0].ballbased=state.onstrick[0].ballbased+add;
                const id=state.onstrick[0].playerId;
                state.ind=state.ind.map((item)=>{
                    if(item.playerId === id){
                        return{...item,ballbased:item.ballbased+add}
                    }
                    return item
                })
            }
            else if(action.payload === 2){
                const add=1;
                state.teamScore=state.teamScore+action.payload
                state.onstrick[0].playerRun=state.onstrick[0].playerRun+action.payload
                state.onstrick[0].ballbased=state.onstrick[0].ballbased+add;
                const bowlerId=state.bowler.playerId;
                state.aus=state.aus.map((item)=>{
                    if(item.playerId === bowlerId){
                        return{...item, bowlercontribute:item.bowlercontribute+action.payload}
                    }
                    return item;
                })
                state.ausBowlling=state.ausBowlling.map((item)=>{
                    if(item.playerId === bowlerId){
                        return{...item, bowlercontribute:item.bowlercontribute+action.payload}
                    }
                    return item
                })
                state.bowler.bowlercontribute=state.bowler.bowlercontribute+action.payload
                const id=state.onstrick[0].playerId;
                state.ind=state.ind.map((item)=>{
                    if(item.playerId === id){
                        return{...item,playerRun:item.playerRun+action.payload,ballbased:item.ballbased+add}
                    }
                    return item
                })
            }
            else if(action.payload === 3){
                const add=1;
                state.teamScore=state.teamScore+action.payload
                state.onstrick[0].playerRun=state.onstrick[0].playerRun+action.payload
                state.onstrick[0].ballbased=state.onstrick[0].ballbased+add;
                const bowlerId=state.bowler.playerId;
                state.aus=state.aus.map((item)=>{
                    if(item.playerId === bowlerId){
                        return{...item, bowlercontribute:item.bowlercontribute+action.payload}
                    }
                    return item;
                })
                state.ausBowlling=state.ausBowlling.map((item)=>{
                    if(item.playerId === bowlerId){
                        return{...item, bowlercontribute:item.bowlercontribute+action.payload}
                    }
                    return item
                })
                state.bowler.bowlercontribute=state.bowler.bowlercontribute+action.payload
                const id=state.onstrick[0].playerId;
                state.ind=state.ind.map((item)=>{
                    if(item.playerId === id){
                        return{...item,playerRun:item.playerRun+action.payload,ballbased:item.ballbased+add}
                    }
                    return item
                })
                state.onstrick=state.onstrick.reverse();
            }
            else if(action.payload === 4){
                const add=1;
                state.teamScore=state.teamScore+action.payload
                state.onstrick[0].playerRun=state.onstrick[0].playerRun+action.payload
                state.onstrick[0].ballbased=state.onstrick[0].ballbased+1;
                state.onstrick[0].playerFour=state.onstrick[0].playerFour+add;
                const bowlerId=state.bowler.playerId;
                state.aus=state.aus.map((item)=>{
                    if(item.playerId === bowlerId){
                        return{...item, bowlercontribute:item.bowlercontribute+action.payload}
                    }
                    return item;
                })
                state.ausBowlling=state.ausBowlling.map((item)=>{
                    if(item.playerId === bowlerId){
                        return{...item, bowlercontribute:item.bowlercontribute+action.payload}
                    }
                    return item
                })
                state.bowler.bowlercontribute=state.bowler.bowlercontribute+action.payload
                const id=state.onstrick[0].playerId;
                state.ind=state.ind.map((item)=>{
                    if(item.playerId === id){
                        return{...item,playerRun:item.playerRun+action.payload,playerFour:item.playerFour+1,ballbased:item.ballbased+add}
                    }
                    return item
                })
            }
            else if(action.payload === 5){
                state.teamWickets=state.teamWickets+1
                // state.onstrick=state.onstrick.pop();
                const id = state.onstrick[0].playerId;
                // state.onstrick=state.onstrick.filter((item)=>item.playerId !== id)
                state.ind=state.ind.map((item)=>{
                    if(item.playerId === id){
                    return{...item, playerStrick:!item.playerStrick}
                    }
                    return item;
                })
                const bowlerId=state.bowler.playerId;
                state.aus=state.aus.map((item)=>{
                    if(item.playerId === bowlerId){
                        return{...item, playerWickets:item.playerWickets+1}
                    }
                    return item;
                })
                state.ausBowlling=state.ausBowlling.map((item)=>{
                    if(item.playerId === bowlerId){
                        return{...item, playerWickets:item.playerWickets+1}
                    }
                    return item
                })
                state.bowler.playerWickets=state.bowler.playerWickets+1
                state.onstrick=state.onstrick.pop();
            }
            else if(action.payload === 6){
                const add=1;
                state.teamScore=state.teamScore+action.payload
                state.onstrick[0].playerRun=state.onstrick[0].playerRun+action.payload
                state.onstrick[0].ballbased=state.onstrick[0].ballbased+add;
                const bowlerId=state.bowler.playerId;
                state.aus=state.aus.map((item)=>{
                    if(item.playerId === bowlerId){
                        return{...item, bowlercontribute:item.bowlercontribute+action.payload}
                    }
                    return item;
                })
                state.ausBowlling=state.ausBowlling.map((item)=>{
                    if(item.playerId === bowlerId){
                        return{...item, bowlercontribute:item.bowlercontribute+action.payload}
                    }
                    return item
                })
                state.bowler.bowlercontribute=state.bowler.bowlercontribute+action.payload
                state.onstrick[0].playerSix=state.onstrick[0].playerSix+1;
                const id=state.onstrick[0].playerId;
                state.ind=state.ind.map((item)=>{
                    if(item.playerId === id){
                        return{...item,playerRun:item.playerRun+action.payload,playerSix:item.playerSix+1,ballbased:item.ballbased+add}
                    }
                    return item
                })
            }
        },
        bowled:(state , action)=>{
            if(action.payload !== ""){
                // if(state.bowler === ''){
                //     state.bowler=state.ausBowlling[Math.floor(Math.random()*state.ausBowlling.length)]
                // }
                const over=state.overs;
                const bowlerId=state.bowler.playerId;
                const index=state.ausBowlling.findIndex((item)=>item.playerId === bowlerId)
                console.log(index);
                console.log(bowlerId);
                if(over !== state.overlimit){
                    state.overs=(state.overs*10+0.1*10)/10;
                    state.ausBowlling[index].overBowled=(state.ausBowlling[index].overBowled*10+0.1*10)/10
                    state.aus=state.aus.map((item)=>{
                        if(item.playerId === bowlerId){
                            return{
                                ...item,overBowled:(item.overBowled*10+0.1*10)/10
                            }
                        }
                        return item;
                    })
                    state.bowler.overBowled=(state.bowler.overBowled*10+0.1*10)/10                    
                    // return{...state,overs: (state.overs*10+0.1*10)/10}
                }
                else{
                    // return{...state,overlimit:state.overlimit+1,overs:Math.ceil(state.overs),onstrick:state.onstrick.reverse()}
                    state.overlimit=state.overlimit+1;
                    state.overs=Math.ceil(state.overs);
                    state.ausBowlling[index].overBowled=Math.ceil(state.ausBowlling[index].overBowled)
                    state.aus=state.aus.map((item)=>{
                        if(item.playerId === bowlerId){
                            return{
                                ...item,overBowled:(Math.ceil(item.overBowled))
                            }
                        }
                        return item;
                    })
                    state.bowler.overBowled=Math.ceil(state.bowler.overBowled);
                    state.onstrick=state.onstrick.reverse();
                    state.ausBowlling=state.ausBowlling.filter((item)=>item.overBowled !== 4);
                    state.bowler=state.ausBowlling[Math.floor(Math.random()*state.ausBowlling.length)];
                }
            }
        },
    //    ind bowlling sec
        indselect:(state , actions)=>{
            state.indfirstHulf=!state.indfirstHulf
        },
        selectBowler:(state , action)=>{
            state.ind=state.ind.map((item)=>{
                if(item.playerId === action.payload){
                    return{
                        ...item, onBowling:!item.onBowling
                    }
                }
                return item
            })
            state.ind=state.ind.map((item)=>{
                return{
                    ...item, bowlerselect:"disabled"
                }
            })
            state.ausBatting.bowler=state.ind.filter((item)=>item.onBowling === true)
        },
        ausBat:(state , action)=>{
            if(action.payload === 1){
                state.ausBatting.onstrick[0].playerRun=state.ausBatting.onstrick[0].playerRun+action.payload
                state.ausBatting.onstrick[0].ballbased=state.ausBatting.onstrick[0].ballbased+1
                const playerId=state.ausBatting.onstrick[0].playerId;
                console.log(playerId);
                state.aus=state.aus.map((item)=>{
                    if(playerId === item.playerId){
                        return{
                            ...item,playerRun:item.playerRun+action.payload,ballbased:item.ballbased+1
                        }
                    }
                    return item
                })
                state.ausBatting.teamScore=state.ausBatting.teamScore+action.payload
                state.ausBatting.bowler[0].bowlercontribute=state.ausBatting.bowler[0].bowlercontribute+action.payload
                state.ind=state.ind.map((item)=>{
                    if(state.ausBatting.bowler[0].playerId === item.playerId){
                        return{
                            ...item,bowlercontribute:item.bowlercontribute+action.payload
                        }
                    }
                    return item
                })
                state.ausBatting.onstrick=state.ausBatting.onstrick.reverse();
            }
            else if(action.payload === 2){
                state.ausBatting.onstrick[0].playerRun=state.ausBatting.onstrick[0].playerRun+action.payload
                state.ausBatting.onstrick[0].ballbased=state.ausBatting.onstrick[0].ballbased+1
                const playerId=state.ausBatting.onstrick[0].playerId;
                state.aus=state.aus.map((item)=>{
                    if(playerId === item.playerId){
                        return{
                            ...item,playerRun:item.playerRun+action.payload,ballbased:item.ballbased+1
                        }
                    }
                    return item
                })
                state.ausBatting.teamScore=state.ausBatting.teamScore+action.payload
                state.ausBatting.bowler[0].bowlercontribute=state.ausBatting.bowler[0].bowlercontribute+action.payload
                state.ind=state.ind.map((item)=>{
                    if(state.ausBatting.bowler[0].playerId === item.playerId){
                        return{
                            ...item,bowlercontribute:item.bowlercontribute+action.payload
                        }
                    }
                    return item
                })
            }
            else if(action.payload === 3){
                state.ausBatting.onstrick[0].playerRun=state.ausBatting.onstrick[0].playerRun+action.payload
                state.ausBatting.onstrick[0].ballbased=state.ausBatting.onstrick[0].ballbased+1
                const playerId=state.ausBatting.onstrick[0].playerId;
                state.aus=state.aus.map((item)=>{
                    if(playerId === item.playerId){
                        return{
                            ...item,playerRun:item.playerRun+action.payload,ballbased:item.ballbased+1
                        }
                    }
                    return item
                })
                state.ausBatting.teamScore=state.ausBatting.teamScore+action.payload
                state.ausBatting.bowler[0].bowlercontribute=state.ausBatting.bowler[0].bowlercontribute+action.payload
                state.ind=state.ind.map((item)=>{
                    if(state.ausBatting.bowler[0].playerId === item.playerId){
                        return{
                            ...item,bowlercontribute:item.bowlercontribute+action.payload
                        }
                    }
                    return item
                })
                state.ausBatting.onstrick=state.ausBatting.onstrick.reverse();
            }
            else if(action.payload === 4){
                state.ausBatting.onstrick[0].playerRun=state.ausBatting.onstrick[0].playerRun+action.payload
                state.ausBatting.onstrick[0].ballbased=state.ausBatting.onstrick[0].ballbased+1
                const playerId=state.ausBatting.onstrick[0].playerId;
                state.aus=state.aus.map((item)=>{
                    if(playerId === item.playerId){
                        return{
                            ...item,playerRun:item.playerRun+action.payload,ballbased:item.ballbased+1,playerFour:item.playerFour+1
                        }
                    }
                    return item
                })
                state.ausBatting.teamScore=state.ausBatting.teamScore+action.payload
                state.ausBatting.bowler[0].bowlercontribute=state.ausBatting.bowler[0].bowlercontribute+action.payload
                state.ind=state.ind.map((item)=>{
                    if(state.ausBatting.bowler[0].playerId === item.playerId){
                        return{
                            ...item,bowlercontribute:item.bowlercontribute+action.payload
                        }
                    }
                    return item
                })
            }
            else if(action.payload === 6){
                state.ausBatting.onstrick[0].playerRun=state.ausBatting.onstrick[0].playerRun+action.payload
                state.ausBatting.onstrick[0].ballbased=state.ausBatting.onstrick[0].ballbased+1
                const playerId=state.ausBatting.onstrick[0].playerId;
                state.aus=state.aus.map((item)=>{
                    if(playerId === item.playerId){
                        return{
                            ...item,playerRun:item.playerRun+action.payload,ballbased:item.ballbased+1,playerSix:item.playerSix+1
                        }
                    }
                    return item
                })
                state.ausBatting.teamScore=state.ausBatting.teamScore+action.payload
                state.ausBatting.bowler[0].bowlercontribute=state.ausBatting.bowler[0].bowlercontribute+action.payload
                state.ind=state.ind.map((item)=>{
                    if(state.ausBatting.bowler[0].playerId === item.playerId){
                        return{
                            ...item,bowlercontribute:item.bowlercontribute+action.payload
                        }
                    }
                    return item
                })
            }
            else if(action.payload === 0 || action.payload === 7 || action.payload === 8 || action.payload === 9){
                state.ausBatting.onstrick[0].ballbased=state.ausBatting.onstrick[0].ballbased+1
                state.aus=state.aus.map((item)=>{
                    if(state.ausBatting.onstrick[0].playerId === item.playerId){
                        return{
                            ...item,ballbased:item.ballbased+1
                        }
                    }
                    return item
                })
            }
            else if(action.payload === 5){
                state.aus=state.aus.map((item)=>{
                    const playerId=state.ausBatting.onstrick[0].playerId
                    if(playerId === item.playerId){
                        return{
                            ...item, playerStrick:true
                        }
                    }
                    return item
                })
                state.ausBatting.onstrick.shift();
                console.log(state.ausBatting.onstrick);
                const remain=state.aus.filter((item)=>item.playerStrick === false)
                state.aus=state.aus.map((item)=>{
                    if(remain[0].playerId === item.playerId){
                        return{
                            ...item,playerStrick:true
                        }
                    }
                    return item
                })
                // state.ausBatting.onstrick.push(remain[0])
                // state.ausBatting.onstrick[0]=remain[0]
                state.ausBatting.onstrick.unshift(remain[0])
                state.ausBatting.teamWickets=state.ausBatting.teamWickets+1
                state.ausBatting.bowler[0].playerWickets=state.ausBatting.bowler[0].playerWickets+1
                state.ind=state.ind.map((item)=>{
                    if(state.ausBatting.bowler[0].playerId === item.playerId){
                        return{
                            ...item, playerWickets:item.playerWickets+1
                        }
                    }
                    return item
                })
            }
        },
        indiabowled:(state , action)=>{
            if(action.payload !== ""){
                const over=state.ausBatting.overs;
                console.log(over);
                const bowlerId=state.ausBatting.bowler[0].playerId;
                console.log(bowlerId);
                if(over !== state.ausBatting.overlimit){
                    state.ausBatting.overs=(state.ausBatting.overs*10+0.1*10)/10;
                    state.ind=state.ind.map((item)=>{
                        if(item.playerId === bowlerId){
                            return{
                                ...item,overBowled:(item.overBowled*10+0.1*10)/10,onBowling:!item.onBowling
                            }
                        }
                        return item;
                    })
                    state.ausBatting.bowler[0].overBowled=(state.ausBatting.bowler[0].overBowled*10+0.1*10)/10 
                }
                else{
                    state.ausBatting.overs=Math.ceil(state.ausBatting.overs);
                    state.ausBatting.overlimit=state.ausBatting.overlimit+1;
                    state.ind=state.ind.map((item)=>{
                        if(item.playerId === bowlerId){
                            return{
                                ...item,overBowled:(Math.ceil(item.overBowled)),overs:item.overs+1
                            }
                        }
                        return item;
                    })
                    state.ausBatting.bowler[0].overBowled=Math.ceil(state.ausBatting.bowler[0].overBowled);
                    state.ind=state.ind.map((item)=>{
                        return{
                            ...item,bowlerselect:""
                        }
                    })
                    state.ind=state.ind.map((item)=>{
                        if(item.overBowled === 4){
                            return{
                                ...item,bowlerselect:"disabled"
                            }
                        }
                        return item
                    })
                    state.ausBatting.onstrick=state.ausBatting.onstrick.reverse();
                }
            }
        }
    }
})

export default sampleSlice.reducer
export const {strickPlayers , teamRuns , strick , bowled,bowler , indselect , selectBowler , indiabowled , ausBat , indFirst ,setTotalOver} = sampleSlice.actions
