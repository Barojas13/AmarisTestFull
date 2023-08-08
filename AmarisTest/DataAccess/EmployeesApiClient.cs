using AmarisTest.Interfaces.DataAccess;
using AmarisTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace AmarisTest.DataAccess
{
    public class EmployeesApiClient : ConsumeApi<EmployeesApiResponse, EmployeesApiResponse>, IEmployeesApiClient
    {

        public EmployeesApiClient(IHttpClientFactory httpClientFactory) : base(httpClientFactory)
        {
        }
        
        public Task<EmployeesApiResponse> GetAllAsync()
        {
            return GetAsync("employees", null);
        }

        public Task<EmployeesApiResponse> GetByIdAsync(List<string> parameter)
        {
            return GetAsync("employees", parameter);
        }
    }
}
