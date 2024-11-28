//funcionalidades dos botões de scroll do menu
const bttServices = document.querySelector("#bttServices")
const servicesSection = document.querySelector(".servicesSection")

function ScrollServices(){
    let elementoRect1 = servicesSection.getBoundingClientRect()
    let centerY = elementoRect1.top
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
}
bttServices.addEventListener("click", ScrollServices)


const buttonFAQ = document.querySelector("#buttonFAQ")
const sectionFAQ = document.querySelector(".sectionFAQ")

function ScrollFAQ(){
    let elementoRect2 = sectionFAQ.getBoundingClientRect()
    let centerY = elementoRect2.top
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
}
buttonFAQ.addEventListener("click", ScrollFAQ)


const buttonScrollDown = document.querySelector(".buttonScrollDown")
const SegundaDobra = document.querySelector(".SegundaDobra")

function ScrollDown(){
    let elementoRect2 = SegundaDobra.getBoundingClientRect()
    let centerY = elementoRect2.top
    window.scrollTo({
        top: centerY + window.scrollY,
        behavior: 'smooth'
    })
}
buttonScrollDown.addEventListener("click", ScrollDown)


//funções para animção dos botões do menu
const buttons = document.querySelectorAll(".buttonNAV");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove a classe 'expanded' de todos os spans
        buttons.forEach(btn => btn.querySelector("span").classList.remove("expandedSPAN"));

        // Adiciona a classe 'expanded' ao span correspondente ao botão clicado
        const span = button.querySelector("span");
        span.classList.add("expandedSPAN");
    });
});



//abas do FAQ
const boxFAQ = document.querySelectorAll(".boxFAQ")

boxFAQ.forEach(button=>{
    button.addEventListener("click", ()=>{
        boxFAQ.forEach(btn => btn.querySelector('p').classList.remove("expandedDesc"));

        const p = button.querySelector("p");
        p.classList.add("expandedDesc")
    })
})