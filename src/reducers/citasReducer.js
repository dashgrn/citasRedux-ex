import { types } from '../types/types'

const initalState = {   //ESTADO GLOBAL, ACCESIBLE VIA useSelector 
    citas: []
}

export const citasReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.agregar:
            return {
                ...state,
                citas: [...state.citas, action.payload]
            }
        case types.borrar:
            return {
                ...state,
                citas: state.citas.filter(cita => cita.id !== action.payload)
            }

        default:
            return state
    }
}