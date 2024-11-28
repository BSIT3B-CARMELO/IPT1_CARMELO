// Simple example of interactivity for the Skills section
document.querySelectorAll('.skill-box').forEach((box) => {
    box.addEventListener('click', function () {
        alert('This is a brief description of the skill!');
    });
});
