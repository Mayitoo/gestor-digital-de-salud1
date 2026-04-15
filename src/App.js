import React, { useState } from 'react';
import PanelMedico from './PanelMedico';
import PanelAdmin from './PanelAdmin';
import PanelPaciente from './PanelPaciente'; // ¡Nuevo archivo!

function App() {
  const [vistaActual, setVistaActual] = useState('login');

  if (vistaActual === 'medico') return <PanelMedico onVolver={() => setVistaActual('login')} />;
  if (vistaActual === 'admin') return <PanelAdmin onVolver={() => setVistaActual('login')} />;
  if (vistaActual === 'paciente') return <PanelPaciente onVolver={() => setVistaActual('login')} />;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f4f8', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', textAlign: 'center', maxWidth: '400px', width: '100%' }}>
        <h1 style={{ color: '#1d3557', margin: '0 0 10px 0' }}>Gestor Digital de Salud</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>Seleccione su portal de acceso</p>

        {/* Portal Paciente (Solo lectura) */}
        <button 
                onClick={() => setVistaActual('paciente')}
          style={{ width: '100%', padding: '15px', marginBottom: '15px', backgroundColor: '#2a9d8f', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          👤 Portal del Paciente (Mi Historial)
        </button>

        {/* Portal Médico (Editar e Historial) */}
        <button 
          onClick={() => setVistaActual('medico')}
          style={{ width: '100%', padding: '15px', marginBottom: '15px', backgroundColor: '#e63946', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          🚑 Acceso Médico (Consultas y Emergencias)
        </button>

        {/* Portal Admin (Control total) */}
        <button 
          onClick={() => setVistaActual('admin')}
          style={{ width: '100%', padding: '15px', backgroundColor: '#457b9d', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          ⚙️ Administración (Directorio)
        </button>
      </div>
    </div>
  );
}

export default App;