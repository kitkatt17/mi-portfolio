import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from 'semantic-ui-react';
import { ThemeContext } from '../ThemeContext';

const Timeline = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <Container className="mt-5 mb-5" id='experience'>
            <h2 className="ui horizontal divider header">
                 Academics  & Experience
            </h2>
            <Container className={theme==='dark'?'mt-5 rounded bg-dark':'mt-5 rounded border bg-light'}>
                <VerticalTimeline lineColor={theme==='dark'?'#fff':'#1a1a1a'}>
                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="Dec. 2022 - Present"
                        dateClassName={theme==='dark'?'text-light':'text-dark'}
                        iconStyle={{
                            background: 'rgb(33, 150, 243)',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        icon={<Icon name="graduation cap" size="large" />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Development (full-stack) Bootcamp</h3>
                        <h4 className="vertical-timeline-element-subtitle">UC Davis</h4>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element"
                        contentStyle={{ background: '#ef626c', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #ef626c' }}
                        date="Oct. 2019 - June 2020"
                        dateClassName={theme==='dark'?'text-light':'text-dark'}
                        iconStyle={{
                            background: '#ef626c',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        icon={<Icon name="suitcase" size="large" />}
                    >
                        <h3 className="vertical-timeline-element-title">Game Tester Intern </h3>
                        <h4 className="vertical-timeline-element-subtitle">Rated F Gaming</h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Container>
        </Container>
    );
};

export default Timeline;
