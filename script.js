let body=document.querySelector('body');
function darks(){
    body.style.background='rgb(206, 223, 252);';
}
function employedSearch(){
  var empleados ={
    'JESÚS AROCAS PASADAS':{
      img: '/img/Jesus.jfif',
      profesion: 'Diseñador gráfico',
      puesto: 'Vectorizado',
      ingreso: '01/dic/2005',
      cumple: '23/ene/1985',
      direccion: 'PADRÓ 109, Zaragoza, España', 
      telefono: '55 1112 4896',
      celular: '55 1245 7896',
      correo: 'jesus@yahoo.com',
      update: 'Última actualización hace más de un año'
    },
    'JOAQUÍN VISO GILABERT':{
      img: '/img/Joaquin.jfif',
      profesion: 'Periodismo digital',
      puesto: 'Community manager',
      ingreso: '13 mar 1990',
      cumple: '12 feb 1970',
      direccion: 'Casa Cordellas 101, Barcelona, España',
      telefono: '55 1245 7159',
      celular: '55 1199 1233',
      correo: 'joaquin_vgil@hotmail.com',
      update: 'Última actualización hace más de un año'
    },
    'PEDRO AYALA FERRERAS':{
      img: '/img/pedroAy.jfif',
      profesion: 'Ingeniero en electrónica',
      puesto: 'Director de Difusión y Divulgación',
      ingreso: '26 jun 2015	27',
      cumple: 'nov 1990',
      direccion: 'Doctor Fleming 11, Iztapalapa, CDMX, México',
      telefono: '55 3698 4139',
      celular: '55 8956 4551',
      correo: 'ayala_pedrito_ferras@gmail.com',
      update: 'Última actualización hace 6 meses'
    },
    'LUISA BAEZ TEJADO':{
      img: '/img/Luisa.jfif',
      profesion: 'Full Stack Developer',
      puesto: 'Senior Dev | Product Owner',
      ingreso: '31 ene 2018',
      cumple: '12 feb 1997',
      direccion: 'Bertrand Sierra 7951, Chalco, Estado de México',
      telefono: '55 2145 9878',
      celular: '55 5274 9614',
      correo: 'lbaezt@gmail.com',
      update: 'Última actualización hace 11 meses'
    },
    'MARÍA BASTARDES SOTO':{
      img: '/img/Mary.jfif',
      profesion: 'Ingeniera aeroespacial',
      puesto: 'Dirección de Laboratorio de materiales',
      ingreso: '16 Sep 2020',
      cumple: '05 nov 2000',
      direccion: 'Carrió 4564, Michoacán, México',
      telefono: '	55 1245 4799',
      celular: '55 9656 3416',
      correo: 'mariabastardessoto@outlook.com',
      update: 'Última actualización hace 1 mes'
    },
    'CARMEN ANGUERA VILAFRANCA':{
      img: '/img/Camen.jfif',
      profesion: 'Abogada',
      puesto: 'Representante legal',
      ingreso: '29 ago 2019',
      cumple: '31 dic 1997',
      direccion: 'Pirineus 10, Valencia, España',
      telefono: '55 1486 5612',
      celular: '55 7841 3254',
      correo: 'carmen_a_v@gmail.com',
      update: 'Última actualización hace menos de una semana'
    }
  }
  var employName = document.getElementById('EmployName').value
  var employNameMysc = employName.toUpperCase()
  var profesion = document.getElementById('profesion')
  var puesto = document.getElementById('puesto')
  var ingreso = document.getElementById('ingreso')
  var cumple = document.getElementById('cumple')
  var adress = document.getElementById('adress')
  var telefono=document.getElementById('telfijo')
  var phone = document.getElementById('phone')
  var email = document.getElementById('email')
  var update = document.getElementById('update')
  var img = document.getElementById('leimg')
  var alert=document.getElementById('tost')
  var name = document.getElementById('lname')
  var verificacion = empleados[employNameMysc]
  
  if(verificacion == undefined){
    tost.innerHTML = `
    <div class="alert alert-danger" role="alert">
  Persona no encontrada. Intenta de nuevo
</div>` 
  }
  else{
    name.innerHTML=`${employName}`
    img.innerHTML = `<img src="${verificacion.img}" class="imgsize">`
    profesion.innerHTML=`${verificacion.profesion}`
    puesto.innerHTML=`${verificacion.puesto}`;
    ingreso.innerHTML = `${verificacion.ingreso}`
    cumple.innerHTML=`${verificacion.cumple}`
    adress.innerHTML = `${verificacion.direccion}`
    telefono.innerHTML = `${verificacion.telefono}`
    phone.innerHTML = `${verificacion.celular}`
    email.innerHTML = `${verificacion.correo}`
    update.innerHTML = `<small class="text-muted">${verificacion.update}</small>`
  }
}