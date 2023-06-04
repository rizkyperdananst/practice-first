import './App.css';
import Profile from './profile.jpg';

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <img src={Profile} alt="Profile"/>
          <h2>Input Your Credentials</h2>
        </div>
        <div className="card-body">
          <div className='form-group'>
            <input type="email" minLength={5} required placeholder="input your email"/>
          </div>
          <div className='form-group'>
            <input type="password" minLength={5} required placeholder="input your password"/>
          </div>
          <div className='form-group'>
            <button className='btn btn-primary'>login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
