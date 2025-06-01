class Employee {
  private empCode: string;
  public empName: string;

  constructor(empCode: string, empName: string) {
    this.empCode = empCode;
    this.empName = empName;
  }
}

let emp = new Employee("123", "123");
// emp.empCode = "123"; //cause private
emp.empName = "Minh"; //Access Modifiers


