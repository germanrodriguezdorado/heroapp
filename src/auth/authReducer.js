import { types } from '../types/types';

// const state = {
//     name: "German",
//     logged: true
// }


export const authReducer = (state = {}, action) => {
    
    switch (action.type) {
        case types.login:
            // console.log(action)
            return {
                ...action.payload,
                logged: true
            }
        
        case types.logout:
            return {
                logged: false
            }
          
        default:
            break;
    }

}
