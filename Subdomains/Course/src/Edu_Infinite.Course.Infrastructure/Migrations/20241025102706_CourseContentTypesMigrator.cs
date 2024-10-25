using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Edu_Infinite.Course.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class CourseContentTypesMigrator : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "Contents");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Contents",
                type: "nvarchar(21)",
                maxLength: 21,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<float>(
                name: "Size",
                table: "Contents",
                type: "real",
                nullable: false,
                defaultValue: 0f);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Contents");

            migrationBuilder.DropColumn(
                name: "Size",
                table: "Contents");

            migrationBuilder.AddColumn<int>(
                name: "Type",
                table: "Contents",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
