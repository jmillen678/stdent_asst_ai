# Student Personal Assistant App

This repository contains a skeleton implementation for the Student Personal Assistant project as described in the specification. Each microservice is implemented with FastAPI and includes a health check endpoint. The mobile app is a minimal React Native project. Infrastructure and CI/CD directories contain placeholder files.

## Local development

Install dependencies (including `uvicorn`) and run any service directly:

```bash
pip install -r backend/<service>/requirements.txt
python backend/<service>/app/main.py
```

Replace `<service>` with one of `api_gateway`, `user_service`, etc.
