import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/students/")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student List</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h3>{student.name}</h3>
          <p>Email: {student.email}</p>
          <p>Age: {student.age}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;