import Database from 'better-sqlite3';

const db = new Database('hr.db');
db.pragma('foreign_keys = ON');

export interface Employee {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: string;
  image_url: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  duration: number;
  enrolled_count: number;
  image_url: string;
}

export interface JobPosting {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  applicants_count: number;
  created_at: string;
}

export interface PerformanceReview {
  id: number;
  employee_name: string;
  role: string;
  rating: number;
  review_date: string;
}

// Employee queries
export const getEmployees = () => {
  return db.prepare(`
    SELECT e.*, d.name as department
    FROM employees e
    LEFT JOIN departments d ON e.department_id = d.id
    ORDER BY e.name
  `).all() as Employee[];
};

// Course queries
export const getCourses = () => {
  return db.prepare(`
    SELECT c.*, COUNT(ce.id) as enrolled_count
    FROM courses c
    LEFT JOIN course_enrollments ce ON c.id = ce.course_id
    GROUP BY c.id
    ORDER BY enrolled_count DESC
  `).all() as Course[];
};

// Job posting queries
export const getJobPostings = () => {
  return db.prepare(`
    SELECT j.*, d.name as department,
           COUNT(ja.id) as applicants_count
    FROM job_postings j
    LEFT JOIN departments d ON j.department_id = d.id
    LEFT JOIN job_applications ja ON j.id = ja.job_posting_id
    WHERE j.status = 'Active'
    GROUP BY j.id
    ORDER BY j.created_at DESC
  `).all() as JobPosting[];
};

// Performance review queries
export const getRecentReviews = () => {
  return db.prepare(`
    SELECT pr.*, e.name as employee_name, e.role
    FROM performance_reviews pr
    JOIN employees e ON pr.employee_id = e.id
    ORDER BY pr.review_date DESC
    LIMIT 3
  `).all() as PerformanceReview[];
};

export const getPerformanceStats = () => {
  return db.prepare(`
    SELECT 
      ROUND(AVG(rating), 1) as average_rating,
      COUNT(CASE WHEN rating >= 4.5 THEN 1 END) as top_performers,
      COUNT(*) as total_reviews
    FROM performance_reviews
    WHERE review_date >= date('now', '-6 months')
  `).get();
};