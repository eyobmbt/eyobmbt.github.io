class SavingsAccount extends Account{
    constructor(number,interest){
        super(number);
        this._interest=interest;  
    }

    getInterest(){
        return this._interest;
    }
    setInterest(interest){
        this._interest=interest;
    }
    addInterest(){
       // this._balance+=this._interest/100*this.balance;
       if(this.getBalance()>0){
        let bal=this.getBalance()*this._interest/100;
        this.deposit(bal);

       }

    }
    toString(){
        return "Account " + this._number + ": balance " + this._balance+" Interst Rate: "+ this._interest;
    }
    endOfMonth() {
        this.addInterest();
        return ` Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this.getInterest()}`; // does nothing
    }
}

