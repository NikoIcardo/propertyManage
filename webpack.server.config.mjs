import path from 'path'; 
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

export default {
  entry: './server/index.ts', // Entry point of your server-side TypeScript code
  target: 'node', // Compile for Node.js environment
  output: {
    path: path.resolve(__dirname, 'dist-server'), // Output directory for server build
    filename: 'server.js', // Output file name
  },
  devtool: 'source-map', // Enable source maps for easier debugging
  resolve: {
    extensions: ['.ts', '.js'], // Resolve TypeScript and JavaScript files
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  node: {
    __dirname: false, // For proper directory handling in Node.js
    __filename: false,
  },
};