const http = require("http");

("use strict");

var leds = {
  azul: {
    ligado: false
  },
  vermelho: {
    ligado: false
  }
};

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  switch (req.url) {
    case "/acender/vermelho":
      leds.vermelho.ligado = true;
      console.log("LED VERMELHO ACESO !");
      break;
    case "/acender/azul":
      leds.azul.ligado = true;
      console.log("LED AZUL ACESO!");
      break;
    case "/apagar/vermelho":
      leds.vermelho.ligado = false;
      console.log("LED VERMELHO APAGO !");
      break;
    case "/apagar/azul":
      leds.azul.ligado = false;
      console.log("LED AZUL APAGADO!");
      break;
  }
  res.end(JSON.stringify(leds));
});

server.listen(3000, "127.0.0.1");
console.log("Servidor na escuta!");
