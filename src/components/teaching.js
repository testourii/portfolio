import React from 'react';
import styles from '../styles/teaching.module.css';
import { Intro } from './intro';
import { Platform } from './platform';

const platforms = [
  {
    id: 'lwj',
    label: 'SEMIoT',
    link: 'https://github.com/testourii/SEMIOT-PROJECT',
    description: ` (Security Manager for IoT), a data flow control system which assists IoT administrators and users to track data dissemination, check security configurations and enforce themat deployment and at run time. 
       
    `,
    image: 'nodess',
  },
  {
    id: 'Tunisian Licence plate recognition',
    label: 'Tunisian Licence plate recognition',
    link: 'https://github.com/testourii/SEMIOT-PROJECT',
    description: `
      The system of vehicle number plate detection and recognition is used to detect the plates then make the recognition of the plate that is to extract the text from an image and all that thanks to the calculation modules that use location algorithms, segmentation plate and character recognition.
    `,
    image: 'licencee',
  },
  {
    id: 'lwj',
    label: 'Chat web application',
    link: 'https://github.com/testourii/SEMIOT-PROJECT',
    description: `
     In this project , we're going to use  React on the front end, with NodeJS & Socket.io on the back end to make a basic chat application.
    `,
    image: 'socket',
  },
  {
    id: 'egghead',
    label: 'People-tracking wristbands',

    description: `
      At the time of publishing, data by the World Health Organization shows that confirmed cases of COVID-19 continue to rise across the hole world , with Tunisia now at 1024 confirmed cases of the coronavirus. 
      so we make a wristband to enforce lockdown and track people during the coronavirus pandemic using GPS satellite location data.
    `,
    image: 'map',
  },
  {
    id: 'frontendmasters',
    label: '#100DaysOfCode challenge',
    link: 'https://github.com/testourii/100_Days_Of_Code',
    description: `
      The 100 Days of Code challenge is a self-directed commitment by developers to build strong and consistent coding habits. 
      The challenge uses social accountability, transparency, and deep reflection to form healthy developer habits.
    `,
    image: 'day',
  },
];

export function Teaching() {
  return [
    <Intro headline="Houcem's Projects">
      <br />
      <br />
      <br />
      <br />
    </Intro>,
    <section className={styles.container}>
      {platforms.map(platform => (
        <Platform key={platform.id} {...platform} />
      ))}
    </section>,
  ];
}
