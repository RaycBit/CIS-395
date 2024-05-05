window.onload = function(){

    //This section is for the rectangle problem
    var buttons = document.querySelectorAll('.button_white');

    // Add click event listeners to each button
    buttons.forEach(function(button) {
        button.addEventListener('click', function () {

            // Get the length and width input values
            var length = parseFloat(document.getElementById("length").value);
            var width = parseFloat(document.getElementById("width").value);

            // Determine which button was clicked and perform the corresponding calculation
            switch (this.value) {
                case 'Area':
                    calculateArea(length, width);
                    break;
                case 'Perimeter':
                    calculatePerimeter(length, width);
                    break;
                case 'Both':
                    calculateArea(length, width);
                    calculatePerimeter(length, width);
                    break;
                default:
                    break;
            }
        });
    });

// Function to calculate the area
function calculateArea(length, width) {
    var area = length * width;
    document.getElementById('area').value = area;
}

// Function to calculate the perimeter
function calculatePerimeter(length, width) {
    var perimeter = 2 * (length + width);
    document.getElementById('perimeter').value = perimeter;
}

//This section is for the square problem
// Function to calculate the area
document.getElementById("areaButton").onclick = function() {
    var side = parseFloat(document.getElementById("sideInput").value);
    var area = side * side;
    document.getElementById("areaOutput").value = area;
};

// Function to calculate the perimeter using the perimeter button
document.getElementById("perimeterButton").onclick = function() {
    var side = parseFloat(document.getElementById("sideInput").value);
    var perimeter = 4 * side;
    document.getElementById("perimeterOutput").value = perimeter;
};
// Function to calculate both
document.getElementById("bothButton").onclick = function() {
    var side = parseFloat(document.getElementById("sideInput").value);
    var area = side * side;
    var perimeter = 4 * side;
    document.getElementById("areaOutput").value = area;
    document.getElementById("perimeterOutput").value = perimeter;
};
// Function to clear the data 
document.getElementById("clearButton").onclick = function() {
    document.getElementById("sideInput").value = "";
    document.getElementById("areaOutput").value = "";
    document.getElementById("perimeterOutput").value = "";
};
    }

    // Function to calculate the simple interest
    document.getElementById('calculate-btn').addEventListener('click', function () {
        var principal = parseFloat(document.getElementById('principal').value);
        var rate = parseFloat(document.getElementById('rate').value);
        var time = parseFloat(document.getElementById('time').value);

        var simpleInterest = (principal * ((rate / 100) * time));

        document.getElementById('result').innerHTML = 'Simple Interest: $' + simpleInterest.toFixed(2);
    });
    
    
    