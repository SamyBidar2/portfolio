import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import timelineData from '../Datas/timelinedatas.json';

//#region 
const TimelineContainer = styled(Container)`
    display: flex;  
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    width: 100%;
    overflow: hidden;
    padding-bottom: 10%;    
  `;

const TimelineTitle = styled.h2`
    padding: 40px 0;
    text-align: center;
  `;

const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
    .vertical-timeline-element-content {
      border-radius: 10px;
      border: 1px solid #2b303b;
      background: #15181e;
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12), 0px 8px 16px 0px rgba(0, 0, 0, 0.60);
      backdrop-filter: blur(12px);
    }

    .vertical-timeline-element-content-arrow {
      border-right-color: #15181e; 
      border-right: 20px solid #15181e;
    }

    .vertical-timeline-element-title {
      font-size: 24px;
    }

    .vertical-timeline-element-subtitle {
      font-size: 20px;
    }

    .vertical-timeline-element-text {
      color: var(--Adaptive-Weak, rgba(255, 255, 255, 0.60));
      font-family: Inter;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 20px;
    }

    .vertical-timeline-element-date {
      color: white;
      opacity: 1; 
      font-family: Inter;
      font-size: 19px !important;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      margin-bottom: 20px;
    }
  `;
//#endregion

export const Timeline = () => {

  const formatDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <TimelineContainer>
      <TimelineTitle className='text-light'>Expériences</TimelineTitle>
      <VerticalTimeline>
        {timelineData.map((data, index) => (
          <StyledVerticalTimelineElement key={`${data.id}-${index}`}>
            <h3 className='vertical-timeline-element-title text-light'>{data.jobtitle}</h3>
            <h4 className='vertical-timeline-element-subtitle text-light'>{data.company}</h4>
            <p className='vertical-timeline-element-text text-light'>
              {formatDescription(data.description)}
            </p>
            <span className='vertical-timeline-element-date text-light' >{data.date}</span>
          </StyledVerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </TimelineContainer>
  );
};
