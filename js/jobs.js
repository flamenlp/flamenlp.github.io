document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('job-form');

    jobForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(jobForm);
        const data = {
            name: formData.get('name'),
            qualification: formData.get('qualification'),
            experience: formData.get('experience'),
            resumeLink: formData.get('resume-link'),
            jobRole: formData.get('job-role')
        };

        fetch('http://localhost:3000/submit_job_form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(result => {
            document.getElementById('response').innerText = result;
            jobForm.reset();
        })
        .catch(error => {
            document.getElementById('response').innerText = 'Error submitting form.';
            console.error('Error:', error);
        });
    });
});
