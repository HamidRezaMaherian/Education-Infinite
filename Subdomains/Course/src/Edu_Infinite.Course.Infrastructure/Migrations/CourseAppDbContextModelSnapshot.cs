﻿// <auto-generated />
using System;
using Edu_Infinite.Course.Infrastructure.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Edu_Infinite.Course.Infrastructure.Migrations
{
    [DbContext(typeof(CourseAppDbContext))]
    partial class CourseAppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Edu_Infinit.Course.Core.Aggregates.Category.CourseCategory", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("CreatedDateTime")
                        .HasColumnType("datetime2");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<bool>("IsDelete")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<Guid?>("ParentId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("ParentId");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("Edu_Infinite.Course.Core.Aggregates.Course.CourseContent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedDateTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasMaxLength(21)
                        .HasColumnType("nvarchar(21)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<bool>("IsDelete")
                        .HasColumnType("bit");

                    b.Property<int>("SectionId")
                        .HasColumnType("int");

                    b.Property<float>("Size")
                        .HasColumnType("real");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("SectionId");

                    b.ToTable("Contents");

                    b.HasDiscriminator<string>("Discriminator").HasValue("CourseContent");

                    b.UseTphMappingStrategy();
                });

            modelBuilder.Entity("Edu_Infinite.Course.Core.Aggregates.Course.CourseDefinition", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("CategoryId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("CreatedDateTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("FullPrice")
                        .HasPrecision(10)
                        .HasColumnType("decimal(10,2)");

                    b.Property<string>("IntroVideo")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<bool>("IsDelete")
                        .HasColumnType("bit");

                    b.Property<int>("Level")
                        .HasColumnType("int");

                    b.Property<string>("MainImage")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("ShortDescription")
                        .IsRequired()
                        .HasMaxLength(500)
                        .HasColumnType("nvarchar(500)");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.ToTable("Courses");
                });

            modelBuilder.Entity("Edu_Infinite.Course.Core.Aggregates.Course.CourseSection", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("CreatedDateTime")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("DefinitionId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<bool>("IsDelete")
                        .HasColumnType("bit");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.HasKey("Id");

                    b.HasIndex("DefinitionId");

                    b.ToTable("Sections");
                });

            modelBuilder.Entity("Edu_Infinite.Course.Core.Aggregates.Course.CourseDocumentContent", b =>
                {
                    b.HasBaseType("Edu_Infinite.Course.Core.Aggregates.Course.CourseContent");

                    b.HasDiscriminator().HasValue("CourseDocumentContent");
                });

            modelBuilder.Entity("Edu_Infinite.Course.Core.Aggregates.Course.CourseVideoContent", b =>
                {
                    b.HasBaseType("Edu_Infinite.Course.Core.Aggregates.Course.CourseContent");

                    b.HasDiscriminator().HasValue("CourseVideoContent");
                });

            modelBuilder.Entity("Edu_Infinit.Course.Core.Aggregates.Category.CourseCategory", b =>
                {
                    b.HasOne("Edu_Infinit.Course.Core.Aggregates.Category.CourseCategory", null)
                        .WithMany("SubCategories")
                        .HasForeignKey("ParentId");
                });

            modelBuilder.Entity("Edu_Infinite.Course.Core.Aggregates.Course.CourseContent", b =>
                {
                    b.HasOne("Edu_Infinite.Course.Core.Aggregates.Course.CourseSection", null)
                        .WithMany("Contents")
                        .HasForeignKey("SectionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Edu_Infinite.Course.Core.Aggregates.Course.CourseDefinition", b =>
                {
                    b.HasOne("Edu_Infinit.Course.Core.Aggregates.Category.CourseCategory", "Category")
                        .WithMany("Courses")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");
                });

            modelBuilder.Entity("Edu_Infinite.Course.Core.Aggregates.Course.CourseSection", b =>
                {
                    b.HasOne("Edu_Infinite.Course.Core.Aggregates.Course.CourseDefinition", null)
                        .WithMany("Sections")
                        .HasForeignKey("DefinitionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Edu_Infinit.Course.Core.Aggregates.Category.CourseCategory", b =>
                {
                    b.Navigation("Courses");

                    b.Navigation("SubCategories");
                });

            modelBuilder.Entity("Edu_Infinite.Course.Core.Aggregates.Course.CourseDefinition", b =>
                {
                    b.Navigation("Sections");
                });

            modelBuilder.Entity("Edu_Infinite.Course.Core.Aggregates.Course.CourseSection", b =>
                {
                    b.Navigation("Contents");
                });
#pragma warning restore 612, 618
        }
    }
}
