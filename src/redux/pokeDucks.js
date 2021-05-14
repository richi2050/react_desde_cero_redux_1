import axios from 'axios'


//constantes
const dataInicial = {
    count: 0,
    next: null,
    previous: null,
    results: []
}

const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIGUIENTE_POKEMONES_EXITO = 'SIGUIENTE_POKEMONES_EXITO'
const ANTERIOR_POKEMONES_EXITO = 'ANTERIOR_POKEMONES_EXITO'
const POKE_INFO_EXITO = 'POKE_INFO_EXITO'


//reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case SIGUIENTE_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case ANTERIOR_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case POKE_INFO_EXITO:
            return {...state, unPokemon: action.payload}
        default:
            return state
    }
}


//acciones
export const unPokeDetallAction = (url) => async(dispatch, getState) => {
    if(url === undefined){
        url = 'https://pokeapi.co/api/v2/pokemon/1/'
    }
    if(localStorage.getItem(url)){
        console.log('localStorage de unPokeDetallAction');
        dispatch({
            type: POKE_INFO_EXITO,
            payload: JSON.parse(localStorage.getItem(url))
        })
        return
    }

    try {
        const res = await axios.get(url)
      
        dispatch({
            type: POKE_INFO_EXITO,
            payload:{
                nombre: res.data.name,
                foto: res.data.sprites.front_default,
                alto: res.data.height,
                ancho: res.data.weight
            }
        })

        localStorage.setItem(url, JSON.stringify({
            nombre: res.data.name,
            foto: res.data.sprites.front_default,
            alto: res.data.height,
            ancho: res.data.weight
        }))

    } catch (error) {
        console.log(error);
    }

}

export const obtenerPokemonesAccion = () => async(dispatch, getState) => {
    if(localStorage.getItem('offset=0')){
        console.log('localStorage de obtenerPokemonesAccion');

        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem('offset=0'))
        })
        return
    }
  
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem('offset=0', JSON.stringify(res.data))
    } catch (error) {
       console.log(error) 
    }
}

export const siguientePokeAction = () => async(dispatch, getState) => {

    const {next} = getState().pokemones

    if(localStorage.getItem(next)){
        console.log('localStorage de siguientePokeAction');

        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(next))
        })
        return
    }



    try {
        const res = await axios.get(next)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
              
        })
        localStorage.setItem(next, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}


export const anteriorPokeAction = () => async(dispatch, getState) => {

    const {previous} = getState().pokemones
    if(localStorage.getItem(previous)){
        console.log('localStorage de anteriorPokeAction');

        dispatch({
            type: ANTERIOR_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(previous))
        })
        return
    }

    try {
        const res = await axios.get(previous)
        dispatch({
            type: ANTERIOR_POKEMONES_EXITO,
            payload: res.data
              
        })
        localStorage.setItem(previous, JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}