const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // El modo de desarrollo o producción
  mode: 'development', 

  // Punto de entrada: ahora es un archivo TypeScript con JSX
  entry: './src/index.tsx', 

  // Dónde Webpack pondrá el código compilado
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },

  // Manejo de módulos: cómo se procesan los diferentes tipos de archivos
  module: {
    rules: [
      {
        // Regla para archivos .ts y .tsx
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          // Usamos 'babel-loader' para transpilar y 'ts-loader' para TypeScript
          loader: 'ts-loader',
        },
      },
      {
        // Regla para archivos .css
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        // Regla para imágenes
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // Plugins para extender las funcionalidades de Webpack
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],

  // Opciones para la resolución de módulos
  resolve: {
    // Es crucial agregar .ts y .tsx a la lista de extensiones
    extensions: ['.ts', '.tsx', '.js', '.jsx'], 
  },
};