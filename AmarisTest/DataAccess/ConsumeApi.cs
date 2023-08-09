using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace AmarisTest.DataAccess
{
    public class ConsumeApi<T, R>
    {
        public readonly IHttpClientFactory _httpClientFactory;
        public ConsumeApi(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }



        public async Task<R> GetAsync(string path, List<string> parameter)
        {
            try
            {
                string finallyPath = AddParameter(path, parameter);
                var httpRequestMessage = new HttpRequestMessage(
                    HttpMethod.Get,
                    finallyPath)
                {
                };

                var httpClient = _httpClientFactory.CreateClient("Backend");
                var httpResponseMessage = await httpClient.SendAsync(httpRequestMessage);

                if (httpResponseMessage.IsSuccessStatusCode)
                {
                    var contentStream = await httpResponseMessage.Content.ReadAsStringAsync();

                    return JsonConvert.DeserializeObject<R>(contentStream);
                }
                return default(R);
            }
            catch (Exception ex)
            {
                return default(R);
            }

            
        }



        public async Task<R> PostAsync(string path, string json)
        {
            try
            {
                HttpContent httpContent = new StringContent(json, Encoding.UTF8, "application/json");
                var httpRequestMessage = new HttpRequestMessage(
                    HttpMethod.Get,
                    path)
                {
                    Content = httpContent
                };
                var httpClient = _httpClientFactory.CreateClient();
                var httpResponseMessage = await httpClient.SendAsync(
                    httpRequestMessage);

                if (httpResponseMessage.IsSuccessStatusCode)
                {
                    string responseStream = await httpResponseMessage.Content.ReadAsStringAsync();
                    return JsonConvert.DeserializeObject<R>(responseStream);
                }
                return default(R);
            }
            catch (Exception ex)
            {
                return default(R);
            }
        }

        private string AddParameter(string path, List<string> parameter)
        {
            if (parameter != null && parameter.Count > 0)
            {
                foreach (var item in parameter)
                {
                    path += "/" + item;
                }
            }
            return path;
        }
    }
}
