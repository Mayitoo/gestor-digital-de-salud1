import React, { useState } from 'react';
import HistorialCompleto from './HistorialCompleto';

function PanelMedico({ onVolver }) {
  const [busqueda, setBusqueda] = useState('');
  const [pacienteSeleccionado, setPacienteSeleccionado] = useState(null);
  const [mostrarCompleto, setMostrarCompleto] = useState(false);
  const [mensajeNFC, setMensajeNFC] = useState(''); 

  // Base de datos actualizada ¡AHORA CON CONTACTOS DE EMERGENCIA!
  const pacientesBD = [
    { id: "PAC-001", nombre: "Ana Gómez", edad: 28, tipoSangre: "A+", condicion: "Asma leve", alergias: "Penicilina, Nueces (Alerta Severa)", contacto: { nombre: "Roberto Gómez (Padre)", tel: "55-1234-5678" } },
    { id: "PAC-002", nombre: "Carlos Rivera", edad: 45, tipoSangre: "O+", condicion: "Diabetes Tipo 2", alergias: "Ninguna", contacto: { nombre: "Laura Rivera (Esposa)", tel: "55-8765-4321" } },
    { id: "PAC-003", nombre: "María Fernández", edad: 62, tipoSangre: "B-", condicion: "Hipertensión", alergias: "Aspirina", contacto: { nombre: "Hugo Fernández (Hijo)", tel: "55-1111-2222" } },
    { id: "PAC-004", nombre: "Luis Martínez", edad: 19, tipoSangre: "AB+", condicion: "Ninguna", alergias: "Látex", contacto: { nombre: "Carmen Martínez (Madre)", tel: "55-3333-4444" } },
    { id: "PAC-005", nombre: "Elena Sánchez", edad: 34, tipoSangre: "O-", condicion: "Ninguna", alergias: "Ninguna", contacto: { nombre: "Javier Sánchez (Hermano)", tel: "55-5555-6666" } }
  ];

  const pacientesFiltrados = pacientesBD.filter(paciente => 
    paciente.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    paciente.id.toLowerCase().includes(busqueda.toLowerCase())
  );

  const simularNFC = () => {
    const pacienteEscaneado = pacientesBD.find(p => p.id === "PAC-001");
    setPacienteSeleccionado(pacienteEscaneado);
    setMensajeNFC('');
  };

  const leerNFCReal = async () => {
    if ('NDEFReader' in window) {
      setMensajeNFC('⏳ Acerca la pulsera o tarjeta NFC al celular...');
      try {
        const ndef = new window.NDEFReader();
        await ndef.scan();
        ndef.onreading = event => {
          const decoder = new TextDecoder();
          for (const record of event.message.records) {
            const idEscaneado = decoder.decode(record.data); 
            const pacienteEncontrado = pacientesBD.find(p => p.id === idEscaneado);
            if (pacienteEncontrado) {
              setPacienteSeleccionado(pacienteEncontrado);
              setMensajeNFC('');
            } else {
              setMensajeNFC('⚠️ Tarjeta leída, pero el ID no está registrado.');
            }
          }
        };
      } catch (error) {
        setMensajeNFC('❌ Error: Asegúrate de darle permisos de NFC al navegador.');
      }
    } else {
      setMensajeNFC('❌ Tu navegador o dispositivo no soporta lectura NFC (Usa Chrome en un Android).');
    }
  };

  if (mostrarCompleto && pacienteSeleccionado) {
    return <HistorialCompleto onVolver={() => setMostrarCompleto(false)} />;
  }

  // VISTA 2: Dashboard de Emergencia con CONTACTO
  if (pacienteSeleccionado && !mostrarCompleto) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#e63946', color: 'white', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
          <h2 style={{ margin: 0 }}>🚑 Emergencia Activa</h2>
          <button onClick={() => setPacienteSeleccionado(null)} style={{ backgroundColor: '#333', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>
            Cerrar Expediente
          </button>
        </header>

        <section style={{ borderLeft: '5px solid #d62828', backgroundColor: '#fff5f5', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
          <h1 style={{ marginTop: 0, color: '#333' }}>{pacienteSeleccionado.nombre} <span style={{fontSize: '18px', color: '#666'}}>({pacienteSeleccionado.edad} años)</span></h1>
          <p style={{ fontSize: '18px' }}><strong>ID:</strong> {pacienteSeleccionado.id}</p>
          <p style={{ fontSize: '18px' }}><strong>Tipo de Sangre:</strong> <span style={{ color: '#d62828', fontWeight: 'bold' }}>{pacienteSeleccionado.tipoSangre}</span></p>
          <p style={{ fontSize: '18px', color: '#d62828', fontWeight: 'bold' }}>⚠️ Alergias: {pacienteSeleccionado.alergias}</p>
          <p style={{ fontSize: '16px' }}><strong>Condición Crónica:</strong> {pacienteSeleccionado.condicion}</p>
          
          {/* NUEVO: Recuadro de Contacto de Emergencia */}
          <div style={{ backgroundColor: '#ffccd5', border: '1px solid #e63946', padding: '15px', borderRadius: '5px', marginTop: '15px' }}>
            <h3 style={{ margin: '0 0 5px 0', color: '#d62828' }}>📞 Contacto de Emergencia</h3>
            <p style={{ margin: 0, fontSize: '18px' }}>
              <strong>{pacienteSeleccionado.contacto.nombre}:</strong> <br/>
              <a href={`tel:${pacienteSeleccionado.contacto.tel.replace(/-/g, '')}`} style={{ color: '#d62828', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', marginTop: '5px' }}>
                {pacienteSeleccionado.contacto.tel} (Tocar para llamar)
              </a>
            </p>
          </div>
        </section>

        <button 
          onClick={() => setMostrarCompleto(true)}
          style={{ backgroundColor: '#0a9396', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px', width: '100%', fontWeight: 'bold' }}
        >
          📋 Ver Historial Completo
        </button>
      </div>
    );
  }

  // VISTA 1: Lector y Buscador
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <header style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#1d3557', color: 'white', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>🔍 Acceso Médico</h2>
        <button onClick={onVolver} style={{ backgroundColor: '#e63946', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>Salir</button>
      </header>

      <div style={{ backgroundColor: '#e9ecef', padding: '20px', borderRadius: '8px', textAlign: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>Acceso Inmediato NFC</h3>
        {mensajeNFC && <p style={{ color: '#d62828', fontWeight: 'bold', margin: '10px 0' }}>{mensajeNFC}</p>}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap', marginTop: '15px' }}>
          <button onClick={leerNFCReal} style={{ backgroundColor: '#1d3557', color: 'white', border: 'none', padding: '15px 20px', borderRadius: '50px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>📱 Escanear NFC Físico</button>
          <button onClick={simularNFC} style={{ backgroundColor: '#2a9d8f', color: 'white', border: 'none', padding: '15px 20px', borderRadius: '50px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>⚙️ Simular NFC (Prueba)</button>
        </div>
      </div>

      <hr style={{ border: '1px solid #eee', marginBottom: '20px' }} />

      <h3 style={{ color: '#457b9d' }}>Búsqueda Manual (Nombre o ID)</h3>
      <input type="text" placeholder="Ej. Ana Gómez o PAC-002" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} style={{ width: '100%', padding: '12px', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '20px', fontSize: '16px' }} />

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {pacientesFiltrados.map(paciente => (
          <li key={paciente.id} style={{ backgroundColor: '#f8f9fa', padding: '15px', marginBottom: '10px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>{paciente.nombre}</strong> <br/>
              <span style={{ color: '#666', fontSize: '14px' }}>ID: {paciente.id}</span>
            </div>
            <button onClick={() => setPacienteSeleccionado(paciente)} style={{ backgroundColor: '#457b9d', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Abrir Expediente</button>
          </li>
        ))}
        {pacientesFiltrados.length === 0 && <li style={{ textAlign: 'center', color: '#666', padding: '20px' }}>No se encontraron pacientes.</li>}
      </ul>
    </div>
  );
}

export default PanelMedico;