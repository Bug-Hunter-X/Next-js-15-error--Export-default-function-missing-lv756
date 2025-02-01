# Next.js 15 Bug: Missing Default Export

This repository demonstrates a common error encountered in Next.js 15 applications: forgetting to export the default function or component from a page file.

## Bug Description

In Next.js 15, each page file (located within the `pages` directory) must export a default function or component.  Failure to do so results in a runtime error.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Attempt to start the development server using `npm run dev`.

You will encounter an error indicating that the default export is missing.

## Solution

The solution is simply to ensure that the page file correctly exports the default function or component.