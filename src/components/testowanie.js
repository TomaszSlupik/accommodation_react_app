import { useReducer } from "react";




const reducer = (state, action) => {
    if (action.type === 'change-color') {
        state = state === 'danger' ? 'primary' : 'danger'
    }
    return state;
}

const [state, dispatch]  = useReducer(reducer, 'danger')


const changeNewColor = () => {
    dispatch({type: 'change-color'})
}