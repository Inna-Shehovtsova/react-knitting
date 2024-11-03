import { createSlice } from '@reduxjs/toolkit';
import { Sock,TKnitRow } from '../functions/sock';


export const sockSlice = createSlice({
    name: 'sockCounter',
    initialState: {
        count: 0,
        row:10,
        stich:10,
        size:37,
        name:"",
        model: new Sock(37,10,10),
        rowDesc: {row:'', desc:''}
    },
    reducers: {
        setSize:(state, action)=>{
            state.size = action.payload;
        },
        setRow:(state, action)=>{
            state.row = action.payload;
        },
        setStich:(state, action)=>{
            state.stich = action.payload;
        },
        setModel: (state) => {
            state.model = new Sock(state.size, state.stich, state.row);
        },
        getNextRow: (state) =>{
            state.rowDesc = state.model.getCurrentRow();
            state.count = state.model.currentRow;            
        },
        getPreviosRow: (state) =>{
            state.rowDesc = state.model.getPreviosRow();
            state.count = state.model.currentRow;
        },
        setName:(state, action)=>{
            state.name = action.payload;
        }
        
    },

});
export const { setSize, setRow,setStich,setModel,getNextRow,getPreviosRow, setName} = sockSlice.actions;
export default sockSlice.reducer;