import Posts from "../models/postModel.js";
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
            await Peeps.deleteMany();
            console.log(`Database cleared`);
        } catch (error) {
            console.log(`Error clearing`);
            throw new Error();
        }
        try {
            await Peeps.insertMany(testData.peeps);
            console.log(`Database populated with test Peeps`);
        } catch (error) {
            console.log(`Error inserting`);
            // Terminate the test
            throw new Error();
        }
    });
    describe(`/GET all Peeps`, () => {
        it(`should return all of the Peeps as an array`, async () => {
            const res = await testServer.get(`/allpeeps`).send();

            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`array`);
            expect(res.body.length).to.equal(testData.peeps.length);
        });

        // describe(`/POST create a Peep`, () => {
        //     it(`should not create a peep without an author field`, async () => {
        //         let peep = {

        //             text: "Hello world",
        //         };

        //         const res = await testServer.post(`/composepeeps`).send(peep);
        //         expect(res).to.have.status(422);
        //         expect(res).to.have.property(`error`);
        //         expect(res.body.message).to.be.eql(`There is a Error in Peep Data`);
        //     });

        //     it(`should not post peep without text field`, async () => {
        //         let peep = {
        //             author: "DF123",

        //         };

        //         const res = await testServer.post(`/composepeeps`).send(peep);

        //         expect(res).to.have.status(422);
        //         expect(res).to.have.property(`error`);
        //         expect(res.body.message).to.be.eql(`There is a Error in Peep Data`);
        //     });


        //     it(`should create a SuccessFul Post request`, async () => {
        //         let peep = {
        //             author: "DfTest",
        //             text: "Hello world",
        //         };

        //         const res = await testServer.post(`/composepeeps`).send(peep);

        //         expect(res).to.have.status(201);
        //         expect(res.body).to.be.an(`object`);
        //     });
        // });
    });
});