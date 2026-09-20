const school = [
    ["Math", ["Giorgi", "Nika", "Saba"]],
    ["English", ["Ana", "Mariam", "Luka"]],
    ["Programming", [
        ["JavaScript", ["Dato", "Giga", "Tato"]],
        ["Python", ["Sandro", "Nino", "Gio"]]
    ]]
]
console.log(school[2][1][0][1][1],school[2][1][1][1][1], school[2][1][0][1][1], school[2][1][1][1][0])
console.log([school[0][0][0], school[0][0][1], school[0][1][0][3], school[0][1][0][1], school[0][0][1], school[0][0][0].toLowerCase()].join(""))
console.log(school[2][1][0][1][2])