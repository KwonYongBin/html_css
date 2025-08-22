class Member {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getName = () => this.name;
    getAge = () => this.age;
    getAddress = () => this.address;

    setName = (name) => this.name = name;
    setAge = (age) => this.age = age;
    setAddress = (address) => this.address = address;

}

//학생 클래스 정의
class Student extends Member {
    constructor(name, age, address, sno) {
        super(name, age, address);
        this.sno = sno;
    }

    getSno = () => this.sno;
    setSno = (sno) => this.sno = sno;

    display = () => console.log(this.getName(), this.getAge(), this.getAddress(), this.getSno());
    makeObject = () => {
        return {
            'name': this.name,
            'age': this.age,
            'address': this.address,
            'sno': this.sno,
        }
    }
}

//교수 클래스 정의
class Professor extends Member {
    constructor(name, age, address, subject) {
        super(name, age, address);
        this.subject = subject;
    }

    getSubject = () => this.subject;
    setSubject = (subject) => this.subject = subject;

    display = () => console.log(this.getName(), this.getAge(), this.getAddress(), this.getSubject());
    makeObject = () => {
        return {
            'name': this.name,
            'age': this.age,
            'address': this.address,
            'subject': this.subject,
        }
    }
}

//학부모 클래스 정의
class Parent extends Member {
    constructor(name, age, address, cname) {
        super(name, age, address);
        this.cname = cname;
    }

    getCname = () => this.cname;
    setCname = (cname) => this.cname = cname;

    display = () => console.log(this.getName(), this.getAge(), this.getAddress(), this.getCname());
    makeObject = () => {
        return {
            'name': this.name,
            'age': this.age,
            'address': this.address,
            'cname': this.cname,
        }
    }
}

//직원 클래스 정의
class Employee extends Member {
    constructor(name, age, address, department) {
        super(name, age, address);
        this.department = department;
    }

    getDepartment = () => this.department;
    setDepartment = (department) => this.department = department;

    display = () => console.log(this.getName(), this.getAge(), this.getAddress(), this.getDepartment());
    makeObject = () => {
        return {
            'name': this.name,
            'age': this.age,
            'address': this.address,
            'department': this.department,
        }
    }
}