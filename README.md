# Dev Stack

Dev Stack is a technology explorer where you can browse frontend, backend,
database, language, styling, DevOps, and tooling options, then build your own
personal development stack by adding the ones you like to a live "Your Stack"
panel.

## Description

Instead of scrolling through scattered blog posts to decide what to use for
your next project, Dev Stack puts 14 popular technologies in one place —
each with a rating, difficulty level, and short description — so you can
compare them side by side and collect your favorites into a single stack
you can review, edit, or clear at any time.

## Technologies Used

- **React** (Vite) — component-based UI
- **JavaScript (ES6+)**
- **Tailwind CSS** + **DaisyUI** — styling
- **React-Toastify** — toast notifications
- **JSON** — technology dataset, loaded via `fetch`

## Features

1. **Build-your-own stack** — Add any technology card to the "Your Stack"
   panel with one click; duplicate adds are blocked with a warning toast,
   and each added card is disabled and marked "✓ Added to Stack".
2. **Remove individually or all at once** — Remove a single technology from
   the stack with its ✕ button, or clear the whole stack instantly with
   "Remove All".
3. **Fully responsive, single-source brand theme** — A sticky navbar with a
   mobile hamburger menu, a responsive card grid (1/2/3 columns), and a
   shared orange → pink → violet gradient defined once in `src/index.css`
   and reused across the brand name, hero heading, and primary buttons.

## Live Demo

- GitHub Repository: https://github.com/JamesAnthonyPurification/B14-A05-DevStack
- Live Site: https://b14-a05-dev-stack-nine.vercel.app/

## Getting Started

```bash
npm install
npm run dev
```

---

## React Questions & Answers

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension for JavaScript that lets us write HTML-like markup
directly inside our JavaScript/React code (e.g. `<div>Hello</div>`). It's
used because it makes describing what the UI should look like much more
readable than calling `React.createElement()` by hand — JSX gets compiled
into those calls behind the scenes.

**2. What is the difference between props and state?**
Props are values passed **into** a component from its parent — the
component receiving them cannot change them, only read them. State is data
a component **owns and manages itself**, and it can change over time (for
example, with `useState`), causing the component to re-render. In this
project, `technologies` and `stack` are state owned by `App`, while each
`TechCard` receives its `tech` and `isAdded` data as props.

**3. What does the `useState` hook do, and where did you use it in this
project?**
`useState` lets a functional component keep and update its own local data
between renders. In `App.jsx` I used it three times: `technologies` (the
list fetched from JSON), `loading` (whether the fetch is still in progress),
and `stack` (the list of technologies the user has added).

**4. What does the `useEffect` hook do, and why did you need it to load the
JSON data?**
`useEffect` runs side effects — code that reaches outside of React's normal
render flow, like fetching data, after the component renders. Fetching the
JSON file is a side effect (an asynchronous network/file request), so it
can't happen directly in the component body during render. I used
`useEffect` with an empty dependency array (`[]`) in `App.jsx` so the fetch
runs exactly once, right after the app first mounts.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell list items apart between renders so it knows
which ones were added, removed, or reordered, instead of re-rendering the
entire list from scratch. Without a stable, unique key, React can mismatch
items and cause bugs or lose UI state (like input focus). In this project
each technology has a unique `id`, which is used as the `key` when mapping
over both the technology grid and the "Your Stack" list.

**6. What is conditional rendering? Show one place you used it (example:
the empty stack message).**
Conditional rendering means showing different UI depending on some
condition, using normal JavaScript (`if`, ternaries, or `&&`) inside your
component. In `StackSidebar.jsx`, I check `stack.length === 0`: if true, it
renders the "Your stack is empty." placeholder; otherwise it renders the
list of added technologies and the "Remove All" button.

**7. How do you pass data from a parent component to a child component, and
how does a child send something back to the parent?**
A parent passes data down to a child through **props** — for example,
`<TechCard tech={tech} isAdded={isAdded} onAdd={onAdd} />`. To send
information back up, the parent passes a **function** down as a prop, and
the child calls that function (usually from an event handler) with
whatever data the parent needs. For example, `TechCard`'s "Add to Stack"
button calls `onAdd(tech)`, which runs `handleAdd` back in `App.jsx` and
updates the shared `stack` state.
