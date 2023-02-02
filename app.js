function elementSelector(selection){
    const element = document.querySelector(selection);
    if(element){
        return element;
    }
    throw new Error(`Please select the correct selector`);
}

function Counter(element, value){
 this.counter = element;
 this.value = value;
 this.increase = element.querySelector(".increase");
 this.reset = element.querySelector(".reset");
 this.decrease = element.querySelector(".decrease");
 this.valueDOM = element.querySelector(".value");
 this.valueDOM.textContent = this.value
 this.increment = this.increment.bind(this);
 this.decrement = this.decrement.bind(this);
 this.resetbtn = this.resetbtn.bind(this);
this.increase.addEventListener("click",this.increment);
this.reset.addEventListener("click",this.resetbtn);
this.decrease.addEventListener("click",this.decrement);
};

 Counter.prototype.increment = function () {
    console.log(this)
    this.value++;
    this.valueDOM.textContent = this.value;
 };
 Counter.prototype.resetbtn = function () {
    console.log(this)
    this.value = 0;
    this.valueDOM.textContent = this.value;
 };
 Counter.prototype.decrement = function () {
    console.log(this)
    this.value--;
    this.valueDOM.textContent = this.value;
 };

const first = new Counter (elementSelector(".first-counter"), 100);
const second = new Counter (elementSelector(".second-counter"),200);

