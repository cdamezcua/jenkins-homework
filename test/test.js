import supertest from "supertest";
import app from "../app.js";

const request = supertest(app);

describe("Test API", () => {
  it("GET / should return 'Hola Mundo con Docker!'", (done) => {
    request
      .get("/")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        if (res.text !== "Hola Mundo con Docker!") {
          return done(new Error("Response does not match expected text"));
        }
        done();
      });
  });

  it("GET /suma should return the sum of two numbers", (done) => {
    request
      .get("/suma?num1=2&num2=3")
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        if (res.text !== "5") {
          return done(new Error("Response does not match expected sum"));
        }
        done();
      });
  });
});
