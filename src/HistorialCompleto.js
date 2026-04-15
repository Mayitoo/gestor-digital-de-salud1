import React from 'react';

function HistorialCompleto({ onVolver }) {
  // Simulador de la base de datos completa del paciente (¡Ahora con vacunas!)
  const historialBD = {
    citasYConsultas: [
      { id: 1, fecha: "10 de Abril, 2026", motivo: "Chequeo general y dolor de garganta", doctor: "Dra. Hernández" },
      { id: 2, fecha: "15 de Enero, 2026", motivo: "Infección estomacal", doctor: "Dr. Ramírez" },
      { id: 3, fecha: "02 de Septiembre, 2025", motivo: "Control de asma", doctor: "Dra. Silva" }
    ],
    operaciones: [
      { id: 1, fecha: "12 de Noviembre, 2021", procedimiento: "Apendicectomía (Laparoscopia)", hospital: "Hospital Central" }
    ],
    fracturas: [
      { id: 1, fecha: "05 de Mayo, 2018", detalle: "Fractura de radio (brazo derecho)", tratamiento: "Yeso por 6 semanas, sin secuelas" }
    ],
    recetas: [
      { id: 1, fecha: "10 de Abril, 2026", medicamento: "Amoxicilina 500mg", dosis: "1 tableta cada 8 hrs por 7 días" },
      { id: 2, fecha: "02 de Septiembre, 2025", medicamento: "Salbutamol Inhalador", dosis: "2 disparos en caso de crisis" }
    ],
    vacunas: [
      { id: 1, fecha: "15 de Marzo, 2024", vacuna: "Tétanos y Difteria (Td) - Refuerzo", aplicador: "Centro de Salud Municipal" },
      { id: 2, fecha: "10 de Octubre, 2023", vacuna: "Influenza Estacional", aplicador: "Clínica San José" },
      { id: 3, fecha: "20 de Febrero, 2021", vacuna: "COVID-19 (Esquema completo)", aplicador: "Módulo de Vacunación General" }
    ]
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', minHeight: '100vh', boxShadow: '0 0 10px rgba(0,0,0,0.1)', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Botón para regresar al panel de resumen */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #f0f0f0', paddingBottom: '10px' }}>
        <button 
          onClick={onVolver} 
          style={{ backgroundColor: '#e9ecef', color: '#333', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', marginRight: '15px' }}
        >
          ← Volver
        </button>
        <h2 style={{ color: '#005f73', margin: 0 }}>Historial Médico Completo</h2>
      </div>

      {/* Vacunas (Agregado nuevo) */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#457b9d', borderBottom: '1px solid #457b9d', paddingBottom: '5px' }}>🛡️ Historial de Vacunación</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {historialBD.vacunas.map((vacuna) => (
            <li key={vacuna.id} style={{ backgroundColor: '#f1faee', margin: '10px 0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #457b9d' }}>
              <strong>{vacuna.fecha}:</strong> {vacuna.vacuna} <br/>
              <span style={{ color: '#555', fontSize: '14px' }}>Lugar de aplicación: {vacuna.aplicador}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Recetas */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#2a9d8f', borderBottom: '1px solid #2a9d8f', paddingBottom: '5px' }}>💊 Recetas y Medicamentos</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {historialBD.recetas.map((receta) => (
            <li key={receta.id} style={{ backgroundColor: '#f8f9fa', margin: '10px 0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #2a9d8f' }}>
              <strong>{receta.fecha}:</strong> {receta.medicamento} <br/>
              <span style={{ color: '#555', fontSize: '14px' }}>Dosis: {receta.dosis}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Citas y Consultas */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#0a9396', borderBottom: '1px solid #0a9396', paddingBottom: '5px' }}>📅 Citas y Consultas Previas</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {historialBD.citasYConsultas.map((cita) => (
            <li key={cita.id} style={{ backgroundColor: '#f8f9fa', margin: '10px 0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #0a9396' }}>
              <strong>{cita.fecha}:</strong> {cita.motivo} <br/>
              <span style={{ color: '#555', fontSize: '14px' }}>Atendió: {cita.doctor}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Operaciones */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#d62828', borderBottom: '1px solid #d62828', paddingBottom: '5px' }}>⚕️ Intervenciones Quirúrgicas</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {historialBD.operaciones.map((op) => (
            <li key={op.id} style={{ backgroundColor: '#fff5f5', margin: '10px 0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #d62828' }}>
              <strong>{op.fecha}:</strong> {op.procedimiento} <br/>
              <span style={{ color: '#555', fontSize: '14px' }}>Lugar: {op.hospital}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Fracturas */}
      <section style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#e9c46a', borderBottom: '1px solid #e9c46a', paddingBottom: '5px' }}>🦴 Fracturas y Lesiones</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {historialBD.fracturas.map((frac) => (
            <li key={frac.id} style={{ backgroundColor: '#fffbe6', margin: '10px 0', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #e9c46a' }}>
              <strong>{frac.fecha}:</strong> {frac.detalle} <br/>
              <span style={{ color: '#555', fontSize: '14px' }}>Tratamiento: {frac.tratamiento}</span>
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
}

export default HistorialCompleto;