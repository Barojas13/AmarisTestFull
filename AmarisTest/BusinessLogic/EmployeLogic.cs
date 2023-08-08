using AmarisTest.DataAccess;
using AmarisTest.Interfaces.BusinessLogic;
using AmarisTest.Interfaces.DataAccess;
using AmarisTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AmarisTest.BusinessLogic
{
    public class EmployeLogic : IEmployeLogic
    {
        private readonly IEmployeeApiClient _employeeApiClient;

        public EmployeLogic()
        {
        }


        // Implementa aquí tu lógica de negocios para calcular el siguiente valor
        public async Task<double> CalculateEmployeeAnualSalary(double employee_salary)
        {
            return (employee_salary * 12);
        }

        public async Task<List<Employee>> CalculateEmployeeAnualSalaryList(List<Employee> employee)
        {
            return (from empl in employee
                    select new Employee
                    {
                        employee_age = empl.employee_age,
                        employee_name = empl.employee_name,
                        id = empl.id,
                        profile_image = empl.profile_image,
                        employee_salary = empl.employee_salary,
                        employee_anual_salary = (empl.employee_salary * 12)
                    }).ToList();
        }
    }
}
