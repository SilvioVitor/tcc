import { GoogleGenerativeAI } from "@google/generative-ai";

async function run() {
    const genAI = new GoogleGenerativeAI("AIzaSyCMwzPeMu-_1EjfC7LP806cUw3IO-fVaLI");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" }); //gemini-1.5-flash / gemini-1.5-pro

    const prompt = `Escreva um pequeno texto usando palavras que comecem somente com a letra G e que faça sentido` ;

    const result = await model.generateContent(prompt);

    return result.response.text();
}

run().then(result => {
    console.log(result);
}).catch(error => {
    console.error('Erro:', error);
});