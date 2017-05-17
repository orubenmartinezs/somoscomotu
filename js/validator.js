jQuery.validator.setDefaults({
  errorPlacement: function(error, element) {
    error.addClass("invalidMsg");
  },
  highlight: function(element, errorClass, validClass) {
    // $(element).addClass(errorClass);
    $(element).addClass("invalid");
  },
  unhighlight: function(element, errorClass, validClass) {
    // $(element).removeClass(errorClass);
    $(element).removeClass("invalid");
  },
  errorClass: "invalidMsg"
});

jQuery(document).ready(function() {
  /**
   * Validación del login dentro del registro (basico)de usuario
   */
  $("#formCase").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      firstname: "campo requerido, firstname",
      lastname: "campo requerido, lasttname",
      email: {
        required: "Es necesario poder continuar.",
        email: "Debe ser un correo válido"
      }
    },
    submitHandler: function(form) {
      _name = $('.firstname');
      console.log(_name.val());
       if (_name.val()==undefined){
         console.log('vacio');
       }
       else{
         console.log('ejecuta el post');
       }
    }
  });

  /**
   * Mascara de Solo números
   */
  $('body').on('input propertychange', '.soloNumeros', function() {
    $(this).val($(this).val().replace(/[^\.\:0-9]/gi, ""));
  });
  /**
   * Mascara de Alfnumericos
   */
  $('body').on('input propertychange', '.soloAlphaNum', function() {
    var letras_latinas = /^[\"\'\?\¿\!\¡\-0-9a-zA-Z´áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+$/;

    if (!$(this).val().match(letras_latinas)) {
      $(this).val($(this).val().replace(/´a$/gi, "á"));
      $(this).val($(this).val().replace(/´e$/gi, "é"));
      $(this).val($(this).val().replace(/´i$/gi, "í"));
      $(this).val($(this).val().replace(/´o$/gi, "ó"));
      $(this).val($(this).val().replace(/´u$/gi, "ú"));
      $(this).val($(this).val().replace(/[^a-zA-Z´áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ\u00D1\u00F1\u00C1\u00E1\u00C9\u00E9\u00CD\u00ED\u00D3\u00F3\u00DA\u00FA\u00DC\u00FC ]/gi, ""));
    }
  });
  /**
   * Mascara de Alfabeticos
   */
  $('body').on('input propertychange', '.soloAlphabet', function() {
    var letras_latinas = /^[\"\'\?\¿\!\¡\-a-zA-Z´áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_\s]+$/;

    if (!$(this).val().match(letras_latinas)) {
      $(this).val($(this).val().replace(/´a$/gi, "á"));
      $(this).val($(this).val().replace(/´e$/gi, "é"));
      $(this).val($(this).val().replace(/´i$/gi, "í"));
      $(this).val($(this).val().replace(/´o$/gi, "ó"));
      $(this).val($(this).val().replace(/´u$/gi, "ú"));
      $(this).val($(this).val().replace(/[^a-zA-Z´áéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ\u00D1\u00F1\u00C1\u00E1\u00C9\u00E9\u00CD\u00ED\u00D3\u00F3\u00DA\u00FA\u00DC\u00FC ]/gi, ""));
    }
  });
  /**
   * Mascara de Correo
   */
  $('body').on('input propertychange', '.soloAlphaCorreo', function() {
    var RegExPattern = /[a-zA-z0-9\-\_\u00D1\u00F1\u00C1\u00E1\u00C9\u00E9\u00CD\u00ED\u00D3\u00F3\u00DA\u00FA\u00DC\u00FC@.]$/;
    if (!$(this).val().match(RegExPattern)) {
      $(this).val($(this).val().substring(0, $(this).val().length - 1));
    }
  });
});
