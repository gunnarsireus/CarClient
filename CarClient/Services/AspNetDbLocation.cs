using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarClient.Models;

namespace CarClient.Services
{
    // This class is used by the application to get the location of the AspNet.db used for authntication of users.
    public class AspNetDbLocation : IAspNetDbLocation
    {
	    public async Task<string> GetAspNetDbDirectoryAsync()
	    {
			return await Utils.Get<string>("api/CurrentDirectory");
		}

	}
}
