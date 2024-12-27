# Unhandled error in Next.js 15 API route

This repository demonstrates a common error in Next.js 15 API routes where an unhandled error causes the application to crash. The example shows how to properly handle errors using async/await and try...catch blocks.

## Bug

The `pages/api/data.js` file contains an API route that fetches data asynchronously.  The `fetchData` function simulates an asynchronous operation that might fail randomly. If the operation fails, an error is thrown.  However, this error isn't caught, leading to a server-side error and crash.

## Solution

The `pages/api/dataSolution.js` file demonstrates the solution. The code is wrapped in a `try...catch` block to handle potential errors. If an error occurs during the asynchronous operation, the `catch` block returns a proper error response to the client.
