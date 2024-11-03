import {Sock, TKnitRow} from "./sock"
describe("CRUD interface LocalStorag", () => {
    test('make sock model', () => {
    let s = new Sock(35, 10, 10);
   
    expect(s).toBeInstanceOf(Sock);
    });
    test('make sock model2', () => {
        let s = new Sock(35, 10, 10);
        let r = s.getCurrentRow();
        expect(r.desc).toStrictEqual(`Набор петель начальный`);
        expect(s.currentRow).toBe(0);
    });

    test('make sock model3', () => {
        let s = new Sock(35, 10, 10);
        let r = s.getCurrentRow();
        let r2 = s.getCurrentRow();
        
        expect(s.currentRow).toBe(1);
        s.getPreviosRow();
        expect(s.currentRow).toBe(0);
    });
    test('make sock model3', () => {
        let s = new Sock(35, 10, 10);
        let r = s.getCurrentRow();
        let r2 = s.getCurrentRow();
        s.getCurrentRow();
        s.getCurrentRow();
        expect(s.currentRow).toBe(3);
        s.reset();
        expect(s.currentRow).toBe(-1);
        s.getPreviosRow();
        expect(s.currentRow).toBe(-1);
    });
    test('make sock model4', () => {
        let s = new Sock(35, 10, 10);
        let r =  s.getCurrentRow();
        for(let i = 0 ; i< 1000; i++)
            r = s.getCurrentRow();
        expect(s.currentRow).toBe(s.description.length-1);

        expect(r.desc).toStrictEqual(`Убавляем, пока на спицах не останется 8 петель. Их стягиваем на нитку `);

    });
});