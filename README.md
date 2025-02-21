# Blog Admin React + Vite

## Introduction
Blog Admin is a web-based admin panel built using React. It includes various UI components, themes, and structured page layouts for easy customization.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Contributors](#contributors)
- [License](#license)

## Installation
To set up and run the project locally, follow these steps:

```bash
# Clone the repository
git clone https://github.com/your-repo/ayuna-admin.git

# Navigate to the project directory
cd blog-admin

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Usage
1. Open `http://localhost:3000` in your browser after running `npm run dev`.
2. Modify components in the `src/components/` directory as needed.
3. Customize pages under `src/pages/`.

## Project Structure
```
blog-admin/
│── node_modules/
│── public/
│── src/
│   ├── assets/
│   │   ├── select2/
│   │   ├── select2-bootstrap-theme/
│   ├── components/
│   │   ├── admin/
│   │   ├── user/
│   ├── datas/
│   ├── pages/
│   │   ├── about/
│   │   ├── blog/
│   │   ├── gallery/
│   │   ├── project/
│   │   ├── section/
│   │   ├── service/
│   │   ├── testimony/
│   │   ├── user/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
```

## Features
- React-based component structure
- Themed UI with `select2` and Bootstrap integration
- Multiple pre-built page templates (About, Blog, Gallery, etc.)
- Modular component-based structure for reusability

## Dependencies
- React
- Vite
- Select2
- Bootstrap

## Configuration
- Modify `.env` for environment variables
- Change theme settings in `src/assets/`
- Customize UI components in `src/components/`

## Contributors
- [Joni Iskandar](https://github.com/al-iskandari)
- Feel free to contribute!

## License
This project is licensed under the MIT License.
