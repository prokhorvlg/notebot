

State flow to prevent race conditions

Editor change -> 
action -> 
state change -> 
reflect within cloud

## Firebase firestore schema

Firestore is a noSQL database with a simple data structure sort of analogous to JSON.
A firestore is built out of nested "collections", which can be thought of as a dictionary of keys linked to sub-objects.

... represents interfaces defined within the front end.

```
users: [
  [user]: {
    categories: [
      [category]: {
        ...
      },
      ...
    ],
    notes: [
      [note]: {

      },
      ...
    ]
  }
]

```

## Philosophies

- API endpoints and services should be as granular, seperated, and easy to understand as possible.

- Don't want too much middleware or it gets hard to navigate a large project. hook, state, and API should generally be enough - though helper functions should always be seperated out into utils.

- Don't spend too much time trying to come up with clever logic. Clean archicture and readable code is far more important, and UI performance gains at this level are trivial. Might have different considerations with a larger project with more entries.

## Retrospective Notes

This application was first developed around 2021 as a React experiment, then using 
- CRA;
- plain JavaScript.

This application was fully refactored in late 2023:
- Vite (much faster and newer than CRA);
- TypeScript (super necessary for anything with data, which is like, everything?)
- Zustand and Jotai to manage state

### Styles in SCSS would be in Tailwind

SCSS was my go to for the better part of the last decade. Even with CSS in JS, it was the fastest solution to quick prototyping and development of UI. And now CSS in JS seems to be going away...

That has changed. I am now trying to use Tailwind in newer applications. Within an hour of trying it, I understood its value. No more arbitrary class names everywhere... no more seperated style sheets, no more giant blobs of redundant styling. With the right plugins, it seems to be the perfect upgrade to SCSS.

If this application was created now, I would use Tailwind.

### Tapping into global state

You may notice that many of these components tap into the global state directly, rather than using props.

This is because there are few examples of re-usable components here.

If there were common or re-usable components here, they would not tap into the global state and instead be fed props.

### State Management choices

// Why use Jotai instead of Zustand here?

// Zustand is a big state management solution comparable to Redux. It's overkill!
// Jotai is essentially a global useState. Perfect for sharing small bits of UI state without prop drilling or the wordiness of useContext. It's all personal preference.