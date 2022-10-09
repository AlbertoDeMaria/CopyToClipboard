const msg = document.querySelectorAll('#message');
const icon = document.querySelectorAll('#icon');
const box = document.querySelectorAll('#box');

box.forEach( (b, index) => {
    b.addEventListener('click', () => {        
        msg[index].innerHTML = 'Copied to clipboard';
        icon[index].classList.remove('fa-regular','fa-clone');
        icon[index].classList.add('fa-solid','fa-check');
        
        setTimeout(() => {
            msg[index].innerHTML = 'Copy to clipboard';
            icon[index].classList.add('fa-regular','fa-clone');
            icon[index].classList.remove('fa-solid','fa-check');
        }, 2500);
        
    })
})