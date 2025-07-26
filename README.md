# Course-Enrollment
A mini course enrollment backend system built with **Node.js**, **Express**, **PostgreSQL**, and **Sequelize**, including a modular **rule engine** for business validations.

---

## 🚀 Features

- REST APIs for managing course enrollments
- Modular rule engine for business logic
- Sequelize ORM with PostgreSQL
- Unit tests for rule engine using Jest
- `.env` support for configuration

---

## 🏗️ Tech Stack

- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- Jest (for testing)
- dotenv

---

## 📁 Project Structure

```
.
├── src/
│   ├── app.js
│   ├── config/
│   │   └── config.js
│   ├── controllers/
│   │   ├── courseController.js
│   │   ├── enrollmentController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── index.js
│   │   ├── user.js
│   │   ├── course.js
│   │   └── enrollment.js
│   ├── routes/
│   │   └── index.js
│   ├── rules/
│   │   ├── checkCourseDomain.js
│   │   ├── checkMaxEnrollment.js
│   │   ├── checkUserLimit.js
│   │   ├── checkPublicAccess.js
│   │   └── index.js
│   ├── __mocks__/
│   │   └── models/
│   │       └── index.js
│   └── __tests__/
│       └── rules/
│           ├── checkCourseDomain.test.js
│           ├── checkMaxEnrollment.test.js
│           ├── checkUserLimit.test.js
│           └── checkPublicAccess.test.js
├── .env.example
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone git@github.com:MakrubiyaJatin/Course-Enrollment.git
cd Course-Enrollment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment
credentials:

```bash
cp env.example .env
```

Update a `.env` file.

### 4. Setup Database

Ensure PostgreSQL is running and then:

```bash
npm run db:create
npm run db:migrate
```

---

## 🧪 Run Tests

```bash
npm test
```

Tests are written for all rule engine modules using Jest.

---

## 📬 API Endpoints

### ➕ Enroll in Course

```
POST /api/enroll
```

**Request Body:**
```json
{
  "user_id": 1,
  "course_id": 2
}
```

---

### 📚 Get User's Courses

```
GET /api/user/:id/courses
```

Returns course titles and instructor names.

---

### 👥 Get Students in a Course

```
GET /api/course/:id/students
```

Returns student names and emails.

---

### 👤 Create User

```
POST /api/users
```

**Body:**
```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "domain": "math",
  "role": "student"
}
```

---

### 🎓 Create Course

```
POST /api/courses
```

**Body:**
```json
{
  "title": "Math 101",
  "domain": "math",
  "is_public": true,
  "instructor_id": 2
}
```

---

## ✅ Rule Engine Logic

- User and course must share the same `domain`
- Course must have ≤ 50 students
- User must be enrolled in < 5 courses
- Private courses require an email ending in `@example.com`

All rules are modular, reusable, and unit tested.

---

## 📂 DB Schema

- **Users**: `id`, `name`, `email`, `domain`, `role`
- **Courses**: `id`, `title`, `domain`, `is_public`, `instructor_id`
- **Enrollments**: `id`, `user_id`, `course_id`, `enrolled_at`

---

## 📌 Submission Includes

- ✅ Codebase with clear folder structure
- ✅ Sequelize migrations
- ✅ `README.md` with setup & usage
- ✅ Unit tests for rule engine
- ✅ `.env.example` file for configuration

