export interface employeeResponse {
    status: string;
    data: employee[];
    message: string;
}
 
export interface employee {
    id: number;
    employee_name: string;
    employee_salary: number;
    employee_age: number;
    profile_image: string;
}