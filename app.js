const btnSearch = document.querySelector('.btn-search');
const btnSend = document.querySelector('.btn-send');
const title = document.querySelector('.title');
const email = document.querySelector('.email');
const message = document.querySelector('.message');
const input = document.querySelector('.photo');
const imgContainer = document.querySelector('.img-container');




btnSearch.addEventListener('click', () => {
    async function getData() {
        let page = 1;
        let inputData = input.value;
        let accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
        const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            result.results.map( (imgEl) => {
                const imgUrl = imgEl.urls.regular
                const imgAlt = imgEl.alt_description
                const img = document.createElement("img");
                img.src = imgUrl;
                img.alt = imgAlt;
                img.classList.add("photoEl");
                imgContainer.appendChild(img);
            })


        } catch (error) {
            console.error(error.message);
        }
    };
    getData();
});

function checkForm() {
    if (
        title.value.trim() === ""
    ) {
        btnSend.disabled = true;
    } else if (
        email.value.trim() === ""
    ) {
        btnSend.disabled = true;
    } else if (
        message.value.trim() === ""
    ) {
        btnSend.disabled = true;
    } else {
        btnSend.disabled = false;
    }
}

title.addEventListener('input', checkForm);
email.addEventListener('input', checkForm);
message.addEventListener('input', checkForm);

btnSend.addEventListener('click', () => {
    alert('Wiadomość wysłana');
})

