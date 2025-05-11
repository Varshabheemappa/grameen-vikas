# Grameen Vikas: Rural Development Platform

A modern web application to empower rural communities in India with technology and information. Features include a multilingual voice assistant, AI-powered news verifier, government scheme explorer, and economic impact dashboard.

## Features
- **Voice Assistant**: Ask questions in multiple Indian languages and get AI-powered answers.
- **News Verifier**: Check if news is real or fake using AI.
- **Government Schemes**: Explore and search for rural development schemes.
- **Economic Impact**: View current commodity prices and economic trends.
- **Multi-language Support**: English, Hindi, Kannada, Telugu, Tamil, Bengali.

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
```bash
npm install
```

### Environment Variables
Create a `.env` file in the root directory (see `.env.example`):
```
VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
VITE_GOOGLE_TRANSLATE_API_KEY=your_google_translate_api_key_here
VITE_SITE_URL=http://localhost:5173
```

### Running the App
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Contributing
1. Fork this repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License
[MIT](LICENSE) 