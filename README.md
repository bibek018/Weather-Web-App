# Weather App

A modern, responsive weather application built with React and Vite that provides real-time weather information for any city worldwide. The app features a clean, intuitive interface with detailed weather metrics.

## Project URL
https://weather-web-app-zeta-nine.vercel.app/
Based on:https://roadmap.sh/projects/weather-app
## Features

- 🌍 **Search by City**: Enter any city name to get current weather information
- 🌡️ **Temperature Display**: View temperature in both Celsius and Fahrenheit
- 📊 **Comprehensive Weather Data**: 
  - Current temperature (°C / °F)
  - Feels like temperature
  - Humidity percentage
  - Wind speed (km/h)
  - Atmospheric pressure (mb)
  - Visibility (km)
  - Weather condition with icon
- 🎨 **Modern UI**: Built with Tailwind CSS for a beautiful, responsive design
- ⌨️ **Keyboard Support**: Press Enter to search for weather
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## Technologies Used

### Core
- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 4.1.17** - Utility-first CSS framework

### Development Tools
- **ESLint** - Code linting
- **React Compiler** - Automatic optimization
- **TypeScript Types** - Type definitions for React

### API
- **WeatherAPI** - Real-time weather data

## Project Structure

```
my-weather-app/
├── public/
│   └── vite.svg                  # Vite logo
├── src/
│   ├── assets/
│   │   └── react.svg             # React logo
│   ├── components/
│   │   ├── DataContainer.jsx     # Main weather data component with search and display logic
│   │   └── ParentContainer.jsx   # Parent wrapper component with app layout
│   ├── App.css                   # Tailwind CSS import
│   ├── App.jsx                   # Root app component
│   ├── index.css                 # Global styles
│   └── main.jsx                  # Application entry point
├── eslint.config.js              # ESLint configuration
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite configuration
└── README.md                     # Project documentation
```

## Component Structure

### App.jsx
- Root component that renders `ParentContainer`
- Entry point for the application

### ParentContainer.jsx
- Main layout component
- Contains the app title and weather logo
- Wraps the `DataContainer` component
- Sets up the dark slate background theme

### DataContainer.jsx
- Core component handling all weather data logic
- Manages state for:
  - City name
  - Temperature (Celsius and Fahrenheit)
  - Humidity, Wind, Pressure, Visibility
  - Weather condition and icon
  - Feels like temperature
- Implements search functionality with city input
- Fetches weather data from WeatherAPI
- Handles error states and user input validation

## Installation

1. Clone the repository or navigate to the project directory:
```bash
cd my-weather-app
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

- `npm run dev` - Start development server (with hot module replacement)
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Usage

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

3. Enter a city name in the search input field

4. Click the "Search" button or press Enter to fetch weather data

5. View the weather information displayed below the search bar

## API Configuration

The app uses WeatherAPI (weatherapi.com) to fetch weather data. The API key is currently hardcoded in the `DataContainer.jsx` component.

**Note**: For production use, consider:
- Moving the API key to environment variables
- Implementing proper error handling
- Adding API key validation

## Styling

The application uses Tailwind CSS 4.x for styling:
- Dark theme with slate-900 background
- Responsive design with mobile-first approach
- Custom animations and transitions
- Modern UI components with shadows and borders

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential improvements for the application:
- [ ] Environment variable support for API keys
- [ ] Forecast data (hourly/daily)
- [ ] Location-based weather detection
- [ ] Weather alerts and notifications
- [ ] Favorite cities functionality
- [ ] Unit preference settings
- [ ] Weather history/charts
- [ ] Error boundary implementation
- [ ] Loading states and skeletons

## License

This project is private and not intended for public distribution.

---

Built with ❤️ using React and Vite

