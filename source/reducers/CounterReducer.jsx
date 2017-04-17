import CounterConstants from '../constants/CounterConstants.jsx';

const initState = {
    value: 0
}


export default function CounterReducer(state=initState, action) {

    switch(action.type) {
        case CounterConstants.INC_COUNTER: {
            /**
             * Do not use { ...state, value: state.value++ },
             * state.value++ modifies state, which you should not be doing.
             */
            return {...state, value: state.value + 1};
        }
    }

    return state;
}