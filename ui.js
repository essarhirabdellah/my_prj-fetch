


export  function printingelmnents(mydata) {
    //git my html elment todo crads part
    const mytodocardslist = document.querySelector('[todo]')
    const myongoingcardslist = document.querySelector('[ongoing]')
    const mydonecardslist = document.querySelector('[done]')
    for(let taskobj of mydata){
       function tag_s() {
        let x = ``
        for (let tag of taskobj.tags) {
            x += `<span class="chip"># ${tag}</span>`
            
        }
        return x;
       }
       if (taskobj.status == "todo") {
        mytodocardslist.insertAdjacentHTML('beforeend',`
            <div class="card" style="max-width: 320px;">
  <div class="card-body">
    <h4 class="card-title">${taskobj.title}</h4>
    <p class="card-subtitle fg-3">by ${taskobj.assignee}</p>
    <p class="card-text"> ${taskobj.description}</p>
    ${tag_s()}
  </div>
</div>
            `)
       }
       else if (taskobj.status == 'in-progress') {
         myongoingcardslist.insertAdjacentHTML('beforeend',`
            <div class="card" style="max-width: 320px;">
  <div class="card-body">
    <h4 class="card-title">${taskobj.title}</h4>
    <p class="card-subtitle fg-3">by ${taskobj.assignee}</p>
    <p class="card-text"> ${taskobj.description}</p>
    ${tag_s()}
  </div>
</div>
            `)
       }
       else{
         mydonecardslist.insertAdjacentHTML('beforeend',`
            <div class="card" style="max-width: 320px;">
  <div class="card-body">
    <h4 class="card-title">${taskobj.title}</h4>
    <p class="card-subtitle fg-3">by ${taskobj.assignee}</p>
    <p class="card-text"> ${taskobj.description}</p>
    ${tag_s()}
  </div>
</div>
            `)
       }
    }
}
function navbarstyling() {
    let mysection = document.querySelector('[mainsection]')
    let addform = document.querySelector('[myformadd]')
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
navbarstyling()


function formvefiction() {
    //ALL MY FROM INPUT
    let mynameInput = document.querySelector('[name-user]')
    let mytitleInput = document.querySelector('[title-user]')
    let mydisInput = document.querySelector('[discrption]')
    let mystatusInput = document.querySelector('[statusoption]')

    //FUNCTION FOR VECTION AND STYLE WITH RETRUN

}