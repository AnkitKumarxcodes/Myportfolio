import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="journey">
      <div className="items-container">
        <h1>Journey</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2023 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech Student</h3>
            <h4 className="vertical-timeline-element-subtitle">Delhi Technological University</h4>
            <p>
              Pursuing B.Tech in Engineering Physics with a strong focus on machine learning,
              intelligent systems, and applied software development. CGPA: 8.165
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI/ML Project Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Independent Work</h4>
            <p>
              Built practical machine learning systems across NLP, speech/audio intelligence,
              retrieval-augmented generation, analytics dashboards, and deployable ML applications.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Hackathons & Technical Events</h3>
            <h4 className="vertical-timeline-element-subtitle">Competitive Build Experience</h4>
            <p>
              Participated in Smart India Hackathon 2024, HackCBS 8.0, and secured a Top 10
              position at Brainwave Hackathon 2025.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Competitive Programming & DSA</h3>
            <h4 className="vertical-timeline-element-subtitle">Problem Solving Practice</h4>
            <p>
              Regularly solving algorithmic and data structure problems to strengthen problem-solving,
              coding interview preparation, and core CS fundamentals.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;