import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { GEMINI_SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

const getAIClient = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        console.warn("API Key not found. Chat features will be simulated or disabled.");
        return null;
    }
    return new GoogleGenAI({ apiKey });
};

export const initChat = async () => {
    const ai = getAIClient();
    if (!ai) return null;

    try {
        chatSession = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
                temperature: 0.7,
            }
        });
        return chatSession;
    } catch (error) {
        console.error("Failed to initialize chat:", error);
        return null;
    }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
    if (!chatSession) {
        await initChat();
    }

    if (!chatSession) {
        return "Mi dispiace, il sistema AI è attualmente offline. Contattaci su Instagram!";
    }

    try {
        const response: GenerateContentResponse = await chatSession.sendMessage({ message });
        return response.text || "Nessuna risposta generata.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Si è verificato un errore di connessione. Riprova più tardi.";
    }
};