using System.Linq;
using System.Threading.Tasks;
using SchedulingApplication.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using SchedulingApplication.Models;

namespace What2Watch.Controllers
{

    [Route("api/[controller]")]
    [ApiController]

    public class UsersController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly ApplicationDBContext _context;

        public UsersController(ApplicationDBContext context, UserManager<User> user)
        {
            _userManager = user;
            _context = context;
        }


        // GET api/users/getuser
        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetUser()
        {
            string userName = User.Identity.Name;
            User currentUser = _context.User.Single(u => u.UserName == userName);
            return Ok(currentUser);
        }
    }
}
