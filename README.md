# Big Books

[![CodeTime Badge](https://img.shields.io/endpoint?style=flat&color=789283&url=https%3A%2F%2Fapi.codetime.dev%2Fv3%2Fusers%2Fshield%3Fuid%3D17035%26project%3DBigBooks)](https://codetime.dev)

A full stack accounting / payroll software built with [NEXT.js](https://nextjs.org/)
- Icon Library: https://lucide.dev/
- UI Library: https://mui.com/material-ui/getting-started/installation/

## To-Do List
- [X] Remove payperiod table
- [X] Store period start and end in the paystub
- [X] Store paydate in the paystub 
- [X] Figure out when the end date is for the period
- [X] Make employee groups. Each group has their own paycycle
- [X] In the employee section, you can say how much they want deducted per stub.
- [X] The deducations can have monthly and yearly limits. 
- [X] Make it so employees can be hourly and salary at the same time. Just remove the isSalary property. 
- [X] Workflow of payroll
    - [X] Select pay period range
    - [X] Select pay date 
    - [X] Select employees you want to include
    - [X] "Open paycheck detail"
        - [X] Edit items one time - Salary, rates, etc
        - [X] This is where you set their hourly rate. 
    - [X] Go over every employee and review the item. 
- [X] Look into window's approach 
- [X] Admin page for making org admins
- [ ] Orgadmins can create users that have access to the organization


- [X] Edit Paystub after it has been locked -> Show warning
- [ ] Void Paystub feature
- [ ] Only State unemployment act - Company settings -> payroll settings -> manually put in tax rate and an effective date 
- [ ] Taxes have a "valid through" date -> Paystubs paydates determine what taxes are used. 
- [ ] Add Reports page for stats on money
- [ ] General Journal page: A way of tracking organization assets and money
    - Accounting Equation: Assets = Liabilities + Owner's Equity
    - Everything is either a Debit (Liability) normal balance or a Credit (Owner's Equity) normal balance
    - Have a table where you can see data
    - Chart of accounts page:
        - You can make different accounts 
        - An account can either be an asset or liability ( There are also other types of accounts...)
        - The general journal page holds the transactions in the account.


- [ ] Make an auto complete text input

    

