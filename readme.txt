//run project: python manage.py runserver
/project-portfolio/
│
├── /frontend_portfolio/
│   ├── /static/
│   │   ├── /css/
│   │   │   ├── style.css
│   │   │   ├── tailwind.css
│   │   │   ├── locomotive.css
│   │   │   ├── admin.css            <-- New CSS file for admin page
│   │   ├── /js/
│   │   │   ├── gsap.min.js
│   │   │   ├── framer-motion.js
│   │   │   ├── locomotive.js
│   │   │   ├── main.js
│   │   │   ├── admin.js             <-- New JS file for admin page
│   ├── /templates/
│   │   ├── base.html
│   │   ├── navbar.html
│   │   ├── intro.html
│   │   ├── project.html
│   │   ├── education.html
│   │   ├── contact.html
│   │   ├── footer.html
│   │   ├── admin.html               <-- New admin page
│   ├── /images/
│   │   ├── 3d-intro-image.png
│   │   ├── project-image-1.png
│   │   ├── project-image-2.png
│   │   ├── project-image-3.png
│   │   ├── cv.pdf
│   └── /videos/
│       ├── project-demo-1.mp4
│       ├── project-demo-2.mp4
│       ├── project-demo-3.mp4
│
└── /backend_portfolio/
   └── manage.py (Django)
    

backend_portfolio/
├── manage.py
├── backend_portfolio/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   ├── wsgi.py
├── templates/
│   ├── base.html (act as a parent template for the index page and other pages)
│   ├── index.html
│   ├── navbar.html
│   ├── introduction.html
│   ├── projects.html
│   ├── education_skills.html
│   ├── contact.html
│   ├── footer.html
│   ├── login.html
│   ├── admin.html
├── static/
│   ├── css/
│   ├── js/
│   ├── images/

#  Step-by-Step Navigation & Installation:
1. Navigate to the Project Directory:
First, open a terminal or command prompt and navigate to the root of your project:

bash
Copy code
cd /path/to/project-portfolio
This is the main directory where both frontend_portfolio and backend_portfolio folders are located.

2. Setup Backend (Django):
Navigate to the backend_portfolio folder:

bash
Copy code
cd backend_portfolio
Install Django in a virtual environment:

Create a virtual environment (you only need to do this once):

bash
Copy code
python -m venv venv
Activate the virtual environment:

On Linux/MacOS:
bash
Copy code
source venv/bin/activate
On Windows:
bash
Copy code
venv\Scripts\activate
Install Django:

bash
Copy code
pip install django