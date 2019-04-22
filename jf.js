var five = require("johnny-five"),
  board = new five.Board();
const axios = require("axios");

let leds = {};

board.on("ready", function() {
  var led_azul = new five.Led(7);
  var led_vermelho = new five.Led(8);

  setInterval(_ => {
    axios.get("http://127.0.0.1:3000/").then(res => {
      leds = res.data;
      if (leds.azul.ligado) led_azul.on();
      else led_azul.off();
      if (leds.vermelho.ligado) led_vermelho.on();
      else led_vermelho.off();
    });
  }, 2000);
});
