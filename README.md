# Title : 🖼️ AI Thumbnail Generator


## 📑 Table of Contents
- [🔍 Overview](#overview)
- [✨ Features](#features)
- [⚙️ Run Instructions](#run-instruction)
- [📡 API Documentation](#api-document)
- [🗄️ Database Schema](#database-schema)
- [🤖 AI Integration](#ai-tool-usage)
- [📷 Screenshot](#screenshot)
- [👤 Author](#author)
<h2><a class="anchor" id="overview"> 🔍Overview</a></h2>
An AI-powered Thumbnail Generator built using the MERN Stack + Gemini AI.  
Generate high-converting, professional thumbnails in seconds with customizable styles, aspect ratios, and color schemes.




<h2><a class="anchor" id="features">✨ Features</a></h2>

### 🔐 Authentication System
- User Registration & Login
- Session-based authentication
- Protected routes

### 🖼️ Thumbnail Generation
- AI-based image creation
- Multiple design styles
- Color scheme selection
- Aspect ratio selection
- Text overlay support

### 🖼️ YouTube Preview Mode
- Realistic YouTube UI preview
- Live thumbnail preview
- Responsive layout

### 📂 Thumbnail Management
- View generated thumbnails
- Download images
- Delete thumbnails



<h2><a class="anchor" id="run-instruction">⚙️ Run Instruction</a></h2>


### 1. Clone Repository



```bash 
git clone https://github.com/PurvaNijai34/secure-user-profile-access-control.git
```

### 2. Backend setup

#### Step 1. Go to Backend Folder


```bash
cd backend
```

#### Step 2. Install Dependencies


```bash
npm install 
```

#### Step 3. Create .env file:

```bash
PORT=your_port
MONGO_URI=your_mongodb_connection
SESSION_SECRET=your_session_secret
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLIENT_URL=http://localhost:5173
```
#### Step 4. Run backend:
```bash
npm run server
```
#### Backend run at:
http://localhost:5000


### 3. Frontend setup


#### Step 1. Go to frontend Folder
```bash
cd frontend
```

#### Step-2: Install dependencies
 
```bash
npm install
```
##### Step-3: Create .env file in frontend

```bash
VITE_BASE_URL=http://localhost:5000
```

#### Step 4 Run Frontend
```bash
npm run dev
```

#### Frontend run at :
http://localhost:5173

<h2><a class="anchor" id="api-document"> 📡API Documentation</a></h2>

## 🔐 Auth Routes
### 1. Register User.

**POST** `/api/auth/register`

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}


```
### 2. Login User
**POST** `/api/auth/login`

```json
{
  "email": "string",
  "password": "string"
}
```

## 🎨 Thumbnail Routes


### 1. Generate Thumbnail
**POST** `/api/thumbnail/generate`
 
```json
{
  
  "title": "string",
  "prompt": "string",
  "style": "Bold & Graphic",
  "aspect_ratio": "16:9",
  "color_scheme": "vibrant",
  "text_overlay": true
}
```
### 2. Get User Thumbnails
**GET** `/api/user/thumbnails`

### 3. Get Single Thumbnail
**GET** `/api/user/thumbnail/:id`

### 4. Delete Thumbnail
**DELETE** `/api/thumbnail/delete/:id`



<h2><a class="anchor" id="database-schema"> 🗄️Database Schema</a></h2>


### 👤 User Collection

| Field Name            | Type               | Description                                              |
|----------------------|--------------------|----------------------------------------------------------|
| name                 | String             |Name of the user                                    |
| email                | String (unique)    |Login Email                    |
| password             | String             | Hashed password                                          |
| createdAt            | Date               | Auto-generated timestamp                                 |
| updatedAt            | Date               | Auto-updated timestamp                                   |


### 🖼️ Thumbnail Collection

| Field | Type | Required | Description |
|-------|------|----------|------------|
| userId | String |  Yes | Reference to User who created thumbnail |
| title | String |  Yes | Video title |
| description | String |  No | Optional description |
| style | String |  Yes | Thumbnail style (Bold, Minimalist, etc.) |
| aspect_ratio | String | No | 16:9, 1:1, or 9:16 |
| color_scheme | String | No | Selected color theme |
| text_overlay | Boolean | No | Whether text overlay is enabled |
| image_url | String |No | Cloudinary image URL |
| prompt_used | String | No | Final AI prompt used |
| user_prompt | String | No | User custom input |
| isGenerating | Boolean | No | Generation status |
| createdAt | Date | Auto | Creation timestamp |
| updatedAt | Date | Auto | Update timestamp |

###  Allowed Style Values

- Bold & Graphic  
- Tech/Futuristic  
- Minimalist  
- Photorealistic  
- Illustrated  



###  Allowed Aspect Ratios

- 16:9  
- 1:1  
- 9:16  



###  Allowed Color Schemes

- vibrant  
- sunset  
- forest  
- neon  
- purple  
- monochrome  
- ocean  
- pastel  


<h2><a class="anchor" id="ai-tool-usage">🤖AI Integration</a></h2>


### AI Tools Used
 ### 🧠 Google Gemini AI

 Used for generating thumbnail images based on:

- Selected style

- Color scheme

- Aspect ratio

- Custom prompt
 ### ☁️ Cloudinary

 - Stores generated images

- Provides optimized CDN delivery

- Enables download feature

<h2> <a class="anchor" id="screenshot">📷Screenshots</a><h2/>

![Home Page](https://github.com/PurvaNijai34/Thumblify/blob/main/client/public/Scrrenshots/Screenshot%202026-02-23%20173927.png)
![Thumbnail Generating Page](https://github.com/PurvaNijai34/Thumblify/blob/main/client/public/Scrrenshots/image.png)
![Thumbnai Generated Page](https://github.com/PurvaNijai34/Thumblify/blob/main/client/public/Scrrenshots/Screenshot%202026-02-23%20174414.png)
![My Generation Page](https://github.com/PurvaNijai34/Thumblify/blob/main/client/public/Scrrenshots/Screenshot%202026-02-23%20174517.png)





<h2><a class="anchor" id="author"> 👤 Author</a><h2/>


**Purva Nijai** 
- 💼 GitHub: [PurvaNijai34](https://github.com/PurvaNijai34)
- 🔗 LinkedIn: https://www.linkedin.com/in/purva-nijai-6041002a5/
- 📧 Email: purvanijai05@gmail.com