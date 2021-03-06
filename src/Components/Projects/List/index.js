import {
  Github, Googlechrome,
} from '@icons-pack/react-simple-icons';
import React from 'react';
import {
  Mediatrac,
  Read, Session, Turismo,
} from '../Languages';

const Projects = () => (
  <>
    <section className='mw7 center mt4'>
      <h2 className='helvetica ph3 ph0-l fw4'>Projects</h2>
      <article className='pv4 bt bb b--black-10 ph3 ph0-l'>
        <div className='flex flex-column flex-row-ns'>
          <div className='w-100 w-60-ns pr3-ns order-2 order-1-ns'>
            <h1 className='f3 helvetica mt0 lh-title fw4'>Turismo</h1>
            <p className='f6 f5-l lh-copy helvetica fw3'>
              Travel discovery app providing information about
              landmarks, experiences, and restaurants for destinations around the globe
            </p>
            <p className='f6 f5-l lh-copy mv0 helvetica fw3'>APIs: Currents, Google Maps, Michelin Guide, NewsAPI, NY Times Travel, OpenWeatherMap, Unsplash, Yelp Fusion </p>
            <br />
            <div><Turismo /></div>
          </div>
          <div className='pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns'>
            <img src='https://images.unsplash.com/photo-1546530967-21531b891dd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' className='db' alt='Rome' />
            <div>
              <a className='no-underline black bg-animate bg-white grow hover-gray inline-flex items-center ma2 tc br2 pa2' href='https://github.com/415CA/turismo-frontend' title='GitHub' >
                <Github size={30} />
                <span className='f6 ml3 pr2'>GitHub</span>
              </a>
              <a className='no-underline black bg-animate bg-white grow hover-gray inline-flex items-center ma2 tc br2 pa2' href='https://turismo-travel.herokuapp.com' title='Google Chrome Icon' target='_blank 'rel='noopener'>
                <Googlechrome size={30} />
                <span className='f6 ml3 pr2'>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </article>
      <article className='pv4 bt bb b--black-10 ph3 ph0-l'>
        <div className='flex flex-column flex-row-ns'>
          <div className='w-100 w-60-ns pr3-ns order-2 order-1-ns'>
            <h1 className='f3 helvetica mt0 lh-title fw4'>Mediatrac</h1>
            <p className='f6 f5-l lh-copy helvetica fw3'>
              Searchable film database with cast and crew info,
              plot summaries, User reviews, NY Times reviews, and recommendations
            </p>
            <p className='f6 f5-l lh-copy mv0 helvetica fw3'>
              API: The Movie Database
            </p>
            <br />
            <div><Mediatrac /></div>
          </div>
          <div className='pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns'>
            <img src='https://images.unsplash.com/photo-1562329265-95a6d7a83440?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1564&q=80' className='db' alt='theater' />
            <div>
              <a className='no-underline black bg-animate bg-white grow hover-gray inline-flex items-center ma2 tc br2 pa2' href='https://github.com/415CA/mediatrac-frontend' title='GitHub' target='_blank 'rel='noopener'>
                <Github size={30} />
                <span className='f6 ml3 pr2'>GitHub</span>
              </a>
              <a className='no-underline black bg-animate bg-white grow hover-gray inline-flex items-center ma2 tc br2 pa2' href='https://mediatrac-app.herokuapp.com/' title='Google Chrome Icon' target='_blank 'rel='noopener'>
                <Googlechrome size={30} />
                <span className='f6 ml3 pr2'>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </article>
      <article className='pv4 bt bb b--black-10 ph3 ph0-l'>
        <div className='flex flex-column flex-row-ns'>
          <div className='w-100 w-60-ns pr3-ns order-2 order-1-ns'>
            <h1 className='f3 helvetica mt0 lh-title fw4'>Read</h1>
            <p className='f6 f5-l lh-copy helvetica fw3'>
              Book cataloging website that allows Users to search for
              titles, generate a personal library, create a list of page annotations
            </p>
            <p className='f6 f5-l lh-copy mv0 helvetica fw3'>
              API: Google Books
            </p>
            <br />
            <div><Read /></div>
          </div>
          <div className='pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns'>
            <img src='https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2053&q=80' className='db' alt='library' />
            <div>
              <a className='no-underline black bg-animate bg-white grow hover-gray inline-flex items-center ma2 tc br2 pa2' href='https://github.com/415CA/read-frontend' title='GitHub' target='_blank 'rel='noopener'>
                <Github size={30} />
                <span className='f6 ml3 pr2'>GitHub</span>
              </a>
              <a className='no-underline black bg-animate bg-white grow hover-gray inline-flex items-center ma2 tc br2 pa2' href='https://read-js-app.herokuapp.com' title='Google Chrome Icon' target='_blank 'rel='noopener'>
                <Googlechrome size={30} />
                <span className='f6 ml3 pr2'>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </article>
      <article className='pv4 bt bb b--black-10 ph3 ph0-l'>
        <div className='flex flex-column flex-row-ns'>
          <div className='w-100 w-60-ns pr3-ns order-2 order-1-ns'>
            <h1 className='f3 helvetica mt0 lh-title fw4'>Session</h1>
            <p className='f6 f5-l lh-copy helvetica fw3'>
              A social media app and discovery app that connects you with local skaters
              and helps you find the best skate spots, parks, and shops in your area
            </p>
            <div><Session /></div>
          </div>
          <div className='pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns'>
            <img src='https://images.unsplash.com/photo-1536318431364-5cc762cfc8ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' className='db' alt='skateboard' />
            <div>
              <a className='no-underline black bg-animate bg-white grow hover-gray inline-flex items-center ma2 tc br2 pa2' href='https://github.com/415CA/session' title='GitHub' target='_blank 'rel='noopener'>
                <Github size={30} />
                <span className='f6 ml3 pr2'>GitHub</span>
              </a>
              <a className='no-underline black bg-animate bg-white grow hover-gray inline-flex items-center ma2 tc br2 pa2' href='https://session-nyc.herokuapp.com/' title='Google Chrome Icon' target='_blank 'rel='noopener'>
                <Googlechrome size={30} />
                <span className='f6 ml3 pr2'>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  </>
);

export default Projects;
