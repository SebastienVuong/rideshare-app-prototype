# Architecture
Given that this prototype is built to become an MVP, rather than just risk mitigation, it should be built to be easily altered and scaled. In light of this, we'll use a layered architecture with:
* core/infrastructure services
* domain-specific services
* vertically sliced features

These layers create a separation of concerns by preventing features from picking each other's 
pockets. This SoC enables modularity and loose coupling between feature modules, which makes concurrent development convenient. Additionally, this design facilitates quick iterations, or even quick removals, which is crucial for early-stage team aiming to stay agile and nimble.

The structure within each feature module should follow a quasi-MVC architecture where the domain services serve as the Model layer.

## Core/infrastructure layer
* Navigation
* Networking
* State management

## Domain-specific layer
* Rider
* Driver
* Ride

## Feature modules
* Welcome
* Riders
  * Authentication
  * Home / Request Ride
  * Ride Status
* Drivers
  * Authentication
  * Home / Request list
  * Ride Status

## Shared 
> **_NOTE:_** With a proper design system in place, this could be renamed to `UI/` and consist of `screens/`, `layouts/`, and `components/`. We could then have `UI/`, `utils/`, and `hooks/` grouped under `shared/`.
* Components
  * Input
  * Button
  * Loading Indicator
  * List Card Item
* Screen Templates
  * TBD

## Utils
* Calculate distance
* Calculate cost
* Formatting

## Hooks
* useDisableHardwareBackButton

## Mock API
* Database / Storage
* Endpoints
  * Riders
  * Drivers
  * Riders
---
---
# Screens (initial plan, derived from requirements)

## Common
* Welcome
  * Display: Buttons for Rider vs Driver
  * Input: Pick User type

## Rider
* Login/signup page
  * Display: List of existing Users
  * Input: Enter new User name, or pick existing User
* Find Driver
  * Input: Pickup and dropoff locations
* Result
  * Display: Distance, quote, etc.
  * Input: Confirm request Ride
* Request status (Pending or Accepted/ETA)
* Ride progress (ETA, map)

## Driver
* Login/signup
* Requests list
  * Display: List of existing Users
  * Input: Enter new User name, or pick existing User
* Ride progress
  * Display: Pickup location / Dropoff location
  * Input: "Picked up" button / "Cancel ride" button
---
---
# Data (initial plan, derived from requirements)

## App
* Rider
  * Id
  * Name
* Driver
  * Id
  * Name
  * Status (Available, Busy, Offline)
* Ride
  * Id
  * Rider Id
  * Pickup
  * Dropoff
  * Status (Requested, Accepted, Ongoing, Completed)
  * Driver Id
  * Declined By

## Server (database) 
* Riders
* Drivers
* Rides
---
---
# Scope Definition

## Prototype
* Create/Pick User
* Request Ride
  * Pickup location
  * Dropoff location
* Compute distance and fee (hardcoded values)
* Create Ride request
* List pending Rides
* Update Ride status to Accepted and Driver ID
* Update Ride Declined By to Driver ID
* Update Ride status to Complete

## MVP
* Input pickup/dropoff locations
* Compute real distance
* Surge pricing for high Ride:Driver ratio
* Map the ride
* Styling

## v2
* User Rating
* Built-in payment
* Driver preferences
* Live-update, based on location
* In-app rating
* Backend: Handle race condition