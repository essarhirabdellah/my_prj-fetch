import {errorPage,printingelmnents} from './ui.js'
export let mydata = null
export let mylink = new URL('https://flowboard-api-virid.vercel.app/cards')
// export let mylink = 'https://flowboard-api-virid.vercel.app/cards'

export function fetching(){
//  let y = mylink.toString()
fetch(mylink, {
  headers: {
    'X-Workspace': 'public'
  }
})
.then(reply => {
    console.log(mylink)
    if (!reply.ok) {
       throw new Error(reply.status)
    }
    return reply.json()
})
.then(data => {

   mydata = data

   printingelmnents(mydata)
  })
.catch(function (error) {
    errorPage(error)
})
}
fetching()
