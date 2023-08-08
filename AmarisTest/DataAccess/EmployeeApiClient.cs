using AmarisTest.Interfaces;
using AmarisTest.Interfaces.DataAccess;
using AmarisTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace AmarisTest.DataAccess
{
    public class EmployeeApiClient : ConsumeApi<EmployeeApiResponse, EmployeeApiResponse>, IEmployeeApiClient
    {
  
        public EmployeeApiClient(IHttpClientFactory httpClientFactory) : base(httpClientFactory)
        {
        }

        Task<EmployeeApiResponse> IEmployeeApiClient.GetAllAsync()
        {
            return GetAsync("employees", null);
        }

        internal Task<EmployeeApiResponse> GetAsync()
        {
            throw new NotImplementedException();
        }

        Task<EmployeeApiResponse> IEmployeeApiClient.GetByIdAsync(List<string> parameter)
        {
            return GetAsync("employee", parameter);
        }
    }

}
