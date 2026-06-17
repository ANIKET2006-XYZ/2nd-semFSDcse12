import "./App.css";
import Student from "./components/Student";

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Student Information System</h1>

      <div className="students-container">
        <Student 
          name="Aniket Sharma" 
          course="B.Tech Computer Science" 
          marks={85} 
        />
        <Student 
          name="Priya Singh" 
          course="B.Tech Electronics" 
          marks={92} 
        />
        <Student 
          name="Rahul Verma" 
          course="B.Tech Mechanical" 
          marks={78} 
        />
        <Student 
          name="Sneha Gupta" 
          course="B.Tech Civil" 
          marks={88} 
        />
      </div>
    </div>
  );
}

export default App;