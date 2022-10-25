// Interface

interface Lol {

  wtf : boolean

}

interface Rect extends Lol {

  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }

}

const lol : Rect = {

  id: "1212AD1",
  color: "green",
  size : {
    width: 23,
    height: 23
  },
  wtf: true
}

const lol2 : Rect = {

  id: "12214",
  size: {
    width: 50,
    height: 76
  },

  wtf: true

}

lol2.color = "black";

// + еще 2 варианта как мы можем указывать к какому типу будет относится объект.

const lol3 = {} as Rect;
const lol4 = <Rect>{};

interface Test extends Rect {

  getArea: () => number;

}

const lol5:Test = {

  id: "213123",
  color: "white",
  size: {
    width: 5,
    height: 9,
  },

  wtf: true,

  getArea(): number {
    return this.size.width * this.size.height;
  }

}

console.log(lol5.getArea());

// ========================================= Interface -class-

interface IClock {

  time: Date,
  setTime(date: Date):void

}

class Test2 implements IClock {

  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }

}

// ============================================

interface Styles {

  [key: string]: string

}

const css: Styles = {
  border: '1px solid black',
  marginTop: '25px',
  borderRadius: '5px',
}

console.log(css);
