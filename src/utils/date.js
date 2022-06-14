import nublado from "../components/icons/nublado.png";
import dom from "../components/icons/dom.png";
import nube from "../components/icons/nube.png";
import nubes from "../components/icons/nubes.png";
import lluvia from "../components/icons/lluvia.png";
import lluvioso from "../components/icons/lluvioso.png";
import encendiendo from "../components/icons/encendiendo.png";

export function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export function capitalizarFecha(str) {
  const date = str.split(" ");

  return `${capitalizarPrimeraLetra(date[0])} ${
    date[1]
  } de ${capitalizarPrimeraLetra(date[2])}`;
}

export const conversor = (img) => {
  let res = "";
  if (img === "01d") {
    res = dom;
  } else if (img === "02d") {
    res = nublado;
  } else if (img === "03d") {
    res = nube;
  } else if (img === "04d") {
    res = nubes;
  } else if (img === "09d") {
    res = lluvia;
  } else if (img === "10d") {
    res = lluvioso;
  } else if (img === "11d") {
    res = encendiendo;
  }
  if (img === "01n") {
    res = dom;
  } else if (img === "02n") {
    res = nublado;
  } else if (img === "03n") {
    res = nube;
  } else if (img === "04n") {
    res = nubes;
  } else if (img === "09n") {
    res = lluvia;
  } else if (img === "10n") {
    res = lluvioso;
  } else if (img === "11n") {
    res = encendiendo;
  }
  return res;
};
