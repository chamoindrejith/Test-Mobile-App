# React Native Blank Template with React Native Paper and SafeAreaContext

This guide walks you through setting up a blank React Native project that integrates React Native Paper and SafeAreaContext.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### Step 1: Create a React Native Project

Run the following command to create a new React Native project:

```bash
npx create-expo-app my-app --template blank
```

Replace `my-app` with your desired project name.

### Step 2: Install React Native Paper

Run the following command to install React Native Paper:

```bash
npm install react-native-paper
```

### Step 3: Install SafeAreaContext

Run the following command to install SafeAreaContext:

```bash
npm install react-native-safe-area-context
```

### Step 4: Additional Setup for React Native Vector Icons

```bash
npm install react-native-vector-icons
```

### Step 5: Run the Project

To start the development server and launch the app:

```bash
npx expo start
```

## Additional Notes

- React Native Paper provides Material Design components for React Native apps.
- SafeAreaContext ensures proper handling of safe areas on both iOS and Android.