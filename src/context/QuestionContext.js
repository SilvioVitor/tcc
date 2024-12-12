import { createContext, useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { supabase } from "../utils/supabase";

export const QuestionContext = createContext({
    response: "",
    analysis: "",
    question: "",
    loading: false,
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    setInput1: () => { },
    setInput2: () => { },
    setInput3: () => { },
    setInput4: () => { },
    setInput5: () => { },
    setInput6: () => { },
    setInput7: () => { },
    setInput8: () => { },
    setResponse: () => { },
    createAnalysis: () => { },
    createQuestion: () => { },
    session: null,
    sessionLoading: false,
    sessionError: "",
    handleSignUp: () => { },
    handleSignIn: () => { },
    handleLogout: () => { },
});

export default function QuestionContextProvider({ children }) {
    const [response, setResponse] = useState("");
    const [analysis, setAnalysis] = useState("");
    const [question, setQuestion] = useState("");

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");
    const [input4, setInput4] = useState("");
    const [input5, setInput5] = useState("");
    const [input6, setInput6] = useState("");
    const [input7, setInput7] = useState("");
    const [input8, setInput8] = useState("");

    const [session, setSession] = useState(null);
    const [sessionLoading, setSessionLoading] = useState(false);
    const [sessionError, setSessionError] = useState(null);

    const [loading, setLoading] = useState(false);

    async function createQuestion() {
        setLoading(true)

        const genAI = new GoogleGenerativeAI("AIzaSyCMwzPeMu-_1EjfC7LP806cUw3IO-fVaLI");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
        Crie uma questão de nível ${input4}, no formato ${input5}, na disciplina ${input1}, 
        sobre o tema ${input2}. 
        A questão deve ser voltada para ${input3}. Se caso for de multipla escolha
        inclua ${input6} alternativas, se caso não for desconcidere esse input, e limite o texto a ${input7} palavras. Não inclua a resposta.
        `;

        const result = await model.generateContent(prompt);
        const generatedQuestion = result.response.text();
        setQuestion(generatedQuestion);

        setLoading(false)

        return generatedQuestion;
    }

    async function createAnalysis() {
        setLoading(true)

        const genAI = new GoogleGenerativeAI("AIzaSyCMwzPeMu-_1EjfC7LP806cUw3IO-fVaLI");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `De acordo com essa pergunta ${question} analise a resposta desse aluno: ${input8}
        se o aluno responder com um numero ou a letra que corresponde a resposta correta, diga que esta correta, desconsidere o calculo, e mostre como deve ser feita `;
        const result = await model.generateContent(prompt);
        const generatedAnalysis = result.response.text();
        setAnalysis(generatedAnalysis);

        setLoading(false)

        return generatedAnalysis;
    }

    useEffect(() => {
        const { data: subscription } = supabase.auth.onAuthStateChange(
            (event, session) => {
                setSession(session);
            }
        );

        // Cleanup da inscrição
        return () => subscription.subscription.unsubscribe();
    }, []);

    const handleSignUp = async (userName, email, password) => {
        setSessionLoading(true);
        setSessionError(null);
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    first_name: userName,
                },
            },
        });
        setSessionLoading(false);
        if (error) setSessionError(error.message);
        else
            alert(
                "Signed Up! Check and verify your email to confirm subscription!"
            );
    }


    const handleSignIn = async (email, password) => {
        setSessionLoading(true);
        setSessionError(null);
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        setSessionLoading(false);
        if (error) setSessionError(error.message);
    };

    function handleLogout() {
        setSession(null);
    }


    const ctx = {
        response,
        question,
        analysis,
        loading,
        input1,
        input2,
        input3,
        input4,
        input5,
        input6,
        input7,
        input8,
        setInput1,
        setInput2,
        setInput3,
        setInput4,
        setInput5,
        setInput6,
        setInput7,
        setInput8,
        setResponse,
        createAnalysis,
        createQuestion,
        session,
        sessionLoading,
        sessionError,
        handleSignUp,
        handleSignIn,
        handleLogout
    };

    return <QuestionContext.Provider value={ctx}>
        {children}
    </QuestionContext.Provider>;
}
