import Database from 'better-sqlite3';
import { join } from 'path';

const db = new Database('hr.db');

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS departments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    role TEXT NOT NULL,
    department_id INTEGER,
    status TEXT DEFAULT 'Active',
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES departments (id)
  );

  CREATE TABLE IF NOT EXISTS job_postings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    department_id INTEGER,
    location TEXT NOT NULL,
    type TEXT NOT NULL,
    description TEXT NOT NULL,
    status TEXT DEFAULT 'Active',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (department_id) REFERENCES departments (id)
  );

  CREATE TABLE IF NOT EXISTS job_applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    job_posting_id INTEGER,
    applicant_name TEXT NOT NULL,
    applicant_email TEXT NOT NULL,
    status TEXT DEFAULT 'Pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (job_posting_id) REFERENCES job_postings (id)
  );

  CREATE TABLE IF NOT EXISTS courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    duration INTEGER NOT NULL,
    image_url TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS course_enrollments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    course_id INTEGER,
    employee_id INTEGER,
    status TEXT DEFAULT 'In Progress',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES courses (id),
    FOREIGN KEY (employee_id) REFERENCES employees (id)
  );

  CREATE TABLE IF NOT EXISTS performance_reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    employee_id INTEGER,
    reviewer_id INTEGER,
    rating DECIMAL(2,1) NOT NULL,
    comments TEXT,
    review_date DATE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (employee_id) REFERENCES employees (id),
    FOREIGN KEY (reviewer_id) REFERENCES employees (id)
  );
`);

// Insert sample data
const departments = [
  { name: 'Engineering' },
  { name: 'Design' },
  { name: 'Product' },
  { name: 'Marketing' },
];

const employees = [
  {
    name: 'Sarah Wilson',
    email: 'sarah.wilson@company.com',
    role: 'Senior Developer',
    department: 'Engineering',
    image_url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
  },
  {
    name: 'Michael Chen',
    email: 'michael.chen@company.com',
    role: 'Product Manager',
    department: 'Product',
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@company.com',
    role: 'UX Designer',
    department: 'Design',
    image_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
];

const courses = [
  {
    title: 'Leadership Essentials',
    description: 'Learn fundamental leadership skills and management techniques',
    duration: 8,
    image_url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=150',
  },
  {
    title: 'Project Management Fundamentals',
    description: 'Master the basics of project management methodologies',
    duration: 12,
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=150',
  },
  {
    title: 'Communication Skills',
    description: 'Improve your professional communication abilities',
    duration: 6,
    image_url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150',
  },
];

// Insert departments
const insertDepartment = db.prepare('INSERT INTO departments (name) VALUES (?)');
departments.forEach(dept => {
  insertDepartment.run(dept.name);
});

// Insert employees
const insertEmployee = db.prepare(`
  INSERT INTO employees (name, email, role, department_id, image_url)
  VALUES (?, ?, ?, (SELECT id FROM departments WHERE name = ?), ?)
`);
employees.forEach(emp => {
  insertEmployee.run(emp.name, emp.email, emp.role, emp.department, emp.image_url);
});

// Insert courses
const insertCourse = db.prepare(`
  INSERT INTO courses (title, description, duration, image_url)
  VALUES (?, ?, ?, ?)
`);
courses.forEach(course => {
  insertCourse.run(course.title, course.description, course.duration, course.image_url);
});

console.log('Database setup completed successfully!');