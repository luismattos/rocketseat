const newStudent = (name, grade1, grade2) => {
  return {
    name: name,
    grade1: grade1,
    grade2: grade2,
  };
};

const genGrade = function () {
  const grade = (Math.random() * 10).toFixed(1);
  return grade;
};

function genStudents(nStudents) {
  const students = [];
  for (let i = 0; i < nStudents; i++) {
    const g1 = genGrade();
    const g2 = genGrade();
    students.push(
      newStudent("Estudante " + String.fromCharCode(65 + i), g1, g2)
    );
  }
  return students;
}

function average(student) {
  return ((Number(student.grade1) + Number(student.grade2)) / 2).toFixed(1);
}

function approved(student) {
  return average(student) >= 7 ? true : false;
}

const students = genStudents(4);

for (let student of students) {
  alert(`
  A média do ${student.name} é ${average(student)}.
  ${
    approved(student)
      ? "Parabens " + student.name + "! Voce foi aprovado!"
      : "Nao foi dessa vez " + student.name + "! Tente novamente!"
  }
  `);
}
