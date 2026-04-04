import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Scikit-learn",
    "PyTorch",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "SQL",
    "OpenCV",
    "Librosa"
];

const labelsSecond = [
    "FastAPI",
    "Streamlit",
    "Git",
    "GitHub",
    "Docker",
    "Render",
    "Vercel",
    "Pydantic",
    "FAISS",
];

const labelsThird = [
    "LangChain",
    "LangGraph",
    "Groq",
    "RAG",
    "Prompt Engineering",
    "Hugging Face",
    "Sentence Transformers",
    "LLM Workflows",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Machine Learning & Data Science</h3>
                    <p>I work on practical machine learning systems involving structured experimentation, feature engineering, model evaluation, and data-driven problem solving across analytics and prediction tasks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Backend, APIs & Deployment</h3>
                    <p>I build deployable ML-powered applications with clean backend workflows, REST APIs, interactive dashboards, and production-oriented project structure for real-world usage.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI, NLP & Intelligent Retrieval</h3>
                    <p>I build modern AI applications using RAG pipelines, vector retrieval, prompt-based workflows, and NLP systems for question answering, classification, and intelligent automation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;