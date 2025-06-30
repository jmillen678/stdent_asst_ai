from fastapi import FastAPI

app = FastAPI(title="ai_service")

@app.get("/health", tags=["health"])
def health():
    return {"status": "ok"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
