const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const final = document.querySelector(".final");
const replay = document.getElementById("replay");

runAnimation();

function runAnimation() {

    nums.forEach((num, idx) => {
      const lastElement = nums.length - 1;
    num.addEventListener('animationend', (e) => {
      if (e.animationName == "goIn" && idx !== lastElement) {
        num.classList.remove("in");
        num.classList.add("out");
      }
      else if (e.animationName == "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      }else{
        counter.classList.add('hide')
        final.classList.add('show')
    }
});
});
}

replay.addEventListener('click', ()=>{
    location.reload()
    // resetDOM()
    runAnimation()
})
