// Slider 
let slideIndex = 1; 
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}
function slideButton(n) {
    showSlides(slideIndex += n);
}
showSlides(slideIndex);


// Tabs
let tabButtons = document.querySelectorAll('.tab-btn');
let tabContent = document.querySelectorAll('.tab-content');
function tabBtn(index) {
    for (let content of tabContent) {
        content.style.display = "none";
        if (content.id == index) {
            content.style.display = 'flex';
        } 
    }
    for (let btn of tabButtons) {
        btn.classList.remove('active');
    }
    tabButtons[index].classList.add('active');
    for (let button of tabButtons) {
        if (!button.classList.contains("active")){
            button.style.borderBottom = "1px solid #DEE2E6";
        } else {
            button.style.borderBottom = 'none';
        }
    }
}
tabBtn(0); //default

// Form Validation 
let nameInput = document.getElementById('name-input');
let textareaInput = document.getElementById('textarea-input');
let phoneInput = document.getElementById('phone-input');
let emailInput = document.getElementById('email-input');
let subjectInput = document.getElementById('subject-input');
let inputArray = [nameInput, phoneInput, emailInput, subjectInput, textareaInput];
let formValues = {};

function formValidate() {
    let emailPattern = /^[a-zA-Z0-9._-]*[@][a-zA-Z]*[\.][a-z]{2,4}$/;
    // phone 
    if (phoneInput.value.substring(0,4) !== "+995") {
        alert('Please Start Your Phone Number With a +995 Code');
    } else if (!emailInput.value.match(emailPattern)) {
        alert('Please Enter a Valid Email');
    } else if (subjectInput.value.length <= 5) {
        alert('The Subject Field Needs to Be More Than 5 Characters');
    } else {
        formValues.name = nameInput.value;
        formValues.phone = phoneInput.value;
        formValues.email = emailInput.value;
        formValues.subject = subjectInput.value;
        formValues.message = textareaInput.value;
    }
    }
// table
let tableModalElement = document.getElementById('table-modal-container');
function showTable() {
        let table = document.createElement('table');
        let tbody = document.createElement('tbody');

        let rowData = [
            { label: "Name", value: formValues.name },
            { label: "Phone", value: formValues.phone },
            { label: "Email", value: formValues.email },
            { label: "Subject", value: formValues.subject },
            { label: "Message", value: formValues.message },
        ];

        rowData.forEach((data) => {
            const row = document.createElement("tr");
            const labelCell = document.createElement("td");
            const valueCell = document.createElement("td");
    
            labelCell.textContent = data.label;
            valueCell.textContent = data.value;
    
            row.appendChild(labelCell);
            row.appendChild(valueCell);
    
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        let tableModal = document.getElementById('table-modal');
        tableModal.innerHTML = `<button onclick='tableClose()' class='close-button'>
        <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 384 512"
    >
      <path
        class="x-icon"
        d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
      />
    </svg>
        </button> 
        `;
        tableModal.appendChild(table);
        tableModalElement.classList.add('open');
    }

    function tableClose() {
        tableModalElement.classList.remove('open');
    }

// Users Modal
let users = document.getElementById('users');
async function getUsers() {
    users.classList.add('show');
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const parsed = await response.json();
    let html = `
    <button class="close-button" onclick="closeUsersModal()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 384 512"
    >
      <path
        class="x-icon"
        d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
      />
    </svg>
  </button>`;

    parsed.forEach((user) => {
        let htmlSegment = `   
        <div class="user">
            <h2>${user.name}</h2>
            <p>${user.email}</p>
        </div>
        `;
        html += htmlSegment;
    });
    const usersDiv = document.getElementById('users-container');
    usersDiv.innerHTML = html;
}

function closeUsersModal() {
    users.classList.remove('show');
}