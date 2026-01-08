document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const wordCount = document.getElementById('wordCount');
    const charCount = document.getElementById('charCount');

    textInput.addEventListener('input', function() {
        const text = textInput.value;
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        const wordCountValue = words.length;
        const remainingChars = 200 - text.length;

        wordCount.textContent = `Number of words: ${wordCountValue}`;
        charCount.textContent = `Number of characters remaining: ${remainingChars}`;

        if (remainingChars <= 20) {
            charCount.classList.add('warning');
        } else {
            charCount.classList.remove('warning');
        }
    });
});
