import {createStore, combineReducers} from 'redux'
import { citasReducer } from '../reducers/citasReducer'
import { guardarDatos, obtenerDatos } from '../utils/LocalStorage'

const storageState = obtenerDatos

const reducers = combineReducers({  //REDUCERS MUST BE COMBINED WITH COMBINE, SO WE CAN USE THEM IN STORE
    citas: citasReducer
})

const store = createStore(
    reducers,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    guardarDatos({
        citas: store.storageState().citas
    })
})

export default store