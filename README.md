<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br />
<div align="center">
  <a href="https://github.com/PavanBajwaUCLL/TripPocket">
    <img src="public/logo192.png" alt="TripPocket logo" width="80" height="80">
  </a>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#public-link-and-login">Public Link and Login</a></li>
    <li><a href="#the-idea">The Idea</a></li>
    <li><a href="#database">Database</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

TripPocket is a mobile app that allows you to store all the digital information for a single trip in one central place. When traveling, you often have to search through apps
and emails to find items such as a boarding pass, hotel reservation or train tickets. TripPocket brings all this information together in one well-organized app.

This version is a Progressive Web App (PWA) that can be installed on a phone. A native iOS and Android version will follow from the same codebase.

The current screens are static:

* Splash screen
* Onboarding (3 steps, shown only on first use)
* Home, with active, past and upcoming trips
* Profile

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![React Native][ReactNative-shield]][ReactNative-url]
* [![Expo][Expo-shield]][Expo-url]
* [![TypeScript][TypeScript-shield]][TypeScript-url]
* [![Supabase][Supabase-shield]][Supabase-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Public Link and Login

**Public link:** [https://trip-pocket-blue.vercel.app](https://trip-pocket-blue.vercel.app)

**Login:** no login credentials are needed. The app opens directly after onboarding.

**Install on iPhone:** open the link in Safari, tap Share, then Add to Home Screen.

**Install on Android:** open the link in Chrome, open the menu, then tap Add to Home screen.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## The Idea

The target audience, roadmap and competitors are described in [docs/idea.md](docs/idea.md).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Database

* The test database is hosted on Supabase. The current screens are static and do not read from it yet.
* The setup for Supabase is done in the codebase, but it is not tested yet in the application.
* Vercel has the keys stored as environment variables.

| Table | Purpose |
| --- | --- |
| `users` | Name and email of each user |
| `trips` | Trips of a user, with destination, dates and status |
| `trip_items` | Flights, hotels and documents that belong to a trip |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

* Node.js and npm
* A Supabase project (only needed once the app connects to the database)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/PavanBajwaUCLL/TripPocket.git
   cd TripPocket
   ```
2. Install the packages
   ```sh
   npm install
   ```
3. Create a `.env` file in the project root
   ```sh
   EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
   EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
   ```
4. Start the app in the browser
   ```sh
   npx expo start --web
   ```
5. Build the PWA. The output goes to `dist/`
   ```sh
   npx expo export -p web
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

1. Open the [public link](https://trip-pocket-blue.vercel.app).
2. Go through the 3 onboarding steps. They are only shown the first time.
3. View your trips on Home.
4. Use the bottom navigation to switch between Trips and Profile.

The + button, trip cards and Profile rows are not active yet, because this version is static.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Pavanpreet Singh Bajwa - r1051056@ucll.be

Project Link: [https://github.com/PavanBajwaUCLL/TripPocket](https://github.com/PavanBajwaUCLL/TripPocket)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

* Mobile Applications course at UCLL, by Niels Jacobs, for the starter codebase
* [Expo Documentation](https://docs.expo.dev)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/PavanBajwaUCLL/TripPocket.svg?style=for-the-badge
[contributors-url]: https://github.com/PavanBajwaUCLL/TripPocket/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/PavanBajwaUCLL/TripPocket.svg?style=for-the-badge
[forks-url]: https://github.com/PavanBajwaUCLL/TripPocket/network/members
[stars-shield]: https://img.shields.io/github/stars/PavanBajwaUCLL/TripPocket.svg?style=for-the-badge
[stars-url]: https://github.com/PavanBajwaUCLL/TripPocket/stargazers
[issues-shield]: https://img.shields.io/github/issues/PavanBajwaUCLL/TripPocket.svg?style=for-the-badge
[issues-url]: https://github.com/PavanBajwaUCLL/TripPocket/issues
[ReactNative-shield]: https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[ReactNative-url]: https://reactnative.dev/
[Expo-shield]: https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white
[Expo-url]: https://expo.dev/
[TypeScript-shield]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Supabase-shield]: https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/

