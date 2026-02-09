import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Couch";
    this.image = "https://wvau.org/wp-content/uploads/2023/11/ouch1.jpg";
    this.alt = "members of a band posing for a photo"
    this.body = "Couch is a Boston-based pop-funk band known for blending indie-pop, soul, and rock with influences from jazz and musical theatre.";
    this.button = "https://hax.psu.edu";
    this.fancy = false;
  }

  static get styles() {
    return css`
    :host([fancy]) {
      display: block;
      background-color: pink;
      border: 2px solid fuchsia;
      box-shadow: 10px 5px 5px red;
    }
        .picture {
          width: 268px;
          border-radius: 8px;
          margin-bottom: 16px;
        }

        .control {
            font-family: Helvetica;
        }

        .card {
          width: 265px;
          margin: 20px;
          background-color: var(--my-card-background-color, #E5F4E3);
          padding: 20px 26px;
          border-radius: 12px;
          font-family: Helvetica;
          box-shadow: 4px 4px 8px rgba(0,0,0,0.2);
        }

        .btn {
          background-color: #001B3D;
          padding: 8px 12px;
          border-radius: 8px;
          display: none;
        }

        .btn:hover {
          background-color: #6D326D;
        }

        .link {
          text-decoration: none;
          color: white;
        }

        .heading {
          font-size: 28px;
        }

        .content {
          font-size: 14px;
        }

        @media screen and (max-width: 800px) and (min-width: 500px) {
          .btn {
            display: block;
          }
        }

        @media screen and (max-width: 500px) {
          .main {
            width: 200px;
          }
          .picture {
            width: 180px;
            margin-bottom: 0px;
          }
          .heading {
            font-size: 24px;
          }
          .content {
            font-size: 12px;
          }
        }
    `;
  }

  render() {
    return html`
      <html>        
          <div class="wrapper">
            <div class="card">
              <img class="picture" src="${this.image}" alt="${this.alt}" />
              <div>
                <h1 class="heading">${this.title}</h1>
                <p class="content"><slot name = "body">${this.body}</slot></p>
              </div>
              <div>
                <button class="btn">
                  <b><a class="link" href="${this.button}">Details</a></b>
                </button>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;}

  static get properties() {
    return {
      title: { type: String },
      image: {type: String}, 
      alt: {type: String}, 
      body: {type: String}, 
      fancy: { type: Boolean, refelct: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
