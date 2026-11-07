// ============================================================
//  PRODUCTOS DE ESENCIA TIENDA DECO
//  Acá cambiás precios y agregás o sacás piezas.
//
//  foto:        nombre exacto del archivo de la foto (subila junto a este archivo).
//               Para varias fotos: foto: ["a.jpg", "a-2.jpg"] (la primera es la principal)
//  categoria:   "regalo", "casa" o "plantas".
//               Para varias: categoria: ["regalo", "casa"]
//  nombre:      título de la pieza
//  precio:      solo el número, sin $ ni puntos (ejemplo: 4500)
//  descripcion: texto corto que se ve al abrir la pieza
//
//  Cada pieza va entre llaves { } y termina con coma (menos la última).
//  Para agregar una: copiá un bloque entero, pegalo debajo y cambiá los datos.
// ============================================================
window.PRODUCTOS = [
  { foto: ["alhajero-corazones.jpg", "alhajero-corazones-2.jpg"], categoria: ["regalo"], nombre: "Alhajero corazones", precio: 7500,
    descripcion: "Alhajero con forma de corazón, pintado a mano con lunares rosas. Viene en tres tamaños que encajan entre sí. Para guardar tus joyas y pequeños tesoros." },

  { foto: "altarcito.jpg", categoria: ["regalo"], nombre: "Altarcito artesanal", precio: 25000,
    descripcion: "Altarcito de cerámica con la Sagrada Familia en relieve, bordes con puntitos rojos y un lugar para una velita. Un regalo con mucho significado." },

  { foto: ["taza-arandanos.jpg", "taza-arandanos-2.jpg"], categoria: ["regalo"], nombre: "Taza esmaltada con plato arándanos", precio: 36000,
    descripcion: "Taza esmaltada con tapa, rayas lilas, flores y arándanos pintados a mano, con plato en forma de corazón. Un regalo que se luce." },

  { foto: "bowl-chocotorta.jpg", categoria: ["regalo"], nombre: "Bowl para chocotorta", precio: 19000,
    descripcion: "Bowl cuadrado de cerámica blanca con flores y hojas en relieve, y detalles en lila. Ideal para servir tu chocotorta y llevarlo a la mesa." },

  { foto: "bowl-floreado.jpg", categoria: ["casa"], nombre: "Bowl floreado", precio: 19500,
    descripcion: "Bowl de cerámica pintado a mano por dentro con frutas de colores y un exterior naranja. Alegra la mesa y combina con un mantel tejido." },

  { foto: ["maceta-vintage.jpg", "maceta-vintage-2.jpg"], categoria: ["casa"], nombre: "Maceta vintage", precio: 14850,
    descripcion: "Maceta de cerámica con patitas, pintada en rosa a cuadros con corazones blancos. Un detalle vintage para tus plantas." },

  { foto: "maceta-corazon.jpg", categoria: ["regalo", "casa"], nombre: "Maceta corazón", precio: 9500,
    descripcion: "Maceta cuadrada de cerámica con un corazón rosa pintado a mano. Ideal para suculentas y plantas chicas." },

  { foto: "difusores.jpg", categoria: ["casa"], nombre: "Difusores porta esencia", precio: 12000,
    descripcion: "Porta esencias de cerámica para difusor con varillas: uno rosa con textura de granada y otros blancos con hojas grabadas. Perfuman tu ambiente y decoran." },

  { foto: "plato-porta-cuchara.jpg", categoria: ["casa"], nombre: "Plato porta cuchara", precio: 7500,
    descripcion: "Apoya cuchara de cerámica pintado a mano, con corazones rojos. Mantiene tu cocina prolija y le suma ternura." },

  { foto: "taza-cafe.jpg", categoria: ["regalo", "casa"], nombre: "Taza para café artesanal", precio: 6500,
    descripcion: "Taza artesanal de cerámica blanca con hojas verdes en relieve y asa verde. Para tu café de todos los días." },

  { foto: "porta-maceta-vitrofusion.jpg", categoria: ["casa"], nombre: "Porta maceta con tutor de vitrofusión", precio: 27000,
    descripcion: "Porta maceta con tutor de metal y figura de vidrio fusionado pintada a mano: un pajarito o un búho. Le suma color y personalidad a tu planta." },

  { foto: "piezas-pared-azul.jpg", categoria: ["casa"], nombre: "Porta macetas para colgar azul", precio: 19500,
    descripcion: "Porta macetas para colgar, con relieve azul clásico y cuenco blanco. Se destacan solas en cualquier pared." },

  { foto: "macetas-buho.jpg", categoria: ["plantas"], nombre: "Macetas búho", precio: 14000,
    descripcion: "Dos búhos de cerámica, uno rosa y otro celeste, que hacen de maceta y le ponen carácter a tu rincón verde." }
];
