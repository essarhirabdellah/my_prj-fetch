import data from './api.js'
let mydata  = await data
console.log(mydata)
function printingelmnents() {
    //git my html elment todo crads part
    const mytodocardslist = document.querySelector('[todo]')
    const myongoingcardslist = document.querySelector('[ongoing]')
    const mydonecardslist = document.querySelector('[done]')
    for(let taskobj of mydata){
       if (taskobj.status == "todo") {
        mytodocardslist.insertAdjacentHTML('beforeend',`
            <div class="card" style="max-width: 320px;">
  <div class="card-body">
    <h4 class="card-title">${taskobj.title}</h4>
    <p class="card-subtitle fg-3">by ${taskobj.assignee}</p>
    <p class="card-text"> ${taskobj.description}</p>
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
  </div>
</div>
            `)
       }
    }
}
printingelmnents()