// Boundary Buttons
function transformBtn() {
  document.querySelector("#boundaryBG div:nth-child(1)").style.transform = "translate(15vw, -30vh)";
  document.querySelector("#boundaryBG div:nth-child(2)").style.transform = "translate(-15vw, -20vh)";
  checkBtn();
}

function convergeBtn() {
  document.querySelector("#boundaryBG div:nth-child(4)").style.transform = "translate(-18vw, 0vh)";
  document.querySelector("#boundaryBG div:nth-child(3)").style.opacity = 0.75;
  document.querySelector("#boundaryBG div:nth-child(4)").style.opacity = 0.25;
  document.querySelector("#boundaryBG div:nth-child(4)").innerHTML = ""; 
  checkBtn();
}

function divergeBtn() {
  document.querySelector("#boundaryBG div:nth-child(5)").style.transform = "translate(-18vw, 25vh)"; 
  document.querySelector("#boundaryBG div:nth-child(6)").style.transform = "translate(15vw, 25vh)"; 
  checkBtn();
}

// Page Transition
function checkBtn() {
  let line = document.querySelector("#boundaryLine");
  if (document.querySelector("#boundaryBG div:nth-child(2)").style.transform == "translate(-15vw, -20vh)" && 
  document.querySelector("#boundaryBG div:nth-child(4)").style.transform == "translate(-18vw, 0vh)" &&
  document.querySelector("#boundaryBG div:nth-child(5)").style.transform == "translate(-18vw, 25vh)") {
    setTimeout(() => {
      line.style.height = "100vh";
      document.querySelector("#boundaryBG").style.transform = "translate(-10vw, -100vh)";
      document.querySelectorAll(".boundaryBtn").forEach(b => b.style.transform = "translate(20vw, -100vh)")
      document.querySelectorAll(".boundaryTXT").forEach(b => b.style.transform = "translate(35vw, -100vh)")
      setTimeout (() => {
        document.querySelector("#mainBG").style.transform = "translate(0vw, 50vh)";
        setTimeout(() => {
          line.style.transition = "1500ms";
          line.style.height = "0vh";
        }, 500)
      }, 5500)
    }, 1800)
  } 
}


// OBSERVERS & TYPEWRITERS
// observeStart();
// function observeStart() {
//   const mainTXTs = ["- PART ONE - Initiation", "- PART TWO - Integration", "- PART THREE - Implementation"];
  
//   const observer3 = new IntersectionObserver(entry => {
//     console.log(entry[0])
//     if (entry[0].isIntersecting) {observer3.unobserve(entry[0].target)}
//     setTimeout(() => {
//       for (let m = 0; m < mainTXTs[2].length; m++) {
//         setTimeout(() => {entry[0].target.innerText += mainTXTs[2][m];}, m * 100); 
//       }
//     }, 1000);
//   }, {threshold: 1})
//   observer3.observe(document.querySelector("#pt3"))

// }

// Dialogue Transitions
// const observer = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 		entry.target.classList.toggle("show", entry.isIntersecting);
// 	})
// }, {threshold: 1})

// const lines = document.querySelectorAll(".line")
// lines.forEach(line => {observer.observe(line);})

// // Typewriter
// for (let m = 0; m < singularityTXT.length; m++) {
// 	setTimeout(() => {
// 		document.querySelector("#singularityTXT").innerHTML +=
// 			singularityTXT[m];
// 	}, m * 60); 
// }