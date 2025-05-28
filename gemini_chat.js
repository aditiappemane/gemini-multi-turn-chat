import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import readline from 'readline';

// Load environment variables
dotenv.config();

// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Function to get user input
function getUserInput(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (answer) => {
            resolve(answer.trim());
        });
    });
}

async function main() {
    try {
        // Check for API key
        if (!process.env.GEMINI_API_KEY) {
            throw new Error("Please set GEMINI_API_KEY in your .env file");
        }

        // Start a chat session
        const chat = model.startChat({
            history: [],
            generationConfig: {
                temperature: 0.7,
                topP: 0.8,
                topK: 40,
            },
        });

        // Get first user input
        const firstInput = await getUserInput("Enter your first message: ");
        const firstResponse = await chat.sendMessage(firstInput);
        console.log("\nGemini's response:", firstResponse.response.text());

        // Get second user input
        const secondInput = await getUserInput("\nEnter your second message: ");
        const secondResponse = await chat.sendMessage(secondInput);
        console.log("\nGemini's final response:", secondResponse.response.text());

    } catch (error) {
        console.error("An error occurred:", error.message);
    } finally {
        rl.close();
    }
}

main(); 