import React from 'react';
import '../../welcome_page.css';

const Projects = props => {
  return (
    <div className="tominfo">
      <h2>Tom's Projects</h2>

      <div classname="cards">
        <ul>
          <li>
            {' '}
            NC News
            <p>
              Full stack news aggregation board, the app allows you to filter
              and sort articles, interact with articles viewing comments as well
              as liking and disking comments. The app is also responsive for
              both desktop and mobile applications <br></br>
              <br></br>Hosted URL - https://toms-nc-news.herokuapp.com/{' '}
              <br></br>
              Front-end repo – https://github.com/galloway118/toms-NC-news.git
              <br></br> Back-end repo —
              https://github.com/galloway118/BE-news-Tom-G.git
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
