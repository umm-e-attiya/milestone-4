const resumeForm = document.getElementById('resumeForm') as HTMLInputElement ;
const resumeOutput = document.getElementById('resumeOutput') as HTMLInputElement;

function generateResume (data:{
    name: string,
    email: string,
    contactno: string,
    education: string,
    skills: string,
    workexperience: string,
}) {
    return `
    <h2>Generate Resume</h2>
    <p> <strong>Name:</strong> ${data.name}</p>
    <p> <strong>Email:</strong> ${data.email}</p>
    <p> <strong>ContactNo:</strong> ${data.contactno}</p>
    <p> <strong>Education:</strong> ${data.education}</p>
    <p> <strong>Skills:</strong> ${data.skills}</p>
    <p> <strong>Work Experience:</strong> ${data.workexperience}</p>
    <button id = "editResume"> Edit Resume </button>
   

    `;
}

if (resumeForm && resumeOutput){
    resumeForm.addEventListener('submit',(event)=>{
        event.preventDefault();



        const name = (document.getElementById ('name') as HTMLInputElement).value;
        const email = (document.getElementById ('email') as HTMLInputElement).value;
        const contactno = (document.getElementById ('contactno') as HTMLInputElement).value;
        const education = (document.getElementById ('education') as HTMLInputElement).value;
        const skills = (document.getElementById ('skills') as HTMLInputElement).value;
        const workexperience = (document.getElementById ('workexperience') as HTMLInputElement).value;

        resumeOutput.innerHTML = generateResume({name, email, contactno, education, skills, workexperience});
        
        const editButton = document.getElementById('editResume') as HTMLButtonElement;
        if(editButton){
            editButton.addEventListener('click',()=>{
                (document.getElementById ('name') as HTMLInputElement).value = name;
                (document.getElementById ('email') as HTMLInputElement).value = email;
                (document.getElementById ('contactno') as HTMLInputElement).value = contactno;
                (document.getElementById ('education') as HTMLInputElement).value = education;
                (document.getElementById ('skills') as HTMLInputElement).value = skills;
                (document.getElementById ('workexperience') as HTMLInputElement).value = workexperience;
;
                window.scrollTo({top:0, behavior:'smooth'});

            });
}
});

} else{
    console.error('Form or output div not found in the Dom');
}
    

        












        




    