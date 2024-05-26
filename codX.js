let menu = document.querySelector("#menu");
let navMenu = [...document.getElementsByClassName("nav-menu")];
menu.addEventListener("click", () => {
  navMenu.forEach((a) => {
    a.classList.toggle("show-menu");
  });
});

// -----------------          FQA         ----------------------------

function showMorw(eve) {
  let getParent = eve.parentNode.parentNode.querySelector(".fqa-ans");
  getParent.classList.toggle("show-fqa");
}

// -----------------------Show Emp Details--------------------------

function showDetails(ele) {
  const sumi_detail = document.querySelector(".sumi-detail");
  const jack_detail = document.querySelector(".jack-detail");
  const colin_detail = document.querySelector(".colin-detail");
  document.querySelectorAll('.buttons').forEach(btn=>{
    btn.classList.remove('btn-clicked')
  })
sumi_detail.classList.remove("show-detail")
  if (ele.className == "buttons sumi") {
    sumi_detail.classList.add("show-detail");
    ele.classList.add('btn-clicked')
    displayBlock(jack_detail, colin_detail);
  }
  if (ele.className == "buttons jack") {
    jack_detail.classList.add("show-detail");
    ele.classList.add('btn-clicked')
    displayBlock(sumi_detail, colin_detail);
  }
  if (ele.className == "buttons colin") {
    colin_detail.classList.add("show-detail");
    ele.classList.add('btn-clicked')
    displayBlock(jack_detail, sumi_detail);
  }
}

function displayBlock(ele1,ele2){
  ele1.classList.remove('show-detail')
  ele2.classList.remove('show-detail')
}