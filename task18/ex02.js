
const questions = document.querySelectorAll('.accordion-question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;

        const isActive = answer.classList.contains('active');

        document.querySelectorAll('.accordion-answer').forEach(ans => {
            ans.classList.remove('active');
        });

        if (!isActive) {
            answer.classList.add('active');
        }
    });
});
