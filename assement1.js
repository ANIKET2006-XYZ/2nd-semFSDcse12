 let students = [];

    // Function to add student
    function addStudent() {
      let name = document.getElementById("name").value;
      let roll = document.getElementById("roll").value;
      let math = parseInt(document.getElementById("math").value);
      let science = parseInt(document.getElementById("science").value);
      let english = parseInt(document.getElementById("english").value);

      let student = {
        name: name,
        roll: roll,
        math: math,
        science: science,
        english: english
      };

      students.push(student);
      document.getElementById("output").innerHTML = `<p>✅ Student ${name} added successfully!</p>`;
    }

    // Display all students
    function displayStudents() {
      let output = "<h3>All Students:</h3>";
      for (let s of students) {
        output += `<div class="student">
          Name: ${s.name}, Roll: ${s.roll}, Math: ${s.math}, Science: ${s.science}, English: ${s.english}
        </div>`;
      }
      document.getElementById("output").innerHTML = output;
    }

    // Calculate total marks
    function calculateTotals() {
      let output = "<h3>Total Marks:</h3>";
      for (let s of students) {
        let total = s.math + s.science + s.english;
        output += `<div class="student">${s.name} (Roll: ${s.roll}) → Total: ${total}</div>`;
      }
      document.getElementById("output").innerHTML = output;
    }

    // Calculate average marks
    function calculateAverages() {
      let output = "<h3>Average Marks:</h3>";
      for (let s of students) {
        let avg = (s.math + s.science + s.english) / 3;
        output += `<div class="student">${s.name} (Roll: ${s.roll}) → Average: ${avg.toFixed(2)}</div>`;
      }
      document.getElementById("output").innerHTML = output;
    }

    // Show students with average > 80
    function showAbove80() {
      let output = "<h3>Students with Avg > 80:</h3>";
      for (let s of students) {
        let avg = (s.math + s.science + s.english) / 3;
        if (avg > 80) {
          output += `<div class="student">${s.name} (Roll: ${s.roll}) → Average: ${avg.toFixed(2)}</div>`;
        }
      }
      document.getElementById("output").innerHTML = output;
    }

    // Show failed students (avg < 40)
    function showFailed() {
      let output = "<h3>Failed Students (Avg < 40):</h3>";
      for (let s of students) {
        let avg = (s.math + s.science + s.english) / 3;
        if (avg < 40) {
          output += `<div class="student">${s.name} (Roll: ${s.roll}) → Average: ${avg.toFixed(2)}</div>`;
        }
      }
      document.getElementById("output").innerHTML = output;
    }

    // Count total students
    function countStudents() {
      document.getElementById("output").innerHTML = `<h3>Total Students: ${students.length}</h3>`;
    }