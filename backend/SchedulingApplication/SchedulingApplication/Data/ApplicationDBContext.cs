using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SchedulingApplication.Models;

namespace SchedulingApplication.Data
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options) { } 
        public ApplicationDBContext() : base(){ }
        public DbSet<Doctor> Doctor { get; set; }
        public DbSet<Slot> Slot { get; set; }
        public DbSet<User> User { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<SchedulingApplication.Models.Patient> Patient { get; set; }
    }
}
