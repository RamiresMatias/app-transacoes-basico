import { app } from "./app";

const PORT = process.env.PORT;
 
app.listen(PORT, () => console.log(`Servidor está rodando na PORTA ${PORT}`));