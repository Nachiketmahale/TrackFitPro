
<h1 align="center">
  <br>
  <a href=""><img src="https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.png" alt="Markdownify" width="200"></a>
  <br>
  TrackFitPro
  <br>
</h1>

<!-- Features -->
## 🎨 Features

1️⃣ 📝 **Workout Logging** 
- Users can easily add and track their fitness progress.

2️⃣ 🔍 Smart Search & Filter
- Search by Name to quickly find user records.
- Filter by Workout Type.

3️⃣ 📊 Visual Progress Tracking (Optional Chart Feature) 

- View workout data in bar charts for better insights.
- Track total workout minutes per user.

4️⃣ 🛠️ Local Storage 

- Saves all user workouts in localStorage, ensuring persistence.
- Preloaded with sample users for quick testing.

<!-- Tech Stack -->

## 🛠️ **Tech Stack** 

🌐 **Frontend:**
- ✅ Angular 14+ – Framework for building the SPA (Single Page Application).
- ✅ TypeScript – Strongly typed JavaScript for better code management.
- ✅ Angular Material – UI components for forms, tables, and dropdowns.
- ✅ PrimeNG – Additional UI elements for a sleek design.
- ✅ Tailwind CSS – Utility-first CSS framework for styling.

📦 **Data Management:**

- ✅ LocalStorage – Stores user workout data persistently in the browser.

📊 **Charts & Visualization: (Optional Feature)**

- ✅ Chart.js / ngx-charts – Used for displaying workout progress graphs.

🧪 **Testing & Code Quality:**
- ✅ Jasmine & Karma – Unit testing for components & services.
- ✅ 100% Code Coverage – Ensures quality with test reports in README.

<!-- Prerequisites -->

## 📋 Prerequisites

- **1️⃣ Node.js (v18.x recommended)** – Download & Install: Node.js Official Site
- **2️⃣ NPM (v9+ or higher)** – Comes with Node.js (Check with npm -v)
- **3️⃣ Angular CLI (v14+)** – Required to create and manage Angular projects (`npm install -g @angular/cli`)



<!-- Installation -->

## 📥 Installation
- ✅ 1. Clone the Repository
    ```bash
    git clone https://github.com/Nachiketmahale/trackfitpro.git

    cd fit-track
    ```
- 📦 2. Install Dependencies
    ```bash
    npm install
    ```
- 🛠 3. Configure Tailwind CSS (Optional - If Not Installed)
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```
<!-- Running the application -->
## 🏃‍♂️ Running the Application

1. Start the development server:
    ```bash
    ng serve
    ```

2. Open your browser and navigate to:
    ```
    http://localhost:4200
    ```

<!-- Usage -->
## 📖 Usage Guide 


**1️⃣ Adding a Workout 🏋️**
- Go to the "Add Workout" section.
- Enter your name, select a workout type (Running, Swimming, Yoga, Walking, Cycling).
- Enter the workout duration (in minutes).
- Click "Add Workout" to save the entry.

**2️⃣ Viewing Workout History 📋**
- The main table displays all recorded workouts.
- The table includes user name, workout type, and total minutes logged.
- Data is stored in local storage, so it remains saved even after refreshing the page.

**3️⃣ Searching & Filtering 🔍**
- Use the Search by Name field to find a specific user's workouts.
- Use the Filter by Workout Type dropdown to view specific workout types (e.g., only Running or Swimming workouts).

**4️⃣ Workout Progress & Analytics 📊 (Optional Feature)**
- Users can view their workout data in charts (bar chart).
- The charts help visualize total time spent on different workout types.

**5️⃣ Pagination 📑**
- If there are more than 5 users, the table includes pagination to navigate through records.

<!-- Test Coverate -->

## 🧪 Testing the App 
   ```
   ng test
   ng test --code-coverage
   ```
   **Overall Test Coverage**
   **Component Level Coverage**
##  🚀 Build By
 👨‍💻 Developed by [Nachiket Mahale](https://github.com/your-github)  

## 🎯 Built For  
🏋️ Designed for **Fitness Enthusiasts, Athletes, and Health Trackers**

## 🎉 Inspired  By  
[![Fyle](https://img.shields.io/badge/Powered%20By-Fyle-blue?style=flat&logo=fyle)](https://www.fylehq.com)

## 📜 License

This software is licensed under the [MIT](https://github.com/nhn/tui.editor/blob/master/LICENSE) © [NHN Cloud](https://github.com/nhn).