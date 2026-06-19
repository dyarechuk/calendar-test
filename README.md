# Calendar Test Task

A calendar application built with React and TypeScript that supports creating, editing, deleting, and dragging events across calendar views.

## Features

### Calendar

- Month view
- Week view
- Day view
- Agenda view
- Navigation between dates
- Current time indicator
- Today highlighting

### Event Management

- Create events
- View event details
- Edit existing events
- Delete events
- Drag & drop event rescheduling
- Color selection for events
- Validation for event fields
- Disable editing for past events

### UI

- Context-aware event modal positioning
- Click outside to close modal
- Responsive calendar layout
- Styling based on provided design

---

## Tech Stack

### Core

- React
- TypeScript
- Vite

### UI

- Tailwind CSS
- React Big Calendar

### Date Handling

- date-fns

### Drag & Drop

- react-dnd
- react-big-calendar Drag & Drop addon

---

## Architecture

The project follows a simplified **Feature-Sliced Design (FSD)** structure.

```text
src/
├── app/
│   └── providers/
│
├── pages/
│   └── calendar/
│
├── features/
│   └── calendar-event/
│       ├── model/
│       ├── ui/
│       └── lib/
│
├── widgets/
│   └── app-layout/
│
└── shared/
    └── ui/
```

### Layers

#### app

Application initialization and providers.

#### pages

Application pages and page-specific logic.

#### widgets

Large reusable UI blocks.

#### features

Business features and domain logic.

#### shared

Reusable UI components and utilities.

---

## Project Structure

### Calendar Page

Responsible for:

- Calendar rendering
- View switching
- Event interactions
- Modal management

### Calendar Event Feature

Responsible for:

- Event CRUD operations
- Event validation
- Event modal state management
- Event form handling

---

## Installation

```bash
npm install
```

---

## Development

```bash
npm run dev
```

Application will be available at:

```text
http://localhost:5173
```

---

## Build

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

## Lint

```bash
npm run lint
```

---

## Notes

- Events are stored locally in browser storage.
- Event dragging is supported in calendar views.
- Past events can be viewed but cannot be edited.
- Modal positioning adapts automatically based on available viewport space.
