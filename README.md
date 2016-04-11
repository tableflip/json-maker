# JSON-maker

**A fake JSON data manufacturer including *relevant* images**.  Because cats don't look great on a wedding website, even in development.

## How to use

1. Get yourself a Google CSE key and App ID exactly as described [here](https://www.npmjs.com/package/google-images).
2. Add these to config (use a *locals.json* to avoid committing to Github).
3. Update the search term which will be used to harvest images in *default.json*.
4. Update the function exported by *make-item.js* to return a single object conforming to the desired schema.
  - The function receives two arguments: **getImage** and **faker**.
  - **getImage** is called with no arguments and returns a single image consistent with the search term supplied in config.
  - **faker** provides access to all of the fake data methods provided by [faker.js](https://github.com/marak/Faker.js/).
5. Call the CLI with `node ./index.js [itemCount] [outputfile.json]`.  **Note that if *itemCount* is too high, the Google Search API might complain!**.
