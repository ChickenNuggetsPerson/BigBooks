# Big Books

[![CodeTime Badge](https://img.shields.io/endpoint?style=flat&color=789283&url=https%3A%2F%2Fapi.codetime.dev%2Fv3%2Fusers%2Fshield%3Fuid%3D17035%26project%3DBigBooks)](https://codetime.dev)

A full stack accounting / payroll software built with [NEXT.js](https://nextjs.org/)
- Icon Library: https://lucide.dev/

## To-Do List
- [X] Remove payperiod table
- [X] Store period start and end in the paystub
- [X] Store paydate in the paystub 
- [ ] Figure out when the end date is for the period
- [X] Make employee groups. Each group has their own paycycle
- [ ] In the employee section, you can say how much they want deducted per stub.
- [ ] The deducations can have monthly and yearly limits. 
- [ ] Make it so employees can be hourly and salary at the same time. Just remove the isSalary property. 
- [ ] Workflow of payroll
    - [ ] Select pay period range
    - [ ] Select pay date 
    - [ ] Select employees you want to include
    - [ ] "Open paycheck detail"
        - [ ] Edit items one time - Salary, rates, etc
        - [ ] This is where you set their hourly rate. 
    - [ ] Go over every employee and review the item. 
- [X] Look into window's approach 
- [X] Admin page for making org admins
- [ ] Orgadmins can create users that have access to the organization

