const menu = document.getElementById("menu")
const nav = document.querySelector("nav")
const burger = document.getElementById("burger")
const mark = document.getElementById("mark")
const rmvblSection = document.getElementById("removable-section")
const interval = document.getElementById("interval")
const main = document.getElementById("main")
const page = document.getElementById("page")
const headerMobilec = document.getElementById("mobile-Open-Header")
const list = document.querySelectorAll(".line")
const links = document.querySelectorAll('#menu a')
const Logo = document.querySelectorAll('.logo')
function openHeader() {
    nav.style.display = 'block'
    burger.style.display = 'none'
    mark.style.display = 'block'
    page.style.display = 'none'
    main.style.display = 'none'
    headerMobilec.style.display = 'block'
}
function closeHeader() {
    nav.style.display = 'none'
    burger.style.display = 'block'
    mark.style.display = 'none'
    page.style.display = 'block'
    main.style.display = 'block'
    headerMobilec.style.display = 'none'

}
const words = ["product analytics", "customer data", "sales performance"];
let currentWordIndex = 0;
interval.innerHTML = words[0]
setInterval(function () {
    interval.style.opacity = '1'
    interval.style.fontSize = '1em'
    interval.innerHTML = words[currentWordIndex]

    currentWordIndex = (currentWordIndex + 1) % words.length;

    setTimeout(function () {
        interval.style.opacity = '0'
        interval.style.fontSize = '.5em'
        interval.clear();
    }, 1300);
}, 2300);


// // Genişlik değerini güncelleyen fonksiyon
// function updateWidth() {
//     var width = window.innerWidth;
//     console.log("Pencere Genişliği:", width);
//     // Burada yapmak istediğiniz herhangi bir işlemi gerçekleştirebilirsiniz
// }

// // Pencere boyutu değiştiğinde updateWidth fonksiyonunu çağıran olay dinleyici
// window.addEventListener('resize', updateWidth);

// // Sayfa yüklendiğinde genişlik değerini almak için bir kere çağırabilirsiniz
// updateWidth();

const img1Scroll = document.getElementById("second-img-first")
const img2Scroll = document.getElementById("second-img")
const img3Scroll = document.getElementById("second-img-third")
const img4Scroll = document.getElementById("second-img-four")

//  console.log(window.innerWidth);
//  window.addEventListener('scroll',function(){
//        if (window.innerWidth > 1024) {
//         if(window.scrollY > 1000){
//             img1Scroll.style.transform = 'translateY(30px)'
//             img2Scroll.style.transform = 'translateY(-30px)'    

//         }
//         if(window.scrollY < 1400){
//             img1Scroll.style.transform = 'translateY(-30px)'
//             img2Scroll.style.transform = 'translateY(30px)'
//         }
//         if(window.scrollY > 1600){
//             img3Scroll.style.transform = 'translateY(30px)'
//             img4Scroll.style.transform = 'translateY(-30px)'

//         }
//         if(window.scrollY > 1900){
//             img3Scroll.style.transform = 'translateY(-30px)'
//             img4Scroll.style.transform = 'translateY(30px)'

//         }
//        }else{
//         img1Scroll.style.transform = 'translateY(0)'
//         img2Scroll.style.transform = 'translateY(0)'    
//         img3Scroll.style.transform = 'translateY(0)'
//         img4Scroll.style.transform = 'translateY(0)'
//        }

//     })


window.addEventListener("scroll", function () {
    if (window.innerWidth >= 1024) {
            let top = window.scrollY;
            let offset = img1Scroll.offsetTop;
            let height = img1Scroll.offsetHeight;
            let x = 0;
            if (top >= (offset + height) / 2) {
                x = (offset + height - top) / 17;
                img1Scroll.style.transform = `translateY(${x}px)`;
                img2Scroll.style.transform = `translateY(${-x}px)`;
                img3Scroll.style.transform = `translateY(${x}px)`;
                img4Scroll.style.transform = `translateY(${-x}px)`;
            }
        } else {
            // Reset translateY property for imgScroll elements
            img1Scroll.style.transform = `translateY(0px)`;
            img2Scroll.style.transform = `translateY(0px)`;
            img3Scroll.style.transform = `translateY(0px)`;
            img4Scroll.style.transform = `translateY(0px)`;
        }
    });

const header = document.querySelector("header")
const aColor1 = document.querySelector("#menu-a1")
const aColor2 = document.querySelector("#menu-a2")
const aColor3 = document.querySelector("#menu-a3")
const aColor4 = document.querySelector("#menu-a4")
const bars = document.querySelector("#bars")
const logo = document.getElementById("img-logo")
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        header.style.background = '#fff'
        header.style.borderBottom = '2px solid  #F5F5FF'
        bars.style.color = 'black'
        for (let i = 0; i < links.length; i++) links[i].style.color = '#000'
        for (let i = 0; i < list.length; i++) list[i].style.background = '#7646D7'
        Logo[0].classList.add('none')
        Logo[1].classList.remove('none')

    } else {
        bars.style.color = '#fff'
        header.style.background = 'transparent'
        header.style.borderBottom = 'none'
        for (let i = 0; i < links.length; i++) links[i].style.color = 'white'
        for (let i = 0; i < list.length; i++) list[i].style.background = '#fff'
        Logo[0].classList.remove('none')
        Logo[1].classList.add('none')
    }

})


const circle = document.getElementById("circle")
const anually = document.getElementById("anually")
const month = document.getElementById("month")
const firstSubMoney = document.getElementById("firstSubMoney")
const secondSubMoney = document.getElementById("secondSubMoney")
const thirdSubMoney = document.getElementById("thirdSubMoney")
const firstSubTime = document.getElementById("firstSubTime")
const secondSubTime = document.getElementById("secondSubTime")
const thirdSubTime = document.getElementById("thirdSubTime")
function Manual(){
    circle.classList.toggle('left')
    anually.classList.toggle('col')
    month.classList.toggle('col')
    if(circle.classList.contains('left')){
        firstSubMoney.innerHTML = '9'
        secondSubMoney.innerHTML = '9'
        thirdSubMoney.innerHTML = '9'
        firstSubTime.innerHTML =  '/ year'
        secondSubTime.innerHTML = '/ year'
        thirdSubTime.innerHTML = '/ year'
        
    }else{
        firstSubMoney.innerHTML = ''
        secondSubMoney.innerHTML = ''
        thirdSubMoney.innerHTML = ''
        firstSubTime.innerHTML = '/ month'
        secondSubTime.innerHTML = '/ month'
        thirdSubTime.innerHTML = '/ month'
}
}
const footer = document.querySelector('footer')
window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if(window.scrollY >= 6250){
        footer.style.zIndex = '1'
    }else{
        footer.style.zIndex = '-1'
    }
})