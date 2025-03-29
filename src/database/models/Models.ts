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
    ssn!: string;

    @Property({ type: JsonType, default: "[]" })
    hourlyRates!: { name: string; rate: number }[];

    @ManyToOne(() => Organization, { deleteRule: "cascade" })
    organization!: Organization;

    @Property({ default: false })
    isDeleted!: boolean;
}