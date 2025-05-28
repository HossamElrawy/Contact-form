# Contact Form Project

A responsive, accessible contact form with client-side validation and success messaging.

## Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Form Validation**: Real-time validation for all fields
- **Accessibility**: ARIA attributes and semantic HTML
- **Success Feedback**: Visual confirmation on successful submission
- **Modern Styling**: Custom radio buttons and checkboxes
- **Error Handling**: Clear error messages for invalid inputs

## Technologies Used

- HTML5 (semantic markup)
- CSS3 (Flexbox, Grid, custom properties)
- JavaScript (Form validation, DOM manipulation)
- [Google Fonts](https://fonts.google.com/) (Karla font family)

## Form Fields

1. **First Name** (required)
2. **Last Name** (required)
3. **Email Address** (required, format validation)
4. **Query Type** (radio selection, required)
   - General Enquiry
   - Support Request
5. **Message** (required textarea)
6. **Consent Checkbox** (required)

## Validation Rules

| Field        | Validation Criteria                     |
|--------------|-----------------------------------------|
| Text Inputs  | Not empty                               |
| Email        | Valid format (basic pattern matching)   |
| Radio Buttons| One option must be selected             |
| Checkbox     | Must be checked                         |

## JavaScript Functions

### `validateInput(value, type, isRadio, isCheckbox)`
- Handles validation for all input types
- Shows/hides error messages
- Manages warning styles
- Returns boolean validation result

### `showMessageSent(allValid)`
- Displays success message
- Automatically scrolls to message
- Hides message after 5 seconds

### Form Submission Handler
- Prevents default form submission
- Collects and validates all data
- Clears form on successful submission

## Accessibility Features

- Proper label associations
- ARIA attributes for form controls
- Error messages with `role="alert"`
- Focus states for keyboard navigation
- Semantic HTML structure

## Responsive Breakpoints

- **Desktop**: Full two-column layout
- **Mobile (< 800px)**: Single column layout
- Textareas expand vertically on mobile
