using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchedulingApplication.Models
{
    public class Doctor
    {
        [Key]
        public int DoctorId { get; set; }
        public string FirstName {get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Specialty { get; set; }
        public string Address { get; set; }
        public string Zip { get; set; }
        public string Phone { get; set; }

    }
}
