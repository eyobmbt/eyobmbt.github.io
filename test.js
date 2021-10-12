describe("Account Class Test",function(){
    let a=new Account(123);
    describe("Getter Methods",function(){
    
        it("getNumber should return the created account no: 123",function(){

           assert.equal(123,a.getNumber());
        })
        it("getBalance should return default value of 0",function(){
               assert.equal(0,a.getBalance());
            })
        });

        describe("Deposit Method test: ",function(){

 

             it("Add first deposite to the initial value 100.00 ",function(){
                 a.deposit(100.00);
                    assert.equal(100,a.getBalance());
                 })
        

             it("Add 2nd deposite to the value 100.00 shoudl have value 110.00",function(){
                a.deposit(10.00);
                   assert.equal(110,a.getBalance());
                })
            });


            
            describe("Withdraw Method test: ",function(){



                 it("Withdraw USD 10.00 from balnce 110.00 should remain balnce 100.00",function(){
                    a.withdraw(10.00);
                       assert.equal(100,a.getBalance());
                    })
                });


});

describe("Saving Account Class Test",function(){
    let sa=new SavingsAccount(100,1);
    sa.deposit(100);
    describe("Getter Methods",function(){
        let sa=new SavingsAccount(100,1);
        it("getInterst should return interst rate",function(){
           assert.equal(1,sa.getInterest());
        })

        });

        describe("Check Saving Account Setter Method ",function(){
          
            it("Checking setInterst(), interst rate should return 2",function(){
                sa.setInterest(2);
                assert.equal(2,sa.getInterest());
                
             })

            });

        describe("addInterest() Method test: ",function(){
                    sa.setInterest(2);
                    sa.addInterest();
                it("Checking addInterest 2% should return blance 102",function(){
                    assert.equal(102,sa.getBalance());
                 })

                });   


});
describe("Checking Account Class Test",function(){
    let ca=new CheckingAccount(1000,100);
    ca.deposit(1000);
    describe("Getter Methods Checking Account",function(){
        let ca=new CheckingAccount(1000,100);
        it("getOverdraftLimit() should return 100",function(){
           assert.equal(100,ca.getOverdraftLimit());
        })

        });

        describe("Check Checking Account Setter setOverdraftMethod(200) ",function(){
            ca.setOverdraftLimit(200);
            it("Checking setOverdraftLimit(200), should set value of 200",function(){
                assert.equal(200,ca.getOverdraftLimit());
             })

            });

        describe("withdraw() override Method check if User withdrawal with the limit of overdraft: ",function(){
                ca.withdraw(1100);
                it("Checking addInterest blance + within range of overdraft limit",function(){
                    assert.equal(-100,ca.getBalance());
                 })

                }); 
        describe("withdraw(1300) override Method check if User try to withdraw more than overdraft limt: ",function(){
                    
                    it("Withdraw Error return Insufficient funds",function(){
                        assert.equal("Insufficient funds",ca.withdraw(1300));
                     })
    
                    });    


});
describe("Bank Class Test",function(){
    let bank=new Bank();
    

    describe("Adding Account tests",function(){
       
        bank.addAccount();
       
        it("after calling addAccount() two times created account should return 2",function(){
           assert.equal(2,bank.addAccount());
        })
    
        it("after calling addSavingsAccount() two times created account should return 4",function(){
            bank.addSavingsAccount(3);
            let crAcc=bank.addSavingsAccount(3);
            assert.equal(4,crAcc);
         })
    

        it("after calling addCheckingAccount() two times created account should return 6",function(){
            bank.addCheckingAccount(300);
            let crAcc=bank.addSavingsAccount(400);
            assert.equal(6,crAcc);
         })
        });
        describe("Deleting/Removing Account tests",function(){
            it("remove account using account number if exists ",function(){
                bank.closeAccount(1);
               assert.equal(5,Bank.account.length);
            })  
            it("remove account using account number if not exists ",function(){
                bank.closeAccount(10);
                assert.equal(5,Bank.account.length);
             }) 
          

 
        }); 
        describe("method accountReport()  tests should print",function(){
            let res='Account 1: balance 0Account 2: balance 0 Interst Rate: 3Account 3: balance 0 Interst Rate: 3Account 4: balance 0 Overdraft Limit: 300Account 5: balance 0 Interst Rate: 400'
            it("Account 1: balance 0, Account 2: balance 0 Interst Rate: 3,Account 3: balance 0 Interst Rate: 3, Account 4: balance 0 Overdraft Limit: 300Account, 5: balance 0 Interst Rate: 400",function(){
           
                assert.equal(res,bank.accountReport());
             })  
 
        }); 

        describe("Method  endOfMonth() tests should print",function(){
            let res=' Interest added SavingsAccount 2: balance: 0 interest: 3 Interest added SavingsAccount 3: balance: 0 interest: 3 CheckingAccount 4: balance: 0 overdraft limit: 300 Interest added SavingsAccount 5: balance: 0 interest: 400';
            it(res,function(){
                assert.equal(res,bank.endOfMonth());
             })  
 
        }); 
        
        
       

});
