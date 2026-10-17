function formatAttendanceReport(students) {
    const results = students.map(student => {
        const {name, present, total} = student;
        const percentage = Math.round((present / total) *100 )

        let status = ""

        if(percentage >= 90){
            status = "Excellent"
        }else if( percentage >= 75){
            status = "Good"
        }else{
            status = "At Risk"
        }
        return(`${name}: ${present}/${total} (${percentage}%) - ${status}`)
    })
    return results;
}

console.log(formatAttendanceReport([{ "name": "Rafi", "present": 18, "total": 20 },  { name: "Sam", present: 12, total: 20 }, {"name":"Lina","present":15,"total":20}]));