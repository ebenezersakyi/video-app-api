# Node.js Express Server

This is a Node.js Express server that provides endpoints for generating a story based on provided movie details and converting text to audio using Google Cloud APIs.

## Features

- **Story Generation**: Generate a comprehensive, detailed story based on provided movie details using Google Generative AI.
- **Text to Audio Conversion**: Convert provided text to audio using Google Cloud Text-to-Speech API.
- **CORS**: Enabled CORS for cross-origin requests.
- **Body Parsing**: Parses incoming request bodies in a middleware before your handlers, available under the `req.body` property.

## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/ebenezersakyi/video-app-api.git>
   cd <video-app-api>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```plaintext
   NODE_ENV=development
   PORT=5000
   GEMINI_API_KEY=<your-gemini-api-key>
   GOOGLE_CLOUD_API_KEY=<your-google-cloud-api-key>
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

   The server will run on the port specified in the `.env.local` file, defaulting to port 5000.

2. The following endpoints are available:

   - **POST /generate-story**:

     - Request Body:
       ```json
       {
         "movieDetails": {
           /* movie details object */
         }
       }
       ```
     - Response:
       ```json
       {
         "success": true,
         "data": "Generated story text"
       }
       ```

   - **POST /generate-audio**:
     - Request Body:
       ```json
       {
         "text": "Text to be converted to audio"
       }
       ```
     - Response:
       ```json
       {
         "success": true,
         "audioContent": "Base64 encoded audio content"
       }
       ```

## Project Structure

- `server.js`: Main server file.
- `routes/index.js`: Contains the route handlers for generating story and audio.
- `.env.local`: Environment variables (not included in the repository, create this file manually).

## Dependencies

- `express`: Fast, unopinionated, minimalist web framework for Node.js.
- `dotenv`: Loads environment variables from a `.env` file into `process.env`.
- `cors`: Provides a Connect/Express middleware that can be used to enable CORS with various options.
- `body-parser`: Node.js body parsing middleware.
- `axios`: Promise based HTTP client for the browser and node.js.
- `@google/generative-ai`: Google Generative AI client.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## Contact

For questions or feedback, please contact [Your Name] at [your-email@example.com].

---
