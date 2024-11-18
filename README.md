# User Task Management Dashboard

This project is a full-stack application featuring a modern, responsive task management dashboard.

---

## **Overview**

### **Backend**

- **Framework**: Built with **Express** and **TypeScript**.
- **Database**: Utilizes **PostgreSQL** with **Prisma ORM** for data modeling and querying.
- **Dependency Management**: Powered by **Yarn** for consistent builds.
- **Hosting**: Hosted on **Render** for scalable and reliable backend services.
- **Features**:
  - API for task management (Create, Read, Update, Delete tasks).
  - Task filtering and sorting.
  - Persistent data handling with PostgreSQL.

### **Frontend**

- **Framework**: Developed using **Next.js** with **TypeScript**.
- **State Management**: Managed with **Redux Toolkit** and **RTK Query**.
- **Styling**: Built with **Tailwind CSS** for a sleek, responsive design.
- **Forms**: Form handling and validation using **React Hook Form** and **Yup**.
- **Data Visualization**: Task insights visualized with **Recharts**.
- **Hosting**: Deployed on **Vercel** for seamless performance.
- **Features**:
  - Task management dashboard with intuitive UI.
  - Responsive design across mobile, tablet, and desktop.
  - Charts displaying task distributions by priority and status.

---

## **Live Demo and Repositories**

- **Live Website**: [View the Dashboard](https://user-task-01.vercel.app/)
- **Backend Repository**: [GitHub - Backend](https://github.com/dev-rakibul1/user_manage)
- **Frontend Repository**: [GitHub - Frontend](https://github.com/dev-rakibul1/user_deshboard_front-end)

---

## **API Endpoints**

### **Task Management**

#### 1. Create Task (POST)

**Endpoint**:  
`https://user-manage-m53i.onrender.com/api/v1/task/create-task/`  
**Payload**:

```json
{
  "id": "ef62cc71-69c5-4e74-a9cd-6679aaad7f57",
  "name": "ABC Task",
  "priority": "HIGH",
  "status": "COMPLETED"
}
```

#### 2. Get All Task (GET)

**Endpoint**:  
`https://user-manage-m53i.onrender.com/api/v1/task/`

**Response Payload**:

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Task get success!",
  "data": [
    {
      "id": "03740d59-9134-47e2-94df-d2e5f38f51ab",
      "name": "Ok...",
      "priority": "HIGH",
      "status": "PENDING",
      "createdAt": "2024-11-18T09:08:32.560Z",
      "updatedAt": "2024-11-18T09:08:32.560Z"
    },
    {
      "id": "bc512e3b-61ec-4c2e-bcd4-41e8d80c1d1d",
      "name": "Manage Data",
      "priority": "HIGH",
      "status": "PENDING",
      "createdAt": "2024-11-18T09:08:23.490Z",
      "updatedAt": "2024-11-18T09:08:23.490Z"
    }
  ]
}
```

3. **Get Single Task (GET):**

   - Endpoint: `https://user-manage-m53i.onrender.com/api/v1/task/bc512e3b-61ec-4c2e-bcd4-41e8d80c1d1d/`
   - Payload:

   ```json
   {
      "statusCode": 200,
      "success": true,
      "message": "Single task get success!",
      "data": {
              "id": "bc512e3b-61ec-4c2e-bcd4-41e8d80c1d1d",
              "name": "Manage Data",
              "priority": "HIGH",
              "status": "PENDING",
              "createdAt": "2024-11-18T09:08:23.490Z",
              "updatedAt": "2024-11-18T09:08:23.490Z"
              }

   ```

4. **Update task (PATCH):**

   - Endpoint: `https://user-manage-m53i.onrender.com/api/v1/task/bc512e3b-61ec-4c2e-bcd4-41e8d80c1d1d/`
   - Payload:
     ```json
     {
       "name": "Manage Data",
       "priority": "HIGH",
       "status": "PENDING"
     }
     ```

5. **Delete task (DELETE):**
   - Endpoint: `https://user-manage-m53i.onrender.com/api/v1/task/bc512e3b-61ec-4c2e-bcd4-41e8d80c1d1d/`

### Frontend Overview

The frontend of this project is a modern, responsive task management dashboard built with Next.js and TypeScript.

- State Management: Utilizes Redux Toolkit and RTK Query for efficient state and API handling.
- Styling: Styled with Tailwind CSS for a consistent, responsive design across devices.
- Form Handling: Features robust form management and validation using React Hook Form and Yup.
- Data Visualization: Implements Recharts for visual representation of task data, such as priority or status distribution.
- Hosting: Deployed on Vercel for optimal performance and seamless user experience.
- This frontend ensures usability, responsiveness, and scalability while maintaining a modern UI/UX design.

### Project Setup\_\_\_\_

#### Frontend

1. Clone the [Frontend Repository](https://github.com/dev-rakibul1/user_deshboard_front-end).
2. Run `npm install` to install dependencies.
3. Run `yarn run dev` to start the development server.

#### Backend

1. Clone the [Backend Repository](https://github.com/dev-rakibul1/user_manage).
2. Run `Yarn install` to install dependencies.
3. Run `yarn run dev` to start the development server.

Feel free to contribute to completing the integration with the frontend.

## Contributing

Contributions are welcome! If you find issues or have suggestions, please open an issue on the respective GitHub repositories.

Thank you for using User task management dashboard!
