using AmarisTest.BusinessLogic;
using AmarisTest.DataAccess;
using AmarisTest.Interfaces.BusinessLogic;
using AmarisTest.Interfaces.DataAccess;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApiExplorer;
using Microsoft.AspNetCore.Mvc.Versioning;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace AmarisTest.ExtensionServices
{

    public static class SwaggerExtension
    {
        public static void InjectServices(this IServiceCollection services)
        {
            services.AddScoped<IEmployeeApiClient, EmployeeApiClient>();
            services.AddScoped<IEmployeLogic, EmployeLogic>();
            services.AddScoped<IEmployeesApiClient, EmployeesApiClient>();

        }
        public static void AddSwagger(this IServiceCollection services)
        {

            services.AddSwaggerGen(options =>
            {
                var groupName = "v1";

                options.SwaggerDoc(groupName, new OpenApiInfo
                {
                    Title = $"Prueba Amaris {groupName}",
                    Version = groupName,
                    Description = "Brayan Rojas",
                    Contact = new OpenApiContact
                    {
                        Name = "Amaris",
                        Email = string.Empty,
                        Url = new Uri("https://foo.com/"),
                    }
                });
                options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme()
                {
                    Name = "Authorization",
                    Type = SecuritySchemeType.ApiKey,
                    Scheme = "Bearer",
                    BearerFormat = "JWT",
                    In = ParameterLocation.Header,
                    Description = "JWT Authorization header using the Bearer scheme. \r\n\r\n Enter 'Bearer' [space] and then your token in the text input below.\r\n\r\nExample: \"Bearer 12345abcdef\"",
                });
                options.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
                {
                        new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            }
                        },
                        new string[] {}

                }
            });
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlpath = Path.Combine(AppContext.BaseDirectory, xmlFile);
            });
        }
        
    }

    public class ConfigureSwaggerOptions : IConfigureOptions<SwaggerGenOptions>
    {
        private readonly IApiVersionDescriptionProvider _provider;
        public ConfigureSwaggerOptions(IApiVersionDescriptionProvider provider) => _provider = provider;
        public void Configure(SwaggerGenOptions options)
        {

            options.SwaggerDoc("v1", new OpenApiInfo
            {
                Title = "Amaris Services",
                Version = "v1"
            });
            
        }

       
    }
    
}
