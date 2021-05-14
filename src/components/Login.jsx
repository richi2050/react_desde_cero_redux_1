import React from 'react'
import {useDispatch} from 'react-redux'
import {ingresoUsuarioAccion} from '../redux/usuarioDucks'

const Login = () => {
    const dispatch = useDispatch()

    return (
        <div className="mt-5 text-center">
            <h3>Ingreso de usuarios</h3>
            <hr/>
            <button className="btn btn-dark" 
            onClick={() => dispatch(ingresoUsuarioAccion())}>
                Google</button>
        </div>
    )
}

export default Login
