using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AmarisTest.Models
{
    public class EmployeesApiResponse
    {
        public string status { get; set; }
        public List<Employee> data { get; set; }
        public string message { get; set; }
    }
}
