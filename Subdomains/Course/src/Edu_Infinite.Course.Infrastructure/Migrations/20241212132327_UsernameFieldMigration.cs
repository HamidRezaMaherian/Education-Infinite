using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Edu_Infinite.Course.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class UsernameFieldMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Rates",
                newName: "UserName");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Comments",
                newName: "UserName");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "Rates",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "Comments",
                newName: "UserId");
        }
    }
}
