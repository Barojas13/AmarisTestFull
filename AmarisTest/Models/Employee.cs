using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AmarisTest.Models
{
    public class Employee
    {
        public int id { get; set; }
        public string employee_name { get; set; }
        public double employee_salary { get; set; }
        public double? employee_anual_salary { get; set; }
        public int employee_age { get; set; }
        public string profile_image { get; set; }
    }
}
