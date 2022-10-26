<?php

    $url = "http://veiculos.fipe.org.br/api/veiculos/ConsultarMarcas";

    $curl = curl_init($url);

    curl_setopt_array($curl, array(
      CURLOPT_URL => 'http://veiculos.fipe.org.br/api/veiculos/ConsultarTabelaDeReferencia',
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => '',
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 0,
      CURLOPT_FOLLOWLOCATION => true,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => 'POST',
      CURLOPT_HTTPHEADER => array(
        'Host: veiculos.fipe.org.br',
        'Referer: http://veiculos.fipe.org.br',
        'Content-Type: application/json',
        'Cookie: ROUTEID=.5',
        'Content-Length: 0'
      ),
    ));
    
    $response = curl_exec($curl);
    
    curl_close($curl);
    print_r(json_decode($response));

?>