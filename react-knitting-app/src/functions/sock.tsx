const MIN_STEP=16;
const MIN_SIZE = 35;
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

    inBounds(val:number, left:number, right:number){
        if(val >= left && val <= right)
           return val;
        else if(val >right) return right;
        else if(val < left) return left;
        return left;
    }
    model(){
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
        let sock_len = MIN_STEP+(this.size - MIN_SIZE) /10;
        this.rowS3 = Math.ceil((this.a - 8)/2);
        this.rowS2 = Math.ceil(sock_len*this.row ) - this.rowS1 - this.rowS3;
    }

    constructor(size=37,  stich=10, row=10){
       
        this.size = this.inBounds(size, 35, 42);        
        this.row = this.inBounds(row, 10, 40);       
        this.stich = this.inBounds(stich, 10, 40);

        this.url = `${this.size}_${this.stich}_${this.row}`;
        this.model();
    }
    nabor(){
       return [{"desc":`Набрать по ${this.a4} петель на каждую из 4 спиц`}]
    }
    rezinka(){
       let n = [];
       n.push({"desc":`Вывязываем верхнюю часть носка, резинкой`})ж     
        
       for( let i = 0; i < this.rowR; i++)
        n.push({"row":`Вязать резинкой 1 лицевая 1 изнаночная все петли (${this.a}) ряда на 4 спицах`});
       return n;

    }
    golenishe(){
        let n = [];
        n.push({"desc":`Вывязываем верхнюю часть носка, лицевой гладью`})ж
        for( let i = 0; i < this.rowR1; i++)
         n.push({"row":`Вязать лицевыми все петли (${this.a}) ряда на 4 спицах`});
        return n;
    }
    pyatka1(){
        let n = [];
        n.push({"desc":`Вязать пятку на ${this.a4*2}  пелях  на 2 спицах. Остальные петли оставить как есть.`})
        for( let i = 0; i < this.rowP1; i++)
            n.push({"row":`На 2 спицах (${this.a4*2} петлях) вязать лицевыми планку пятки `});
        return n;
    }
    pyatka2(){
        let n = [];
        n.push({"desc":`Вязать донышко пятки. Поделить петли на 3 части: ${this.rowS2} - пойдут на убавки,
            ${this.aP2} - рабочие и ${this.rowS2} убавки `})
        for( let i = 0; i < this.rowP2; i++)
            n.push({"row":`На ${this.aP2} петлях вязать ряд лицевой гладью донышко пятки. Последнюю петлю провязать вместе с одной убавочной.`});
        return n;
    }
    stopa1(){
        let n = [];
        n.push({"desc":`Набрать по боковинам планки пятки петли(${this.a4}) и продожить вязание стопы на всех спицах. 
            Общее количество петель  на всех спицах после вывязывания пятки ${this.a+this.adopS1*2}`})
        for( let i = 0; i < this.rowS1; i++){
            if(i%2 > 0)
                n.push({"row":`Провязать все петли лицевой гладью`});
            else n.push({"row":`Вязать ряд лицевой гладью, убавив 2 петли`});
        }
        return n;
    }
    stopa2(){
        let n = [];
        n.push({"desc":`Вязать основную часть стопы на всех петлях (${this.a}) `})
        for( let i = 0; i < this.rowS2; i++)
           
                n.push({"row":`Провязать все петли лицевой гладью`});
            
        return n;
    }
    stopa3(){
        let n = [];
        n.push({"desc":`Убавляем, пока на спицах не останется 8 петель. Их стягиваем на нитку `})
        for( let i = 0; i < this.rowS3; i++)
         {if(i%2 > 0)
            n.push({"row":`Вязать лицевой гладью, убавить 4 петли в ряду равномерно`});
        else n.push({"row":`Вязать ряд лицевой гладью,`});}          
            
        return n;
    }
}