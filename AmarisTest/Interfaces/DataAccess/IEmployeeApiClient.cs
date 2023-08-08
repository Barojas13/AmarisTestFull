using AmarisTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AmarisTest.Interfaces.DataAccess
{
    public interface IEmployeeApiClient
    {
        Task<EmployeeApiResponse> GetByIdAsync(List<string> parameter);

        Task<EmployeeApiResponse> GetAllAsync();
    }
}
