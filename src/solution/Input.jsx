import React, { useState } from 'react'; /* ADIM 0 */ //{ useState } eklendi

export default function Input() {
  /* ADIM 1 */
  const [inputDeğeri, setInputDeğeri] = useState('');

  const inputuDeğiştir = (evt) => {
    // When the input changes, its whole value can be found inside the event object.
    // Log out the synthetic event object 'evt' and see for yourself.
    const { value } = evt.target;
    setInputDeğeri(value);
    /* ADIM 4 */
  };
  const reset = () => {
    /* ADIM 5 */
    setInputDeğeri('');
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: inputDeğeri.length > 10 ? 'crimson' : 'royalblue' /* ADIM 2 */,
  };

  return (
    <div className="widget-input container">
      <h2>Input</h2>
      <div id="output" style={stil}>
        {/* ADIM 3 */ inputDeğeri.toUpperCase()}
      </div>

      <div>
        <input
          id="input"
          type="text"
          onChange={inputuDeğiştir}
          value={inputDeğeri}
        />{' '}
        {/* ADIM 6 */}
        <button id="resetInput" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
