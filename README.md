# Todo App using Redux + JSON Server

This Todo application is built using Redux for state management and JSON Server to store todos. It includes the following features:

## Features

- Users can add a Todo, update it (toggle its status and edit the title), and delete it. All changes are reflected inside the `db.json` file used by JSON Server.
- Redux manages the above actions with proper logic inside the reducer and action creators.
- Redux Thunk is used to handle functions (as actions) when dispatched using the dispatcher function.
- Chakra UI is used for the user interface.
- The app theme is maintained by Redux with a separate reducer for the app theme.
- Loading and error indicators are included, with a separate reducer.

## Additional Features

- Toggle theme option: Users can switch between light and dark themes.
- Minimal functions are used inside components. Action.js files contain functions dispatched to execute them.

## Additional Information

- You can customize the app further by adding more features or enhancing existing ones.
- Don't hesitate to explore the codebase and experiment with different functionalities.
- Feedback and contributions are welcome. Feel free to create a pull request if you have any improvements to suggest.