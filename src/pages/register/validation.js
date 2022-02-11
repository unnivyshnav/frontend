// Validation Function
function validation(values) {
  //values = formValues (useState)
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const regexPass =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  if (!values.username) {
    errors.username = "Username is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!regex.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password is too short";
  } else if (values.password.match(regexPass)) {
    errors.password =
      "Password must conatain one lowercase letter, one uppercase letter, one numeric digit, and one special character";
  }
  return errors;
}

export default validation;
