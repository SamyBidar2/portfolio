import React from 'react';
import { VerticalTimeline,  VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import timelineData from '../Datas/timelinedatas.json';


export const Timeline = () => {
return (
    <VerticalTimeline>
        <VerticalTimelineElement> Expérience 1 </VerticalTimelineElement>
        <VerticalTimelineElement> Expérience 2 </VerticalTimelineElement>
        <VerticalTimelineElement> Expérience 3 </VerticalTimelineElement>

    </VerticalTimeline>
    );
};

export default Timeline;