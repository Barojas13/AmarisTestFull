using AmarisTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AmarisTest.Interfaces.DataAccess
{
    public interface IEmployeesApiClient
    {
        Task<EmployeesApiResponse> GetByIdAsync(List<string> parameter);

        Task<EmployeesApiResponse> GetAllAsync();
    }
} 
