import shell from "shelljs";

describe("CLI-Tests", () => {

    it("should run cli tests script", async () => {
        expect(shell.exec('./cli-tests', {cwd: '../../../tests'}).code).toEqual(0);
    });
});