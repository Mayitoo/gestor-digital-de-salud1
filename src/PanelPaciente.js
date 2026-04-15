import React from 'react';

function PanelPaciente({ onVolver }) {
  // Datos del paciente que ha iniciado sesión
  const miPerfil = {
    nombre: "Ana Gómez",
    tipoSangre: "A+",
    alergias: "Penicilina, Nueces",
    condicion: "Asma leve"
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <header style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#2a9d8f', color: 'white', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>👤 Mi Portal de Salud</h2>
        <button onClick={onVolver} style={{ backgroundColor: '#1d3557', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>Cerrar Sesión</button>
      </header>

      <div style={{ backgroundColor: '#e9f5f5', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #2a9d8f' }}>
        <p style={{ margin: 0, color: '#1d3557' }}>
          Hola <strong>{miPerfil.nombre}</strong>, aquí puedes visualizar tu información médica. <em>(Si notas algún error, por favor coméntalo en tu próxima consulta médica para que sea actualizado).</em>
        </p>
      </div>

      <section style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
        <h3 style={{ marginTop: 0, color: '#333' }}>Mis Datos Vitales</h3>
        <p><strong>Tipo de Sangre:</strong> {miPerfil.tipoSangre}</p>
        <p><strong>Alergias Registradas:</strong> {miPerfil.alergias}</p>
        <p><strong>Condiciones Crónicas:</strong> {miPerfil.condicion}</p>
      </section>

      <section style={{ backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ color: '#457b9d', borderBottom: '1px solid #457b9d', paddingBottom: '5px' }}>🛡️ Mi Historial de Vacunación</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ backgroundColor: 'white', padding: '10px', margin: '5px 0', borderRadius: '4px', borderLeft: '3px solid #457b9d' }}>15 de Marzo, 2024 - Tétanos (Refuerzo)</li>
          <li style={{ backgroundColor: 'white', padding: '10px', margin: '5px 0', borderRadius: '4px', borderLeft: '3px solid #457b9d' }}>10 de Octubre, 2023 - Influenza</li>
        </ul>
      </section>

    </div>
  );
}

export default PanelPaciente;