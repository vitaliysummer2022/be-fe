const param = new URLSearchParams(window.location.search);
getData(param.get('id'));

async function getData(profileId) {
    const res = await fetch(`./profile.php?id=${profileId}`);
    const data = await res.json();
    createProfile(data);
}

function createProfile(data) {
    document.querySelector('.profile-wrap').innerHTML = `
        <img src="img/${data.img}">
        <ul>
            <li>${data.name}</li>
            <li>${data.age}</li>
            <li>${data.hobby}</li>
        </ul>`;
}