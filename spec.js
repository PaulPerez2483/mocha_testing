const { expect } = require("chai");
const db = require("./db");
const { User, Department } = db.models;
const app = require("supertest")(require("./app"));

describe("Application User/Department Testing", () => {
	let seed;
	beforeEach(async () => (seed = await db.syncAndSeed()));

	describe("Departments", () => {
		it("colombia and spain are departments", () => {
			expect(seed.departments.colombia.name).to.equal("Colombia");
			expect(seed.departments.spain.name).to.equal("Spain");
		});
		it("department belongs to a user", () => {
			// console.log(seed.departments.colombia.id);
			// console.log(seed.users.paul.departmentId);
			expect(seed.departments.colombia.id).to.equal(
				seed.users.paul.departmentId
			);
		});
	});
});
