class Bank{
    static accounter=0;
    static account=[];
    static nextNumber =0;
    addAccount(){
    
        let acc=new Account(Bank.accounter);
        Bank.account[Bank.accounter-1]=acc;
        Bank.accounter++;
        return Bank.accounter;
    }
    addSavingsAccount(interest){
        let sacc=new SavingsAccount(Bank.accounter,interest);
        Bank.account[Bank.accounter-1]=sacc;
        Bank.accounter++;
        return Bank.accounter;
    }
    addCheckingAccount(overdraft){
        let cacc=new CheckingAccount(Bank.accounter,overdraft);
        Bank.account[Bank.accounter-1]=cacc;
        Bank.accounter++;
        return Bank.accounter;
    }
    closeAccount(number){
        let index = Bank.account.indexOf(number);
        if (index > -1) {
            Bank.account.splice(index, 1);
        }
    }
    accountReport(){
        let str="";
        for(let l=0;l<Bank.account.length;l++){
           str+=Bank.account[l];
        }
        return str;
    }
    endOfMonth() {
        let str="";
        for(let l=0;l<Bank.account.length;l++){
           str+=Bank.account[l].endOfMonth();
        }
        return str;
    }

}