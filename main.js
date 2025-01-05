data.forEach(obj=>
    document.getElementById('portfolio').innerHTML+=`
        <div className="holder">
            <div className="img-holder">
                <img src=${obj.photo} alt=${obj.title} />
            </div>
            <div className="text-holder">
                <h3>${obj.title}</h3>
                <p>${obj.descr}</p>
            <button>see demo</button>
        </div>
    `
)

const burger = document.getElementById('burger');
const navList = document.getElementById('nav-list');

burger.addEventListener('click', () => {
    navList.classList.toggle('nav-active');
});

function toggleMenu() {
  document.querySelector('#burger-menu').classList.toggle('open');
 
}