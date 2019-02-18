// 广度优先算法
const graph = {}

const personIsSeller = name => name[name.length - 1] === 'm'

graph.you = ['alice', 'bob', 'claire'];
graph.bob = ['anuj', 'peggy'];
graph.alice = ['peggy'];
graph.claire = ['thom', 'jonny'];
graph.anuj = [];
graph.peggy = [];
graph.thom = [];
graph.jonny = [];

const search = (name) => {
    let serarchQuery = [];
    serarchQuery = serarchQuery.concat(graph[name]);
    const searched = []
    while (serarchQuery.length) {
        const person = serarchQuery.shift();
        if (searched.indexOf(person) === -1) {
            if (personIsSeller(person)) {
                console.log(`${person}is a seller`)
                return false
            }
            serarchQuery = serarchQuery.concat(graph[person])
            searched.push(person)
        }
    }
    return fslse
}
search('you')