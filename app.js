class Empleado extends React.Component {
  render() {
    return (
      <li>
        <img src={this.props.imagen} width="30" />
        {this.props.nombre} - {this.props.email}
      </li>
    );
  }
}

class ListaEmpleados extends React.Component {
  renderEmpleado() {
    return
  }
  render () {
    return (
      <div>
        <ul>
          {
            this.props.empleados.map(empleado => {
              return (
                <Empleado
                  nombre = {empleado.nombre}
                  email = {empleado.email}
                  imagen = {empleado.imagen}
                />
              );
            })
          }
        </ul>
        <form onSubmit={this.props.onAddEmployee}>
          <input type="text" placeholder="Nombre" name="nombre" />
          <input type="text" placeholder="Email" name="email" />
          <button type="submit">Añadir</button>
        </form>
      </div>
    );
  }
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      empleados: [
        { nombre: "Pepe", email: "pepe@correo.com", imagen: "foto1.png" },
        { nombre: "Paco", email: "paco@correo.com", imagen: "foto2.png" },
        { nombre: "Manolo", email: "manolo@correo.com", imagen: "foto3.png" }
      ]
    }
  }

  render() {
    return <ListaEmpleados
            empleados={this.state.empleados}
            onAddEmployee={this.handleOnAddEmployee.bind(this)}
           />;
  }

  handleOnAddEmployee (e) {
    e.preventDefault();
    let empleado = {
      nombre : e.target.nombre.value,
      email: e.target.email.value,
      imagen: 'foto4.png'
    }

    this.setState({
      empleados: this.state.empleados.concat([empleado])
    });
  }

}


ReactDOM.render(<App />, document.getElementById('app'));
