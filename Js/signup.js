
      //mostrar contraseña en campo
      function showPassword() {
        var password = document.getElementById("password");
        var icon = document.querySelector(".fas");

        if (password.type === "password") {
          password.type = "text";
        } else {
          password.type = "password";
        }
      }
      //mandar el valor de los campos a validación
      function validateForm(event) {
        event.preventDefault();
        //guardar el valor de cada campo
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var pick = document.getElementById("pick").value;
        var password = document.getElementById("password").value;
        //no permitir campos vacios
        if (name === "" || email === "" || pick === "" || password === "") {
          alert("Por favor, rellena todos los campos");
          return false;
        }
        //expresión regular para validar correo electrónico
        var emailRegex = /^[A-Za-z0-9._%+-]+@gmail\.com$/;
        if (!emailRegex.test(email)) {
          alert("Por favor, ingrese un correo de Gmail valido");
          return false;
        }
        // Expresión regular para validar nombre y usuario o pick (solo letras y espacios)
          var nameRegex = /^[A-Za-z\s]+$/;
          if (!nameRegex.test(name)) {
            alert("El campo nombre solo permite letras y espacios");
            return false;
          }

        //crear objeto json
        var formData = {
          name: name,
          email: email,
          pick: pick,
          password: password
        };
        //convertir el objeto json en cadena de texto
        var jsonData = JSON.stringify(formData);
        // Enviar jsonData al LogIn pero encriptado
        alert("Registro exitoso!");
        window.location.href = 'login.html?jsonData=' + encodeURIComponent(jsonData);
      }