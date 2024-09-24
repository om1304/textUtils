import React from 'react';

export default function About({ darkMode }) {
  document.title = 'textUtils- About us';
  return (
    <div className={`container my-4 ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
      <h2>About us</h2>
      <div className={`accordion ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`} id="accordionExample">
        
        {/* Accordion Item #1 */}
        <div className={`accordion-item ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
          <h2 className={`accordion-header ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
            <button
              className={`accordion-button ${darkMode ? 'bg-primary text-light' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              data-bs-theme={darkMode ? 'dark' : 'light'}
            >
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element.
            </div>
          </div>
        </div>
        
        {/* Accordion Item #2 */}
        <div className={`accordion-item ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
          <h2 className={`accordion-header ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
            <button
              className={`accordion-button collapsed ${darkMode ? 'bg-primary text-light' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              data-bs-theme={darkMode ? 'dark' : 'light'}
            >
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
            </div>
          </div>
        </div>
        
        {/* Accordion Item #3 */}
        <div className={`accordion-item ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
          <h2 className={`accordion-header ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
            <button
              className={`accordion-button collapsed ${darkMode ? 'bg-primary text-light' : ''}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              data-bs-theme={darkMode ? 'dark' : 'light'}
            >
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
