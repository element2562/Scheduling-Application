using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchedulingApplication.Models
{
    public class User : IdentityUser
    {
        [Required]
        public string UserType { get; set; }
        public string FirstName { get; set; }
        public string Lastname { get; set; }

    }
}
