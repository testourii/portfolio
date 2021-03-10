import React from 'react';
import './test.css';

export function Form() {
  return (
    <div>
      <section className="timeline">
        <div className="container">
          <div className="timeline-item">
            <div className="timeline-img" />
            <div className="timeline-content js--fadeInLeft">
              <br /> <h2>Ibn Roched Highschool sousse</h2>
              <div className="date">2009 - 2013</div>
              <p>baccalaureate, Mathematics, Good</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-img" />
            <div className="timeline-content js--fadeInRight">
              <h2>
                Preparatory Institute for Engineering Studies of Monastir
                (IPEIM)
              </h2>
              <div className="date">2013 - 2015</div>
              <p> mathematics, physics</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-img" />
            <div className="timeline-content js--fadeInLeft">
              <h2>Tunisian Military Academy</h2>
              <div className="date">2015 - 2018</div>
              <p>
                Computer Science Engineering & First lieutenant (Engineer
                Officer)
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-img" />
            <div className="timeline-content js--fadeInRight">
              <h2>Tunisian Armed forces</h2>
              <div className="date">2018 - 2019</div>
              <p> Information technology & Army Signal instructor</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-img" />
            <div className="timeline-content js--fadeInRight">
              <br />
              <h2>Tunisian Armed forces</h2>
              <div className="date">2019 - now</div>
              <p> Web developer, Mern stack developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
