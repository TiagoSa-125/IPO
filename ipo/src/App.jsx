import { Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div>
      {/* Barra de navegação superior em bootstap 4 */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">IPO</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/clientes">Clientes</Link>
            <Link className="nav-link" to="/veiculos">Veículos</Link>
            <Link className="nav-link" to="/inspecoes">Inspeções</Link>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/clientes" element={<ClientesList />} />
          <Route path="/veiculos" element={<VeiculosList />} />
          <Route path="/inspecoes" element={<InspecoesList />} />
        </Routes>
      </div>
    </div>
  );
}
// Estas páginas serão criadas nas próximas etapas
function Inicio() {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1>Centro de Inspeções de Automóveis</h1>
        <p>IPO - ESDS1</p>
      </div>
    </div>
  );

}
function ClientesList() {
  return (<h2>Clientes
    <div className="text-right">
      <button className="btn btn-primary"> <i className="fa fa-plus"></i> Novo Cliente</button>
      
      <button className="btn btn-primary"> <i className="fa fa-plus"></i> Atualizar Cliente</button>
    </div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Clientes</th>
          <th scope="col">Nome</th>
          <th scope="col">Morada</th>
          <th scope="col">NIF</th>
          <th scope="col">Opções</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Julio Pinho</td>
          <td>Lisboa</td>
          <td>@185763224</td>
          <td>
            <i className="fa fa-eye"></i>
            <button className="btn btn-sm btn-outline-primary">Editar</button>
            
            <button className="btn btn-sm btn-outline-danger">Apagar</button>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>John</td>
          <td>Doe</td>
          <td>@social</td>
        </tr>
      </tbody>
    </table>

  </h2>



  );
}
function VeiculosList() {
  return (<h2>Página de Veículos</h2>
  );
}

function InspecoesList() {
  return (<h2>Página de Inspeções</h2>);
}
export default App