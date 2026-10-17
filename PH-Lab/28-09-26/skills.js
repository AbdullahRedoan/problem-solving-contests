function commonSkills(skills1, skills2) {
    let result = [];
    const skillSet1 = new Set(skills1.map(skill => skill.toLowerCase()));
    const skillSet2 = new Set(skills2.map(skill => skill.toLowerCase()));

    for (const skill of skillSet1) {
        const lowerCaseSkill = skill.toLowerCase();
        if (skillSet2.has(lowerCaseSkill)) {
            result = [...result, skill]
        }
    }
return result.sort();
}

console.log(commonSkills(["JS", "React", "react", "Node"], ["react", "css", "Css", "CSS", "js", "node"]));