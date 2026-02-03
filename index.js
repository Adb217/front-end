
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });


    // -----form-----
    function ValidateForm() {

        let x = document.forms["form"]["input"].value;
        let email = document.forms["form"]["email"].value;
        let pesan = document.forms["form"]["pesan"].value;

        if (x == ""){
            alert("isi dulu dong!!!");
            return false;
        }
        if(email == ""){
            alert("emailnya diisi juga coy!");
            return false;
        }
        if (pesan == ""){
            alert("pesannya juga diisi sayang~");
            return false;
        }
    }

