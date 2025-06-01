class Employee {
  public empCode: string;
  public empName: string;

  constructor(empCode: string, empName: string) {
    this.empCode = empCode;
    this.empName = empName;
  }
}

class SaleEmployee extends Employee {
  private department: string;

  constructor(empCode: string, empName: string, department: string) {
    super(empCode, empName);
    this.department = department;
  }
}
