export class Patient{
    name:string
    code:number

    constructor(name:string, code: number) {
        this.name = name;
        this.code = code;
    }
}
export class queue {
    patients: Patient[] = []

    constructor() {
    }

    enqueue(patient: Patient) {
        this.patients.push(patient);
        this.patients.sort((a, b) => a.code - b.code)
    }

    dequeue() {
        return this.patients.shift()
    }

    size() {
        return this.patients.length
    }

    getPatientList() {
        return this.patients.map((patient)=>patient.name)

    }
}
let patientlist = new queue();
let smith = new Patient('smith',1)
let jones = new Patient('jones',4)
let paul = new Patient('paul',5)
let lucas = new Patient('lucas',1)
patientlist.enqueue(smith)
patientlist.enqueue(jones)
patientlist.enqueue(paul)
patientlist.enqueue(lucas)
console.log(`danh sach benh nhan :`)
console.log(patientlist.getPatientList())
let patient = patientlist.dequeue()
console.log(`benh nhan da kham: ${patient?.name}`)
console.log(`benh nhan con lai: `)
console.log(patientlist.getPatientList())