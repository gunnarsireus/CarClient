using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace CarClient.Models
{
	public class Company
	{
		public Company()
		{
			CreationTime = DateTime.Now.ToString(new CultureInfo("se-SE"));
		}
		public Guid Id { get; set; }

		[Display(Name = "Skapat datum")]
		public string CreationTime { get; set; }
		[Display(Name = "Namn")]
		public string Name { get; set; }

		[Display(Name = "Adress")]
		public string Address { get; set; }

		public ICollection<Car> Cars { get; set; }
	}
}
