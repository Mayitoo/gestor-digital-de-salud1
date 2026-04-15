import React from 'react';

function PanelAdmin({ onVolver }) {
  // Base de datos simulada con TODOS los 5 pacientes registrados en el sistema
  const pacientes = [
    { id: "PAC-001", nombre: "Ana Gómez", edad: 28, tipoSangre: "A+", condicion: "Asma leve", alerta: "Penicilina, Nueces" },
    { id: "PAC-002", nombre: "Carlos Rivera", edad: 45, tipoSangre: "O+", condicion: "Diabetes Tipo 2", alerta: "Ninguna" },
    { id: "PAC-003", nombre: "María Fernández", edad: 62, tipoSangre: "B-", condicion: "Hipertensión", alerta: "Aspirina" },
    { id: "PAC-004", nombre: "Luis Martínez", edad: 19, tipoSangre: "AB+", condicion: "Ninguna", alerta: "Látex" },
    { id: "PAC-005", nombre: "Elena Sánchez", edad: 34, tipoSangre: "O-", condicion: "Ninguna", alerta: "Ninguna" }
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', backgroundColor: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Encabezado del Administrador */}
      <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#1d3557', color: 'white', padding: '15px 20px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>⚙️ Panel de Administración - Hospital Central</h2>
        <button 
          onClick={onVolver} 
          style={{ backgroundColor: '#e63946', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Cerrar Sesión
        </button>
      </div>

      {/* Botón para que el admin agregue pacientes */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h3 style={{ color: '#457b9d', margin: 0 }}>Directorio Completo de Pacientes ({pacientes.length} Registrados)</h3>
        <button style={{ backgroundColor: '#2a9d8f', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
          ➕ Agregar Nuevo Paciente
        </button>
      </div>
      
      {/* Tabla con todos los usuarios */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #eee' }}>
          <thead>
            <tr style={{ backgroundColor: '#f1faee', color: '#1d3557', textAlign: 'left' }}>
              <th style={{ padding: '12px', borderBottom: '2px solid #a8dadc' }}>ID</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #a8dadc' }}>Nombre Completo</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #a8dadc' }}>Edad</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #a8dadc' }}>Tipo de Sangre</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #a8dadc' }}>Condición</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #a8dadc' }}>Alertas / Alergias</th>
              <th style={{ padding: '12px', borderBottom: '2px solid #a8dadc' }}>Acciones del Admin</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((paciente) => (
              <tr key={paciente.id} style={{ borderBottom: '1px solid #eee', backgroundColor: paciente.alerta !== "Ninguna" ? '#fffdfa' : 'white' }}>
                <td style={{ padding: '12px', color: '#666' }}>{paciente.id}</td>
                <td style={{ padding: '12px', fontWeight: 'bold', color: '#333' }}>{paciente.nombre}</td>
                <td style={{ padding: '12px' }}>{paciente.edad} años</td>
                <td style={{ padding: '12px', fontWeight: 'bold', color: '#e63946' }}>{paciente.tipoSangre}</td>
                <td style={{ padding: '12px' }}>{paciente.condicion}</td>
                <td style={{ padding: '12px', color: paciente.alerta !== "Ninguna" ? '#d62828' : '#2a9d8f', fontWeight: paciente.alerta !== "Ninguna" ? 'bold' : 'normal' }}>
                  {paciente.alerta !== "Ninguna" ? `⚠️ ${paciente.alerta}` : "Ninguna"}
                </td>
                <td style={{ padding: '12px', minWidth: '220px' }}>
                  <button style={{ backgroundColor: '#457b9d', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', marginRight: '5px', cursor: 'pointer' }}>👁️ Ver</button>
                  <button style={{ backgroundColor: '#f4a261', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', marginRight: '5px', cursor: 'pointer' }}>✏️ Editar</button>
                  <button style={{ backgroundColor: '#e63946', color: 'white', border: 'none', padding: '6px 10px', borderRadius: '4px', cursor: 'pointer' }}>🗑️ Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default PanelAdmin;