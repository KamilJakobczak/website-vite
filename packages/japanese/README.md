# Learning Japanese

A browser-based game for learning Japanese hiragana and katakana characters. Built with vanilla TypeScript using object-oriented design patterns - no frameworks.

## Live Demo

[kamiljakobczak.github.io/learning-japanese](https://kamiljakobczak.github.io/learning-japanese/)

## Tech Stack

**Language:** TypeScript (OOP)

**Tooling:** Webpack 5, Sass

## Features

- **Two syllabaries** - Practice hiragana, katakana, or both in mixed mode
- **Difficulty levels** - Progressive difficulty to match learning pace
- **Answer directions** - Choose between character-to-romaji or romaji-to-character
- **Player profiles** - Persistent stats saved to localStorage
- **Timed questions** - Timer per question to build speed and recall
- **Statistics tracking** - Track accuracy and progress across sessions
- **Reference tables** - Full hiragana and katakana tables displayed below the game

## Architecture

The app uses an object-oriented class hierarchy with clear separation between game logic and rendering:

```
src/
├── data/
│   └── db.ts               # Character database (hiragana/katakana with romaji)
├── script/
│   ├── classes/
│   │   ├── GameWindow.ts    # Main container, manages rendering modes
│   │   ├── Game.ts          # Core game logic and flow
│   │   ├── Player.ts        # Player profile with localStorage persistence
│   │   ├── PlayerStats.ts   # Statistics tracking
│   │   ├── Question.ts      # Individual question object
│   │   ├── Questions.ts     # Question set management
│   │   ├── Timer.ts         # Per-question timer
│   │   ├── Table.ts         # Reference table rendering
│   │   ├── PreGameForm.ts   # Game setup form
│   │   ├── GameRenderer.ts  # Active game rendering
│   │   ├── QuestionRenderer.ts  # Question display
│   │   └── StatsRenderer.ts     # Statistics display
│   ├── enums/               # Difficulty, Syllabary, AnswersDirection
│   └── interfaces/          # TypeScript type definitions
└── style/                   # SCSS styles
```

## Running Locally

```bash
npm install
npm run start    # Webpack dev server on port 4000
npm run build    # Production build
```
