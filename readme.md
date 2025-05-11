# Sprint-4 - ITACADEMY - Joke Web App Project – TypeScript & API Integration - Level 3

A productivity web app designed to kick off the workday with laughter and useful weather insights. Built with TypeScript, Tailwind CSS, and Webpack as part of a learning project focused on real-world API consumption and clean code architecture.

---

## 🧩 Description

The app displays random jokes and weather information to improve users’ mood and productivity in the workplace. It allows users to rate jokes and changes background visuals based on weather and time of day.

This project was built to practice:

- TypeScript fundamentals
- Fetching and handling data from REST APIs
- Working with async/await and error handling

---

## ✨ Features

- Fetches random jokes from multiple public APIs
- Displays current weather based on user geolocation
- Background video dynamically changes based on time of day and weather
- Joke rating system (1 = low, 3 = high)
- Random memes (bonus)
- Modular architecture with custom classes and error handling

---

## 🎬 Demo Preview

![Demo](sprint-4-demo.gif)

---

## 🔧 Tech Stack

- **TypeScript**
- **Tailwind CSS**
- **Webpack**
- **Node.js**
- Custom `Joke` and `ApiError` classes
- REST APIs (weather & jokes)

---

## 📁 Folder Structure

```bash
public/
└── backgrounds/        # Weather-based background videos

src/
├── apis/               # API fetch logic
│   ├── getDadJoke.ts
│   ├── getWorkJoke.ts
│   ├── getWeather.ts
│   └── getRandomMeme.ts
├── utilities/          # Core logic and utilities
│   ├── Joke.ts
│   ├── Error.ts
│   ├── errorLog.ts
│   ├── reportJokes.ts
│   ├── scoreJokes.ts
│   ├── dom.ts
│   ├── chooseWeather.ts
│   └── getUserCoordinates.ts
├── input.css           # Tailwind input
├── output.css          # Compiled Tailwind output
├── index.ts            # App entry point
├── index.html
```

---

## ▶️ Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
git clone https://github.com/angelesgonzalez/S4-API-Dad-Jokes.git
git checkout develop 
npm install
```

### Running the Project (Dev Mode)

```bash
npm run dev
```

This will:

- Run Tailwind CSS in watch mode
- Run Webpack in watch mode
- Rebuild the CSS and JS when you make changes

---

## 💡 How to Use

1. Open the site in your browser.
2. View a randomly fetched joke.
3. Click "Next Joke" to load another.
4. Optionally rate each joke from 1 to 3.
5. The app stores your joke ratings in memory and displays the weather at launch.
6. Open the console to see the array of jokes and the report.

---

## 🌍 APIs Used

### 1. **Joke APIs**

- [`https://icanhazdadjoke.com`](https://icanhazdadjoke.com)
  - Headers: `{ Accept: 'application/json' }`

- [`https://sv443.net/jokeapi/`](https://icanhazdadjoke.com)
  - Headers: `{ Accept: 'application/json' }`

### 2. **Weather API**

- [`https://open-meteo.com`](https://open-meteo.com/en/docs)
  - Accepts parameters like `latitude`, `longitude`, and `timezone`

---

## 🎯 Learning Goals

- Understand how to structure a TypeScript project
- Practice calling and handling API responses
- Build modular code using classes and clean utility separation
- Improve asynchronous logic with `async/await` and custom error handling
- Learn how to use Webpack and Tailwind together

---

## 🚀 Future Improvements

- Display last 5 rated jokes in a history view
- Add scroll animation for new joke arrival
- Create a chart of joke ratings over time
- Persist jokes in localStorage
- Add fade/slide transitions between joke displays
- Show random videos/memes for fun breaks

---
