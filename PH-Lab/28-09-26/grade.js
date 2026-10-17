function groupStudentsByGradeBand(students) {
    let A = [];
    let B = [];
    let C = [];
    let F = [];

    for (const student of students) {
        if (student.marks >= 80) {
            A = [...A, student]
        } else if (student.marks >= 70) {
            B = [...B, student];
        } else if (student.marks >= 60) {
            C = [...C, student]
        } else {
            F = [...F, student]
        }
    }
    return ({ A, B, C, F })
}

console.log(groupStudentsByGradeBand([
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 72 },
    { name: "Charlie", marks: 58 },
    { name: "David", marks: 91 },
    { name: "Eve", marks: 65 },
    { name: "Frank", marks: 60 }
]));