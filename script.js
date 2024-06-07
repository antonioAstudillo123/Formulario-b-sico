window.onload = main;


function main()
{
    eventos();
}


function eventos()
{
    //Validamos  nombre
    document.getElementById('nombre').addEventListener('change', function(e){
        if(!validarCadena(e.target.value)){
            invalid('nombre');
        }else{

            valid('nombre');
        }
    });

    //Validamos apellidos
    document.getElementById('apellidos').addEventListener('change', function(e){
        if(!validarCadena(e.target.value)){
            invalid('apellidos')
        }else{

            valid('apellidos');
        }
    });

    //Validamos username
    document.getElementById('username').addEventListener('change' , function(e){
        if(!validarUsername(e.target.value))
        {
            invalid('username')
        }else{
            valid('username');
        }
    });

    //Validamos ciudad
    document.getElementById('ciudad').addEventListener('change' , function(e){
        if(!validarCadena(e.target.value)){
            invalid('ciudad')
        }else{

            valid('ciudad');
        }
    });


    //Validamos codigoPostal
    document.getElementById('codigoPostal').addEventListener('change' , function(e){
        if(!validarNumeros(e.target.value)){
            invalid('codigoPostal')
        }else{

            valid('codigoPostal');
        }
    });


    //Validamos campos al momento de que se envia el formulario
    document.getElementById('btnEnviarForm').addEventListener('click', validarFormulario);

}

/*
    Esta función valida que una cadena solo contenga caracteres alfabeticos

*/
function validarCadena(cadena){
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(cadena);
}


function validarUsername(cadena)
{
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(cadena);
}


function validarNumeros(cadena)
{
    const regex = /^\d{5}$/;
    return regex.test(cadena);
}


function validarFormulario()
{
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let username = document.getElementById('username').value;
    let ciudad = document.getElementById('ciudad').value;
    let estado = document.getElementById('estado').value;
    let codigoPostal = document.getElementById('codigoPostal').value;
    


    if(!validarCadena(nombre)){
        mensajeAlert('Ups!' , 'Ingrese un nombre correcto!' , 'error');
    }else if(!validarCadena(apellidos)){
        mensajeAlert('Ups!' , 'Ingrese un apellido correcto!' , 'error');
    }else if(!validarUsername(username)){
        mensajeAlert('Ups!' , 'Ingrese un username correcto!' , 'error');
    }else if(!validarCadena(ciudad)){
        mensajeAlert('Ups!' , 'Ingrese una ciudad correcta!' , 'error');
    }else if(estado === ''){
        mensajeAlert('Ups!' , 'Seleccione un estado!' , 'error');
    }else if(!validarNumeros(codigoPostal)){
        mensajeAlert('Ups!' , 'Ingrese un código postal correcto!' , 'error');
    }else{
        mensajeAlert('Buen trabajo!' , 'Datos enviados correctamente!' , 'success').then(()=>{
            location.reload();
        });
    }
}


function invalid(elemento){
    document.getElementById(elemento).classList.add('is-invalid');
    document.getElementById(elemento).classList.remove('is-valid');
}

function valid(elemento){
    document.getElementById(elemento).classList.remove('is-invalid');
    document.getElementById(elemento).classList.add('is-valid');
}


function mensajeAlert(title , text, icon){
   return Swal.fire({
        title: title,
        text: text,
        icon: icon
      });
}