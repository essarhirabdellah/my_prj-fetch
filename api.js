const data = fetch('https://flowboard-api-virid.vercel.app/cards', {
  headers: {
    'X-Workspace': 'public'
  }
}).then(reply => {if (!reply.ok) {
    throw new Error("ERROR ...")
}
return reply.json()
}).catch(function (error) {
    console.log(error)
})

export default  data
