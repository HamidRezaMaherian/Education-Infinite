﻿using Ardalis.Specification;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Edu_Infinite.SharedKernel.Specifications
{
	public class BasePaginationSpec<T> : Specification<T> where T : BaseEntity
	{
		public BasePaginationSpec(int pageNumber, int pageSize, bool filterIsActive=true)
		{
			(filterIsActive ? Query.Where(i => i.IsActive) : Query).Skip((pageNumber - 1) * pageSize).Take(pageSize);
		}
	}
}
