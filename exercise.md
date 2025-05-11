# Joke Web App Project – TypeScript & API Integration

## Project Context

In previous submissions, we added the data directly into our programs (hardcoded), but this is not common practice.

As in most real-world websites, we’ll consume data from an API in this exercise. Fortunately, we won’t have to implement an API ourselves to store and retrieve data — we’ll use an existing API that allows us to easily fetch a list of jokes.

The two most important topics you’ll practice in this project are:

- **TypeScript**
- **Retrieving data via REST API calls**

---

## Real-World Context

A coaching company is conducting an experiment in companies around Barcelona to measure the impact of humor and fun on productivity.

They’ve requested a web application that displays jokes to employees before starting their workday.

You will be in charge of building the base of the project to present a demo to the client in two weeks and begin testing with real users.

---

## API Information

We will create a **joke website** that consumes data from a free API that does not require a key. It’s fun and interesting to get data from an API — just imagine the kinds of sites you could build!

In a professional setting, projects usually have a backend with documentation to help you fetch the data. Often, a website or app uses multiple data sources and third-party APIs.

> 💡 Knowing how to consume data from an API is one of the most essential skills for any front-end developer.

---

## ⚠️ Important

In any professional project, you’ll consume data from an API. Therefore, it’s crucial to understand how to make API calls and how asynchronous JavaScript works.

Useful links and documentation:

### API Call

**→ Random dad joke**

#### Required header

```http
'Accept': 'application/json'
```

We include this header so the server knows we want the response in JSON format.

- The **URL** is where we request the data from.
- The **header** tells the server what format to return the data in.

---

## 📝 Notes from the Front-End Lead

- All loops and logic must be implemented using **ES6** (`map`, `reduce`, `filter`, `sort`).  
  ❌ Do **not** use `for` loops.
- The project **must** be implemented in **TypeScript**.
- If you're unsure how to start a TypeScript project from scratch:
  **→ Steps to prepare a TypeScript project**

---

## Level 1

### Exercise 1

Create the **main screen** that shows jokes to the user.

#### Behavior

- On load, display the first joke and a "Next Joke" button.
- On clicking "Next Joke", fetch a joke from the API and display it in the console and on screen.

> 💡 You don’t need to design the page yet — just make it work first.

---

### 🛠️ Help

**Tip 1**: Use Promises or `async/await` to wait for the API response.  
**Tip 2**: Before coding, test the API in **Postman**. You’ll confirm it works and understand the response structure.

---

### Exercise 2

The app now fetches jokes and displays them. Time to create the layout.

- Place each element in position (don’t worry about details).
- Here's a proposed layout:  
  *(image not included in the original)*

---

### Exercise 3

The client needs to **track usage** of the web for their study.

You must create an array `reportJokes` to store all relevant information.

Each object must include:

```ts
{
  joke: "...",
  score: 1,
  date: "ISO 8601 string"
}
```

#### Requirements

- Date must be stored in **ISO format**
- Score range: 1–3 (1 = lowest). Create 3 buttons for scoring.
- Rating is **optional** — user can skip to the next joke without rating.
- User can **change** their rating before clicking “Next Joke”.
- Push data into the `reportJokes` array and log it in the console on update.

---

## Level 2

### Exercise 4

🎉 Great job! Now let’s enhance it further.

The app is intended to be used in the morning, so let’s show the **weather** too.

- Fetch and display weather info when the app loads using a weather API.

---

### Exercise 5

🔁 The client reports that users get bored seeing the same type of jokes.

- Find another joke API and alternate between them (either one-by-one or randomly).

> 💡 **Hint**: Chuck Norris jokes never fail 😉

---

## Level 3

### Exercise 6

Style the website using this screen layout or one you design. This is your chance to:

- Practice **Flexbox** or **CSS Grid**
- Apply fonts, colors, spacing, etc.

---

### Exercise 7 (Bonus)

If you’ve made it this far — congratulations!

Here are some **bonus ideas** if you have extra time:

- Show the **last 5 rated jokes** in a sidebar or footer
- **Auto-scroll** to the new joke when it's loaded
- Create a **chart** to visualize joke score evolution
- Use **localStorage** to keep a joke history even after a page refresh
- Add **animations** or **transitions** when showing a new joke
