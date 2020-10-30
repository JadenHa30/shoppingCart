import * as Message from '../constant/Message';
import * as Types from '../constant/ActionType';
const initalState = Message.MSG_WELCOME;

const message = (state = initalState, action)=>{
    switch(action.type){ 
        case Types.CHANGE_MSG:
            return action.message;
        default : return state;
    }
}


export default message;