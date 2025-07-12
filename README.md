
# Freelancer Project - Backend | بک‌اند پروژه فریلنسری

This repository contains the backend of a freelancing web application built with **Node.js** and uses **MongoDB Atlas** for data storage.  
این ریپوزیتوری شامل بک‌اند اپلیکیشن فریلنسری است که با استفاده از **Node.js** توسعه داده شده و برای ذخیره‌سازی اطلاعات از **MongoDB Atlas** استفاده می‌کند.

## 📌 Description | توضیحات

The backend was originally developed by **Saheb Mohammadi**. I (Alireza Ghazanfari) am using it as a learning project.  
بک‌اند این پروژه توسط **صاحب محمدی** نوشته شده و من (علیرضا غضنفری) صرفاً برای اهداف آموزشی از آن استفاده کرده‌ام.

It is deployed on **Render** and connected to **MongoDB Atlas**.  
این بک‌اند روی پلتفرم **Render** مستقر شده و به دیتابیس MongoDB Atlas متصل است.

### 🔗 Important Links | لینک‌های مهم

- Frontend Repo | ریپوی فرانت‌اند: [GitHub - Freelancer Frontend](https://github.com/Alireza-Ghazanfari-0/Freelancer-project-front)  
- Deployed Frontend | سایت فرانت‌اند: [freelancer-application.liara.run](https://freelancer-application.liara.run/)  
- Deployed Backend | API بک‌اند: [freelancer-project-backend-87md.onrender.com](https://freelancer-project-backend-87md.onrender.com/)

## 📦 Features | ویژگی‌ها

- Built with Node.js and Express  
  طراحی‌شده با Node.js و Express  
- Uses MongoDB Atlas as the database  
  اتصال به پایگاه داده MongoDB Atlas  
- Role-based user management (Freelancer, Employer, Admin)  
  مدیریت کاربران با نقش‌های مختلف (فریلنسر، کارفرما، ادمین)  
- OTP-based login (simulated for now)  
  ورود با کد یک‌بارمصرف (فعلاً به‌صورت شبیه‌سازی‌شده)

> OTP code is shown directly on the login page for development purposes.  
> به‌منظور توسعه، کد تأیید مستقیماً در صفحه لاگین نمایش داده می‌شود.

## ⚙️ Getting Started | راه‌اندازی پروژه

```bash
git clone https://github.com/Alireza-Ghazanfari-0/Freelancer-project-backend
cd Freelancer-project-backend
npm install
npm run dev
```

### Required Environment Variables | متغیرهای محیطی مورد نیاز

Create a `.env` file with the following content:  
یک فایل `.env` با مقادیر زیر بسازید:

```
PORT=5000
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
```

## 🛠 Project Purpose | هدف پروژه

This app connects freelancers with employers for project collaboration.  
Users can register as freelancers or employers, post projects, and work together.  
Admins oversee and manage the whole platform.

این اپلیکیشن برای اتصال فریلنسرها و کارفرماها طراحی شده تا روی پروژه‌ها همکاری کنند.  
کاربران می‌توانند پروژه ثبت کنند، درخواست ارسال کنند و توسط ادمین نظارت شوند.

---

Thanks 🙌 | با تشکر 🙌  
**Alireza Ghazanfari**
