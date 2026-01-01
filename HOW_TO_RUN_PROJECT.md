# 🚀 Shopify Reviews - Complete Setup & Run Guide

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Database Setup](#database-setup)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Troubleshooting](#troubleshooting)
- [Production Deployment](#production-deployment)

---

## 📋 Prerequisites

Before starting, ensure you have the following installed:

### Required Software

- **PHP 7.4+** - Check version: `php --version`
- **MySQL/MariaDB** - Check version: `mysql --version`
- **Node.js 16+** - Check version: `node --version`
- **npm** - Check version: `npm --version`

### Quick Installation Check

```bash
# Check all prerequisites at once
php --version && mysql --version && node --version && npm --version
```

---

## 🗂️ Project Structure

```
storeware-reviews/
├── backend/                    # PHP Backend
│   ├── api/                   # API endpoints
│   ├── config/                # Database & CORS configuration
│   │   ├── database.php       # Database connection
│   │   └── cors.php          # CORS settings
│   └── scraper/              # Review scraping utilities
├── src/                       # React Frontend Source
│   ├── components/           # React components
│   ├── services/             # API service layer
│   │   └── api.js           # API configuration
│   ├── pages/               # Page components
│   └── main.jsx             # React entry point
├── dashboard.html            # Main HTML entry point
├── package.json             # Frontend dependencies
├── vite.config.js           # Vite configuration
├── shopify_reviews_database_complete.sql  # Database schema
└── router.php               # Production router
```

**Note:** The frontend is in the **root directory**, not in a separate `frontend/` folder.

---

## 🗄️ Database Setup

### Step 1: Create Database

#### Option A: Command Line (Recommended)

```bash
# Navigate to project root
cd /Users/rasel/Mine/mywork/mahbubvai/storeware-reviews

# Create database
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS shopify_reviews;"

# Import complete schema with sample data
mysql -u root -p shopify_reviews < shopify_reviews_database_complete.sql

# Verify tables were created
mysql -u root -p -e "USE shopify_reviews; SHOW TABLES;"
```

#### Option B: Using phpMyAdmin

1. Open phpMyAdmin in your browser
2. Click "New" to create a database
3. Name it `shopify_reviews`
4. Select the database
5. Go to "Import" tab
6. Choose `shopify_reviews_database_complete.sql`
7. Click "Go"

### Step 2: Verify Database

```bash
# Check if tables exist
mysql -u root -p shopify_reviews -e "SHOW TABLES;"

# Expected tables:
# - reviews
# - app_metadata
# - access_reviews
```

### Step 3: Configure Database Connection

The database configuration is in `backend/config/database.php`.

**For local development**, default settings should work:

- Host: `localhost`
- Database: `shopify_reviews`
- Username: `root`
- Password: `` (empty)
- Port: `3306`

**For production**, set environment variables:

```bash
export MYSQL_HOST=your_host
export MYSQL_DATABASE=shopify_reviews
export MYSQL_USER=your_username
export MYSQL_PASSWORD=your_password
export MYSQL_PORT=3306
```

---

## 🖥️ Backend Setup

### Step 1: Navigate to Backend Directory

```bash
cd /Users/rasel/Mine/mywork/mahbubvai/storeware-reviews/backend
```

### Step 2: Test Database Connection

```bash
php -r "
require_once 'config/database.php';
\$db = new Database();
\$conn = \$db->getConnection();
if (\$conn) echo '✅ Database connected successfully!\n';
else echo '❌ Database connection failed!\n';
"
```

### Step 3: Start Backend Server

```bash
# Start PHP built-in server on port 8000
php -S localhost:8000

# You should see:
# PHP 8.x.x Development Server (http://localhost:8000) started
```

**Important:** Keep this terminal window open! The backend server must keep running.

### Step 4: Test Backend API (New Terminal)

```bash
# Test if API is working
curl http://localhost:8000/api/available-apps.php

# Should return JSON with 6 apps:
# - StoreSEO
# - StoreFAQ
# - EasyFlow
# - BetterDocs FAQ Knowledge Base
# - Vidify
# - TrustSync
```

---

## ⚛️ Frontend Setup

### Step 1: Navigate to Project Root

```bash
cd /Users/rasel/Mine/mywork/mahbubvai/storeware-reviews
```

### Step 2: Install Dependencies

```bash
# Install all npm packages (first time only)
npm install

# This will install:
# - React 19.1.0
# - Vite 7.0.4
# - Axios 1.11.0
# - React Router DOM 7.7.1
```

### Step 3: Verify Installation

```bash
# Check if node_modules exists
ls -la node_modules

# Verify package.json
cat package.json
```

---

## 🚀 Running the Application

### Development Mode (Two Terminals Required)

#### Terminal 1: Backend Server

```bash
# Navigate to backend directory
cd /Users/rasel/Mine/mywork/mahbubvai/storeware-reviews/backend

# Start PHP server
php -S localhost:8000

# Keep this terminal running!
```

#### Terminal 2: Frontend Server

```bash
# Navigate to project root
cd /Users/rasel/Mine/mywork/mahbubvai/storeware-reviews

# Start Vite development server
npm run dev

# You should see:
# VITE v7.x.x ready in xxx ms
# ➜ Local: http://localhost:5173/
# ➜ Network: use --host to expose
```

### Access the Application

Open your browser and navigate to:

```
http://localhost:5173/
```

### What You Should See

✅ **Shopify App Review Analytics Dashboard**

- App selector dropdown with 6 apps
- "Choose an app to analyze" message by default
- Navigation tabs: Analytics, Access, Review Count, Review Credit
- No console errors in browser DevTools (F12)

---

## 🔍 Testing the Setup

### 1. Test Backend API

```bash
# Test available apps endpoint
curl http://localhost:8000/api/available-apps.php

# Test reviews endpoint
curl http://localhost:8000/api/this-month-reviews.php

# Test health check
curl http://localhost:8000/api/health.php
```

### 2. Test Frontend-Backend Connection

1. Open browser to `http://localhost:5173/`
2. Open DevTools (F12) → Console tab
3. Select an app from dropdown
4. Check Network tab for API calls to `/backend/api/`
5. Verify no CORS errors

### 3. Test Database Connection

```bash
cd backend
php -r "
require_once 'config/database.php';
\$db = new Database();
\$conn = \$db->getConnection();
\$stmt = \$conn->query('SELECT COUNT(*) as count FROM reviews');
\$result = \$stmt->fetch(PDO::FETCH_ASSOC);
echo 'Total reviews in database: ' . \$result['count'] . PHP_EOL;
"
```

---

## 🛠️ Troubleshooting

### Backend Issues

#### Problem: Database Connection Failed

```bash
# Solution 1: Check MySQL is running
sudo systemctl status mysql
# or
brew services list | grep mysql

# Solution 2: Verify credentials
mysql -u root -p
# Enter password and check if you can login

# Solution 3: Check database exists
mysql -u root -p -e "SHOW DATABASES LIKE 'shopify_reviews';"
```

#### Problem: Port 8000 Already in Use

```bash
# Solution 1: Find and kill process using port 8000
lsof -ti:8000 | xargs kill -9

# Solution 2: Use different port
php -S localhost:8001

# Then update frontend API configuration:
# Edit src/services/api.js
# Change: const API_BASE_URL = '/backend/api';
# Note: In development, Vite proxy handles this automatically
```

#### Problem: PHP Extensions Missing

```bash
# Check if PDO MySQL extension is installed
php -m | grep pdo_mysql

# If not installed (macOS with Homebrew):
brew install php
brew install php-mysql

# If not installed (Ubuntu/Debian):
sudo apt-get install php-mysql
sudo systemctl restart apache2
```

### Frontend Issues

#### Problem: Port 5173 Already in Use

```bash
# Solution 1: Vite will auto-increment to 5174, 5175, etc.
# Just use the port shown in terminal

# Solution 2: Specify custom port
npm run dev -- --port 3000
```

#### Problem: Dependencies Installation Failed

```bash
# Solution 1: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Solution 2: Use different package manager
npm install -g pnpm
pnpm install
```

#### Problem: Module Not Found Errors

```bash
# Ensure you're in the correct directory
pwd
# Should show: /Users/rasel/Mine/mywork/mahbubvai/storeware-reviews

# Reinstall dependencies
npm install
```

### CORS Issues

#### Problem: CORS Error in Browser Console

```bash
# Check backend CORS configuration
cat backend/config/cors.php

# Verify allowed origins include:
# - http://localhost:5173
# - http://localhost:5174
# - http://localhost:3000

# Restart backend server after changes
```

#### Problem: API Calls Failing

1. Verify backend is running on port 8000
2. Verify frontend is running on port 5173
3. Check browser DevTools → Network tab
4. Look for failed requests (red)
5. Check request URL and response

---

## 📱 Quick Reference Commands

### Daily Development Workflow

```bash
# Terminal 1: Start Backend
cd /Users/rasel/Mine/mywork/mahbubvai/storeware-reviews/backend && php -S localhost:8000

# Terminal 2: Start Frontend
cd /Users/rasel/Mine/mywork/mahbubvai/storeware-reviews && npm run dev

# Browser: Open http://localhost:5173/
```

### Useful Commands

```bash
# Check what's running on ports
lsof -i :8000  # Backend
lsof -i :5173  # Frontend

# Stop servers
# Press Ctrl+C in each terminal

# View backend logs
tail -f /var/log/php_errors.log

# Clear frontend cache
rm -rf node_modules/.vite

# Rebuild frontend
npm run build
```

---

## 🌐 Production Deployment

### Build for Production

```bash
# Build frontend assets
npm run build

# This creates:
# - index.html (from dashboard.html)
# - assets/index.js
# - assets/index.css
```

### Deployment Options

#### Option 1: Railway (Recommended)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
railway up

# Set environment variables in Railway dashboard:
# - MYSQL_HOST
# - MYSQL_DATABASE
# - MYSQL_USER
# - MYSQL_PASSWORD
# - MYSQL_PORT
```

#### Option 2: Traditional Hosting (cPanel/Shared Hosting)

1. Upload all files to server
2. Import database using phpMyAdmin
3. Update `backend/config/database.php` with production credentials
4. Ensure `.htaccess` is configured for routing
5. Point domain to project root

#### Option 3: VPS/Cloud Server

```bash
# Install dependencies
sudo apt-get update
sudo apt-get install php php-mysql mysql-server nginx

# Configure Nginx
# Copy backend and frontend files
# Set up database
# Configure environment variables
```

### Environment Variables for Production

Create `.env` file or set system environment variables:

```bash
MYSQL_HOST=your_production_host
MYSQL_DATABASE=shopify_reviews
MYSQL_USER=your_production_user
MYSQL_PASSWORD=your_production_password
MYSQL_PORT=3306
```

---

## 📊 Project Features

### Available Apps

1. **StoreSEO** - SEO optimization app
2. **StoreFAQ** - FAQ management
3. **EasyFlow** - Workflow automation
4. **BetterDocs FAQ Knowledge Base** - Documentation
5. **Vidify** - Video integration
6. **TrustSync** - Trust badges

### Dashboard Sections

- **Analytics** - Review statistics and trends
- **Access Reviews** - Last 30 days reviews with assignment
- **Review Count** - Monthly review counts
- **Review Credit** - Review credit tracking

### API Endpoints

- `/api/available-apps.php` - Get list of apps
- `/api/this-month-reviews.php` - Current month reviews
- `/api/last-30-days-reviews.php` - Last 30 days reviews
- `/api/average-rating.php` - Average ratings
- `/api/review-distribution.php` - Star rating distribution
- `/api/access-reviews.php` - Access reviews with filters
- `/api/health.php` - Health check

---

## 🔧 Configuration Files

### Frontend Configuration

- **vite.config.js** - Vite build and dev server settings
- **package.json** - Dependencies and scripts
- **src/services/api.js** - API base URL configuration

### Backend Configuration

- **backend/config/database.php** - Database connection
- **backend/config/cors.php** - CORS allowed origins
- **backend/config/platform.php** - Platform detection
- **router.php** - Production routing

---

## 📞 Support & Additional Resources

### Documentation Files

- `DATABASE_SETUP_GUIDE.md` - Detailed database setup
- `RAILWAY_DEPLOYMENT_GUIDE.md` - Railway deployment
- `SINGLE_DOMAIN_DEPLOYMENT_GUIDE.md` - Single domain setup
- `UNIVERSAL_DEPLOYMENT_GUIDE.md` - Universal deployment

### Common Tasks

#### Reset Database

```bash
mysql -u root -p -e "DROP DATABASE shopify_reviews;"
mysql -u root -p -e "CREATE DATABASE shopify_reviews;"
mysql -u root -p shopify_reviews < shopify_reviews_database_complete.sql
```

#### Clear All Caches

```bash
# Frontend cache
rm -rf node_modules/.vite
rm -rf dist

# Backend cache (if applicable)
php backend/api/clear-frontend-cache.php
```

#### Update Dependencies

```bash
# Frontend
npm update

# Check for outdated packages
npm outdated
```

---

## ✅ Success Checklist

- [ ] PHP 7.4+ installed
- [ ] MySQL/MariaDB installed and running
- [ ] Node.js 16+ and npm installed
- [ ] Database `shopify_reviews` created
- [ ] Database schema imported successfully
- [ ] Backend server running on port 8000
- [ ] Frontend dependencies installed
- [ ] Frontend server running on port 5173
- [ ] Application accessible at http://localhost:5173/
- [ ] No errors in browser console
- [ ] API calls working (check Network tab)
- [ ] Can select apps and view data

---

**🎉 Congratulations! Your Shopify Reviews project is now running successfully!**

For issues or questions, check the troubleshooting section or review the additional documentation files in the project root.
