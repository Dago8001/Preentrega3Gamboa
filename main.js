  let datos = {
    "nombre": "Ejemplo",
    "edad": 25,
    "ciudad": "Ciudad Ejemplo"
  };
  
  let datosString = JSON.stringify(datos);
  
  
  localStorage.setItem('datosUsuario', datosString);
  
  
  let datosGuardados = localStorage.getItem('datosUsuario');
  let datosJSON = JSON.parse(datosGuardados);
  
  
  document.getElementById('nombre').textContent = datosJSON.nombre;
  document.getElementById('edad').textContent = datosJSON.edad;
  document.getElementById('ciudad').textContent = datosJSON.ciudad;
  
  
  document.getElementById('cambiarEdad').addEventListener('click', function() {
    
    datosJSON.edad += 1;

    
    localStorage.setItem('datosUsuario', JSON.stringify(datosJSON));
  
    
    document.getElementById('edad').textContent = datosJSON.edad;
  });  