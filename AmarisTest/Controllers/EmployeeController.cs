using AmarisTest.Interfaces.BusinessLogic;
using AmarisTest.Interfaces.DataAccess;
using AmarisTest.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace AmarisTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeApiClient _employeeApiClient;
        private readonly IEmployeesApiClient _employeesApiClient;
        private readonly IEmployeLogic _employeLogic;

        public EmployeeController(IEmployeeApiClient employeeApiClient, IEmployeLogic employeLogic, IEmployeesApiClient employeesApiClient)
        {
            _employeeApiClient = employeeApiClient;
            _employeesApiClient = employeesApiClient;
            _employeLogic = employeLogic;
        }

        [HttpGet]
        [Route("GetAllEmployee")]
        public async Task<ActionResult<EmployeesApiResponse>> GetAllEmployeeAsync()
        {

            var result =  await _employeesApiClient.GetAllAsync();
            if (result == default(EmployeesApiResponse))
            {
                return NotFound();
            }
            result.data = await  _employeLogic.CalculateEmployeeAnualSalaryList(result.data);
            return Ok(result);
        }

        [HttpGet]
        [Route("GetListByIdEmployeeAsync")]
        public async Task<ActionResult<EmployeeApiResponse>> GetListByIdEmployeeAsync(string id)
        {
            List<string> list = new List<string>();
            list.Add(id);
            var result = await _employeeApiClient.GetByIdAsync(list);
            if (result == default(EmployeeApiResponse))
            {
                return NotFound();
            }
            result.data.employee_anual_salary = await _employeLogic.CalculateEmployeeAnualSalary(result.data.employee_salary);
            return Ok(result);
        }
    }
}
