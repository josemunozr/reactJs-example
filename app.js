var empleados = [
  { nombre: "Pepe", email: "pepe@correo.com", imagen: "foto1.png" },
  { nombre: "Paco", email: "paco@correo.com", imagen: "foto2.png" },
  { nombre: "Manolo", email: "manolo@correo.com", imagen: "foto3.png" }
];

class App extends React.Component {
  render() {
    return <ListaEmpleados empleados={empleados} />;
  }
}

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
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
