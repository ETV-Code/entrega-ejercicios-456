import React, { Component } from 'react'
// import ‘../../styles/clock.scss’;

export class ClockClassComponent extends Component {

   constructor(props) {
      super(props);
      // Estado privado del component
      this.state = {
         // Se genera una fecha como estado inicial del componente
         fecha: new Date(),
         edad: 0,
         nombre: 'Martín',
         apellidos: 'San José'
      };
   }

   tick(){
      this.setState((prevState) => {
         // let edad = prevState.edad +1;
         return {
            ...prevState,
            fecha: new Date(),
            edad:prevState.edad +1
         }
      });
   }
 
   
   componentDidMount(){
      this.perro = setInterval (
         () => this.tick(), 1000
      );
      console.log(this.props);
   }

   componentWillUnmount() {
      clearInterval (this.perro);
   }

   render() {
      return (
         <div>
         <h2>
         Hora Actual:
         {this.state.fecha.toLocaleTimeString()}
            {/* {new Date().toLocaleTimeString()} */}

         </h2>
         <h3>{this.state.nombre} {this.state.apellidos}</h3>
         <h1>Edad: {this.state.edad}</h1>
         </div>
      )
   }
}

