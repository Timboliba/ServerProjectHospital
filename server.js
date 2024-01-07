const http=require("http")

//Importation de l'app express
const App=require('./routes/Routes')

// Innitialisation du port d'ecoute
const PORT=process.env.PORT || 8081

App.set('port',PORT)

//Création du serveur
const server=http.createServer(App)

//Demarage du serveur
server.listen(PORT,()=>{
    console.log(`Listening at port ${PORT}`)
})



