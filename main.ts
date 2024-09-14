function generateResume(): void {
    // Retrieve input values
    const name = (document.getElementById('name-input') as HTMLInputElement).value;
    const fatherName = (document.getElementById('father-name-input') as HTMLInputElement).value;
    const about = (document.getElementById('about-input') as HTMLInputElement).value;
    const education = (document.getElementById('education-input') as HTMLInputElement).value;
    const skills = (document.querySelector('.skills-input') as HTMLInputElement).value;
    const github = (document.getElementById('github-input') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    
    
    if (!name || !fatherName || !about || !education || !skills || !github || !linkedin) {
        alert("Please fill in all the fields.");
        return;
    }
    
    const skillsList = skills.split(',').map(skill => skill.trim()).filter(skill => skill).join('</li><li>');
    // Generate resume content
    const resumeContent = `
    <div id="all-content">
     <header class="Head">
        <h1>${name.toUpperCase()}</h1>
        <p>  <a href="#">LinkedIn : ${linkedin}</a>
            | <a href="#">Github : ${github}</a></p>
    </header>

    <!-- INFO SECTION -->
    <section class="main-obj">
        <h2>Objective :</h2>
        <p>${about}</p>
    </section>
    <hr>
    <!--Personal Info -->
    <div class="personal-info">
        <h2>Personal Information : </h2>
        <div>
            <div class="info-item">
                <strong>Name:</strong> ${name}
            </div>
            <div class="info-item">
                <strong>Father's Name:</strong> ${fatherName}
            </div>"
            <div class="info-item">
                <strong>Nationality:</strong> Pakistani
            </div>
            <div class="info-item">
                <strong>Qualification:</strong>${education}
            </div>
        </div>
    </div>
    <hr>
    <!-- skills portion -->
    <div class="skill-portion">
        <h2>Skills :</h2>
         <ul><li>${skillsList.toUpperCase()}</li></ul>
        
    </div>
    <hr>
    <!-- footer -->
    <div class="footer">
        <h4>"Thank you for considering my application; I look forward to the opportunity to contribute to your team."</h4>
    </div>
  </div>  
  
         
`;

    // Display the resume output
    (document.getElementById('resume-output') as HTMLDivElement).innerHTML = resumeContent;
}
function download() {
    // Get the element with the resume content
    const element = document.getElementById('all-content');

    if (element) {
        // Set options for html2pdf
        const options = {
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
document.getElementById('button')?.addEventListener('click', generateResume);
document.getElementById('downloadPDF')?.addEventListener('click', download);
