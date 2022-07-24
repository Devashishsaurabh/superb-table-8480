import {Link} from "react-router-dom"
import React from 'react'
import style from "./Signup.module.css"
const Signup = () => {
  return (
    <div>
      <div className={style.onboarding_head}>
        <h1>
          <a href="https://niftypm.com">
            <img
              className={style.logo}
              src="https://nifty.pm/static/media/nifty-logo.622c3309bcffc8b8f40273706462925f.svg"
              width="98"
              alt="Nifty logo"
            />
          </a>
        </h1>
        <Link to="/">
          <button className={style.btn_close}>Close X</button>
        </Link>
        <div className={style.onboarding_head_main}>
          <h2>Get started with Nifty</h2>
          <p>
            Over 20,000 teams trust Nifty to empower their project management.
          </p>
        </div>
        <div className={style.language_select}>
          <div>
            <div className={style.select_toggle}>
              <div>
                <span>
                  <svg
                    class="icon "
                    width="1em"
                    height="1em"
                    viewBox="0 0 10 10"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="Page-2"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Team-overview---search"
                        transform="translate(-195.000000, -198.000000)"
                        fill="currentColor"
                      >
                        <g
                          id="Group-2"
                          transform="translate(121.000000, 153.000000)"
                        >
                          <path
                            d="M79,55 C76.2385763,55 74,52.7614237 74,50 C74,47.2385763 76.2385763,45 79,45 C81.7614237,45 84,47.2385763 84,50 C84,52.7614237 81.7614237,55 79,55 Z M75.0309469,50.5 C75.208709,51.9255384 76.1366002,53.1181211 77.4071554,53.670283 C76.9357098,52.8292114 76.5937378,51.680877 76.516502,50.5 L75.0309469,50.5 Z M75.0309469,49.5 L76.5161037,49.5 C76.5916478,48.317783 76.9269429,47.1740909 77.3938197,46.3355415 C76.1301105,46.8902345 75.2080865,48.0794538 75.0309469,49.5 Z M82.9690531,49.5 C82.7919135,48.0794538 81.8698895,46.8902345 80.6061803,46.3355415 C81.0730571,47.1740909 81.4083522,48.317783 81.4838963,49.5 L82.9690531,49.5 Z M80.5928446,53.670283 C81.8633998,53.1181211 82.791291,51.9255384 82.9690531,50.5 L81.483498,50.5 C81.4062622,51.680877 81.0642902,52.8292114 80.5928446,53.670283 Z M78.1628985,52.9592955 C78.4874196,53.6116943 78.8678547,54 79,54 C79.1321453,54 79.5125804,53.6116943 79.8371015,52.9592955 C80.1845447,52.2608155 80.4178852,51.399083 80.4820843,50.5 L77.5179157,50.5 C77.5821148,51.399083 77.8154553,52.2608155 78.1628985,52.9592955 Z M78.154199,47.0393228 C77.8109093,47.7348235 77.5806882,48.5976169 77.5175474,49.5 L80.4824526,49.5 C80.4193118,48.5976169 80.1890907,47.7348235 79.845801,47.0393228 C79.522454,46.3842257 79.144037,46 79,46 C78.855963,46 78.477546,46.3842257 78.154199,47.0393228 Z"
                            id="Combined-Shape"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                English
              </div>
              <span class="arrow">
                <svg
                  class="icon "
                  width="1.0277777777777777em"
                  height="0.6111111111111112em"
                  viewBox="0 0 37 22"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Style-guide"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="nifty-UI-guide"
                      transform="translate(-617.000000, -2934.000000)"
                      fill="currentColor"
                      fill-rule="nonzero"
                    >
                      <g
                        id="Group-6-Copy-3"
                        transform="translate(574.000000, 2884.000000)"
                      >
                        <path
                          d="M70.5909903,46.8409903 C71.4696699,45.9623106 71.4696699,44.5376894 70.5909903,43.6590097 C69.7123106,42.7803301 68.2876894,42.7803301 67.4090097,43.6590097 L51.6590097,59.4090097 C50.7803301,60.2876894 50.7803301,61.7123106 51.6590097,62.5909903 L67.4090097,78.3409903 C68.2876894,79.2196699 69.7123106,79.2196699 70.5909903,78.3409903 C71.4696699,77.4623106 71.4696699,76.0376894 70.5909903,75.1590097 L56.4319805,61 L70.5909903,46.8409903 Z"
                          id="Path-82"
                          transform="translate(61.125000, 61.000000) rotate(-90.000000) translate(-61.125000, -61.000000) "
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </span>
            </div>
            <span class="overlay-placeholder"></span>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Signup