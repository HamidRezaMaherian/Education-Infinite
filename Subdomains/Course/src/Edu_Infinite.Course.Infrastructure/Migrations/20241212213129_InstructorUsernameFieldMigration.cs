using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Edu_Infinite.Course.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InstructorUsernameFieldMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "InstructorId",
                table: "Courses",
                newName: "InstructorUserName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "InstructorUserName",
                table: "Courses",
                newName: "InstructorId");
        }
    }
}
