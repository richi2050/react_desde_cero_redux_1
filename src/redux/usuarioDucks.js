
import {auth, firebase } from '../firebase'

// data incial

const dataInicial = {
    loading: false,
    activo: false
}

// types
const LOADING = 'LOADING'
const USUARIO_ERROR = 'USUARIO_ERROR'
const USER_EXITO = 'USER_EXITO'

//reducer

export default function usuarioReducer (state = dataInicial, action){

    switch(action.type){
        case LOADING:
            return {...state, loading:true}
        case USUARIO_ERROR:
            return {...state}
        case USER_EXITO:
            return {...state, loading: false, activo: true, user: action.payload.user}
        default: 
            return {...state}
    }

}

//action

export const ingresoUsuarioAccion = () => async(dispatch) => {
    dispatch({
        type: LOADING
    })
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider)
        console.log(res)
        dispatch({
            type: USER_EXITO,
            payload: {
                user: {
                    uid: res.user.uid,
                    email: res.user.email
                }
            }
        })
        
    } catch (error) {
        console.log(error)
        dispatch({
            type: USUARIO_ERROR
        })
    }

}