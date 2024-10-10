var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
function generateResume(data) {
    return "\n    <h2>Generate Resume</h2>\n    <p> <strong>Name:</strong> ".concat(data.name, "</p>\n    <p> <strong>Email:</strong> ").concat(data.email, "</p>\n    <p> <strong>ContactNo:</strong> ").concat(data.contactno, "</p>\n    <p> <strong>Education:</strong> ").concat(data.education, "</p>\n    <p> <strong>Skills:</strong> ").concat(data.skills, "</p>\n    <p> <strong>Work Experience:</strong> ").concat(data.workexperience, "</p>\n    <button id = \"editResume\"> Edit Resume </button>\n   \n\n    ");
}
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var contactno = document.getElementById('contactno').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        var workexperience = document.getElementById('workexperience').value;
        resumeOutput.innerHTML = generateResume({ name: name, email: email, contactno: contactno, education: education, skills: skills, workexperience: workexperience });
        var editButton = document.getElementById('editResume');
        if (editButton) {
            editButton.addEventListener('click', function () {
                document.getElementById('name').value = name;
                document.getElementById('email').value = email;
                document.getElementById('contactno').value = contactno;
                document.getElementById('education').value = education;
                document.getElementById('skills').value = skills;
                document.getElementById('workexperience').value = workexperience;
                ;
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    });
}
else {
    console.error('Form or output div not found in the Dom');
}
