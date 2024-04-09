﻿// <auto-generated />
using System;
using Edu_Infinite.Order.Infrastructure.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Edu_Infinite.Order.Infrastructure.Migrations
{
    [DbContext(typeof(OrderAppDbContext))]
    partial class OrderAppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Edu_Infinite.Order.Core.Aggregates.Basket.BasketDefinition", b =>
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

                    b.Property<decimal>("TotalPrice")
                        .HasPrecision(3)
                        .HasColumnType("decimal(3,2)");

                    b.HasKey("Id");

                    b.ToTable("Baskets");
                });

            modelBuilder.Entity("Edu_Infinite.Order.Core.Aggregates.Basket.BasketItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<Guid?>("BasketDefinitionId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("CreatedDateTime")
                        .HasColumnType("datetime2");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<bool>("IsDelete")
                        .HasColumnType("bit");

                    b.Property<Guid>("ItemId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("BasketDefinitionId");

                    b.ToTable("BasketItems");
                });

            modelBuilder.Entity("Edu_Infinite.Order.Core.Aggregates.Order.OrderDefinition", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("BasketId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("CreatedDateTime")
                        .HasColumnType("datetime2");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<bool>("IsDelete")
                        .HasColumnType("bit");

                    b.Property<decimal>("TotalPrice")
                        .HasPrecision(3)
                        .HasColumnType("decimal(3,2)");

                    b.HasKey("Id");

                    b.HasIndex("BasketId")
                        .IsUnique();

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("Edu_Infinite.Order.Core.Aggregates.Basket.BasketItem", b =>
                {
                    b.HasOne("Edu_Infinite.Order.Core.Aggregates.Basket.BasketDefinition", null)
                        .WithMany("Items")
                        .HasForeignKey("BasketDefinitionId");
                });

            modelBuilder.Entity("Edu_Infinite.Order.Core.Aggregates.Order.OrderDefinition", b =>
                {
                    b.HasOne("Edu_Infinite.Order.Core.Aggregates.Basket.BasketDefinition", null)
                        .WithOne()
                        .HasForeignKey("Edu_Infinite.Order.Core.Aggregates.Order.OrderDefinition", "BasketId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Edu_Infinite.Order.Core.Aggregates.Basket.BasketDefinition", b =>
                {
                    b.Navigation("Items");
                });
#pragma warning restore 612, 618
        }
    }
}