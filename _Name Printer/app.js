const input = document.querySelector('#name_input')
const print_btn = document.querySelector('#print_btn')
const my_name_btn = document.querySelector('#my_name_btn')
const ebModal = document.getElementById('mySizeChartModal');
const ebSpan = document.getElementsByClassName("ebcf_close")[0]
const modal_text = document.querySelector('#modal-text')

console.log(input)
input.addEventListener('keyup', (e)=> {
    if (e.keyCode === 13 && e.target.value) {
        console.log(e.target.value)
        ebModal.style.display = "block"
        modal_text.innerText = `HI! "${e.target.value.toUpperCase()}"`
        e.target.value=""
    }
})

print_btn.addEventListener ('click', (e)=> {
    if(input.value){
        console.log(input.value)
        ebModal.style.display = "block"
        modal_text.innerText = `HI! "${input.value.toUpperCase()}"`
        input.value=""
    }
})

my_name_btn.addEventListener('click', ()=>{
    console.log("Isaac Raphael")
        ebModal.style.display = "block"
        modal_text.innerText = `HI! I'M ISAAC RAPHAEL`
        input.value=""
})


ebSpan.addEventListener('click', ()=>{
    ebModal.style.display = "none"
})