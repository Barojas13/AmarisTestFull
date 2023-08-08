using AmarisTest.BusinessLogic;
using AmarisTest.Interfaces.BusinessLogic;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace AmarisUnitTest
{
    public class EmployeLogicTest
    {
        private IEmployeLogic _employeLogic;

        public EmployeLogicTest()
        {
            _employeLogic = new EmployeLogic();
        }

        [Fact]
        public void CalculateEmployeeAnualSalarySuccess()
        {
            double ArrangeVariable = 10;

            var result = _employeLogic.CalculateEmployeeAnualSalary(ArrangeVariable).GetAwaiter().GetResult();

            Assert.NotNull(result);
            Assert.Equal(result, 120);
        }


    }
    
}
