using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SchedulingApplication.Models
{
    public class Slot
    {
        [Key]
        public int SlotId { get; set; }
        [Required]
        public DateTime StartTime { get; set; }
        [Required]
        public DateTime EndTime { get; set; }
        [Required]
        public bool IsBooked { get; set; }
        [Required]
        public int IdDoctor { get; set; }
        [Required]
        public Doctor Doctor { get; set; }
        public int? IdPatient { get; set; }
        public Patient Patient { get; set; }
    }
}
