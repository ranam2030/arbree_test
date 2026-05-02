# Saucedemo E2E Test Automation

End-to-end test automation suite for [saucedemo.com](https://www.saucedemo.com/v1/) built with Playwright and TypeScript, following the Page Object Model pattern.

## Author

- [@Masud Rana](https://github.com/ranam2030)

---

## Tech Stack

- **[Playwright](https://playwright.dev/)** — browser automation & test runner
- **TypeScript** — type-safe test code
- **Allure** — test reporting
- **GitHub Actions** — CI/CD pipeline
- **dotenv** — environment variable management

---

## Project Structure

```
arbree_test/
├── .github/
│   └── workflows/
│       └── playwright.yml       # CI/CD pipeline
├── tests/
│   ├── checkoutItemTest.spec.ts # Checkout flow tests
│   ├── productSortTest.spec.ts  # Product sorting tests
│   ├── cartTest.spec.ts         # Cart management tests
│   ├── loginTest.spec.ts        # Login validation tests
│   └── navigationTest.spec.ts  # Navigation & logout tests
├── pages/
│   ├── loginPage.ts
│   ├── productsPage.ts
│   ├── yourCart.ts
│   ├── checkoutPage.ts
│   └── navigationPage.ts
├── fixtures/
│   └── pomFixtures.ts           # Custom Playwright fixtures
├── utils/
│   ├── config.ts                # Env var exports
│   └── testData.ts              # Static test data
├── .env                         # Local env vars (gitignored)
├── .env.example                 # Env var template
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

---

## Test Suites

| Suite | File | Coverage |
|-------|------|----------|
| Login Validation | `loginTest.spec.ts` | Invalid credentials, locked-out user error |
| Checkout Flow | `checkoutItemTest.spec.ts` | Add to cart, verify item, fill info, confirm order |
| Product Sort | `productSortTest.spec.ts` | A→Z, Z→A, price low→high, price high→low, defaults |
| Cart Management | `cartTest.spec.ts` | Badge count, remove item, empty cart |
| Navigation | `navigationTest.spec.ts` | Logout via burger menu |

---

## Prerequisites

- [Node.js](https://nodejs.org/en/download/) v18 or above
- Java 8 or above (required for Allure reports)

---

## Installation

**1. Clone the repository and install dependencies**

```bash
npm ci
```

**2. Install Playwright browsers**

```bash
npx playwright install
```

**3. Set up environment variables**

Copy `.env.example` to `.env` and fill in the values:

```bash
cp .env.example .env
```

```env
LOGIN_URL=https://www.saucedemo.com/v1/
LOGIN_USERNAME=standard_user
LOGIN_PASSWORD=secret_sauce
```

---

## Running Tests

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests headlessly |
| `npm run test:headed` | Run all tests in headed mode |
| `npm run test:ui` | Open Playwright UI mode |
| `npm run report` | Open the HTML report |

Run a specific test file:

```bash
npx playwright test tests/loginTest.spec.ts
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
```

---

## Allure Report

**Generate and open the Allure report:**

```bash
npm run allure:generate
npm run allure:open
```

Install the Allure CLI globally if not already installed:

```bash
npm install -g allure-commandline
```

---

## CI/CD

Tests run automatically on every push and pull request to `main` / `master` via GitHub Actions.

**Required GitHub Secrets** — add these under *Settings → Secrets and variables → Actions*:

| Secret | Value |
|--------|-------|
| `LOGIN_URL` | `https://www.saucedemo.com/v1/` |
| `LOGIN_USERNAME` | `standard_user` |
| `LOGIN_PASSWORD` | `secret_sauce` |

The HTML test report is uploaded as a workflow artifact after each run (retained for 30 days).
