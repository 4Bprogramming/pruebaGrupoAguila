export function validate(input) {
  let errors = {};
  const expresiones = {
    //    Nombre: /^[a-zA-ZÀ-ÿ\s]{ 1,40 }$/,
    //   /^[a-zA-ZÀ-ÿ\s]{1,40}$/      Letras y espacios, pueden llevar acentos.
    celular: /^\d{1,11}$/, // 1 a 11 numeros.
    email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  }; 

  if (input.Nombre?.length < 3) {
    errors.Nombre = "Debe agregar Apellido y Nombre";
  }
 
  if (input.celular?.length < 7) {
    errors.celular = "Debe contener numero de teléfono";
  }
  if (!expresiones.celular.test(input.celular)) {
    errors.celular = "debe contener solo números, entre 1 y 11 dígitos";
  }
  if (!expresiones.email.test(input.email)) {
    errors.email = "verifique email";
  }
  
  if (input.email?.length < 1) {
    errors.email = "agregue un email por favor";
  }
  if (input.rol?.length < 1) {
    errors.rol = "agregue un rol por favor";
  }

  

  return errors;
}
