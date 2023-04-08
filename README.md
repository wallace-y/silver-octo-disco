# Basic Registration Form

This is a React component for a registration form with form validation. The component uses React's state hook to manage the state of the input fields (first name, last name, and email), as well as the state of the form validation.

The component renders an HTML form with input fields for first name, last name, and email. It also renders an Alert component that displays an error message if any of the input fields are not valid. The form's submit button is disabled until all input fields are valid.

The component uses the useEffect hook to validate the input fields every time they are changed. The validation is done using regular expressions. The formValidation function is called when the form is submitted. If all input fields are valid, the formValid state is set to true and a success message is displayed.