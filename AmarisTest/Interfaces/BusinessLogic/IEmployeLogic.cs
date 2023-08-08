using AmarisTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AmarisTest.Interfaces.BusinessLogic
{
    public interface IEmployeLogic
    {
        Task<double> CalculateEmployeeAnualSalary(double employee_salary);
        Task<List<Employee>> CalculateEmployeeAnualSalaryList(List<Employee> employee);
    }
}
