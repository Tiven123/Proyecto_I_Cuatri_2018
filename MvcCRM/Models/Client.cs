using System;

namespace MvcCRM.Models
{
    public class Client
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string LegalDocument { get; set; }
        public string WebSite { get; set; }
        public string Adress { get; set; }
        public int CelphoneNumber { get; set; }
        public string Sector { get; set; }
    }
}