import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerPokemonesAccion, siguientePokeAction, anteriorPokeAction, unPokeDetallAction} from '../redux/pokeDucks'
import Poke from './Poke'

const Pokemones = () => {
    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)

    useEffect(() => {
        const fetchData = () => {
            dispatch(obtenerPokemonesAccion())
        }

        fetchData()
    }, [dispatch])

    return (
        <div className='row'>
            <div className='col-md-6'>
                <h1>Pokemones!</h1>
                <div className='d-flex justify-content-between'>
                    {
                        pokemones.length === 0 && 
                        <button className='btn btn-dark' onClick={() => dispatch(obtenerPokemonesAccion())}>Obtener</button>
                    }
                    {
                        next &&
                        <button className='btn btn-dark' onClick={() => dispatch(siguientePokeAction())}>Siguientes</button>
                    }
                    {
                        previous &&
                        <button className='btn btn-dark' onClick={() => dispatch(anteriorPokeAction())}>Anterior</button>
                    }
                </div>
                
                <ul className='list-group mt-3'>
                    {
                        pokemones.map(item => (
                            <li className='list-group-item' key={item.name}>
                                {item.name}
                                <span style={{float: "right"}}>
                                    <button 
                                        className='btn btn-dark btn-sm' 
                                        onClick={ () => dispatch(unPokeDetallAction(item.url)) }>
                                            info
                                    </button>
                                </span>
                            </li>
                        ))
                    }
                </ul>

            </div>
            <div className='col-md-6'>
                <h1>Detalle Pokemon</h1>
                <Poke></Poke>
            </div>
        </div>
    )
}

export default Pokemones
