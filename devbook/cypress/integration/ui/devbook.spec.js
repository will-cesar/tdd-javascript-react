describe("Devbook application", () => {
  it("Visits the DevBook", () => {
    /* 
      Teste para validar se dentro da home existe
      uma tag de <h2> com "DevBook" escrito dentro dela
    */

    /* acessa a página */
    cy.visit("http://localhost:3000/");

    /* 
      Pega o elemento <h2> que contém o atributo data-test="heading"
      e verifica se o mesmo contém a palavra "DevBook"
    */
    cy.get('h2[data-test="heading"]').contains("DevBook");
  });

  it("Shows a book list", () => {
    /* Teste para validar se uma lista de livros é exibida na home */

    cy.visit("http://localhost:3000/");

    /*
      Pega um elemento <div> que contém o atributo data-test="book-list" e 
      verifica se o mesmo existe
    */
    cy.get('div[data-test="book-list"]').should("exist");

    /*
      cy.get("div.book-item").should("have.length", 2);   
      Pega os elementos <div> que contém a classe "book-item" e
      verifica se existem 2 itens na tela 
    */

    /*
      - Nesse teste se espera que cada item da lista tenha o título de "Refactoring" 
      e "Domain-driven design" respectivamente
      - pega todos os elementos <div> que contém a classe "book-item"
      - se espera que contém apenas 2 itens, que são os "books"
      - pega o título, ou seja, o texto de um elemento <h5> de cada item e verifica
      se cada título é "Refactoring" e "Domain-driven design" respectivamente
    */
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(2);
      const titles = [...books].map(
        (book) => book.querySelector("h5").innerHTML
      );
      expect(titles).to.deep.equal(["Refactoring", "Domain-driven design"]);
    });
  });
});
