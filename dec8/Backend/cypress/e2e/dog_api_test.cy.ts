/// <reference types="cypress" />

describe('Root get teszt', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains("Fut a szerver")
  })
});

describe('GET /dogs token nélkül tiltva van-e', () => {
  beforeEach(() => {
    cy.task("resetDb");
  });

  it('403-at dob token nélkül', () => {
    cy.request({
      method: "GET",
      url: "/dogs",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(403);
    });
  });
});

describe("JWT tokenes /dogs végpont tesztelése", () => {
  before(() => {
    cy.task("resetDb");

    cy.request("POST", "/user/login", {
      email: "teszt1@gmail.com",
      password: "titok"
    }).then((response) => {
      console.log("LOGIN RESPONSE:", response.body);
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
      cy.wrap(response.body.token).as("jwtToken");
    });
  });

  it("sikeres lekérés JWT tokennel", function () {
    cy.request({
      method: "GET",
      url: "/dogs",
      headers: {
        "x-access-token": `${this.jwtToken}`
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array");
    });
  });
});

//GET getDataFromId() összes végkimenetel
describe('GET lekérések a dogra csak egy elemnél', () => {
  before(() => {
    cy.task("resetDb");
  });

  it('Lekérem a dogot az 1 es id-val ami létezik', () => {
    cy.request('/dogs/1').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body[0]).to.have.property('id', 1)
    })
  });

  it('Lekérem a dogot a 89-es rossz id-val', () => {
    cy.request({
      method: "GET",
      url: "/dogs/89",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.contain("Nincs ilyen elem")
    })
  });

  it('Lekérem a dogot a szöveges-es id-val', () => {
    cy.request({
      method: "GET",
      url: "/dogs/abch",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property(
        "message",
        "Hibás formátumú azonosító!"
      );
    })
  });
})

describe("POST töltés a dogs-ba", () => {
  before(() => {
    cy.task("resetDb");
  });

  it("Sikeres adatrögzités", () => {
    cy.request({
      method: "POST",
      url: "/dogs",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body:{
        name: "Kutyika",
        breed: "keverék",
        gender: 1,
        age: 3,
        picurl: "xyz"
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(201);
    })
  })
})

describe("Fájl feltöltés teszt /file/upload", () => {

  beforeEach(() => {
    cy.task("resetDb");
  });

  it("Sikeres fájlfeltöltés", () => {
    const fileName = "testfile.txt";

    // 1. Fixture fájl beolvasása bináris módban
    cy.fixture(fileName, "binary")
      .then(Cypress.Blob.binaryStringToBlob)
      .then((fileContent) => {

        // 2. multipart/formdata létrehozása
        const formData = new FormData();
        formData.append("file", fileContent, fileName);

        // 3. POST kérés a fájl feltöltésre
        cy.request({
          method: "POST",
          url: "/file/upload",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data"
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body.message).to.contain("A fájl feltöltése sikerült!");
        });
      });
  });

});