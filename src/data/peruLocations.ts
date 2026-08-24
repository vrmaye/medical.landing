export interface DepartmentLocation {
  name: string;
  districts: string[];
}

export const PERU_LOCATIONS: Record<string, string[]> = {
  'Lima': [
    'Lima Cercado', 'Miraflores', 'San Isidro', 'Santiago de Surco', 'San Borja',
    'Jesús María', 'La Molina', 'San Miguel', 'Pueblo Libre', 'Barranco',
    'Chorrillos', 'Ate', 'San Juan de Lurigancho', 'Comas', 'Los Olivos',
    'San Martín de Porres', 'Lince', 'Surquillo', 'Magdalena del Mar', 'Breña',
    'Rímac', 'El Agustino', 'Santa Anita', 'San Juan de Miraflores', 'Villa El Salvador',
    'Villa María del Triunfo', 'Puente Piedra', 'Carabayllo', 'Lurigancho-Chosica',
    'Pachacámac', 'Cieneguilla', 'Lurín', 'Ancón', 'Santa Rosa', 'Chaclacayo', 'Pucusana'
  ],
  'Callao': [
    'Callao Cercado', 'Bellavista', 'La Perla', 'Carmen de la Legua', 'La Punta',
    'Ventanilla', 'Mi Perú'
  ],
  'Arequipa': [
    'Arequipa Cercado', 'Yanahuara', 'Cayma', 'Cerro Colorado', 'José Luis Bustamante y Rivero',
    'Sachaca', 'Paucarpata', 'Miraflores', 'Socabaya', 'Hunter', 'Mariano Melgar',
    'Alto Selva Alegre', 'Tiabaya', 'Characato'
  ],
  'La Libertad': [
    'Trujillo', 'Víctor Larco Herrera', 'La Esperanza', 'El Porvenir', 'Moche',
    'Florencia de Mora', 'Huanchaco', 'Laredo', 'Salaverry'
  ],
  'Piura': [
    'Piura', 'Castilla', 'Catacaos', 'Veintiséis de Octubre', 'Sullana', 'Talara', 'Paita', 'Sechura'
  ],
  'Cusco': [
    'Cusco', 'Wanchaq', 'San Sebastián', 'San Jerónimo', 'Santiago', 'Urubamba', 'Calca', 'Sicuani'
  ],
  'Lambayeque': [
    'Chiclayo', 'José Leonardo Ortiz', 'La Victoria', 'Lambayeque', 'Ferreñafe', 'Monsefú', 'Pimentel'
  ],
  'Ancash': [
    'Huaraz', 'Chimbote', 'Nuevo Chimbote', 'Independencia', 'Caraz', 'Casma', 'Huarmey'
  ],
  'Junín': [
    'Huancayo', 'El Tambo', 'Chilca', 'Tarma', 'Jauja', 'La Oroya', 'Satipo', 'Chanchamayo'
  ],
  'Ica': [
    'Ica', 'Chincha Alta', 'Pisco', 'Nasca', 'Parcona', 'Subtanjalla', 'La Tinguiña'
  ],
  'Cajamarca': [
    'Cajamarca', 'Baños del Inca', 'Jaén', 'Chota', 'Celendín', 'Bambamarca'
  ],
  'Puno': [
    'Puno', 'Juliaca', 'Ayaviri', 'Ilave', 'Huancané'
  ],
  'Tacna': [
    'Tacna', 'Pocollay', 'Gregorio Albarracín Lanchipa', 'Alto de la Alianza', 'Ciudad Nueva'
  ],
  'Ucayali': [
    'Pucallpa', 'Yarinacocha', 'Manantay', 'Aguaytía'
  ],
  'Loreto': [
    'Iquitos', 'Punchana', 'Belén', 'San Juan Bautista', 'Yurimaguas'
  ],
  'San Martín': [
    'Tarapoto', 'Moyobamba', 'Morales', 'Banda de Shilcayo', 'Rioja', 'Juanjuí'
  ],
  'Huánuco': [
    'Huánuco', 'Amarilis', 'Pillco Marca', 'Tingo María'
  ],
  'Ayacucho': [
    'Ayacucho', 'San Juan Bautista', 'Carmen Alto', 'Jesús Nazareno', 'Huanta'
  ],
  'Moquegua': [
    'Moquegua', 'Ilo', 'Samegua', 'Torata'
  ],
  'Pasco': [
    'Chaupimarca (Cerro de Pasco)', 'Yanacancha', 'Oxapampa'
  ],
  'Tumbes': [
    'Tumbes', 'Zarumilla', 'Corrales', 'Zorritos'
  ],
  'Huancavelica': [
    'Huancavelica', 'Ascensión', 'Lircay'
  ],
  'Apurímac': [
    'Abancay', 'Andahuaylas', 'Talavera'
  ],
  'Amazonas': [
    'Chachapoyas', 'Bagua', 'Bagua Grande'
  ],
  'Madre de Dios': [
    'Puerto Maldonado', 'Tambopata', 'Inambari'
  ]
};

export const DEPARTMENTS = Object.keys(PERU_LOCATIONS);
