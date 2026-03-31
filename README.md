Personal Audit - Full Stack Banking and Personal Finance Dashboard

Overview - 
Simulates core banking and personal finance management features, like transaction tracking, budgeting and personal portfolio insights.

This project involves real-world financial system principles, combining both a robust backend architecture and an interactive frontend dashboard.


KEY FEATURES - 
Backend ~
- RESTful API built with Java 17 + Springboot 3
- PostgreSQL database (Dockerized)
- JPA/Hibernate ORM
- User and transaction management
- immutable ledger system
- accurate balance calculation

Frontend ~
- Interactive and responsive dashboard UI
- API Integration with Axios
- Easy navigation between financial tools (all in one place within the dashboard)

Dashboard Features ~
- Recent Transactions Table
- Budget Overview Panel 
- Create Budget Form
- Navigation to:
    - Bills Calendar
    - Portfolio View

Architecture ~
React Frontend (Dashboard)
        ↓
Spring Boot Backend (REST API)
        ↓
PostgreSQL (Docker)

Getting Started
1. Clone Repository
  git clone <your-repo-url>
  cd nexus-finance
2. Start Database
  docker compose up -d
3. Run Backend
  cd backend
  ./mvnw spring-boot:run
4. Run Frontend
  cd frontend
  npm install
  npm start
  Frontend runs on:
  http://localhost:5173/


Roadmap ~
Completed:
- Dockerized PostgreSQL
- Spring Boot backend
- User + Transaction Sysytem
- React Dashboard UI
- Budget tracking system
- Bills Calendar System
- Role-based access control
- CI/CD pipeline

In Progress:
- Portfolio Analytics page
- Enable JWT authentication
- Full Docker deployment

Tech Stack ~
- Backend: Java 17, Spring Boot, JPA
- Frontend: React, TypeScript, Acious
- Database: PostgreSQL (Docker)
- DevOps: Docker, GitHub Actions

Author:
Jerusha Jobson


