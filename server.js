import app from './src/app.js';


// exporta a instância do Express como handler do Vercel
app.listen(3051, () => {
    console.log(`Servidor escutando em http://localhost:${3051}`)
  })
  