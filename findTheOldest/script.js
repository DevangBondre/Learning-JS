
const people = [ 
    {name:'Ryan',birth:1960,death:2000},
    {name:'Sunil',birth:2000 , death:2023},
    {name: 'Steve',birth:1829 , death:1899},
    {name : 'Peter' , birth:1200 , death:1301},
    {name : 'Kanda' , birth:1469 , death:1569}

]
   
console.table(people)


    const oldestPerson = people.sort(function(a,b){
    const firstguy = a.death - a.birth
    const lastguy = b.death - b.birth

    return firstguy > lastguy ? -1 : 1;
    })

console.log(oldestPerson[0])
