function Student({ name, course, marks }) {
  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Marks:</strong> <span className="marks">{marks}</span></p>
      <p className="grade">Grade: {marks >= 90 ? 'A+' : marks >= 75 ? 'A' : 'B'}</p>
    </div>
  );
}

export default Student;