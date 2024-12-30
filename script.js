const myObj = {
  name: "erfan",
  age: 20,
  "salam kardan": function () {
    alert("hi")
  }
};



function BookMaker(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return(`The ${this.title} by ${author}, ${this.pages} pages, ${this.read}.`)
  }
}

const harrypotter = new BookMaker("harrypotter the deadly hallows", "j.k.rolling", 553, "have read")