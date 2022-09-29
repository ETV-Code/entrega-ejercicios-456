import React, { useState, useEffect } from 'react'

export const ClockFunctionalComponent = () =>{


    const [state,setState] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José',
    })

    //didMount
    useEffect(() => {

        setTimeout(()=> setState({

            ...state, 
            fecha:new Date(), 
            edad:state.edad+1 

        }), 1000)

    }, [state])

    return(
        <div>
            <h2>
                Hora actual: {state.fecha.toLocaleTimeString()}
                {/* Hora actual: {new Date().toLocaleTimeString()} */}
            </h2>
            <h3>
                {state.nombre} {state.apellidos}
            </h3>
            <h1>
                Edad: {state.edad}
            </h1>
        </div>
    )
}