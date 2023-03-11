document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();

    const data = {
        name: document.querySelector('input').value,
        comment: document.querySelector('textarea').value
    }

    sendForm(data);
});

async function sendForm(data) {
    const res = await fetch('./feedback.php', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    });

    const result = await res.json();

    if (res.status === 201) {
        alert(`Thank you! ${result.message}`)
    } else {
        alert('Oops, something went wrong');
    }
}