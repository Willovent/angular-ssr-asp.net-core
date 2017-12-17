using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.NodeServices;

namespace angular_ssr_asp.net.Controllers
{
    public class HomeController : Controller
    {

        // GET api/values
        [HttpGet]
        public async Task<IActionResult> Index([FromServices]INodeServices nodeServices)
        {
            ViewData["ResultFromNode"] = await nodeServices.InvokeAsync<string>("./angular/server.js", Request.Path);
            return View();
        }
    }
}
