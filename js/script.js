function getUrlParameter(name) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name); 
}

function checkSelectedCourse() {
    let selectedCourse = getUrlParameter('selectedCourse'); 
    if (selectedCourse) {
        let checkbox = document.getElementById("checkbox" + selectedCourse);
        if (checkbox) {
            checkbox.checked = true;
        }
    }
}

function calculateTotal() {
    let totalAmount = 0;
    let selectedCourses = 0;

    for (let i = 1; i <= 7; i++) {
        let checkbox = document.getElementById("checkbox" + i);
        if (checkbox.checked) {
            totalAmount += parseFloat(checkbox.value);
            selectedCourses++; 
        }
    }

    let discount = 0;
    if (selectedCourses === 1) {
        discount = 0;
    } else if (selectedCourses === 2) {
        discount = 0.05; 
    } else if (selectedCourses === 3) {
        discount = 0.10; 
    } else if (selectedCourses > 3) {
        discount = 0.15; 
    }

    let discountAmount = totalAmount * discount;
    totalAmount -= discountAmount;
    
    let vat = 0.15;
    let vatAmount = totalAmount * vat;
    totalAmount += vatAmount;

    document.getElementById("totalAmount").innerText = 
        "Your Total will be: R" + totalAmount.toFixed(2);
}

window.onload = function() {
    checkSelectedCourse();
};
