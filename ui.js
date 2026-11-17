import {myArraybln} from './main.js'

export let globalid = 0
export function printingelmnents(mydata) {
    let myklist=[]
    const main = document.querySelector('.maymain')
    main.style.display = "block"
    const eron = document.querySelector('.error')
    eron.style.display = "none"
    const mytodocardslist = document.querySelector('[todo]')
    const myongoingcardslist = document.querySelector('[ongoing]')
    const mydonecardslist = document.querySelector('[done]')
    mytodocardslist.innerHTML=""
    myongoingcardslist.innerHTML=""
    mydonecardslist.innerHTML = ""
    let all_chibs = document.querySelectorAll('.count')
    let optionlist = document.querySelector('[namefilter]')
    let a = 0
    let b = 0
    let c = 0
    all_chibs[0].textContent =  a
     all_chibs[1].textContent =  b
      all_chibs[2].textContent =  c
    for(let taskobj of mydata){
       if (!myklist.includes(taskobj.assignee)) {
          myklist.push(taskobj.assignee)
          optionlist.insertAdjacentHTML('beforeend',`<option>${taskobj.assignee}</option>`)
     
       }
         function tag_s() {
        let x = ``
        for (let tag of taskobj.tags) {
            x += `<span class="chip"># ${tag}</span>`
            
        }
        return x;
       }
       if (taskobj.status == "todo") {
        all_chibs[0].textContent =  ++a
        mytodocardslist.insertAdjacentHTML('beforeend',`
            <div class="card" style="max-width: 320px;">
  <div class="card-body">
    <h4 class="card-title">${taskobj.title}</h4>
    <p class="card-subtitle fg-3">by ${taskobj.assignee}</p>
    <p class="card-text"> ${taskobj.description}</p>
    <button type="button" class="btn-solid theme-primary" data-bs-toggle="dialog" data-bs-target="#scrollableBodyDialog" data-id=${taskobj.id}>
  edit
</button>
    ${tag_s()}
  </div>
</div>
            `)
       }
       else if (taskobj.status == 'in-progress') {
        all_chibs[1].textContent =  ++b
         myongoingcardslist.insertAdjacentHTML('beforeend',`
            <div class="card" style="max-width: 320px;">
  <div class="card-body">
    <h4 class="card-title">${taskobj.title}</h4>
    <p class="card-subtitle fg-3">by ${taskobj.assignee}</p>
    <p class="card-text"> ${taskobj.description}</p>
    <button type="button" class="btn-solid theme-primary" data-bs-toggle="dialog" data-bs-target="#scrollableBodyDialog" data-id=${taskobj.id}>
  edit
</button>
    ${tag_s()}
  </div>
</div>
            `)
       }
       else{
        all_chibs[2].textContent =  ++c
         mydonecardslist.insertAdjacentHTML('beforeend',`
            <div class="card" style="max-width: 320px;">
  <div class="card-body">
    <h4 class="card-title">${taskobj.title}</h4>
    <p class="card-subtitle fg-3">by ${taskobj.assignee}</p>
    <p class="card-text"> ${taskobj.description}</p>
    <button type="button" class="btn-solid theme-primary" data-bs-toggle="dialog" data-bs-target="#scrollableBodyDialog" data-id=${taskobj.id}>
  edit
</button>
    ${tag_s()}
  </div>
</div>
            `)
       }
    }
}
export function navbarstyling() {
    let mysection = document.querySelector('[mainsection]')
    var addform = document.querySelector('[myformadd]')
    // let addelment = document.querySelector('[add]')
    // let homeelment = document.querySelector('[home]')
    // let fealtringelment = document.querySelector('[fealtring]')
    let navbarelement = document.querySelector('[navbar]')
    let linkelement = document.querySelectorAll('li>a')
    function newnavstyle(event){
        // linkelement.forEach(myelm => console.log(myelm))
        linkelement.forEach(link =>link.classList.remove('active'))
        event.target.classList.add('active')
        if (event.target.hasAttribute('add')) {
           mysection.classList.add('d-none')
           addform.classList.remove('d-none')
        }
        else if(event.target.hasAttribute('home')) {
           mysection.classList.remove('d-none')
           addform.classList.add('d-none')
        }
    }
    // navbarelemebt.childNodes.forEach
    navbarelement.addEventListener('click',(e)=>{newnavstyle(e)})
}
// navbarstyling()

//SUBMIT BTN

// let mynamesubbtn = document.querySelector('[submit]')
// function formvefiction() {
//     //ALL MY FROM INPUT
    // let myform = document.querySelector('[myformadd]')
//     let mynameInput = document.querySelector('[name-user]')
//     let mytitleInput = document.querySelector('[title-user]')
//     let mydisInput = document.querySelector('[discrption]')
//     let mystatusInput = document.querySelector('[statusoption]')
//     let myspriorityoptionInput = document.querySelector('[priorityoption]')
//     let myAlltags = document.querySelector('[tags]')
//     //REGEXP FOR VEFICTION 
//     const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '\-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
//     const titleRegex = /^.{1,50}$/;
//     const allTagsRegex = /^#\w+(?:\s+#\w+)*$/;
//     //array of boolean 
// export let myArraybln = []
    //FUNCTION FOR VECTION AND STYLE WITH RETRUN
export   function verfiction(regExp,input) {
        if (regExp.test(input.value.trim())) {
            input.style.outline = '3px solid green'
            myArraybln.push(true)
        }
        else{
            input.style.outline = '3px solid red'
            myArraybln.push(false)
        }
    }
export  function verfictionoptions(input) {
        if (input.value.trim() != 'Open this select menu') {
            input.style.outline = '3px solid green'
            myArraybln.push(true)
        }
        else{
            input.style.outline = '3px solid red'
            myArraybln.push(false)
        }
    }
    // FUNCTION FOR CREAT ONJ OF USER FORPM
//  export  function creatrequst() {
//         let myobj = {}
//         myobj.assignee = mynameInput.value.trim()
//         myobj.title = mytitleInput.value.trim()
//         myobj.status = mystatusInput.value.trim()
//         myobj.priority = myspriorityoptionInput.value.trim()
//         myobj.description = mydisInput.value.trim()
//         myobj.tags = myAlltags.value.trim().split('#').slice(1,)
//         return myobj 
//     }
    // // UPDATE MY WHOLE LIST OF CARDS
    // export function mycreation(allbln){
    //        if(!allbln.includes(false) && allbln.length > 0){
    //         mydata.push(creatrequst())
    //         myform.reset()
    //         printingelmnents(mydata)
    //        }
    // }
    //ADD LISNER TO MY SUBMIT BUTTON
    // let mysubmitbutton = document.querySelector('[submit]')
    // mysubmitbutton.addEventListener('click', () => {
    //   verfiction(nameRegex,mynameInput)
    //   verfiction(titleRegex,mytitleInput)
    //   verfiction(allTagsRegex,myAlltags)
    //   verfictionoptions(mystatusInput)
    //   verfictionoptions(myspriorityoptionInput)
    //   mycreation(myArraybln)
    //   myArraybln = []
    // })
    
    

// }
// formvefiction()
//MY ERROR BAGE
export function errorPage(error) {
    const main = document.querySelector('.maymain')
    main.style.display = "none"
    const eron = document.querySelector('.error')
    eron.style.display = "block"
     console.log(error)
    
}
