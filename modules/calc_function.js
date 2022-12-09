function showResult() {
    // Get the values of the two numbers
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    // Convert the values to numbers and add them together
    const result = parseFloat(num1) + parseFloat(num2);

    // Display the result
    document.getElementById("result").innerHTML = result;

    // Prevent the form from being submitted
    return false;
  }
