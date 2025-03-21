var form = document.getElementById('my-form');
const formbox = document.querySelector('.form-box');
const result = document.querySelector('.result-box');
var imagem = null;

function submit(){
    
   form.querySelector('input[type="submit"]').addEventListener('click', (e)=>{

            e.preventDefault();

            if (!formValidate()) {
                return false;
            } 
    
            let user = {};

            [...form.elements].forEach((field) =>{ 

                    if (field.name === 'gender'){

                        if (field.checked){

                            user[field.name] = field.value;
                        }   
                    } else if (field.name === 'photo'){

                            user[field.name] = imagem;

                    } else {

                            user[field.name] = field.value;
                    }           
                });
                var object = {
                    Nome: user.name,
                    Endereco: user.address,
                    Cidade: user.city,
                    CEP: user.zipcode,
                    Numero: user.number,
                    Estado: user.state,
                    Generos: user.gender,
                    Email: user.email,
                    Telefone: user.phone,
                    Foto: user.photo
                };
                console.log(object);
                form.reset(); 
                ativarFormulario();
        });  
}
function formValidate(){
    
    let validate = true;

    let form = document.getElementById('my-form');

    ['name','address','email'].forEach(fieldName =>{

      
        let field = form.querySelector(`[name="${fieldName}"]`);

        if (!field.value){
           field.placeholder = 'Campo obrigatório';
           field.classList.add('error');
           validate = false;

        } else {
        
            field.classList.remove('error');
            field.placeholder = '';
        }
    });
    return validate;
}
function ativarFormulario() {
    formbox.style.display = 'none';
    result.style.display = 'block';
}
function desativarFormulario() {
    formbox.style.display = 'block';
    result.style.display = 'none';
}
function reader(){
    let files = form.querySelector('.file');
    
    files.addEventListener('change', (e)=>{
        
        if (files){
            
            let file = files.files[0];
            
            let reader = new FileReader();
            
            reader.onload = (e)=> {
                
                imagem = e.target.result;
            }
            reader.readAsDataURL(file); 
        }
    });
}
result.addEventListener('click', ()=>{
    
    desativarFormulario();
       
});
let cancel = document.querySelector('.cancel');
cancel.addEventListener('click', ()=>{

    window.location.reload();
});
submit();
reader();

