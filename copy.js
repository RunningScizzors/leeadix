  // Function to copy the value from the div
  function copyValue(id) {
    const element = document.getElementById(id);
    const valueToCopy = element.getAttribute('value'); // Get the value from the value attribute
    const tempInput = document.createElement('textarea'); // Create a temporary textarea element
    tempInput.value = valueToCopy;
    document.body.appendChild(tempInput); // Append it to the body
    tempInput.select(); // Select the value in the textarea
    document.execCommand('copy'); // Execute the copy command
    document.body.removeChild(tempInput); // Remove the textarea
   // alert('Copied: ' + valueToCopy); // Optional: Show an alert
  }