using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Edu_Infinite.Course.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class CourseCommentRelationMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "DefinitionId",
                table: "Comments",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.CreateIndex(
                name: "IX_Comments_DefinitionId",
                table: "Comments",
                column: "DefinitionId");

            migrationBuilder.AddForeignKey(
                name: "FK_Comments_Courses_DefinitionId",
                table: "Comments",
                column: "DefinitionId",
                principalTable: "Courses",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Comments_Courses_DefinitionId",
                table: "Comments");

            migrationBuilder.DropIndex(
                name: "IX_Comments_DefinitionId",
                table: "Comments");

            migrationBuilder.DropColumn(
                name: "DefinitionId",
                table: "Comments");
        }
    }
}
