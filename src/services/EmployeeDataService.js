import http from "../http-common";

class EmployeeDataService {
  savePayrollVariables(data) {
    return http.post("/payroll-variable", data);
  }
}

export default new EmployeeDataService();