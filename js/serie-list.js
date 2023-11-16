
let serieList = [
  {
    username: "orihuela03",
    email: "o03@gmail.com",
    serieName: "Goblin Slayer",
    category: "Seinen"
  },
  {
    username: "JP",
    email: "jp@gmail.com",
    serieName: "jujutsu kaisen",
    category: "Shounen"
  },
];

function initialize() {
  const SERIES_FORM = document.getElementById("series-form");
  SERIES_FORM.addEventListener("submit", addSerie);
  showSeries();
}

function addSerie(event) {
  event.preventDefault(); 

  const username = event.target.username.value;
  const email = event.target.email.value;
  const serieName = event.target.serieName.value;
  const category = event.target.serieName.value;


  serieList.push({
      username: username,
      email: email,
      serieName: serieName,
      category: category
  })

  showSeries();
}

function showSeries(){
  const SERIE_LIST = document.getElementById("s-list");

  let allseries = "";

  for (let t=0;t<serieList.length;t++){
    allseries = allseries+`<li>Nombre de Usuario: ${serieList[t].username} || Email: ${serieList[t].email} || Serie: ${serieList[t].serieName}</li>`;
  }

  SERIE_LIST.innerHTML = allseries;
}

initialize();