import { initialState } from "./initialState"


export default function reducer (state=initialState, action:any){
    switch(action.type){

        case 'SIGNUP':
            return state = {...state,authUser:action.payload}
            
        case 'LOGIN':
            return state = {...state,authUser:action.payload}
    }
}