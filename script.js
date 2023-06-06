function validarCNPJ() {
    let cnpj = document.getElementById("cnpjInput").value;
  
    if (validaCNPJ(cnpj)) {
      alert("O CNPJ " + cnpj + " é válido!");
    } else {
      alert("O CNPJ " + cnpj + " é inválido!");
    }
  }
  
function validaCNPJ(cnpj) {
    // Remove todos os caracteres não numéricos do CNPJ
    cnpj = cnpj.replace(/[^\d]+/g,'');
  
    // Verifica se o CNPJ tem 14 dígitos
    if (cnpj.length !== 14) return false;
  
    // Calcula os dois dígitos verificadores do CNPJ
    let numeros = cnpj.substring(0, 12);
    let digitos = cnpj.substring(12);
    let soma = 0;
    let pos = 5;
  
    for (let i = 0; i < 12; i++) {
      soma += numeros.charAt(i) * pos;
      pos--;
      if (pos < 2) pos = 9;
    }
  
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  
    if (resultado !== parseInt(digitos.charAt(0))) return false;
  
    numeros = cnpj.substring(0, 13);
    digitos = cnpj.substring(13);
    soma = 0;
    pos = 6;
  
    for (let i = 0; i < 13; i++) {
      soma += numeros.charAt(i) * pos;
      pos--;
      if (pos < 2) pos = 9;
    }
  
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  
    if (resultado !== parseInt(digitos.charAt(0))) return false;
  
    // Se chegou aqui, o CNPJ é válido
    return true;
  }
  