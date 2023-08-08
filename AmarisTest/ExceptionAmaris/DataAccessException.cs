using System;
using System.Runtime.Serialization;
using System.Text;

namespace AmarisTest.ExceptionAmaris
{
    public class DataAccessException : Exception
    {

        public DataAccessException()
        {
        }

        public DataAccessException(string message)
        { 
        }

        public DataAccessException(string message, Exception innerException)
        {
        }

        protected DataAccessException(SerializationInfo info, StreamingContext context)
        {
        }
    }
}
