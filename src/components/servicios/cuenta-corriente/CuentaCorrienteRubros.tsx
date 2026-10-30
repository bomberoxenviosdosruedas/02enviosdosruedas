import React from 'react';

const RUBROS = [
  'Repuesteras y Autopartes',
  'Farmacias, Ópticas y Salud',
  'Estudios Contables y Gestorías',
  'Indumentaria y Calzado',
  'Gastronomía y Descartables',
  'Tecnología y Servicio Técnico',
] as const;

export default function CuentaCorrienteRubros() {
  return (
    <section
      id="cuenta-corriente-rubros"
      aria-label="Rubros comerciales con cuenta corriente activa en Mar del Plata"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-blue-50/40 border-t border-brand-blue-100"
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="font-display text-2xl uppercase tracking-tight text-brand-blue-500">
            RUBROS CON CUENTA ACTIVA EN MAR DEL PLATA
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-blue-500">
            Más de 7 años adaptando nuestros circuitos a los requerimientos de cada sector.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {RUBROS.map((r) => (
            <div
              key={r}
              className="p-4 rounded-xl bg-white border border-brand-blue-100 text-center shadow-xs flex items-center justify-center"
            >
              <span className="font-subheading text-xs uppercase font-bold text-brand-blue-500 tracking-wide">
                {r}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

