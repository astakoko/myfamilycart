// Simple bootstrap spinner
const spinner = `
                <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
                </div>`;


document.addEventListener('DOMContentLoaded', () => {

  // Inserting text between the fields of the Django Form. ( OR )
  const legend = document.createElement('legend');
  legend.innerHTML = '&#11014; OR &#11015;';
  legend.classList.add('mt-4', 'display-4');
  document.querySelector('#id_username').parentElement.append(legend);

  // todo: add async mail method
  // Load spinner when sending email
  document.querySelector('#submit').addEventListener('click', function() {
    this.innerHTML = spinner;
    document.share.submit();
  })
});