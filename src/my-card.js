import { LitElement, html, css } from 'lit';
import "@haxtheweb/meme-maker/meme-maker.js";

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
      :host([fancy]) .card {
        background-color: lightpink;
        border: 2px solid fuchsia;
      }

      meme-maker {
        max-width: 100%;
        border-radius: 8px;
        margin-bottom: 16px;
      }

      .heading {
          font-family: Brush Script MT;
      }

      .card {
        width: 300px;
        margin: 20px;
        background-color: var(--my-card-background-color, white);
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
      
      .flowing {
        max-height: 70px;
        overflow-y: auto;
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

openChanged(e) {
  console.log(e);
  if (e.target.getAttribute('open') !== null) {
    this.fancy = true;
  }
  else {
    this.fancy = false;
  }
}

  render() {
    return html`    
      <div class="wrapper">
        <div class="card">
          <meme-maker
            alt="${this.alt}"
            image-url="${this.image}"
            bottom-text="is the best band"
            top-text="${this.title}">
          </meme-maker>
          <div>
            <h1 class="heading">${this.title}</h1>
              <details ?open="${this.fancy}" @toggle="${this.openChanged}">
                <summary>Description</summary>
                <div class="flowing">
                  <slot>${this.body}</slot>
                </div>
              </details>
          </div>
          <div>
            <button class="btn">
              <b><a class="link" href="${this.button}">Details</a></b>
            </button>
          </div>
        </div>
      </div>
    `;}

  static get properties() {
    return {
      title: { type: String },
      image: {type: String}, 
      alt: {type: String}, 
      body: {type: String}, 
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
