export const JUNTOSDB = {
  name: 'juntos.db',
  tables: [
    {
      name: 'junt_contactos',
      columns: [
        { name: 'cont_id', type: 'text not null primary key' },
        { name: 'cont_nombre', type: 'text' },
        { name: 'cont_numero', type: 'text not null' },
        { name: 'cont_sms', type: 'text' },
      ],
    },
    {
      name: 'junt_test',
      columns: [
        { name: 'test_id', type: 'numeric(11) not null primary key' },
        { name: 'nombre_test', type: 'text(100) not null' },
      ],
    },
    {
      name: 'junt_opcion',
      columns: [
        { name: 'opci_id', type: 'numeric(11) not null unique primary key' },
        { name: 'opci_numero', type: 'numeric(11) not null' },
        { name: 'opci_opciones', type: 'text(80) not null' },
        { name: 'opci_puntajes', type: 'text(20) not null' },
      ],
    },
    {
      name: 'junt_grupo',
      columns: [
        { name: 'grup_id', type: 'numeric(11) not null primary key' },
        { name: 'grup_nombre', type: 'text(100) not null' },
        { name: 'test_id', type: 'numeric' },
        { name: 'grup_calculo', type: 'text' },
        { name: 'opci_id', type: 'numeric' },
      ],
    },
    {
      name: 'junt_pregunta',
      columns: [
        { name: 'preg_id', type: 'numeric(11) not null primary key' },
        { name: 'preg_orden', type: 'integer not null' },
        { name: 'preg_pregunta', type: 'text(250) not null' },
        { name: 'grup_id', type: 'numeric(11) not null' },
        { name: 'test_id', type: 'numeric(11) not null' },
        { name: 'preg_testorde', type: 'integer not null' },
      ],
    },
    {
      name: 'junt_puntuacion',
      columns: [
        { name: 'resp_id', type: 'numeric(11) not null primary key' },
        { name: 'punt_rangini', type: 'numeric(10,1) not null' },
        { name: 'punt_rangfin', type: 'numeric(10,1) not null' },
        { name: 'punt_mensaje', type: 'text(500) not null' },
        { name: 'grup_id', type: 'numeric(11) not null' },
        { name: 'test_id', type: 'numeric not null' },
      ],
    },
    {
      name: 'junt_varios',
      columns: [
        { name: 'vari_id', type: 'numeric not null primary key' },
        { name: 'vari_nombre', type: 'text' },
        { name: 'vari_descripcion', type: 'text' },
        { name: 'vari_img', type: 'text' },
      ],
    },
    {
      name: 'junt_parametros',
      columns: [
        { name: 'para_id', type: 'text not null primary key' },
        { name: 'para_name', type: 'text(100)' },
        { name: 'para_valor', type: 'text' },
      ],
    },
  ],
};
