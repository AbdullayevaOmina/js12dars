function aniqlash(tezlik) {
  let masofa = prompt(
    "Bormoqchi bo'lgan manzilingizgacha bo'lgan masofani kilometrda kititing:"
  );
  let soat = Math.floor(masofa / tezlik);
  let daqiqa = Number(String(masofa % tezlik).slice(0, 2));
  if (daqiqa >= 60) {
    soat++;
    alert("Manzilingizgacha " + soat + " soatda yetib borasiz");
  } else if (daqiqa == 0) {
    alert("Manzilingizgacha " + soat + " soatda yetib borasiz");
  } else {
    alert(
      "Manzilingizgacha " +
        soat +
        " soatu " +
        daqiqa +
        " daqiqada yetib borasiz"
    );
  }
}

document.querySelector("#airplane").addEventListener("click", () => {
  aniqlash(880);
});

document.querySelector("#car").addEventListener("click", () => {
  aniqlash(60);
});

document.querySelector("#onFoot").addEventListener("click", () => {
  aniqlash(2);
});

document.querySelector("#train").addEventListener("click", () => {
  aniqlash(150);
});

document.querySelector("#bicycle").addEventListener("click", () => {
  aniqlash(20);
});

document.querySelector("#bus").addEventListener("click", () => {
  aniqlash(50);
});
