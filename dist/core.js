const msg = document.querySelector('#message');
const icon = document.querySelector('#icon');
const box = document.querySelector('#box');

box.addEventListener('click', ()=>{
    msg.innerHTML = 'Copied to Clipboard';
    icon.classList.remove('fa-regular', 'fa-clone');
    icon.classList.add('fa-solid', 'fa-check');

    CopyToClipboard();

    setTimeout(
        function() {
            msg.innerHTML = 'Click to Copy';
            icon.classList.remove('fa-solid', 'fa-check');
            icon.classList.add('fa-regular', 'fa-clone');
        }, 3000);
});

function CopyToClipboard(){

    

}