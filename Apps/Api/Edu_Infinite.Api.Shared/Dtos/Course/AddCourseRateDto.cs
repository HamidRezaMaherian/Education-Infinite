﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Edu_Infinite.Api.Shared.Dtos.Course
{
   public class AddCourseRateDto
   {
      public byte Rate { get; set; }
      public string CourseId { get; set; }
   }
}
