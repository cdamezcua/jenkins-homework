import { use, expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

const chai = use(chaiHttp);

describe("Test API", () => {
  it("GET / should return 'Hola Mundo con Docker!'", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Hola Mundo con Docker!");
        done();
      });
  });

  it("GET /suma should return the sum of two numbers", (done) => {
    chai
      .request(app)
      .get("/suma?num1=2&num2=3")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("5");
        done();
      });
  });
});
