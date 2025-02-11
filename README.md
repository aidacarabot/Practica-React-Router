# React Router Basic Practice

This project is a simple practice exercise to understand how to use **React Router** for navigation in a React application. It includes multiple pages, parameterized routes, and a 404 error page.

## 📌 Features
- Routing setup with `react-router-dom`
- Navigation between three pages (`Home`, `About`, and `Contact`)
- Dynamic parameter passing in the `Contact` page
- A `Header` component for navigation
- A `NotFound` page for handling non-existent routes

## 🛠 Tech Stack
- React.js
- React Router DOM
- Vite (for fast development)

## 📂 Project Structure
```
/mi-proyecto-react-router
│── /node_modules
│── /public
│── /src
│   │── /pages
│   │   │── Home.jsx
│   │   │── About.jsx
│   │   │── Contact.jsx
│   │   │── NotFound.jsx
│   │── /components
│   │   │── Header.jsx
│   │── App.jsx
│   │── main.jsx
│── package.json
│── vite.config.js
│── index.html
│── README.md
```

## 🚀 Installation & Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/react-router-practice.git
   cd react-router-practice
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open your browser and go to:
   ```sh
   http://localhost:5173/
   ```

## 📄 Routes in the Application
| Path              | Component  | Description |
|------------------|------------|-------------|
| `/`              | Home       | Displays the homepage |
| `/about`         | About      | About us page |
| `/contact/:name` | Contact    | Receives a dynamic parameter (`name`) and displays it |
| `*`              | NotFound   | Displays a 404 page for unknown routes |

## 📜 License
This project is licensed under the MIT License.

---

Made with ❤️ for React learning! 🚀

