const msg = document.querySelectorAll('#message');
const icon = document.querySelectorAll('#icon');
const box = document.querySelectorAll('#box');

box.forEach( (b, index) => {
    b.addEventListener('click', (e) => {
        // copy target
        copyTargetText(b);

        // change icon and text on click        
        msg[index].innerHTML = 'Copied to clipboard';
        icon[index].classList.remove('fa-regular','fa-clone');
        icon[index].classList.add('fa-solid','fa-check');
                
        // after 2.5s restore text and icon
        setTimeout(() => {
            msg[index].innerHTML = 'Copy to clipboard';
            icon[index].classList.add('fa-regular','fa-clone');
            icon[index].classList.remove('fa-solid','fa-check');
        }, 2500);
        
    })
})

async function copyTargetText(b) {
    let text = '';
    // remove white space and new lines
    b.querySelectorAll('.row').forEach((r)=>{
        text += r.innerText.replace(/(\r\n|\n|\r)/gm, "") + '\n';
    });

    // copy to Clipboard
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }