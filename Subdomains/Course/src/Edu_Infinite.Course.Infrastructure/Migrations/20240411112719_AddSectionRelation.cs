using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Edu_Infinite.Course.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddSectionRelation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sections_Courses_CourseDefinitionId",
                table: "Sections");

            migrationBuilder.DropIndex(
                name: "IX_Sections_CourseDefinitionId",
                table: "Sections");

            migrationBuilder.DropColumn(
                name: "CourseDefinitionId",
                table: "Sections");

            migrationBuilder.AddColumn<Guid>(
                name: "DefinitionId",
                table: "Sections",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Sections_DefinitionId",
                table: "Sections",
                column: "DefinitionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Sections_Courses_DefinitionId",
                table: "Sections",
                column: "DefinitionId",
                principalTable: "Courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Sections_Courses_DefinitionId",
                table: "Sections");

            migrationBuilder.DropIndex(
                name: "IX_Sections_DefinitionId",
                table: "Sections");

            migrationBuilder.DropColumn(
                name: "DefinitionId",
                table: "Sections");

            migrationBuilder.AddColumn<Guid>(
                name: "CourseDefinitionId",
                table: "Sections",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Sections_CourseDefinitionId",
                table: "Sections",
                column: "CourseDefinitionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Sections_Courses_CourseDefinitionId",
                table: "Sections",
                column: "CourseDefinitionId",
                principalTable: "Courses",
                principalColumn: "Id");
        }
    }
}
