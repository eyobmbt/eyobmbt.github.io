class CheckingAccount extends Account{
    constructor(number,overdraftLimit){
        super(number);
        this._overdraftLimit=overdraftLimit;
    }

    getOverdraftLimit(){
        return this._overdraftLimit;
    }

    setOverdraftLimit(overdraftLimit){
      this._overdraftLimit=overdraftLimit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > (this._balance+this._overdraftLimit)) {
            return "Insufficient funds";
        }
        this._balance -= amount;
    }
    toString(){
        return "Account " + this._number + ": balance " + this._balance+" Overdraft Limit: "+ this._overdraftLimit;
    }
    endOfMonth() {
        if(this.getBalance()<0){
            return ` Warning, low balance CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this.getOverdraftLimit()}`; 
        } else{
            return ` CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this.getOverdraftLimit()}`; 
          
        }

    }
   
}