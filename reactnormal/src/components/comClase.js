import React from 'react'
import { Component } from 'react'

const ThemeContext = React.createContext(null); //Crear un contexto.

class Card extends Component{ //Crear una clase.
    static contextType = ThemeContext; //Volver estático el contexto.
    render(){ //Que se va a mostrar en la pantalla.
        const theme = this.context //Acceder al contexto.
        const className = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white' // Usar clases de Tailwind.
        return(
            <div className={`${className} + w-40`}>
                <div className="p-4 w-1/2 justify-center flex items-center">
                    <h1 className='text-2xl font-bold'>Hola, {this.props.name}</h1> {/* This.props es un accesorio. */}
                    <img src={this.props.img} alt={this.props.name} className='w-10 h-auto'/>
                </div>
            </div>
        )
    }
}

// Crear un componente proveedor de tema
class Clase extends Component {
    render() {
      // Pasar el estado actual del tema como valor del contexto
      return (
        <ThemeContext.Provider value="dark">
          <Card name={this.props.name} img={this.props.img}/>
        </ThemeContext.Provider>
      );
    }
  }
export default Clase;