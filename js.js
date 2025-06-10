const btn = document.getElementById('bouton');
const inp = document.getElementById('task');
const display = document.getElementById('p');
const affich = document.getElementById('ul');
const supprimerBtn = document.getElementById('supprimerBtn');

const style = document.createElement('style');;
document.head.appendChild(style);


btn.addEventListener('click', function () {
    let message = inp.value.trim();

    if (message === '') {
        display.textContent = 'Veuillez entrer un message.';
        display.style.color = 'red';
    } else {
        display.textContent = "Tâche ajoutée !";
        display.style.color = 'green';

        const li = document.createElement('li');
        li.className = 'tache';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const span = document.createElement('span');
        span.textContent = message;

        li.appendChild(checkbox);
        li.appendChild(span);

        affich.appendChild(li);
        inp.value = '';
    }
});


supprimerBtn.addEventListener('click', function () {
    const checkboxes = affich.querySelectorAll('input[type="checkbox"]');
    let count = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.closest('li').remove();
            count++;
        }
    });

    if (count === 0) {
        display.textContent = 'Aucune tâche cochée';
        display.style.color = 'orange';
    } else {
        display.textContent = `${count} tâche(s) supprimée(s) !`;
        display.style.color = 'orange';
    }
});
