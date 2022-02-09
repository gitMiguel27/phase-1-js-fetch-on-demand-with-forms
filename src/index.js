const init = () => {
    const inputForm = document.querySelector('form');
    
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');

        // console.log(input.value);
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const title = document.getElementById("detail-title");
            const summary = document.getElementById("detail-summary");

            title.innerText = data.title;
            summary.innerText = data.summary;

        })
    });
}

document.addEventListener('DOMContentLoaded', init);