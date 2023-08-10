//?Classe de Livros
class Book {
    constructor(title, publisher, pages) {
        this.title = title;
        this.publisher = publisher;
        this.pages = pages;
    }
}

const shelves = [
    diarioDeUmBanana = new Book("Diário de um Banana", "Jeff Kinney", 244),
    aSelecao = new Book("A Seleção", "Kiera Cass", 363),
    rainhaVermelha = new Book("A Rainha Vermelha", "Victoria Aveyard", 424)
]
console.warn("Livros Disponiveis");
shelves.forEach((Element) => console.log(Element))

//?Classe de Pessoas
class Person {
    constructor(name, age, books) {
        this.name = name;
        this.age = age;
        this.books = books;
    }
}

const registered = [
    guilherme = new Person("Guilherme Lima", 16, ["Blade Runner", "Star Wars"]),
    daniel = new Person("Daniel Santos", 16, ["Biblia Sagrada"])
]

//?Registrar nova pessoa
const person = new Person("Marquinhos Gamer", 89, "nenhum");
registered.push(person)

const user = new Person("Leiton Savio", 54, ["Maze Runner", "Extraordinario"])
registered.push(user)

console.warn("Pessoas já registradas");
registered.forEach((Person) => console.log(`${Person.name} tem ${Person.age} e possui os livros: ${Person.books}`))


//?Classe da Biblioteca
class Library {
    constructor(books, person) {
        this.books = books;
        this.person = person;
    }
}
