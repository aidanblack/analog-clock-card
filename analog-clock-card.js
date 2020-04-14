/*
Custom Analog Clock Card for Home Assistant Lovelace UI

MIT License

Copyright (c) 2020 Aidan Black

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

class AnalogClockCard extends HTMLElement {
    set hass(hass) {
      if (!this.content) {
        const card = document.createElement('ha-card');
        card.header = '';
        this.content = document.createElement('div');
        this.content.style.padding = '0 16px 16px';
        this.content.style.height = '250px';
        card.appendChild(this.content);
        this.appendChild(card);
      }
  
/*       const entityId = this.config.entity;
      const state = hass.states[entityId];
      const stateStr = state ? state.state : 'unavailable';
 */  

      var Months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
      var Now = new Date(Date.now());
      var Seconds = Now.getSeconds();
      var Minutes = Now.getMinutes() + Seconds / 60;
      var Hours = Now.getHours() + Minutes / 60;
      var DateText = Months[Now.getMonth()] + " " + Now.getDate();

      this.content.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" id="clock" style="position: relative;max-height: 100%;max-width: 100%;left: 0%;top: 0%;">

        <!--circle cx="100" cy="100" r="90" fill="#282828" fill-opacity="0.6" /-->
        <!--rect x="15" y="15" width="170" height="170" fill="#333333" fill-opacity="0.6" stroke="#333333" stroke-width="10" stroke-opacity="0.4" /-->
    
        <g font-size="small" font-family="'Century Gothic', sans-serif" fill="var(--primary-text-color)">
            <text x="92" y="42">XII</text>
            <text transform="rotate(30,100,100)" x="99.2" y="42">I</text>
            <text transform="rotate(60,100,100)" x="97.3" y="42">II</text>
            <!--text transform="rotate(90,100,100)" x="94.6" y="44">III</text-->
            <text transform="rotate(120,100,100)" x="93.7" y="42">IIII</text>
            <text transform="rotate(150,100,100)" x="95.4" y="42">V</text>
            <text transform="rotate(180,100,100)" x="93.5" y="42">VI</text>
            <text transform="rotate(210,100,100)" x="91" y="42">VII</text>
            <text transform="rotate(240,100,100)" x="89" y="42">VIII</text>
            <text transform="rotate(270,100,100)" x="93.5" y="42">IX</text>
            <text transform="rotate(300,100,100)" x="96" y="42">X</text>
            <text transform="rotate(330,100,100)" x="94.5" y="42">XI</text>
        </g>
        <text id="dateBox" x="135" y="103" font-size="x-small" font-family="'Century Gothic', sans-serif" fill="var(--primary-text-color)">${DateText}</text>
    
        <g style="stroke-width:2;stroke:var(--primary-text-color)">
            <line x1="100" y1="20.5" x2="100" y2="26.5" />
            <line x1="179.5" y1="100" x2="173.5" y2="100" />
            <line x1="100" y1="179.5" x2="100" y2="173.5" />
            <line x1="20.5" y1="100" x2="26.5" y2="100" />
        </g>
        <g transform="rotate(30,100,100)" style="fill:var(--secondary-text-color); stroke:var(--secondary-text-color)">
            <circle cx="100" cy="22" r="1" />
            <circle cx="178" cy="100" r="1" />
            <circle cx="100" cy="178" r="1" />
            <circle cx="22" cy="100" r="1" />
        </g>
        <g transform="rotate(60,100,100)" style="fill:var(--secondary-text-color); stroke:var(--secondary-text-color)">
            <circle cx="100" cy="22" r="1" />
            <circle cx="178" cy="100" r="1" />
            <circle cx="100" cy="178" r="1" />
            <circle cx="22" cy="100" r="1" />
        </g>
    
        <g transform="rotate(6,100,100)" style="fill:var(--disabled-text-color); stroke:var(--disabled-text-color)">
            <g>
            <circle cx="100" cy="22" r="0.5" />
            <circle cx="178" cy="100" r="0.5" />
            <circle cx="100" cy="178" r="0.5" />
            <circle cx="22" cy="100" r="0.5" />
            </g>
            <g transform="rotate(30,100,100)">
            <circle cx="100" cy="22" r="0.5" />
            <circle cx="178" cy="100" r="0.5" />
            <circle cx="100" cy="178" r="0.5" />
            <circle cx="22" cy="100" r="0.5" />
            </g>
            <g transform="rotate(60,100,100)">
            <circle cx="100" cy="22" r="0.5" />
            <circle cx="178" cy="100" r="0.5" />
            <circle cx="100" cy="178" r="0.5" />
            <circle cx="22" cy="100" r="0.5" />
            </g>
        </g>
        <g transform="rotate(12,100,100)" style="fill:var(--disabled-text-color); stroke:var(--disabled-text-color)">
            <g>
            <circle cx="100" cy="22" r="0.5" />
            <circle cx="178" cy="100" r="0.5" />
            <circle cx="100" cy="178" r="0.5" />
            <circle cx="22" cy="100" r="0.5" />
            </g>
            <g transform="rotate(30,100,100)">
            <circle cx="100" cy="22" r="0.5" />
            <circle cx="178" cy="100" r="0.5" />
            <circle cx="100" cy="178" r="0.5" />
            <circle cx="22" cy="100" r="0.5" />
            </g>
            <g transform="rotate(60,100,100)">
            <circle cx="100" cy="22" r="0.5" />
            <circle cx="178" cy="100" r="0.5" />
            <circle cx="100" cy="178" r="0.5" />
            <circle cx="22" cy="100" r="0.5" />
            </g>
        </g>
        <g transform="rotate(18,100,100)" style="fill:var(--disabled-text-color); stroke:var(--disabled-text-color)">
            <g>
            <circle cx="100" cy="22" r="0.5" />
            <circle cx="178" cy="100" r="0.5" />
            <circle cx="100" cy="178" r="0.5" />
            <circle cx="22" cy="100" r="0.5" />
            </g>
            <g transform="rotate(30,100,100)">
            <circle cx="100" cy="22" r="0.5" />
            <circle cx="178" cy="100" r="0.5" />
            <circle cx="100" cy="178" r="0.5" />
            <circle cx="22" cy="100" r="0.5" />
            </g>
            <g transform="rotate(60,100,100)">
            <circle cx="100" cy="22" r="0.5" />
            <circle cx="178" cy="100" r="0.5" />
            <circle cx="100" cy="178" r="0.5" />
            <circle cx="22" cy="100" r="0.5" />
            </g>
        </g>
        <g transform="rotate(24,100,100)" style="fill:var(--disabled-text-color); stroke:var(--disabled-text-color)">
            <g>
            <circle cx="100" cy="22" r="0.5" />
            <circle cx="178" cy="100" r="0.5" />
            <circle cx="100" cy="178" r="0.5" />
            <circle cx="22" cy="100" r="0.5" />
            </g>
            <g transform="rotate(30,100,100)">
            <circle cx="100" cy="22" r="0.5" />
            <circle cx="178" cy="100" r="0.5" />
            <circle cx="100" cy="178" r="0.5" />
            <circle cx="22" cy="100" r="0.5" />
            </g>
            <g transform="rotate(60,100,100)">
            <circle cx="100" cy="22" r="0.5" />
            <circle cx="178" cy="100" r="0.5" />
            <circle cx="100" cy="178" r="0.5" />
            <circle cx="22" cy="100" r="0.5" />
            </g>
        </g>
    
        <g>
            <g transform="translate(100,100)">
            <g id="hours" transform="rotate(${Hours * 30})">
                <line x1="0" y1="0" x2="0" y2="-40" stroke="var(--secondary-text-color)" stroke-width="4" stroke-opacity="0.7">
                <animateTransform attributeName="transform" type="rotate" dur="43200s" values="0;360" repeatCount="indefinite" />
                </line>
            </g>
            <g id="minutes" transform="rotate(${Minutes * 6})">
                <line x1="0" y1="0" x2="0" y2="-60" stroke="var(--secondary-text-color)" stroke-width="2" stroke-opacity="0.7">
                <animateTransform attributeName="transform" type="rotate" dur="3600s" values="0;360" repeatCount="indefinite" />
                </line>
            </g>
            <g id="seconds" transform="rotate(${Seconds * 6})">
                <line x1="0" y1="0" x2="0" y2="-70" stroke="var(--accent-color)" stroke-width="1" stroke-opacity="0.7">
                <animateTransform attributeName="transform" type="rotate" dur="60s" values="0;360" repeatDur="indefinite" />
                </line>
            </g>
            </g>
        </g>
    
        <circle cx="100" cy="100" r="3" style="fill:var(--secondary-text-color); stroke:var(--secondary-text-color)" />
    
        </svg>
        `;
    }
  
     setConfig(config) {
/*       if (!config.entity) {
        throw new Error('You need to define an entity');
      }
 */      this.config = config;
    }

 // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
      return 1;
    }
  }
  
  customElements.define('analog-clock-card', AnalogClockCard);