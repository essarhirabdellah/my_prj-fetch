import {key} from './apikey.js'
// console.log(key)
// import  from "./axios";
// export let mydata = null
// export let mylink = new URL('https://flowboard-api-virid.vercel.app/cards')
let search = {}
// localStorage.setItem('searsh',search)
// let objstorgefilter = localStorage.getItem('searsh')
export async function fetching(print,er){

  try{
   const reply = await axios.get('https://flowboard-api-virid.vercel.app/cards',{
    headers: {
    'X-Workspace': 'public'
  },
  params: JSON.parse(localStorage.getItem('searsh')) ?? '' //localitem ?? "", 
})
//  console.log(objstorge)
   print(reply.data)
//    console.log(mydata)
   console.log('hi safe')
   }
catch(error){
  er(error)
  console.log('hi error')
}
 
}
// ===========================================================================
export async function adding(obj) {

const options = {
  method: 'POST',
  url: 'https://flowboard-api-virid.vercel.app/cards?password=1234',
  headers: {
    'X-Workspace': 'public',
    'Content-Type': 'application/json'
  },
  data:obj
}

try {
  console.log(obj)
  const { data } = await axios.request(options)
  console.log(data)
} catch (error) {
  console.error(error)
}
  }
    
// ===========================================================================
export async function gitcarddata(id){

  try{
   const reply = await axios.get('https://flowboard-api-virid.vercel.app/cards/'+id,{headers: {
    'X-Workspace': 'public'
  }})
   return await reply.data
//    console.log(mydata)
//    console.log('hi card safe')
   }
catch(error){
  console.log(error)
}
 
}




// ===========================================================================

export async function editing(newcardedited) {
    


const options = {
  method: 'PUT',
  url: 'https://flowboard-api-virid.vercel.app/cards/'+newcardedited.id+'?password=1234',
  headers: {
    'X-Workspace': 'public',
    'Content-Type': 'application/json'
  },
  data:newcardedited
}

try {
  const { data } = await axios.request(options)
  console.log(data)
} catch (error) {
  console.log(error)
}
}
// ===========================================================================
export async function delet_card(id) {
  

const options = {
  method: 'DELETE',
  url: 'https://flowboard-api-virid.vercel.app/cards/'+id+'?password=1234',
  headers: {
    'X-Workspace': 'public'
  }
}

try {
  const { data } = await axios.request(options)
  console.log(data)
} catch (error) {
  console.log(error)
}
}
// ======================================================================
export async function update_stute_of_card(id,status) {
  


const options = {
  method: 'PATCH',
  url: 'https://flowboard-api-virid.vercel.app/cards/'+id+"?password=1234",
  headers: {
    'X-Workspace': 'public',
    'Content-Type': 'application/json'
  },
  data: {
    status: status
  }
}

try {
  const { data } = await axios.request(options)
  console.log(data)
} catch (error) {
  console.error(error)
}
}
// ======================================================================
export function myfilter() {
    let nameflt = document.querySelector('[namefilter]')
    let proretyflt = document.querySelector('[priorityfilter]')
    if (nameflt.value != 'Open this select menu') {
        console.log(nameflt.value)
       search.assignee = nameflt.value.trim() 
       console.log(search) 
    }
    else{
      delete search.assignee   
    }
    switch (proretyflt.value) {
        case 'low':
             search.priority ='low'
            break;
        case 'medium':
             search.priority ='medium'
            break;
        case 'high':
            search.priority ='high'
            break;
        default:
            delete search.priority
            break;
    }
    // localStorage.setItem('searsh',search)
    localStorage.setItem('searsh',JSON.stringify(search))
    localStorage.getItem('searsh')
    // console.log(objstorgefilter)
    console.log(typeof(localStorage.getItem('searsh')))
   
       
}
 export function mysearch() {
         delete search.search
         let my_search = document.querySelector('[mysaerchinput]')
         if(my_search.value.length > 1){
            console.log(my_search.value)
            search.search = my_search.value
            console.log(search)
         }
        //  else{
        //     search.search = ""
        //  }
    }
// ===============================================================
export async function creat_by_ai(discreption_of_tasks,task_number) {
  

const options = {
  method: 'POST',
  url: 'https://flowboard-api-virid.vercel.app/ai/cards?password=1234',
  headers: {
    'X-Workspace': 'public',
    'Content-Type': 'application/json'
  },
  data: {
    description: discreption_of_tasks,
    apiKey: key,
    count: task_number
  }
}

try {
  const { data } = await axios.request(options)
  console.log(data)
} catch (error) {
  console.error(error)
}
}
