export default jest.mock("fs", () => {
    const originalModule = jest.requireActual("fs");
    return {
        __esModule: true,
        ...originalModule,
        readdirSync: (path: any) => (["name_to_file.txt"]),
        lstatSync: (path: any) => ({
            isDirectory: jest.fn(() => (path.toString().indexOf(".txt") === -1)),
            isFile: jest.fn(() => false)
        })
    }
})