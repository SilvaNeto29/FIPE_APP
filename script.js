function getMarcas(tipoVeiculo){

  $.ajax({
    url: "https://parallelum.com.br/fipe/api/v1/" + tipoVeiculo + "/marcas",
    method: "GET",
    success: function(response) {
        
      let select = document.querySelector('#marca');
      let options = response;

      for(var i = 0; i < options.length; i++) {
          var opt = options[i];
          var el = document.createElement("option");
          el.textContent = opt.nome;
          el.value = opt.codigo;
          select.appendChild(el);
      }

    },
    error: function(error) {
            console.log(error);
    }
    });
}

function getModelos(tipoVeiculo, codMarca) {

    $.ajax({
      url: "https://parallelum.com.br/fipe/api/v1/" + tipoVeiculo + "/marcas/" + codMarca + "/modelos",
      method: "GET",
      success: function(response) {
          
        let select = document.querySelector('#modelo');
        let options = response.modelos;

        for(var i = 0; i < options.length; i++) {
            var opt = options[i];
            var el = document.createElement("option");
            el.textContent = opt.nome;
            el.value = opt.codigo;
            select.appendChild(el);
        }

      },
      error: function(error) {
              console.log(error);
      }
    });
}

function getAnoVeiculo(tipoVeiculo, codMarca, modelo) {

    $.ajax({
      url: "https://parallelum.com.br/fipe/api/v1/" + tipoVeiculo + "/marcas/" + codMarca + "/modelos/" + modelo + "/anos",
      method: "GET",
      success: function(response) {

        let select = document.querySelector('#fabricacao');
        let options = response;

        for(var i = 0; i < options.length; i++) {
            var opt = options[i];
            var el = document.createElement("option");
            el.textContent = opt.nome;
            el.value = opt.codigo;
            select.appendChild(el);
        }

      },
      error: function(error) {
              console.log(error);
      }
    });
}

function getValorVeiculo(tipoVeiculo, codMarca, modelo, codAno) {

    $.ajax({
      url: "https://parallelum.com.br/fipe/api/v1/" + tipoVeiculo + "/marcas/" + codMarca + "/modelos/" + modelo + "/anos/" + codAno,
      method: "GET",
      success: function(response) {

        Swal.fire({
          title: '<strong>Informações:</strong>',
          html:
          "<tr><td><span>Tipo Veículo:</span>  " + response.TipoVeiculo + "</td></tr><br>" +
          "<tr><td><span>Tipo Valor:</span>  " + response.Valor + "</td></tr><br>" +
          "<tr><td><span>Tipo Marca:</span>  " + response.Marca + "</td></tr><br>" +
          "<tr><td><span>Tipo Modelo:</span>  " + response.Modelo + "</td></tr><br>" +
          "<tr><td><span>Tipo AnoModelo:</span>  " + response.AnoModelo + "</td></tr><br>" +
          "<tr><td><span>Tipo Combustivel:</span>  " + response.Combustivel + "</td></tr><br>" +
          "<tr><td><span>Tipo CodigoFipe:</span>  " + response.CodigoFipe + "</td></tr><br>" +
          "<tr><td><span>Tipo MesReferencia:</span>  " + response.MesReferencia + "</td></tr><br>" +
          "<tr><td><span>Tipo SiglaCombustivel:</span>  " + response.SiglaCombustivel + "</td></tr><br>",
          focusConfirm: false,
          confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Fazer outra consulta!',
      }).then((result) => {
        limpaOption();
      })
    }
  })
}

function limpaOption(flag = false) {

  if(!flag){
    let tipo = document.getElementById("tipo");  
    let marca = document.getElementById("marca");
    let modelo = document.getElementById("modelo");
    let fabricacao = document.getElementById("fabricacao");

        marca.innerHTML = "";
        modelo.innerHTML = "";
        fabricacao.innerHTML = "";

        let el = document.createElement("option");
        el.textContent = 'Marca';
        el.value = 0;
        marca.appendChild(el);

        let elModelo = document.createElement("option");
        elModelo.textContent = 'Modelo';
        elModelo.value = 0;
        modelo.appendChild(elModelo);

        let elFabricacao = document.createElement("option");
        elFabricacao.textContent = 'Ano de Fabricação';
        elFabricacao.value = 0;
        fabricacao.appendChild(elFabricacao);

        tipo.selectedIndex = 0;
  } else {

    let marca = document.getElementById("marca");
    let modelo = document.getElementById("modelo");
    let fabricacao = document.getElementById("fabricacao");

        marca.innerHTML = "";
        modelo.innerHTML = "";
        fabricacao.innerHTML = "";

        let el = document.createElement("option");
        el.textContent = 'Marca';
        el.value = 0;
        marca.appendChild(el);

        let elModelo = document.createElement("option");
        elModelo.textContent = 'Modelo';
        elModelo.value = 0;
        modelo.appendChild(elModelo);

        let elFabricacao = document.createElement("option");
        elFabricacao.textContent = 'Ano de Fabricação';
        elFabricacao.value = 0;
        fabricacao.appendChild(elFabricacao);
  }     
}