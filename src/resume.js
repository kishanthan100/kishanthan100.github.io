// Edit your content here. The page updates automatically.
export const resume = {
  name: 'Kishanthan Thamilchelvan',
  title: 'Python Full Stack Engineer',
  status: 'Open to backend and full-stack roles',
  email: 'sivathamil259@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kishanthan-thamilchelvan',
  github: 'https://github.com/kishanthan100',
  cv: 'Kishanthan_Thamilchelvan_CV.pdf', // file in the /public folder
  summary:
    'I build full-stack web applications and backend services, from schema and API design to deployment. Python (FastAPI, Flask) on the backend, React and TypeScript on the front end, PostgreSQL and Redis for data, and AWS with Docker and Terraform for infrastructure. APIs are secure by default (JWT, RBAC) and ship through CI pipelines that gate on tests.',
  experience: [
    {
      role: 'Python Full Stack Engineer',
      company: 'Sukan Marketing',
      period: 'Feb 2024 – May 2026',
      points: [
        'Designed and built a customer self-service portal, removing manual sales-rep dependency for order placement.',
        'Built an ETL pipeline to sync ERP data into the reporting database, replacing manual spreadsheet exports.',
        'Built async REST API services with FastAPI for internal ERP and reporting workflows, using async to handle concurrent ERP calls without blocking.',
        'Built an ERP-integrated web application with Flask and PostgreSQL, connecting internal ERP data to customer-facing workflows.',
        'Introduced JWT authentication with RBAC authorization across internal services to control access by role.',
        'Added automated tests for core API endpoints to the CI pipeline, creating a testing baseline where none existed.',
        'Wrote Bash scripts to automate deployment tasks on EC2, reducing manual deployment steps.',
      ],
    },
  ],
  projects: [
    {
      name: 'Trados ERP Platform',
      stack: 'FastAPI, TypeScript, PostgreSQL, asyncpg, GitHub Actions',
      points: [
        'Built an async REST API with HttpOnly JWT authentication and RBAC authorization.',
        'Provisioned AWS infrastructure (VPC, EC2, RDS, S3) with Terraform for reproducible environments.',
        'Containerized the application with Docker and deployed it through a CI/CD pipeline.',
      ],
    },
    {
      name: 'ERP Analytics Pipeline',
      stack: 'Python, dbt, Apache Airflow, DuckDB',
      points: [
        'Replaced manual reporting with an orchestrated ELT pipeline: Airflow handles scheduled ingestion and task-level failure handling, so no manual intervention is needed.',
      ],
    },
    {
      name: 'Customer Portal',
      stack: 'Python, FastAPI, PostgreSQL, React, TypeScript, Redis',
      points: [
        'Connected a React and TypeScript front end to a FastAPI backend for real-time order placement.',
        'Added Redis session caching after identifying repeated auth checks as the latency bottleneck, reducing API response time.',
      ],
    },
  ],
  skills: [
    ['Backend', 'Python, FastAPI, Flask, SQLAlchemy, asyncio, Pydantic, Alembic, Pandas, REST API design'],
    ['Databases', 'PostgreSQL, Redis, MongoDB, DuckDB'],
    ['DevOps and cloud', 'Docker, Docker Compose, GitHub Actions, CI/CD, AWS (EC2, VPC, RDS, CloudFront), Terraform, Nginx, Bash'],
    ['Frontend', 'React, TypeScript, Tailwind CSS'],
    ['Data engineering', 'dbt, Apache Airflow, ELT pipelines'],
    ['Testing', 'pytest, coverage-gated CI'],
  ],
  education: {
    degree: 'Bachelor of Engineering Technology in Material Nano Science Technology',
    school: 'Wayamba University of Sri Lanka',
    period: '2019 – 2023',
  },
  certifications: [
    ['Database Design', 'DataCamp', 'Apr – Jun 2026'],
    ['Intermediate SQL', 'DataCamp', 'May – Jul 2026'],
  ],
}
