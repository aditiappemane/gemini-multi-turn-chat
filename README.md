# Context-Aware Gemini Chat

A simple interactive chatbot using the Google Gemini API that maintains conversation context across multiple turns.

## Features

- Interactive console-based chat interface
- Maintains conversation context across multiple turns
- Configurable model parameters (temperature, topP, topK)
- Error handling and graceful exit

## Prerequisites

- Node.js (v14 or higher)
- A Google Gemini API key

## Setup

1. Clone this repository:
```bash
git clone <your-repo-url>
cd gemini-multi-turn-chat
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Gemini API key:
```
GEMINI_API_KEY=your_api_key_here
```

## Usage

Run the application:
```bash
npm start
```

The program will:
1. Prompt you for your first message
2. Show Gemini's response
3. Prompt you for a second message
4. Show the final response from Gemini

## Model Configuration

The current implementation uses the following model parameters:
- Temperature: 0.7 (controls randomness)
- TopP: 0.8 (controls diversity)
- TopK: 40 (controls token selection)

You can modify these values in the `gemini_chat.js` file under the `generationConfig` object.

## Error Handling

The application includes error handling for:
- Missing API key
- API request failures
- Invalid inputs

## License

MIT 