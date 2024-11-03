const MIN_STEP=16;
const MIN_SIZE = 35;
export type TKnitRow={row:string; desc:string}
export class Sock{
    
    size:number;
    row:number;
    stich:number;
    url:string;

    a:number;
    a4:number;
    rowR:number;
    rowR1:number;
    rowP1:number;
    aP1:number;
    rowP2:number;
    aP2:number;
    rowS1:number;
    adopS1:number;
    rowS2:number;
    rowS3:number;
    description:Array<TKnitRow>;    ;
    currentRow:number;
   
    inBounds(val:number, left:number, right:number){
        if(val >= left && val <= right)
           return val;
        else if(val >right) return right;
        else if(val < left) return left;
        return left;
    }
  
    constructor(size=37,  stich=10, row=10){
       
        this.size = this.inBounds(size, 35, 42);        
        this.row = this.inBounds(row, 10, 40);       
        this.stich = this.inBounds(stich, 10, 40);

        this.url = `${this.size}_${this.stich}_${this.row}`;
        this.a4 =Math.ceil( 3 *this.stich/4.);
        this.a = this.a4*4;
        this.rowR = Math.ceil( 0.5 * this.row);
        this.rowR1 = Math.ceil( 1.2 * this.row);
        this.rowP1 = Math.ceil( this.a4 * 2);
        this.aP1 = this.a4 * 2;
        this.aP2 = Math.ceil(this.aP1 / 3);
        if((this.aP1 - this.aP2 )%2 > 0){
            this.aP2 = this.aP2 +1;
        }
        this.rowP2 = (this.aP1 - this.aP2 ) / 2 ;
        this.adopS1 =  Math.ceil(this.aP2 / 2);
        this.rowS1 = this.adopS1 * 2;
        let sock_len =( MIN_STEP+(this.size - MIN_SIZE)) /10;
        this.rowS3 = Math.ceil((this.a - 8)/2);
        this.rowS2 = Math.ceil(sock_len*this.row ) - this.rowS1 - this.rowS3;
        this.description = new Array<TKnitRow>();
        this.description = this.description.concat(this._nabor());
        this.description = this.description.concat(this._rezinka());
        this.description =  this.description.concat(this._golenishe());
        this.description = this.description.concat(this._pyatka1());
        this.description = this.description.concat(this._pyatka2());
        this.description = this.description.concat(this._stopa1());
        this.description = this.description.concat(this._stopa2());
        this.description = this.description.concat(this._stopa3());
        this.currentRow = -1;
    }
    getCurrentRow = ()=>{
        this.currentRow ++;
        if(this.currentRow >= this.description.length)             
            this.currentRow = this.description.length -1;
        let ret:TKnitRow  = this.description[this.currentRow];  
        return ret;
    }
    reset= ()=>{
        this.currentRow=-1;
    }
    getPreviosRow= ()=>{
        if(this.currentRow > 0)
            this.currentRow--;
        else this.currentRow = 0;
        let ret  = this.description[this.currentRow];
        return ret;
    }
    _nabor= ()=>{
        let r:TKnitRow = {row: `Набрать по ${this.a4} петель на каждую из 4 спиц`,
        desc:`Набор петель начальный`};
       return [r]
    }
    _rezinka= ()=>{
       let n = new Array<TKnitRow>();        
       for( let i = 0; i < this.rowR; i++)
        n.push({row:`Вязать резинкой 1 лицевая 1 изнаночная все петли (${this.a}) ряда на 4 спицах`,
            desc:`Вывязываем верхнюю часть носка, резинкой`});
       return n;
    }
   _golenishe= ()=>{
        let n = new Array<TKnitRow>();    
        for( let i = 0; i < this.rowR1; i++)
         n.push({row:`Вязать лицевыми все петли (${this.a}) ряда на 4 спицах`,
            desc:`Вывязываем верхнюю часть носка, лицевой гладью` });
        return n;
    }
    _pyatka1= ()=>{
        let n = new Array<TKnitRow>();    
        for( let i = 0; i < this.rowP1; i++)
            n.push({row:`На 2 спицах (${this.a4*2} петлях) вязать лицевыми планку пятки `,
                desc:`Вязать пятку на ${this.a4*2}  пелях  на 2 спицах. Остальные петли оставить как есть.`});
        return n;
    }
    _pyatka2= ()=>{
        let n = new Array<TKnitRow>();    
        for( let i = 0; i < this.rowP2; i++)
            n.push({row:`На ${this.aP2} петлях вязать ряд лицевой гладью донышко пятки.
         Последнюю петлю провязать вместе с одной убавочной.`
        ,desc:`Вязать донышко пятки. Поделить петли на 3 части: ${this.rowS2} - пойдут на убавки,
        ${this.aP2} - рабочие и ${this.rowS2} убавки `});
        return n;
    }
    _stopa1= ()=>{
        let n = new Array<TKnitRow>();    
        for( let i = 0; i < this.rowS1; i++){
            if(i%2 > 0)
                 n.push({row:`Провязать все петли лицевой гладью`,
                desc:`Набрать по боковинам планки пятки петли(${this.a4}) и продожить вязание стопы на всех спицах. 
                    Общее количество петель  на всех спицах после вывязывания пятки ${this.a+this.adopS1*2}`});
            else n.push({row:`Вязать ряд лицевой гладью, убавив 2 петли`, 
                desc:`Набрать по боковинам планки пятки петли(${this.a4}) и продожить вязание стопы на всех спицах. 
                Общее количество петель  на всех спицах после вывязывания пятки ${this.a+this.adopS1*2}`});
        }
        return n;
    }
    _stopa2= ()=>{
        let n = new Array<TKnitRow>();    
        for( let i = 0; i < this.rowS2; i++)           
                n.push({row:`Провязать все петли лицевой гладью`,
                    desc:`Вязать основную часть стопы на всех петлях (${this.a}) `});            
        return n;
    }
    _stopa3= ()=>{
        let n = new Array<TKnitRow>();    
        for( let i = 0; i < this.rowS3; i++){
            if(i%2 > 0)
                n.push({row:`Вязать лицевой гладью, убавить 4 петли в ряду равномерно`,
                    desc:`Убавляем, пока на спицах не останется 8 петель. Их стягиваем на нитку `});
            else 
                n.push({row:`Вязать ряд лицевой гладью`,
                    desc:`Убавляем, пока на спицах не останется 8 петель. Их стягиваем на нитку `});
        }            
        return n;
    }
}