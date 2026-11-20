import { printingelmnents, navbarstyling, verfiction, verfictionoptions, errorPage } from './ui.js'
import { fetching, myfilter, mysearch, adding, gitcarddata, editing, delet_card, update_stute_of_card,creat_by_ai} from './servescard.js'
navbarstyling()
fetching(printingelmnents, errorPage)
let agian = document.querySelector('[ag-ian]')
agian.addEventListener("click", () => {
    fetching()
}
)
let myform = document.querySelector('[myformadd]')
let mynameInput = document.querySelector('[name-user]')
let mytitleInput = document.querySelector('[title-user]')
let mydisInput = document.querySelector('[discrption]')
let mystatusInput = document.querySelector('[statusoption]')
let myspriorityoptionInput = document.querySelector('[priorityoption]')
let myAlltags = document.querySelector('[tags]')
//REGEXP FOR VEFICTION 
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '\-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
const titleRegex = /^.{1,50}$/;
const allTagsRegex = /^#\w+(?:\s+#\w+)*$/;
//array of boolean 
export let myArraybln = []
let mysubmitbutton = document.querySelector('[submit]')
function creatrequst(myobj) {

    myobj.assignee = mynameInput.value.trim()
    myobj.title = mytitleInput.value.trim()
    myobj.status = mystatusInput.value.trim()
    myobj.priority = myspriorityoptionInput.value.trim()
    myobj.description = mydisInput.value.trim()
    myobj.tags = myAlltags.value.trim().split('#').slice(1,)
    return myobj
}
function mycreation(allbln) {
    let myobj = {}
    if (!allbln.includes(false) && allbln.length > 0) {
        creatrequst(myobj)
        adding(myobj)
        myform.reset()
        fetching(printingelmnents, errorPage)
    }
}

mysubmitbutton.addEventListener('click', () => {
    verfiction(nameRegex, mynameInput)
    verfiction(titleRegex, mytitleInput)
    verfiction(allTagsRegex, myAlltags)
    verfictionoptions(mystatusInput)
    verfictionoptions(myspriorityoptionInput)
    mycreation(myArraybln)
    myArraybln = []
})

let myfltersection = document.querySelector('[flterhome]')
let mysearchform = document.querySelector('[mysaerch]')
myfltersection.addEventListener('click', () => {

    myfilter()
    fetching(printingelmnents, errorPage)
})
mysearchform.addEventListener('input', () => {

    mysearch()
    fetching(printingelmnents, errorPage)
})
// ==========================================================
// add lesner on all the input 
// let alleditbtn = document.querySelectorAll('[data-bs-target="#exampleDialogFullscreen"]')
document.addEventListener('click', async (ev) => {
    if (ev.target.hasAttribute('data-bs-target')) {
        console.log(ev.target.dataset.id)
        let myeditinfo
        await gitcarddata(ev.target.dataset.id).then(data => myeditinfo = data)
        //make a new form 
        console.log(myeditinfo)

        let mynewform = myform.cloneNode(true)

        mynewform.classList.remove('d-none')
        mynewform.classList.add('newformforupdate')
        // mynewform.style.overflowY = 'scroll'
        // mynewform.style.hight = '1000px'
        mynewform.querySelector('[submit]').classList.add('d-none')
        let newinname = mynewform.querySelector('[name-user]')
        newinname.value = myeditinfo.assignee
        let newintitle = mynewform.querySelector('[title-user]')
        newintitle.value = myeditinfo.title
        let newindiscrption = mynewform.querySelector('[discrption]')
        newindiscrption.value = myeditinfo.description
        let newinstatus = mynewform.querySelector('[statusoption]')
        newinstatus.value = myeditinfo.status
        let newpriority = mynewform.querySelector('[priorityoption]')
        newpriority.value = myeditinfo.priority
        let newintage = mynewform.querySelector('[tags]')
        newintage.value = myeditinfo.tags.join("#")
        mynewform.insertAdjacentHTML('beforeend', `
<input type="hidden" name="id" value=${myeditinfo.id}>
            `)
        let mypopupbage = document.querySelector('[body]')
        //    console.log(mypopupbage)
        mypopupbage.textContent = ''
        mypopupbage.prepend(mynewform)
        let save_changes = document.querySelector('[savechange]')
        save_changes.addEventListener('click', function () {

            verfiction(nameRegex, newinname)
            console.log(newinname)
            verfiction(titleRegex, newintitle)
            verfiction(allTagsRegex, newintage)
            verfictionoptions(newinstatus)
            verfictionoptions(newpriority)
            if (!myArraybln.includes(false) && myArraybln.length > 0) {
                
                let mynewupd = document.querySelector('.newformforupdate')
                let formdata = new FormData(mynewupd)
                let myupobj = Object.fromEntries(formdata);
                myupobj.tags = myupobj.tags.split('#').slice(1,)
                //console.log(myupobj)
                this.disabled = true;
                editing(myupobj)
                fetching(printingelmnents, errorPage)
                let close = document.querySelector(".btn_of_close")
                close.click()
                this.disabled = false;
            }
            myArraybln = []


        })
    }
})


// ========================================================================
document.addEventListener('click', async (ev) => {
    if (ev.target.hasAttribute('delet-methode')) {
        await delet_card(ev.target.dataset.id)
        fetching(printingelmnents, errorPage)
    }
})
// =========================================================================
const mytodocardslist = document.querySelector('[todo]')
const myongoingcardslist = document.querySelector('[ongoing]')
const mydonecardslist = document.querySelector('[done]')
// let all_chibs = document.querySelectorAll('.count')
new Sortable(mytodocardslist, {
    group: 'shared',
    animation: 150,
    onEnd: function (evt) {
        // console.log(evt.item.dataset.id)
        // console.log(evt.to.value)
        update_stute_of_card(evt.item.dataset.id, evt.to.dataset.status)
        let prvdiv = evt.from.previousElementSibling
        let countnow = prvdiv.querySelector('.count')
        let countnownum = Number(countnow.textContent)
        // console.log(countnownum)
        countnow.textContent = --countnownum
        let newdiv = evt.to.previousElementSibling
        let countftr = newdiv.querySelector('.count')
        let countftrnum = Number(countftr.textContent)
        // console.log(countftrnum)
        countftr.textContent = ++countftrnum

    }


});

new Sortable(myongoingcardslist, {
    group: 'shared',
    animation: 150,
    onEnd: function (evt) {
        // console.log(evt.item.dataset.id)
        // console.log(evt.to.dataset.status)
        update_stute_of_card(evt.item.dataset.id, evt.to.dataset.status)
        let prvdiv = evt.from.previousElementSibling
        let countnow = prvdiv.querySelector('.count')
        let countnownum = Number(countnow.textContent)
        // console.log(countnownum)
        countnow.textContent = --countnownum
        let newdiv = evt.to.previousElementSibling
        let countftr = newdiv.querySelector('.count')
        let countftrnum = Number(countftr.textContent)
        // console.log(countftrnum)
        countftr.textContent = ++countftrnum

    }
});
new Sortable(mydonecardslist, {
    group: 'shared',
    animation: 150,
    onEnd: function (evt) {
        // console.log(evt.item.dataset.id)
        // console.log(evt.to.dataset.status)
        update_stute_of_card(evt.item.dataset.id, evt.to.dataset.status)
        let prvdiv = evt.from.previousElementSibling
        let countnow = prvdiv.querySelector('.count')
        let countnownum = Number(countnow.textContent)
        // console.log(countnownum)
        countnow.textContent = --countnownum
        let newdiv = evt.to.previousElementSibling
        let countftr = newdiv.querySelector('.count')
        let countftrnum = Number(countftr.textContent)
        // console.log(countftrnum)
        countftr.textContent = ++countftrnum

    }
});

//=====================================================================
let sbtncreatbyai = document.querySelector('[creatbyai]')
sbtncreatbyai.addEventListener('click',()=>{
    let descrption_ai = document.querySelector('[discreptionforaicreation]')
    let number_of_ai_tasks = document.querySelector('[numberoftasksofai]')
    creat_by_ai(descrption_ai.value,number_of_ai_tasks.value)


})
