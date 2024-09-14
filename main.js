var _a, _b;
function generateResume() {
    // Retrieve input values
    var name = document.getElementById('name-input').value;
    var fatherName = document.getElementById('father-name-input').value;
    var about = document.getElementById('about-input').value;
    var education = document.getElementById('education-input').value;
    var skills = document.querySelector('.skills-input').value;
    var github = document.getElementById('github-input').value;
    var linkedin = document.getElementById('linkedin').value;
    if (!name || !fatherName || !about || !education || !skills || !github || !linkedin) {
        alert("Please fill in all the fields.");
        return;
    }
    var skillsList = skills.split(',').map(function (skill) { return skill.trim(); }).filter(function (skill) { return skill; }).join('</li><li>');
    // Generate resume content
    var resumeContent = "\n    <div id=\"all-content\">\n     <header class=\"Head\">\n        <h1>".concat(name.toUpperCase(), "</h1>\n        <p>  <a href=\"#\">LinkedIn : ").concat(linkedin, "</a>\n            | <a href=\"#\">Github : ").concat(github, "</a></p>\n    </header>\n\n    <!-- INFO SECTION -->\n    <section class=\"main-obj\">\n        <h2>Objective :</h2>\n        <p>").concat(about, "</p>\n    </section>\n    <hr>\n    <!--Personal Info -->\n    <div class=\"personal-info\">\n        <h2>Personal Information : </h2>\n        <div>\n            <div class=\"info-item\">\n                <strong>Name:</strong> ").concat(name, "\n            </div>\n            <div class=\"info-item\">\n                <strong>Father's Name:</strong> ").concat(fatherName, "\n            </div>\"\n            <div class=\"info-item\">\n                <strong>Nationality:</strong> Pakistani\n            </div>\n            <div class=\"info-item\">\n                <strong>Qualification:</strong>").concat(education, "\n            </div>\n        </div>\n    </div>\n    <hr>\n    <!-- skills portion -->\n    <div class=\"skill-portion\">\n        <h2>Skills :</h2>\n         <ul><li>").concat(skillsList.toUpperCase(), "</li></ul>\n        \n    </div>\n    <hr>\n    <!-- footer -->\n    <div class=\"footer\">\n        <h4>\"Thank you for considering my application; I look forward to the opportunity to contribute to your team.\"</h4>\n    </div>\n  </div>  \n  \n         \n");
    // Display the resume output
    document.getElementById('resume-output').innerHTML = resumeContent;
}
function download() {
    // Get the element with the resume content
    var element = document.getElementById('all-content');
    if (element) {
        // Set options for html2pdf
        var options = {
            margin: 1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        // Convert HTML to PDF and download
        html2pdf().from(element).set(options).save();
    }
}
// Add event listeners to the buttons
(_a = document.getElementById('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateResume);
(_b = document.getElementById('downloadPDF')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', download);
