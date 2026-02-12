const request = require("supertest");
const app = require("../src/app");
const { sequelize } = require("../src/config/database");

// Register model(s) so Sequelize knows them during tests
require("../src/models/config.model");

describe("Configuration API", () => {
  let createdId;

  beforeAll(async () => {
    // Ensure tables exist for tests
    await sequelize.sync({ alter: true });
  });

  afterAll(async () => {
    // Close DB connection so Jest can exit
    await sequelize.close();
  });

  test("POST /configs - should create configuration", async () => {
    const res = await request(app)
      .post("/configs")
      .send({
        key: `test_key_${Date.now()}`,
        value: "Test Value",
        description: "Created from Jest",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty("id");

    createdId = res.body.data.id;
  });

  test("POST /configs - should return 400 when key is missing", async () => {
    const res = await request(app).post("/configs").send({
      value: "No key",
      description: "Invalid payload",
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });

  test("GET /configs/:id - should return 404 for non-existing id", async () => {
    const res = await request(app).get(
      "/configs/11111111-1111-1111-1111-111111111111"
    );

    expect(res.statusCode).toBe(404);
    expect(res.body.success).toBe(false);
  });

  test("PATCH /configs/:id - should update configuration", async () => {
    const res = await request(app)
      .patch(`/configs/${createdId}`)
      .send({ value: "Updated by Jest" });

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });

  test("DELETE /configs/:id - should delete configuration", async () => {
    const res = await request(app).delete(`/configs/${createdId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);

    const resAfter = await request(app).get(`/configs/${createdId}`);
    expect(resAfter.statusCode).toBe(404);
  });
});
