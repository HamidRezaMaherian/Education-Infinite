﻿using Ardalis.Specification.EntityFrameworkCore;
using Edu_Infinite.Course.Core.Aggregates.Course;
using Edu_Infinite.Course.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using static System.Collections.Specialized.BitVector32;

namespace Edu_Infinite.Course.Infrastructure.Database.Repositories
{
   internal class CourseRepository : RepositoryBase<CourseDefinition>, ICourseRepository
   {
      private readonly DbContext dbContext;

      public CourseRepository(DbContext dbContext) : base(dbContext)
      {
         this.dbContext = dbContext;
      }

      public async Task<CourseContent> AddContent(CourseContent content, CancellationToken cancellationToken = default)
      {
         var res = await dbContext.AddAsync(content);
         await dbContext.SaveChangesAsync(cancellationToken);
         return res.Entity;
      }

      public async Task<CourseSection> AddSection(CourseSection section, CancellationToken cancellationToken = default)
      {
         var res = await dbContext.AddAsync(section);
         await dbContext.SaveChangesAsync(cancellationToken);
         return res.Entity;
      }
   }
}