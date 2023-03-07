function getMarcas(tipoVeiculo = 'carros'){

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    
    let url = "https://parallelum.com.br/fipe/api/v1/" + tipoVeiculo + "/marcas"
      
    return  fetch(url, requestOptions)
        .then(response => {
            return response.json();
        })
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function getModelos(tipoVeiculo = "carros", codMarca = "59") {
    
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    
    let url = "https://parallelum.com.br/fipe/api/v1/" + tipoVeiculo + "/marca/" + codMarca + "/modelos";  

      fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function getAnoVeiculo(modelo = "5940",tipoVeiculo = "carros", codMarca = "59") {

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    let url = "https://parallelum.com.br/fipe/api/v1/" + tipoVeiculo + "/marcas/" + codMarca + "/modelos/" + modelo + "/anos";

      fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

function getValorVeiculo(modelo = "5940",tipoVeiculo = "carros", codMarca = "59",codAno="2022-3" ) {

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

    let url = "https://parallelum.com.br/fipe/api/v1/" + tipoVeiculo + "/marcas/" + codMarca + "/modelos/" + modelo + "/anos/" + codAno;  
      
      fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

   
}