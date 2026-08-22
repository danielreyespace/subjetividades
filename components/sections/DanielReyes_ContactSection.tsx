'use client';

import { useState, type FormEvent } from 'react';
import { trackContactFormConversion } from '@/lib/gtag';

interface FormData {
  name: string;
  email: string;
  phone: string;
  consultationType: string;
  message: string;
}

export default function DanielReyes_ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    consultationType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Solo se exige nombre + una vía de contacto (teléfono o email).
    if (!formData.name.trim() || (!formData.email.trim() && !formData.phone.trim())) {
      setError('Déjanos tu nombre y al menos una vía de contacto (teléfono o email).');
      return;
    }
    setError('');
    setIsSubmitting(true);

    // Save lead to Fidelidapp + email notification via secure proxy
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch {
      // Silent — the server proxy also persists the lead in Fidelidapp
    }

    trackContactFormConversion();

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="cont">
      <div className="inner">
        <div className="lab" style={{ color: '#93E0CE' }}>Contacto</div>
        <h2>Agenda tu primera consulta o déjanos tus datos.</h2>
        <p className="csub">Te contactamos dentro de 2 horas en día hábil.</p>

        <div className="formcard">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '10px 0' }}>
              <div className="fh">Consulta enviada</div>
              <div className="fsub" style={{ marginTop: 8 }}>Te contactaremos dentro de 2 horas en día hábil.</div>
            </div>
          ) : (
            <>
              <div className="fh">Formulario de contacto</div>
              <div className="fsub">Te respondemos dentro de 2 horas en día hábil.</div>
              <form onSubmit={handleSubmit}>
                <div className="fld">
                  <label>Nombre completo</label>
                  <input type="text" required placeholder="Tu nombre" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="fld">
                  <label>Email (opcional si dejas teléfono)</label>
                  <input type="email" placeholder="tu@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div className="fld">
                  <label>Teléfono (opcional si dejas email)</label>
                  <input type="tel" placeholder="+56 9 1234 5678" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <div className="fld">
                  <label>Tipo de consulta</label>
                  <select value={formData.consultationType} onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}>
                    <option value="">Selecciona una opción</option>
                    <option value="individual">Terapia individual</option>
                    <option value="pareja">Terapia de pareja</option>
                    <option value="sexual">Terapia sexual</option>
                    <option value="adolescentes">Terapia para adolescentes</option>
                    <option value="no-seguro">No estoy seguro/a</option>
                  </select>
                </div>
                <div className="fld">
                  <label>Mensaje (opcional)</label>
                  <textarea placeholder="Cuéntanos brevemente qué te motiva a buscar ayuda..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                {error && (
                  <p style={{ color: '#b91c1c', fontSize: 13, fontWeight: 600, marginBottom: 10 }} role="alert">{error}</p>
                )}
                <button type="submit" className="fsubmit" disabled={isSubmitting}>
                  {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
