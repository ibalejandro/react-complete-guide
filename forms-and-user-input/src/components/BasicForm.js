import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== '';

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } = useInput(isNotEmpty);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput(isNotEmpty);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  let formIsValid = false;
  
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  
  const submitHandler = (event) => {
    event.preventDefault();
    
    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(firstName, lastName, email);
    
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameInputHasError ? "form-control invalid" : "form-control";
  const lastNameInputClasses = lastNameInputHasError ? "form-control invalid" : "form-control";
  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control";
  
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='first-name'
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
            value={firstName} />
            {firstNameInputHasError && <p className="error-text">Please enter a first name.</p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='last-name'
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
            value={lastName} />
            {lastNameInputHasError && <p className="error-text">Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
            type='text'
            id='email'
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={email} />
            {emailInputHasError && <p className="error-text">Please enter a valid email address.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
