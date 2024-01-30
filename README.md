# TrashLab - Goober App

---

# Getting Started

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

# Technical decisions

## Layered architecture

Since Riders, Rides, and Drivers are (somewhat) interdependent, there is a Service layer above the features to avoid features having to "pick from each other's pockets". This service layer also ensures data-handling to kept isolated so that it's easier to share and refactor, which is especially important for an app that has plans for growth and iterations.

Additionally, as the app and the features grow, there will be a bigger reliance and local state and this service layer will also be handling interactions with the state management.

## Vertical slicing

Features were implemented as self-contained slices across the layers of the application. The rationale behind was to promote modularity, which is crucial for a growing/iterative app, so we can conveniently swap, remove, or iterate on entire features. This also enables different teams to own different features or parts of the app.

## State management

For state management, I picked Jotai, which is know for simplicity and modularity, very fitting for our case. However, as our needs become larger and more complex, it might be worth investing effort into a different state management library, e.g. Redux. In order to limit the scope of this transition, the code should be refactored because some screens/components currently access the atoms directly.

## Network data handling

The data is coming through (mock) API requests with no polling, but WebSockets will be better as real-time communication going both ways will be crucial for an app of this nature.

## Other omissions

- There is currently no type safety in route names since they are mere strings; we should have a helper function along the lines of `createStack()` or `createStackScreens()` to isolate options that are recurring (e.g. header options) and have a simple type for route names, e.g. `type TRouteName = keyof typeof routeConfigs`
- Lack of shared screen templates and shared components since we haven't used many yet and following the YAGNI principle in this specific case, we shouldn't implement those before they're needed
- The back button action has not been handled yet (i.e. Android Back Button), but this is easily solvable with a `useDisableHardwareBackButton()` hook, called on a screen-level or at the app-level
- Authentication would blow up the scope of this assignment; consequently, the login screen simply lists existing Users with the ability to reconnect by simply tapping on them (Shall we call it 0FA? 😂)

# Product decisions

## Trade-offs

- No authentication/permissions/access
- No GPS tracking
- No location input
- No ride map
- Business constants not coming from CMS or server (e.g. price, surge ratio)

# v2 feature ideation

## Growth-driving features

- Referrals
- In-app reviews and ratings
- Social media posts (sharing rides, annual usage statistics, etc.)
- Usage-based achievements

## Revenue-driven features

- Dynamic pricing: Surge pricing when the rides-to-drivers ratio is high
- Ride quality options
- Advertising for nearby businesses
- In-app payment methods

## UX features

- Real-time tracking
- Google Maps autocomplete on input boxes
- In-app messaging (driver <> rider)
- Saved preferences (preferred car types, favorite locations)
- Scheduling rides
- Dashboard with history, statistics

## Styling

- Ideally, we should have shared components in a package shared with other products from the company to maintain a consistent brand image
- That is often too much investment early on, but can be mitigated with styles in GlobalStyles sharing similar styling and color palette

## Safety features

- Emergency button
- Ride info sharing
- Driver/Rider ratings and reviews

## Accessiblity features

- Voice command
- Text-to-voice
- I18n for copy
- Built-in translation for chats

## Environmental

- Visibility/promotion/preference for eco cars
- Carbon offset programs

## Developer experience

- Document development guidelines and practices
- Unit tests
- Document release process and automate
- Create internal app for testing/QA
- End-to-end tests

# Risks and unknowns

- Real-time data handling will require a significant refactor in the network service
- Authentication might require a refactor in routing and stacks
- Race conditions to be handled on the back-end

# Questions before shipping

- How will this app perform when there is heavy traffic?
  - Some places where this is likely to happen use a `FlatList` instead of `.map()` for this reason
  - Real-time data entails significantly more data going back and forth
- With in-app payments and live location, what kind of security standards will we opt for?
- Some features can be delivered by leveraging third-party tools and SDKs; which ones are worth investing into building in-house?
  - In-app payment
  - Location handling
  - Onboarding
  - In-app messaging
  - Push notifications
  - Analytics

# Approximate time breakdown

- [30 min] Reading requirements and grooming work
- [30 min] Setting up new React Native project
- [15 min] Linting and code styling
- [30 min] Routing and navigation
- [60 min] Server - Mock API/server
- [30 min] Riders - Authentication
- [15 min] Drivers - Authentication
- [5 min] State management
- [30 min] Drivers - Home screen, list of pending ride requests
- [90 min] Drivers - End-to-end flow to accept/decline, cancel, and complete rides
- [30 min] Riders - Flow to request a ride and display ride request status
- [5 min] Server - Add filter to only list nearby ride requests
- [60 min] Documenting project

Total: 7hrs 10min

**_NOTE:_** I feel like I sank too much time into building a mock server, which took quite a bit of time as a front-end specialist. It also needed more refinement as I worked on the end-to-end flow for drivers. 🙈
