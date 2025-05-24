document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const maleInput = form.querySelector('input[placeholder="Male Name"]');
  const femaleInput = form.querySelector('input[placeholder="Female Message"]');
  const resultDiv = document.getElementById('result');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const maleName = maleInput.value.trim();
    const femaleName = femaleInput.value.trim();

    if (maleName && femaleName) {
      // Generate random number between 1 and 100
      const lovePercentage = Math.floor(Math.random() * 100) + 1;
      resultDiv.textContent = `${maleName} & ${femaleName}: ${lovePercentage}% Love Compatibility`;
      resultDiv.style.color = '#e91e63';
    } else {
      resultDiv.textContent = 'Please enter both names!';
      resultDiv.style.color = 'red';
    }
  });
});