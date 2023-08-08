using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AmarisTest.Models
{
    public class EmployeeApiResponse
    {
        public string status { get; set; }
        public Employee data { get; set; }
        public string message { get; set; }
    }
}
