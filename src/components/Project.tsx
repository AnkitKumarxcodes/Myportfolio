import React from "react";
import ser from '../assets/images/ser.jpg';
import hackbot from '../assets/images/hackbot.png';
import olympicx from '../assets/images/olympicx.png';
import spam from '../assets/images/spam.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/AnkitKumarxcodes/Comparative-Study-of-Audio-Representations-for-Emotion-Recognition" target="_blank" rel="noreferrer">
                    <img src={ser} className="zoom" alt="Speech Emotion Recognition" width="100%"/>
                </a>
                <a href="https://github.com/AnkitKumarxcodes/Comparative-Study-of-Audio-Representations-for-Emotion-Recognition" target="_blank" rel="noreferrer">
                    <h2>Speech Emotion Recognition</h2>
                </a>
                <p>
                    Built a structured speech emotion recognition system to compare MFCC, Mel Spectrogram, and Chroma features across classical ML models. Performed controlled experiments, model benchmarking, and confusion-based performance analysis for 5-class emotion classification.
                </p>
            </div>

            <div className="project">
                <a href="https://github.com/AnkitKumarxcodes/HackBot-AI" target="_blank" rel="noreferrer">
                    <img src={hackbot} className="zoom" alt="HackBot AI" width="100%"/>
                </a>
                <a href="https://github.com/AnkitKumarxcodes/HackBot-AI" target="_blank" rel="noreferrer">
                    <h2>HackBot AI</h2>
                </a>
                <p>
                    Developed a RAG-based Discord bot for hackathon communities using LLaMA 3.1 via Groq API, FAISS, and sentence-transformers. Added semantic retrieval, PDF/TXT ingestion, and modular async-safe workflow architecture.
                </p>
            </div>

            <div className="project">
                <a href="https://olympicx.onrender.com" target="_blank" rel="noreferrer">
                    <img src={olympicx} className="zoom" alt="OlympicX" width="100%"/>
                </a>
                <a href="https://olympicx.onrender.com" target="_blank" rel="noreferrer">
                    <h2>OlympicX</h2>
                </a>
                <p>
                    Created an interactive Olympic analytics platform using Streamlit and Pandas for exploring medal trends, country performance, athlete participation, and sport-wise insights through visual analytics and dynamic filtering.
                </p>
            </div>

            <div className="project">
                <a href="https://email-spam-classification-app.onrender.com" target="_blank" rel="noreferrer">
                    <img src={spam} className="zoom" alt="Email Spam Classifier" width="100%"/>
                </a>
                <a href="https://email-spam-classification-app.onrender.com" target="_blank" rel="noreferrer">
                    <h2>Email Spam Classifier</h2>
                </a>
                <p>
                    Built an end-to-end email spam classification system using TF-IDF and Logistic Regression, deployed through both Streamlit and FastAPI. Compared multiple ML models and selected a precision-focused pipeline for reliable spam detection.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;