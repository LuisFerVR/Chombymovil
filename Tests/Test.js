     //Pruebas Sign Up

      //mandar el valor de los campos a validación
      function validateForm(event) {
        event.preventDefault();
        //guardar el valor de cada campo
        var name = document.getElementById("");
        var email = document.getElementById("");
        var pick = document.getElementById("");
        var password = document.getElementById("");
        //no permitir campos vacios
        if (name === "" || email === "" || pick === "" || password === "") {
          alert("Por favor, rellena todos los campos");
          return false;
        }

        //crear objeto json
        var formDataTest = {
          name: 'Luis Fernando Vergara Ruiz',
          email: 'LuisFer@gmail.com',
          pick: 'Luis',
          password: '123'
        };

        //convertir el objeto json en cadena de texto
        var jsonDataTest = JSON.stringify(formDataTest);
        // Enviar jsonData al LogIn pero encriptado

        window.location.href = 'Test.js?jsonDataTest=' + encodeURIComponent(jsonDataTest);
      }

      //Pruebas LogIn

      function validateForm() {
        var username = "Luis";
        var password = "123";
        //que no haya campos vacios
        if (username === "" || password === "") {
          alert("Por favor ingresa ambos: Usuario y contraseña.");
          return false;
        }
        //recibir los datos encriptados del objeto jsonData provenientes del SignIn
        var urlParams = new URLSearchParams(window.location.search);
        var jsonDataTest = urlParams.get("jsonDataTest");
        //desencriptar los datos recibidos y guardarlos en data
        if (jsonDataTest) {
          var data = JSON.parse(decodeURIComponent(jsonDataTest));
        //comparar el username ingresado con el guardado, al igual que la contraseña.
          if (username === data.pick && password === data.password) {
            alert("Login exitoso!");
            // Aquí puedes redireccionar al usuario a la página de inicio de sesión exitosa
            window.location.href = 'success.html';
            //mensajes de alerta
          } else {
            alert("Nombre de usuario o contraseña invalido");
          }
        } else {
          alert("datos más validos");
        }

        return false;
      }