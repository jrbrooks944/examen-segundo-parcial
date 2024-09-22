import React, { useEffect, useState } from 'react';

const AppMostrar = () => {

const [data, setData] = useState([]);
const [loading, setLoading] = useState(false); // Cambiado a false porque no estamos cargando al inicio
const [error, setError] = useState(null);

  // Función para hacer el GET a la API cuando se haga clic en el botón
  const fetchData = () => {
    setLoading(true); // Iniciar la carga al hacer la solicitud
    setError(null);   // Resetear el error antes de hacer la solicitud
    fetch('/api/blog')  // Aquí se hace la solicitud a la API
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Guardar la data en el estado
        setLoading(false); // Marcar que ya no está cargando
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  // Mostrar un mensaje de carga o error si es necesario
  if (loading) {
    return <p>Cargando datos...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-3"><h5>Id</h5></div>
        <div className="col-md-3"><h5>Title</h5></div>
        <div className="col-md-3"><h5>Autor</h5></div>
        <div className="col-md-3"><h5>Categoria</h5></div>
      </div>
        {data.map((post:any) => ( 
            <div className="row background">
                    <div className="col-md-3">
                    {post.id}
                    </div>
                    <div className="col-md-3">{post.title}</div>
                    <div className="col-md-3">{post.author}</div>
                    <div className="col-md-3">{post.category}</div>
            </div>
        ))}
        <br />
        <div className="row text-center">
            <button className="btn btn-info btn-w" onClick={fetchData}>Consultar</button>
        </div>
    </div>
  );
};

export default AppMostrar;
