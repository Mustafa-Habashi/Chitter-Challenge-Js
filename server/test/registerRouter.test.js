import Users from "../models/userModel.js";
import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../app.js";
import testData from "../testData/signUp.js";

chai.use(chaiHttp);
describe(`Testing requests on the database`, () => {
    const testServer = chai.request(server).keepOpen();
    beforeEach(async () => {
        try {
            await Users.deleteMany();
            console.log(`Database cleared`);
        } catch (error) {
            console.log(`Error clearing`);
            throw new Error();
        }
        try {
            await Users.insertMany(testData.signup);
            console.log(`Database populated with test Peeps`);
        } catch (error) {
            console.log(`Error inserting`);
            // Terminate the test
            throw new Error();
        }
    });
    describe(`/POST request create a new user to database`, () => {
        it(`should not create a user without a name`, async () => {
            let signup = {
                userName: "testl",
                email: "test@email.com",
                password: "abc123"
            };

            const res = await testServer.post(`/register`).send(signup);
            expect(res).to.have.status(422);
            expect(res).to.have.property(`error`);
            expect(res.body.message).to.be.eql(`There is a Error in User Data`);
        });
        it(`should not create a user without a username`, async () => {
            let signup = {
                name: "testname",
                email: "test@email.com",
                password: "abc123"
            };

            const res = await testServer.post(`/register`).send(signup);
            expect(res).to.have.status(422);
            expect(res).to.have.property(`error`);
            expect(res.body.message).to.be.eql(`There is a Error in User Data`);
        });
        it(`should not create a user without an email `, async () => {
            let signup = {
                name: "testname",
                userName: "testl",
                password: "abc123"
            };

            const res = await testServer.post(`/register`).send(signup);
            expect(res).to.have.status(422);
            expect(res).to.have.property(`error`);
            expect(res.body.message).to.be.eql(`There is a Error in User Data`);
        });

    });
});