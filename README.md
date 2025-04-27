# Task Management System 🚀

A responsive and dynamic React.js task management application built with Bootstrap and Custom CSS, designed for both Admins and Employees.
This system enables task assignment, new task creation, status updates, and real-time tracking — all handled through efficient state management and LocalStorage persistence, delivering a fully responsive and functionally rich frontend experience.

---

## 📱 Key Features

### 👑 Admin Dashboard
- **Login as Admin** using admin credentials.
- **Assign New Tasks** to any employee by selecting their name.
- **View Employee Task Table** with full task history.
- **Fully responsive** and smooth experience on all devices.

### 👥 Employee Dashboard
- **Login as Employee** using employee credentials.
- **See Assigned Tasks** under the `New` tab.
- **Perform Task Actions**:
  - ✅ **Accept Task**
  - 🏁 **Complete Task**
  - ❌ **Fail Task**
- **Track Task Status** across New, Accepted, Completed, and Failed sections.

---

## 🛠️ Tech Stack

- ⚛️ **React.js** (No React Router used)
- 🅱️ **Bootstrap 5**
- 🎨 **Custom CSS**
- 💾 **LocalStorage** for data persistence (no backend)

---

## 🔑 Login Credentials

### 👑 Admin Login:
| Email | Password |
|:-----|:---------|
| `admin@example.com` | `123` |

### 👥 Employee Logins:
| Name | Email | Password |
|:----|:------|:---------|
| Employee 1 | `e@e.com` | `123` |
| Employee 2 | `employee2@example.com` | `123` |
| Employee 3 | `employee3@example.com` | `123` |
| Employee 4 | `employee4@example.com` | `123` |
| Employee 5 | `employee5@example.com` | `123` |

---

## 📋 How to Use

1. **Login** with Admin or Employee email/password.
2. If **Admin**:
   - You will be redirected to the **Admin Dashboard**.
   - Assign tasks to employees by selecting their name and filling in the task details.
3. If **Employee**:
   - You will be redirected to the **Employee Dashboard**.
   - View your assigned tasks under the **New** tab.
   - **Accept**, **Complete**, or **Fail** your tasks based on progress.
4. **Logout**:
   - Click on the **Logout** button to securely sign out.
   - After logout, you will be automatically redirected back to the **Login Dashboard**.
5. **Data Persistence**:
   - All task updates and status changes are automatically saved using **LocalStorage**, ensuring no data loss on page reload.

---
## 🖥️ Live Demo

🚀 **Live Project Link**:   https://task-management-system-seven-gamma.vercel.app/

---

## 💬 Notes

- **No React Router**: Page switching is handled using component-based conditional rendering.
- **Responsive Design**: Works perfectly across Desktop, Tablet, and Mobile screens using **Bootstrap** and **Custom CSS**.
- **Data Persistence**: Handled through **LocalStorage**, ensuring data is maintained even after refreshing.

---

## 🙌 Special Thanks

Thanks for checking out this project!  
If you like it, don't forget to ⭐ star the repository on GitHub!

---
