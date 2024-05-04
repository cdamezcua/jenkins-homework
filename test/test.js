import { use, should } from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

const chai = use(chaiHttp);

chai.request();
should();

describe("Test API", () => {
  it("GET / should return 'Hola Mundo con Docker!'", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.equal("Hola Mundo con Docker!");
        done();
      });
  });

  it("GET /suma should return the sum of two numbers", (done) => {
    chai
      .request(app)
      .get("/suma?num1=2&num2=3")
      .end((err, res) => {
        res.should.have.status(200);
        res.text.should.be.equal("5");
        done();
      });
  });
});
