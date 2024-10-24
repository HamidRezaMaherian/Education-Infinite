using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Edu_Infinite.Course.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class PricePrecision : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "FullPrice",
                table: "Courses",
                type: "decimal(10,2)",
                precision: 10,
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(3,2)",
                oldPrecision: 3);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "FullPrice",
                table: "Courses",
                type: "decimal(3,2)",
                precision: 3,
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "decimal(10,2)",
                oldPrecision: 10);
        }
    }
}
