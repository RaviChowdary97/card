import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Card1() {
  return (
    <div className="Card">
      <div className="third">
        <p>FREE</p>
        <h1>$0/month</h1>
      </div>
      <hr />
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Single User
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> 50GB Storage
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Unlimited Public Project
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Community Access
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-xmark fa-sm"></i> Unlimited Private Projects
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-xmark fa-sm"></i> Dedicated Phone Support
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-xmark fa-sm"></i> Free Subdomain
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-xmark fa-sm"></i> Monthly Status Report
        </span>
      </div>
      <button>BUTTON</button>
    </div>
  );
}
function Card2() {
  return (
    <div className="Card1">
      <div className="second">
        <p>PLUS</p>
        <h1>$9/month</h1>
      </div>
      <hr />
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Single User
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> 50GB Storage
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Unlimited Public Project
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Community Access
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Unlimited Private Projects
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Dedicated Phone Support
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Free Subdomain
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-xmark fa-sm"></i> Monthly Status Report
        </span>
      </div>
      <button>BUTTON</button>
    </div>
  );
}

function Card3() {
  return (
    <div className="Card2">
      <div className="first">
        <p>PRO</p>
        <h1>$49/month</h1>
      </div>
      <hr />
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Single User
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> 50GB Storage
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Unlimited Public Project
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Community Access
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Unlimited Private Projects
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Dedicated Phone Support
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Free Subdomain
        </span>
      </div>
      <div className="First">
        <span>
          <i class="fa-solid fa-check fa-sm"></i> Monthly Status Report
        </span>
      </div>
      <button className="button">BUTTON</button>
    </div>
  );
}

export default App;
