# Playwright E2E Testing Project

This repository contains end-to-end (E2E) tests using [Playwright](https://playwright.dev/), a fast and reliable testing framework for web applications.

## 📁 Project Structure

```
.
├── tests/                # Your test files (e.g., example.spec.ts)
├── playwright.config.ts # Playwright configuration
├── package.json          # Project dependencies and scripts
└── .github/
    └── workflows/
        └── playwright.yml # GitHub Actions workflow
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v18 or higher recommended)
- npm (comes with Node.js)
- Git

### Install dependencies

```bash
npm install
```

## ▶️ Running Tests Locally

### Run all tests

```bash
npx playwright test
```

### Run tests with UI (headed mode)

```bash
npx playwright test --headed
```

### View last HTML report

```bash
npx playwright show-report
```

## 📷 Tracing and Debugging

Playwright is configured to collect a **trace on the first retry** of a failed test. You can view the trace like this:

```bash
npx playwright show-trace trace.zip
```

Trace files will appear inside the `.playwright` folder automatically after test retries.

## 🧪 Test Configuration

The Playwright config (`playwright.config.ts`) is set to:

- Run tests in parallel
- Use HTML reporter
- Retry failed tests **only on CI**
- Run Chromium browser by default
- Use `data-test` as the `testIdAttribute`
- Collect traces on first retry

```ts
use: {
  headless: process.env.CI ? true : false,
  testIdAttribute: 'data-test',
  trace: 'on-first-retry',
},
```

## 🔁 Continuous Integration (GitHub Actions)

This project is configured to run tests automatically on **every push to the `main` branch** using GitHub Actions.

### Workflow file

Located at: `.github/workflows/playwright.yml`

### Key steps:

- Runs on `ubuntu-latest`
- Installs Node and dependencies
- Installs Playwright browsers
- Runs `npx playwright test`
- Uploads the HTML report as a GitHub artifact

### View Reports

1. Go to the [Actions tab](../../actions)
2. Select the latest workflow run
3. Download the `playwright-report` artifact
4. Unzip and open `index.html` in your browser

## 📦 Scripts

You can optionally add these scripts to `package.json` for convenience:

```json
"scripts": {
  "test": "npx playwright test",
  "test:headed": "npx playwright test --headed",
  "report": "npx playwright show-report",
  "install:browsers": "npx playwright install --with-deps"
}
```

Then run:

```bash
npm run test
npm run report
```

## 🧰 Useful Resources

- [Playwright Docs](https://playwright.dev/)
- [Playwright Test Reporters](https://playwright.dev/docs/test-reporters)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

## 📄 License

This project is licensed under the [MIT License](LICENSE).
