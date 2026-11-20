import { myArraybln } from './main.js'

export let globalid = 0
export function printingelmnents(mydata) {
    let mynameopionlist = []
    const main = document.querySelector('.maymain')
    main.style.display = "block"
    const eron = document.querySelector('.error')
    eron.style.display = "none"
    const mytodocardslist = document.querySelector('[todo]')
    const myongoingcardslist = document.querySelector('[ongoing]')
    const mydonecardslist = document.querySelector('[done]')
    mytodocardslist.innerHTML = ""
    myongoingcardslist.innerHTML = ""
    mydonecardslist.innerHTML = ""
    let all_chibs = document.querySelectorAll('.count')
    let optionlist = document.querySelector('[namefilter]')
    let a = 0
    let b = 0
    let c = 0
    all_chibs[0].textContent = a
    all_chibs[1].textContent = b
    all_chibs[2].textContent = c
    for (let taskobj of mydata) {
      
        if (!mynameopionlist.includes(taskobj.assignee)) {
            mynameopionlist.push(taskobj.assignee)
            optionlist.insertAdjacentHTML('beforeend', `<option>${taskobj.assignee}</option>`)

        }
        function tag_s() {
            let x = ``
            for (let tag of taskobj.tags) {
                x += `<span class="chip"># ${tag}</span>`

            }
            return x;
        }
         let card =  `
            <div class="card" style="max-width: 320px;cursor: grab;" data-id=${taskobj.id} draggable="true">
  <div class="card-body">
    <h4 class="card-title">${taskobj.title}</h4>
    <p class="card-subtitle fg-3">by ${taskobj.assignee}</p>
    <p class="card-text"> ${taskobj.description}</p>
    <button type="button" class="btn-solid theme-primary" data-bs-toggle="dialog" data-bs-target="#scrollableBodyDialog" data-id=${taskobj.id}>
  edit
</button>
<button type="button" class="btn-subtle theme-danger" data-id=${taskobj.id} delet-methode>Delete</button>
    ${tag_s()}
  </div>
</div>
            `
        if (taskobj.status == "todo") {
            all_chibs[0].textContent = ++a
            mytodocardslist.insertAdjacentHTML('beforeend',card)
        }
        else if (taskobj.status == 'in-progress') {
            all_chibs[1].textContent = ++b
            myongoingcardslist.insertAdjacentHTML('beforeend',card)
        }
        else {
            all_chibs[2].textContent = ++c
            mydonecardslist.insertAdjacentHTML('beforeend',card)
        }
    }
}
export function navbarstyling() {
    let mysection = document.querySelector('[mainsection]')
    var addform = document.querySelector('[myformadd]')
    let navbarelement = document.querySelector('[navbar]')
    let linkelement = document.querySelectorAll('li>a')
    let my_ai_creation_form = document.querySelector('[aiformcreat]')
    function newnavstyle(event) {
        // linkelement.forEach(myelm => console.log(myelm))
        linkelement.forEach(link => link.classList.remove('active'))
        event.target.classList.add('active')
        if (event.target.hasAttribute('add')) {
            mysection.classList.add('d-none')
            addform.classList.remove('d-none')
            my_ai_creation_form.classList.add('d-none')
        }
        else if (event.target.hasAttribute('home')) {
            mysection.classList.remove('d-none')
            addform.classList.add('d-none')
            my_ai_creation_form.classList.add('d-none')
        }
        else if (event.target.hasAttribute('creatbyainav')) {
            mysection.classList.add('d-none')
            addform.classList.add('d-none')
            my_ai_creation_form.classList.remove('d-none')
        }
    
    }
    // navbarelemebt.childNodes.forEach
    navbarelement.addEventListener('click', (e) => { newnavstyle(e) })
}

//FUNCTION FOR VECTION AND STYLE WITH RETRUN
export function verfiction(regExp, input) {
    if (regExp.test(input.value.trim())) {
        input.style.outline = '3px solid green'
        myArraybln.push(true)
    }
    else {
        input.style.outline = '3px solid red'
        myArraybln.push(false)
    }
}
export function verfictionoptions(input) {
    if (input.value.trim() != 'Open this select menu') {
        input.style.outline = '3px solid green'
        myArraybln.push(true)
    }
    else {
        input.style.outline = '3px solid red'
        myArraybln.push(false)
    }
}

export function errorPage(error) {
    const main = document.querySelector('.maymain')
    main.style.display = "none"
    const eron = document.querySelector('.error')
    eron.style.display = "block"
    console.log(error)

}

