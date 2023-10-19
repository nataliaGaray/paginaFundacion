document.getElementById('traducirTextoButton').addEventListener('click', async () => {
  const textoParaTraducir = document.getElementById('textoParaTraducir').value;
  const idiomaDestino = document.getElementById('idiomaDestino').value;

  const url = `https://nlp-translation.p.rapidapi.com/v1/translate?text=${encodeURIComponent(textoParaTraducir)}&to=${idiomaDestino}&from=en`;
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '66c9d13d3emsh23a588b745a1b1dp14db59jsne011d01182de',
          'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
      }
  };

  try {
      const response = await fetch(url, options);
      const result = await response.text();
      document.getElementById('resultado').innerText = result;
  } catch (error) {
      console.error(error);
  }
});

     
  

  