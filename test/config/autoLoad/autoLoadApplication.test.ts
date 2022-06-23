import fsMock from "../mocks/fsMock";
import autoLoadFiles, {foreachFolder} from '../../../src/config/autoLoad/autoLoadApplication';

fsMock

describe('Should to success', () => {
    const fullPath = "src/";
    const mockArrayNameFile =  ["services","teste"];
 
    test('the load files', () => {
        autoLoadFiles()
    })

    test('the read all dir to path and return the array with results', () => {
        const returnedFolder = foreachFolder(mockArrayNameFile, fullPath);
        expect(returnedFolder).not.toBeNull();
    })
    
    test('the read all dir to path and using finction callback', () => {
        const returnedFolder: any[] = [];
        foreachFolder(mockArrayNameFile, fullPath, (file) => returnedFolder.push(file));
        expect(returnedFolder).not.toBeNull();
    })
})