// Form submission handler
document.querySelector('.js-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  
  // Get form values and trim whitespace
  const formData = {
    firstName: this.querySelector('.js-first-input').value.trim(),
    lastName: this.querySelector(".js-last-input").value.trim(),
    email: this.querySelector(".js-email-input").value.trim(),
    queryType: this.querySelector('input[name="Query-Type"]:checked')?.value,
    message: this.querySelector(".js-message-input").value.trim(),
    consent: this.querySelector('input[name="consent"]').checked
  };

  // Validate all form inputs
  const firstValid = validateInput(formData.firstName, "first");
  const lastValid = validateInput(formData.lastName, "last");
  const emailValid = validateInput(formData.email, "email");
  const typeValid = validateInput(formData.queryType, "query", true); // Radio button validation
  const messageValid = validateInput(formData.message, "message");
  const consentValid = validateInput(formData.consent, "consent", false, true); // Checkbox validation
  const allValid = firstValid && lastValid && emailValid && typeValid && messageValid && consentValid;

  // Show appropriate message based on validation
  showMessageSent(allValid);
  
  // Only clear form if validation passed
  if (allValid) {
    // Clear text inputs
    form.querySelector('.js-first-input').value = '';
    form.querySelector('.js-last-input').value = '';
    form.querySelector('.js-email-input').value = '';
    form.querySelector('.js-message-input').value = '';
    
    // Reset radio buttons
    const radioButtons = form.querySelectorAll('input[name="Query-Type"]');
    radioButtons.forEach(radio => radio.checked = false);
    
    // Uncheck consent checkbox
    form.querySelector('input[name="consent"]').checked = false;
    
    // Reset email placeholder if it was changed
    const emailInput = form.querySelector('.js-email-input');
    emailInput.placeholder = "";
  }
});

/**
 * Validates a form input based on its type
 * @param {string|boolean} value - The input value to validate
 * @param {string} type - The input type/name for DOM selection
 * @param {boolean} [isRadio=false] - Whether this is a radio button input
 * @param {boolean} [isCheckbox=false] - Whether this is a checkbox input
 * @returns {boolean} - True if valid, false if invalid
 */
function validateInput(value, type, isRadio = false, isCheckbox = false) {
  // Get related DOM elements
  const warningElement = document.querySelector(`.js-warn-${type}`);
  const inputElement = document.querySelector(`.js-${type}-input`) || 
                      document.querySelector(`input[name="${type}"]`);

  let isValid;
  
  // Determine validation based on input type
  if (isRadio) {
    isValid = value !== undefined; // Radio must have a selected value
  } else if (isCheckbox) {
    isValid = value === true; // Checkbox must be checked
  } else {
    isValid = value !== ""; // Text inputs must not be empty
  }

  // Handle invalid case
  if (!isValid) {
    warningElement?.classList.add("show");
    inputElement?.classList.add("warn-input");
    
    // Special handling for email placeholder
    if (type === "email") {
      inputElement.placeholder = "email#example.com";
    }
    return false;
  } 
  // Handle valid case
  else {
    warningElement?.classList.remove("show");
    inputElement?.classList.remove("warn-input");
    return true;
  }
}

/**
 * Displays and manages the submission message
 * @param {boolean} allValid - Whether all form validations passed
 */
function showMessageSent(allValid) {
  const messageElement = document.querySelector('.js-message-sent');
  
  if (allValid) {
    // Show success message
    messageElement.classList.remove('hidden');
    
    // Smooth scroll to message
    messageElement.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center'
    });
    
    // Hide message after 5 seconds
    setTimeout(() => {
      messageElement.classList.add('hidden');
    }, 5000);
  }
  // Note: Could add else case here to handle error message display
}