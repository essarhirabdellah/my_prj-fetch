import {printingelmnents} from './ui.js'

fetch('https://flowboard-api-virid.vercel.app/cards', {
  headers: {
    'X-Workspace': 'public'
  }
})
.then(reply => {
    if (!reply.ok) {
    throw new Error("ERROR ...")
    }
    return reply.json()
})
.then(data => printingelmnents(data))
.catch(function (error) {
    console.log(error)
})
