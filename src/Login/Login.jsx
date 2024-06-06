/*import React, { useState } from "react";
import "./login.css";
import { auth } from "../../services/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  };

  const [activeTab, setActiveTab] = useState("login");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  function handleSignUp(event) {}

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(auth, email, password).then((data) => {
      console.log(data, "authData");
    });
  };

  return (
    <div>
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "login" ? "active" : ""}`}
            onClick={() => handleTabClick("login")}
          >
            LogIn
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => handleTabClick("signup")}
          >
            SignUp
          </button>
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === "login" && (
          <div className="tab-pane fade show active">
            <form onSubmit={(e) => handleLogin(e)}>
              <div className="mb-3 text-start">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-start">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3 text-start">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                LogIn
              </button>
            </form>
          </div>
        )}
        {activeTab === "signup" && (
          <div className="tab-pane fade show active">
            <form onSubmit={handleSignUp} className="row g-4">
              <div className="col-md-6 col-sm-6">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6 col-sm-6">
                <label for="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <label for="name" className="form-label">
                  FirstName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="First Name"
                />
              </div>
              <div className="col-md-6 col-sm-6">
                <label for="inputLastName" className="form-label">
                  LastName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  placeholder="Last Name"
                />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;*/

// src/components/Login/Login.js
/*import React, { useState } from "react";
import "./login.css";
import { auth } from "../../services/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      if (type === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/home");
    } catch (error) {
      alert(error.code);
    }
  };

  return (
    <div>
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "login" ? "active" : ""}`}
            onClick={() => handleTabClick("login")}
          >
            LogIn
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => handleTabClick("signup")}
          >
            SignUp
          </button>
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === "login" && (
          <div className="tab-pane fade show active">
            <form onSubmit={(e) => handleSubmit(e, "login")}>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-start">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                LogIn
              </button>
            </form>
          </div>
        )}
        {activeTab === "signup" && (
          <div className="tab-pane fade show active">
            <form onSubmit={(e) => handleSubmit(e, "signup")}>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-start">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                SignUp
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;*/

/*import React, { useState } from "react";
import "./login.css";
import { auth } from "../../services/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const { user } = useAuth();
  const navigate = useNavigate(); // You may still need this for other navigation purposes

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      if (type === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      // You can add additional logic here if needed, but avoid navigation
    } catch (error) {
      alert(error.code);
    }
  };

  return (
    <div>
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "login" ? "active" : ""}`}
            onClick={() => handleTabClick("login")}
          >
            LogIn
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => handleTabClick("signup")}
          >
            SignUp
          </button>
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === "login" && (
          <div className="tab-pane fade show active">
            <form onSubmit={(e) => handleSubmit(e, "login")}>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-start">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                LogIn
              </button>
            </form>
          </div>
        )}
        {activeTab === "signup" && (
          <div className="tab-pane fade show active">
            <form onSubmit={(e) => handleSubmit(e, "signup")}>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text text-start">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                SignUp
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;*/ //bon

import React, { useState } from "react";
import "./login.css";
import { auth } from "../../services/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const [activeTab, setActiveTab] = useState("login");
  const { user } = useAuth();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = async (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      if (type === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      // Additional logic can be added here if needed, but avoid navigation
    } catch (error) {
      alert(error.code);
    }
  };

  return (
    <div>
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            LogIn
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => setActiveTab("signup")}
          >
            SignUp
          </button>
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === "login" && (
          <div className="tab-pane fade show active">
            <form onSubmit={(e) => handleSubmit(e, "login")}>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputEmailLogin" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmailLogin"
                  aria-describedby="emailHelpLogin"
                />
                <div id="emailHelpLogin" className="form-text text-start">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3 text-start">
                <label
                  htmlFor="exampleInputPasswordLogin"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPasswordLogin"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                LogIn
              </button>
            </form>
          </div>
        )}
        {activeTab === "signup" && (
          <div className="tab-pane fade show active">
            <form onSubmit={(e) => handleSubmit(e, "signup")}>
              <div className="mb-3 text-start">
                <label htmlFor="exampleInputEmailSignup" className="form-label">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmailSignup"
                  aria-describedby="emailHelpSignup"
                />
                <div id="emailHelpSignup" className="form-text text-start">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3 text-start">
                <label
                  htmlFor="exampleInputPasswordSignup"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPasswordSignup"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                SignUp
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
