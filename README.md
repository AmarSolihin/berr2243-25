# berr2243-25
Here’s a **complete, ready-to-use README.md** file tailored exactly for your assignment. You can just copy-paste this into your repository:

---

# Week 1 Exercise: Environment Setup, Git Workflows & Hello MongoDB

## Objective
Set up core development tools, learn basic Git workflows, and create a simple NodeJS script that connects to MongoDB.

---

## Development Tools Installation

### 1. **VSCode Installation**
- Downloaded from: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Installed successfully.
- Installed recommended extension:
  - **MongoDB for VSCode**

---

### 2. **NodeJS & npm Installation**
- Downloaded LTS version from: [https://nodejs.org/](https://nodejs.org/)
- Verified installation:
  ```bash
  node -v
  npm -v
  ```
  Example output:
  ```
  v18.x.x
  9.x.x
  ```

---

### 3. **MongoDB Installation**
- Followed MongoDB Community Server installation guide:  
  [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/administration/install-community/)
- Started MongoDB service:
  ```bash
  sudo systemctl start mongod
  ```
- Verified MongoDB is running.

---

### 4. **Git Installation**
- Downloaded from: [https://git-scm.com/](https://git-scm.com/)
- Configured Git:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  git config --global --list
  ```

---

### 5. **MongoDB Compass Installation (Optional)**
- Downloaded and installed from:  
  [https://www.mongodb.com/products/compass](https://www.mongodb.com/products/compass)

---

## Repository Setup

- Created a GitHub repository named: `hello-mongodb`
- Branches:
  - `main`
  - `feature/setup`
- Cloned repository locally:
  ```bash
  git clone https://github.com/your-username/hello-mongodb.git
  cd hello-mongodb
  git checkout -b feature/setup
  ```

---

## Project Files

### 1. **index.js**

- Contains NodeJS script that:
  - Connects to MongoDB.
  - Inserts a document.
  - Reads and displays inserted document.

---

### 2. **.gitignore**
```bash
node_modules/
```

---

## Project Setup Steps

1. Initialize NodeJS project:
   ```bash
   npm init -y
   ```

2. Install MongoDB Driver:
   ```bash
   npm install mongodb
   ```

3. Run script:
   ```bash
   node index.js
   ```

---

## Deliverables

- GitHub repository: [Link to Repository]
- Branch structure:
  - `main`
  - `feature/setup`
- Files included:
  - `README.md`
  - `.gitignore`
  - `index.js`
- Screenshots:
  - VSCode with extensions.
  - Terminal outputs (tool installations, Git config, script execution).
  - MongoDB Compass showing inserted document.

---

## Author

**Your Name**

---

**Would you like me to prepare the `index.js` file for you as well to match this README?**
