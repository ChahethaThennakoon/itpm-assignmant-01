# IT3040 - Assignment 1: Software Quality Assurance
> **Note:** Please fill in your name and registration number below.
**Student Name:** Thennakoon T.M.C.T
**Registration Number:** IT23160316

## Description
This project contains 35 automated test cases (24 Positive, 10 Negative, 1 UI) for the Singlish to Sinhala transliteration tool at SwiftTranslator.com.

## Project structure
.
├── package.json                 # Project configuration and dependencies
├── playwright.config.js         # Playwright configuration
├── README.md                    # This file
├── tests/
│   └── transliteration.spec.js # Test specifications
├── transliteration.spec.js      # Test file (root directory)
├── playwright-report/           # Generated test report (HTML)
└── test-results/                # Detailed test results


## Required Libraries (Dev Dependencies):

@playwright/test (version ^1.40.0) - End-to-end testing framework

typescript (version ^5.9.3) - TypeScript compiler

## Click the terminal from the top of the navigation bar and select new terminal

## 1. Check if Node.js and npm are installed:
node --version
npm --version

## 2. Install all dependencies from package.json:
npm install

## Install Playwright Test as a dev dependency
npm install --save-dev @playwright/test@^1.40.0

## Install TypeScript as a dev dependency
npm install --save-dev typescript@^5.9.3 

## 3. Verify installation was successful:
npm list @playwright/test typescript

## 4. Run the tests after installation:
npm test

# finally if the code first time failed run it second time it will work correctly