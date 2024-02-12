# Sample Sorter

The Sample Sorter Application is a web-based solution designed to efficiently manage the allocation of test tubes to racks based on various legal and business requirements. This application provides a user-friendly interface for users to input a list of test tubes and automatically assigns them to racks while ensuring compliance with specific rules and constraints.

## Features

Test Tube Allocation: Users can input a list of test tubes containing materials for specific patients.
Automatic Assignment: The application automatically assigns test tubes to racks based on predefined rules.
Legal and Business Compliance: Test tubes are allocated to racks while adhering to the following legal and business requirements:

- Unique Patient Age: Patients of the same age cannot be placed in the same rack.
- Distinct Companies: Patients working in the same company cannot be placed in the same rack.
- Separate City Districts: Patients living in the same city district cannot be placed in the same rack.
- Distinct Vision Defects: Patients with the same vision defect cannot be placed in the same rack.
- Limited Racks: The application manages a limited number of racks to optimize resource allocation.

## This project has been bootstrapped with:

- Typescript
- React
- Redux Toolkit
- React Router
- Styled Components
- Webpack
- Babel
- ESLint
- Prettier

## NPM Commands

- Install: `npm install`
- Start: `npm start`
- Build: `npm run build`
- Run tests: `npm run test`
- Run ESLint: `npm run lint`

### Project Layout

```
├── build                       # output from compilation
├── config                      # webpack config files
├── public                      # public files
├── src                         # application code
│   ├── assets                  # static files
│   ├── components              # component files
│   └── containers              # container and page files
│   └── hooks                   # general purpose hooks
│   └── store                   # application state management
│   └── theme                   # application theme management
│   └── utils                   # general reusabale code
│   └── GlobalStyle.tsx         # global CSS declarations
│   └── index.tsx               # webpack entry point
└── .babelrc                    # compiler config
└── .eslintrc.js                # code quality config
└── .prettierrc                 # logic formatting config
└── .stylelint                  # style formatting config
└── jest.config.ts              # testing config
└── tsconfig.json               # typescript config file

```

### Development

To start the project in `development` mode, run `npm run start`.

The project runs on port `3000` by default, but this can be changed in `./config/webpack.dev.js`.

### IDE Configuration

The suggested IDE for this project is VSCode.

Install these extension for code-completion and linting in the IDE:

- **ESLint** (by Microsoft) to enforce **Code Quality Rules**
- **Prettier** (by Prettier) to enforce **JS/TS Formatting Rules**
- **Stylelint** (by Stylelint) to enforce **CSS Formatting Rules**
- **vscode-styled-components** (by Styled Components) to auto-complete CSS-in-JS
