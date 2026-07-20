import React from "react";
import ser from '../assets/images/ser_logo.png';
import hackbot from '../assets/images/cortexrag_logo.png';
import olympicx from '../assets/images/olympicx_logo.png';
import spam from '../assets/images/metarag_logo.svg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/AnkitKumarxcodes/metarag-sdk" target="_blank" rel="noreferrer">
                    <img src={spam} className="zoom" alt="Metarag-sdk" width="100%"/>
                </a>
                <a href="https://github.com/AnkitKumarxcodes/metarag-sdk" target="_blank" rel="noreferrer">
                    <h2>Metarag-sdk</h2>
                </a>
                <p>
                    MetaRAG is an open-source engine that takes the guesswork out of RAG pipeline design. Instead of manually tuning chunking strategies, retrieval backends, and rerankers, MetaRAG benchmarks them against your own queries and routes each one to whichever configuration actually performs best on your data.
                </p>
            </div>
            
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
                <a href="https://github.com/AnkitKumarxcodes/CortexRag" target="_blank" rel="noreferrer">
                    <img src={hackbot} className="zoom" alt="CortexRag" width="100%"/>
                </a>
                <a href="https://github.com/AnkitKumarxcodes/CortexRag" target="_blank" rel="noreferrer">
                    <h2>Cortex-Rag</h2>
                </a>
                <p>
                    Cortex RAG is an intelligent cognitive routing framework that combines semantic similarity search, Retrieval-Augmented Generation (RAG), conversation memory, and graph-based workflow orchestration to generate context-aware, persona-consistent responses. The system features modular components for routing, retrieval, memory management, LLM generation, and prompt injection defense, providing a scalable architecture for building secure, multi-persona conversational AI applications.
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


        </div>
    </div>
    );
}

export default Project;