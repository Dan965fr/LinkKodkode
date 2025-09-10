import request from "supertest";
import app from "../server.js";

describe("Login API", () => {
  it("should successfully log in with valid credentials", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({ username: "testuser", password: "testpassword" });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  it("should return 401 for invalid password", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({ username: "testuser", password: "wrongpassword" });

    expect(response.statusCode).toBe(401);
    expect(response.body).toHaveProperty("error", "Invalid credentials");
  });

  it("should return 400 for missing username", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({ password: "testpassword" });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty(
      "error",
      "Username and password are required"
    );
  });
});
