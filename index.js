const footer = document.getElementById("footer");
const year = new Date().getFullYear();
footer.innerHTML = `Copyright to @HueFree Team ${year}`;

const myButton = document.getElementById('myButton');
myButton.addEventListener('click', () => {
    alert('I got clicked');
});
