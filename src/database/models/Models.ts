import { Entity, PrimaryKey, Property, Collection, OneToMany, JsonType, ManyToOne, Cascade } from "@mikro-orm/core";
import { randomUUID, type UUID } from "crypto";


@Entity()
export class Organization {
    @PrimaryKey()
    id!: number;

    @Property({ default: randomUUID() })
    uuid!: UUID;

    @Property()
    name!: string;

    @Property({ default: "" })
    notes!: string;

    @Property({ default: "" })
    address!: string;

    @OneToMany(() => Employee, (employee) => employee.organization, { cascade: [Cascade.REMOVE] })
    employees = new Collection<Employee>(this);

    @Property({ default: false })
    isDeleted!: boolean;

    


    @Property({ default: 26 }) // Defulats to bi-weekly
    periodsPerYear!: number;

    @Property()
    periodsRefDate!: Date;
    
    @OneToMany(() => Payperiod, (payperiod) => payperiod.organization, { cascade: [Cascade.REMOVE] })
    payperiods = new Collection<Payperiod>(this);
}

@Entity()
export class Employee {
    @PrimaryKey()
    id!: number;

    @Property({ default: "" })
    uuid!: UUID;
    
    @Property()
    firstName!: string;

    @Property({ default: "" })
    middleName!: string;

    @Property()
    lastName!: string;

    @Property({ default: "" })
    notes!: string;

    @Property({ default: "" })
    address!: string;

    @Property({ default: "" })
    email!: string;

    @Property({ default: "" })
    phoneNumber!: string;

    @Property({ default: "" })
    ssn!: string;

    @Property({ default: true })
    isSalary!: boolean;

    @Property({ default: 0 })
    salary!: number;

    @Property({ type: JsonType, default: "[]" })
    hourlyRates!: { name: string; rate: number }[];

    @ManyToOne(() => Organization, { deleteRule: "cascade" })
    organization!: Organization;

    @Property({ default: false })
    isDeleted!: boolean;
}


@Entity()
export class Payperiod {
    @PrimaryKey()
    id!: number;

    @Property({ default: "" })
    uuid!: UUID;

    @ManyToOne(() => Organization, { deleteRule: "cascade" })
    organization!: Organization;

    @Property()
    periodStart!: Date;

    @Property()
    periodEnd!: Date;

    @Property({ default: [] })
    includedEmployees!: UUID[]

    @OneToMany(() => PayStub, (stub) => stub.payperiod, { cascade: [Cascade.REMOVE] })
    payStubs = new Collection<PayStub>(this);
}


@Entity()
export class PayStub {
    @PrimaryKey()
    id!: number;

    @Property({ default: "" })
    uuid!: UUID;

    @ManyToOne(() => Payperiod, { deleteRule: "cascade" })
    payperiod!: Payperiod;

    @Property({ default: "" }) 
    employeeUUID!: UUID;

    // TODO: Add everything else :3
    // Also make sure to update the DisplayPaystubs
}