import app, { init } from "@/app";
import { prisma } from "@/config";
import faker from "@faker-js/faker";
import httpStatus from "http-status";
import * as jwt from "jsonwebtoken";
import supertest from "supertest";
import { createUser } from "../factories";
import { createCharacter } from "../factories/character-factory";
import { cleanDb, generateValidToken } from "../helpers";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await cleanDb();
});

const server = supertest(app);

describe("GET /character", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.post("/character");

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 401 if given token is not valid", async () => {
    const token = faker.lorem.word();

    const response = await server.post("/character").set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 401 if there is no session for given token", async () => {
    const userWithoutSession = await createUser();
    const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

    const response = await server.post("/character").set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  describe("when token is valid", () => {
    it("should respond with status 404 if user has no alive character", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);

      const response = await server.get("/character").set("Authorization", `Bearer ${token}`);

      expect(response.status).toEqual(httpStatus.NOT_FOUND);
    });

    it("should respond with status 200 and character data if there is an alive char", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);
      const character = await createCharacter(user.id);

      const response = await server.get("/character").set("Authorization", `Bearer ${token}`);

      expect(response.status).toEqual(httpStatus.OK);
      expect(response.body).toEqual({
        id: character.id,
        userId: user.id,
        name: character.name,
        atk: character.atk,
        def: character.def,
        hp: character.hp,
        xp: character.xp,
        lvl: character.lvl,
        isAlive: true,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      });
    });
  });
});

describe("POST /character", () => {
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.post("/character");

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 401 if given token is not valid", async () => {
    const token = faker.lorem.word();

    const response = await server.post("/character").set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 401 if there is no session for given token", async () => {
    const userWithoutSession = await createUser();
    const token = jwt.sign({ userId: userWithoutSession.id }, process.env.JWT_SECRET);

    const response = await server.post("/character").set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  describe("when token is valid", () => {
    it("should respond with status 403 when user already has an alive character", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);

      await server.post("/character").set("Authorization", `Bearer ${token}`).send({ name: "test" });
      const response = await server.post("/character").set("Authorization", `Bearer ${token}`).send({ name: "test2" });

      expect(response.status).toEqual(httpStatus.FORBIDDEN);
    });

    it("should respond with status 201 and character data", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);

      const response = await server.post("/character").set("Authorization", `Bearer ${token}`).send({ name: "test" });

      expect(response.status).toEqual(httpStatus.CREATED);
      expect(response.body).toEqual({
        id: expect.any(Number),
        userId: user.id,
        name: expect.any(String),
        atk: expect.any(Number),
        def: expect.any(Number),
        hp: expect.any(Number),
        xp: expect.any(Number),
        lvl: expect.any(Number),
        isAlive: true,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      });
    });

    it("should insert a new character in the database", async () => {
      const user = await createUser();
      const token = await generateValidToken(user);

      const beforeCount = await prisma.character.count();

      await server.post("/character").set("Authorization", `Bearer ${token}`).send({ name: "test" });

      const afterCount = await prisma.character.count();

      expect(beforeCount).toEqual(0);
      expect(afterCount).toEqual(1);
    });
  });
});
