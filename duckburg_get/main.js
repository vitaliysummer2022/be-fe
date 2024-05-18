getData();

async function getData(name = '') {
    const mainWrap = document.querySelector('.characters');
    mainWrap.innerHTML = '';

    const res = await fetch(`./characters.php?name=${name}`);
    const data = await res.json();
    
    if (data !== null) {
        mainWrap.classList.remove('empty-wrap');
        createMain(data);
    } else {
        mainWrap.classList.add('empty-wrap');
    }
}

document.querySelector('input')
.addEventListener('input', e => getData(e.target.value));

function createMain(data) {
    for (let el of data) {
        document.querySelector('.characters').insertAdjacentHTML('beforeend', `
        <a href="profile.html?id=${el.id}">
            <img src="img/${el.img}">
            <b>${el.name}</b>
        </a>`);
    }
}