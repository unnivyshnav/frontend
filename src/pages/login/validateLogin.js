// Validation Function
function validateLogin(values) {
  //values = formValues (useState)
  const errors = {}; //STORING ERROR
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
}

export default validateLogin;
