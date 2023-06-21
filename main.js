$(document).ready(function(){
    
    $('#telefone').mask('(00) 00000-0000')
    $('#CEP').mask('00000-000');
    $('#CPF').mask('000.000.000-00'), {reverse: true};
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                minlength:"15",
                required: true
            },
            email: {
                required: true
            },
            CPF: {
                minlength:"14",
                required: true
            },
            estado: {
                required: true
            },
            cidade: {
                required: true
            },
            CEP: {
                minlength:"9",
                required: true
            },
            rua: {
                required: true
            },
            numero: {
                required: true
            },
            bairro: {
                required: true
            },
        },   
        messages: {
            nome:'Nome inválido',
            telefone:'Telefone inválido',
            email: 'E-mail inválido',
            CPF: 'CPF inválido',
            estado: 'Estado inválido',
            cidade: 'Cidade inválido',
            CEP: 'CEP inválido',
            rua: 'Rua inválido',
            numero: 'Número inválido',
            bairro: 'Bairro inválido',
        },

        submitHandler: function(form, e){
            e.preventDefault();
            let novocadastro = " ";
            novocadastro = `
                <div id="pessoas">
                    <div class="info-principal">
                        <ul>
                            <li id="nome">${$("#nome-completo").val()}</li>
                            <li>Telefone: ${$("#telefone").val()}</li>
                            <li>E-mai:${$("#e-mail").val()}</li>
                            <li>CPF: ${$("#cpf").val()}</li>
                            <li>Estado: ${$("#estado").val()}</li>
                            <li>Cidade: ${$("#cidade").val()}</li>                            
                            <li>CEP: ${$("#CEP").val()}</li>
                            <li>Rua:${$("#rua").val()}</li>
                            <li>Número: ${$("#numero").val()}</li>
                            <li>Bairro: ${$("#bairro").val()}</li>
                        </ul>
                        <div class="menu-pessoa">
                            <img src="./6073874.png">
                        </div>
                    </div>
                </div>
            `;
            $(".cadastros").append(novocadastro);
            form.reset();
        }
    })
})
